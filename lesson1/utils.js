export const calcPerSquare = (edgeSquare) => {
    return edgeSquare * 4;
}
function calcAreaSquare(edgeSquare) {
    return edgeSquare * edgeSquare;
}

// export
// với các cách export khác nhau thì sẽ có cách import khác nhau
export {
    calcPerSquare
};
// export biến

// export default là mặc định khi gọi module này thì sẽ sử dụng hàm 
// hoặc giá trị mà được ed
export default calcAreaSquare;

