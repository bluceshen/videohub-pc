// 创建文件切片
function createFileChunk(file, chunkSize) {
  let fileChunkList = [];
  let cur = 0;
  while (cur < file.size) {
    let chunk = file.slice(cur, Math.min(cur + chunkSize, file.size));
    fileChunkList.push(chunk); // 直接存储 Blob 对象
    cur += chunkSize;
  }
  return fileChunkList;
}

// 计算文件切片的SHA-256哈希值
async function calculateChunksHash(fileChunkList) {
  const chunkHashes = [];
  for (let chunk of fileChunkList) {
    // 将 Blob 对象转换为 ArrayBuffer
    const arrayBuffer = await chunk.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest('SHA-256', new Uint8Array(arrayBuffer));
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const chunkHash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    chunkHashes.push(chunkHash);
  }
  return chunkHashes;
}

// 合并哈希值（在这个例子中，我们简单地将它们连接起来）
function combineHashes(chunkHashes) {
  return chunkHashes.join('');
}

self.onmessage = async (e) => {
  const { file, chunkSize } = e.data;
  const fileChunkList = createFileChunk(file, chunkSize);
  const chunkHashes = await calculateChunksHash(fileChunkList);
  const fileHash = combineHashes(chunkHashes);
  self.postMessage({ fileHash, chunkHashes });
};