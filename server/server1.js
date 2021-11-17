const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); // writeHead() : 응답에 대한 정보를 기록하는 메서드.
    res.write('<h1>Hello Node!</h1>');  // write() : 첫 번째 인수는 클라이언트로 보낼 데이터. 버퍼를 보낼수도 있다.
    res.end('<p>Hello Server</p>'); // end() : 응답을 종료하는 메서드.
})
    .listen(8080, () => {
        console.log('8080번 포트에서 서버 대기 중입니다!');
    });