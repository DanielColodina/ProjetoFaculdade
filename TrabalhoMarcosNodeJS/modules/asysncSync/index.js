const fs = require('fs');

// Exemplo Sync
function readFileSyncExample(file) {
  return fs.readFileSync(file, 'utf-8');
}

// Exemplo Async
function readFileAsyncExample(file, callback) {
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) return callback(err);
    callback(null, data);
  });
}

module.exports = { readFileSyncExample, readFileAsyncExample };

//me ajuda a entender a diferença entre operações síncronas e assíncronas no Node.js.