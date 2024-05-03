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
// Câu 7: tìm nhân viên có mức lương cao nhất  -> tìm 1
console.log("=====CÂU 7=====");
// tìm giá trị lớn nhất
const employees7 = [
    { id: 1, name: "John", salary: 2000 },
    { id: 2, name: "Jane", salary: 2500 },
    { id: 3, name: "Mark", salary: 3000 },
    { id: 4, name: "KHOA", salary: 3000 },
];
const findMaxSalary = (listEmployee) => {
    // C1: sử dụng logic tìm kiếm số lớn nhất như bthg
    // let MAX_SALARY = listEmployee[0].salary;
    // let maxEmployeeSalary;
    // for (let i = 1; i < listEmployee.length; i++) {
    //     const salary = listEmployee[i].salary;
    //     if (MAX_SALARY < salary) {
    //         MAX_SALARY = salary;
    //         maxEmployeeSalary = listEmployee[i];
    //     }
    // }
    // console.log(maxEmployeeSalary);

    // C2: dùng method find -> sẽ trả về kết quả là 1 phần tử thoả mãn điều kiện trả về
    // C3:
    // B1: lấy ra tất cả các mức lương -> cần phải lưu giữ được vị trí
    // B2: tìm kiếm giá trị lớn nhất
    // B3: tìm kiếm vị trí của giá trị đó
    // B4: lấy tương ứng nhân viên với vị trí đó

    const listSalary = listEmployee.map((item) => item.salary);
    const MAX = Math.max(...listSalary);
    console.log(MAX);
    const listMax = listEmployee.filter((item) => {
        return item.salary === MAX;
    }); // phương thức trả về vị trí của phần tử đầu tiên thoả mãn điều kiện trả về, nếu k tìm được giá trị sẽ là -1
    console.log(listMax);
}
findMaxSalary(employees7);

console.log("=====CÂU 8=====");
// tìm nhân viên chăm chỉ nhất
// chăm chỉ nhất -> làm nhiều nhất, đi muộn ít nhất
// để tính nhân viên chăm chỉ nhất -> tìm max (số ngày đi làm - số ngày đi muộn);
const employees8 = [
    { id: 1, name: "John", workingDays: 22, lateDays: 2 },
    { id: 2, name: "Jane", workingDays: 20, lateDays: 0 },
    { id: 3, name: "Mark", workingDays: 25, lateDays: 1 },
];

const pr8 = (listEmployee) => {
    // tính toán công làm
    const listWorked = listEmployee.map((item) => {
        return item.workingDays - item.lateDays;
    });
    const MAX_WORKED = Math.max(...listWorked);
    // -> filter, find
    const employeesMaxWorked = listEmployee.find(item => (item.workingDays - item.lateDays) === MAX_WORKED);
    console.log(employeesMaxWorked);
}
pr8(employees8);

console.log("=====CÂU 9=====");
const employees9 = [
    { id: 1, name: "John", salary: 2000 },
    { id: 2, name: "Jane", salary: 2500 },
    { id: 3, name: "Mark", salary: 3000 },
    { id: 4, name: "John", salary: 2200 },
];

const newObj9 = {};
employees9.forEach((element) => {
    // mỗi một lần duyệt -> lấy được name hiện tại
    if (!newObj9[element.name]) {
        newObj9[element.name] = [];
        newObj9[element.name].push(element);
    } else {
        newObj9[element.name].push(element);
    }
});
console.log(newObj9);

