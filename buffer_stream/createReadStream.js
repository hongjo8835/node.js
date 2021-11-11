const fs = require('fs');

const readStream = fs.createReadStream('./readme3.txt', {highWaterMark: 16});   // highWatermark 버퍼의 크기(바이트 단위)를 정할수 있다. 여러번 나누기 위해 16B 로 낮췄다.
const data = [];

readStream.on('data', (chunk) => {  // readStream 은 이벤트를 사용 data, end, error 이벤트를 사용함.
    data.push(chunk);
    console.log('data: ', chunk, chunk.length);
});

readStream.on('end', () => {
    console.log('end: ', Buffer.concat(data).toString());
});

readStream.on('error', (err) => {
    console.log('error: ', err);
});