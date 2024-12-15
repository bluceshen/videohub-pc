// 引入js-sha256库
self.importScripts('https://cdnjs.cloudflare.com/ajax/libs/js-sha256/0.9.0/sha256.min.js');

// 创建文件切片
function createFileChunk(file, chunkSize) {
  return new Promise((resolve, reject) => {
    let fileChunkList = [];
    let cur = 0;
    while (cur < file.size) {
      // Blob 接口的 slice() 方法创建并返回一个新的 Blob 对象，该对象包含调用它的 blob 的子集中的数据。
      fileChunkList.push({ chunkFile: file.slice(cur, cur + chunkSize) });
      cur += chunkSize;
    }
    // 返回全部文件切片
    resolve(fileChunkList);
  });
}

// 加载并计算文件切片的SHA-256
async function calculateChunksHash(fileChunkList) {
  const chunkHashes = [];
  let percentage = 0;
  let count = 0;

  // 递归函数，用于处理文件切片
  async function loadNext(index) {
    if (index >= fileChunkList.length) {
      // 所有切片都已处理完毕
      return { chunkHashes }; // 返回所有切片的SHA-256值
    }

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsArrayBuffer(fileChunkList[index].chunkFile);
      reader.onload = async (e) => {
        try {
          count++;
          const arrayBuffer = e.target.result;
          // 使用js-sha256库计算哈希值
          const hashArray = Array.from(new Uint8Array(arrayBuffer));
          const chunkHash = sha256.array(hashArray).map(b => b.toString(16).padStart(2, '0')).join('');
          chunkHashes.push(chunkHash);

          // 更新进度并处理下一个切片
          percentage += 100 / fileChunkList.length;
          self.postMessage({ type: 'progress', percentage });

          resolve(loadNext(index + 1)); // 递归调用，处理下一个切片
        } catch (err) {
          reject(err); // 如果计算错误，则拒绝Promise
        }
      };
      reader.onerror = (err) => {
        reject(err); // 如果读取错误，则拒绝Promise
      };
    });
  }

  try {
    // 开始计算切片
    const { chunkHashes } = await loadNext(0); // 等待所有切片处理完毕
    // 计算整个文件的SHA-256哈希值（这里简单地连接所有切片的哈希值）
    // 如果需要真正的文件SHA-256，应该在主线程中合并所有切片后再计算。
    const fileHash = sha256(chunkHashes.join(''));
    self.postMessage({ percentage: 100, fileHash, fileChunkList , chunkHashes }); // 发送最终结果到主线程
    console.log('文件哈希值计算完成：in hash-worker.js');
    self.close(); // 关闭Worker
  } catch (err) {
    self.postMessage({ name: 'error', data: err }); // 发送错误到主线程
    self.close(); // 关闭Worker
  }
}

// 监听消息
self.addEventListener(
  'message',
  async (e) => {
    try {
      const { file, chunkSize } = e.data;
      const fileChunkList = await createFileChunk(file, chunkSize); // 创建文件切片
      await calculateChunksHash(fileChunkList); // 等待计算完成
    } catch (err) {
      console.error('worker监听发生错误:', err);
      self.close();
    }
  },
  false
);

// 主线程可以监听 Worker 是否发生错误。如果发生错误，Worker 会触发主线程的error事件。
self.addEventListener('error', function (event) {
  console.log('Worker触发主线程的error事件：', event);
  self.close(); // 关闭Worker
});