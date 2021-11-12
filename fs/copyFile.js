const fs = require('fs').promises;

fs.copyFile('/users/hyeongminkim/node.js/buffer_stream/readme4.txt', 'writeme4.txt')    // copyFile(): 첫 번째 인수는 복사할 원본(같은 폴더 내에 있을 경우 경로를 지정해 주지 않음.)을 넣고, 복사본을 만들 파일명을 쓴다.
    .then(() => {
        console.log('복사 완료')
    })
    .catch((error) => {
        console.error(error);
    });
