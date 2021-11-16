setInterval(() => { // 주기적으로 함수를 실행
    console.log('시작');
    try{
        throw new Error('서버 고장');
    } catch (err) {
        console.error(err);
    }
}, 1000);