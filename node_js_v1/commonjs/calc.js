// exports를 통해 파일 단위로 자동 생성되는 변수에 
// 함수나 변수를 할당해서 외부에 공개할 수 있습니다.
exports.num = 1;

exports.add = (a, b) => {
    return a + b;
}

exports.sub = (a, b) => {
    return a - b;
}


module.exports = {
    add: (a, b) => {
        return a + b;
    },

    sub: (a, b) => {
        return a - b;
    }
}


