// Câu 1
const square = (number) => number ** 2; // tương đương với return
console.log(square(4));
// Câu 2
// ví dụ: hello world  -> kiểm tra xem chuỗi vừa rồi có chứa từ khoá 'world' hay không
// nếu có in ra true ngược lại false

// nghiệp vụ nâng cao
// tìm kiếm nhưng không phân biệt ký tự hoa, thường

// để làm được ->
// 1. tìm kiếm theo tình trạng viết thường hết tất cả kể string hoặc letter nhận vào
// 2. tìm kiếm theo tình trạng viết HOA hết tất cả kể string hoặc letter nhận vào
const checkIncludeLetter = (string, letter) => {
    // ở trong string, js cung cấp một phương thức: include() -> để kiểm tra có chứa 1 cái gì đó hay không
    return string.toLowerCase().includes(letter.toLowerCase());
}
console.log(checkIncludeLetter('hello world', 'WOrLd'));

// Câu 3
const addPrefix = (list, prefix) => {
    for (let i = 0; i < list.length; i++) {
        list[i] = `${prefix}: ${list[i]}`
    }
    console.log(list);
}
addPrefix([1, 2, 3], "number");
// câu 4
/**
 * map chỉ có trong mảng
 * map là 1 phương thức, kết quả trả về luôn là một mảng mới,
 * có slg phần tử bằng với mảng đang duyệt
 * các giá của mảng mới, phụ thuộc vào kết quả trả về
 */
const tranfList = (list) => {
    const result = list.map((value) => {
        return value * 2;
    });
    console.log(result);
}
tranfList([1, 2, 3, 4]);

// câu 5
// filter cách dùng giống y hệt map
// kết quả trả ra -> sẽ là 1 mảng các phần tử thoả mãn điều kiện trả về
// làm thế nào để kiểm tra số lẻ -> chia lấy dư với 2 mà khác 0 -> lẻ

const fnFilterNumber = (list) => {
    const result = list.filter((value) => {
        return value % 2 !== 0;
    });
    console.log(result);
}
fnFilterNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


// câu 6
const employees = [
    { id: 1, name: "John", workingDays: 22 },
    { id: 2, name: "Jane", workingDays: 20 },
    { id: 3, name: "Mark", workingDays: 25 },
];
/**
 * 
 * Đối với bài toán tính tổng các số -> dựa vào việc lưu trữ và sử dụng kết quả trước đó để thực hiện cộng với giá trị tiếp theo
 */
const sumWD = (employees) => {
    let sum = 0;
    for (let i = 0; i < employees.length; i++) {
        const person = employees[i];
        sum += person['workingDays'];
    }
    console.log(sum);
}
sumWD(employees);
