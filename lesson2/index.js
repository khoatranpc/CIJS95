// const arrNumber = [1, 2, 3, 4, 5];

// const person = {
//     name: 'Khoa',
//     age: 10
// }
// const arr = [...arrNumber];
// const newObj = {
//     ...person
// }
// console.log(newObj) // name: 'Khoa'  age: 10


console.log('======REST=======');
// in ra hết tất cả các giá trị được truyền trong tham số của hàm testRest
function testRest(params1, params2, ...list) {
    console.log(list);
}

testRest(1, 2, 3, 4, 5, 6, 7, 8);


console.log('======Destructuring=======');

const person = {
    name: "MindX",
    age: 20
}
const { age } = person;
console.log(person === person);
// const name = person.name;
// const age = person.age;

const coordinate = [0, 1, 1];
const [x, , z] = coordinate;
console.log(z);
// mục đích -> để đặt tên các giá trị sử dụng cho phần tử array (array này phải xác định rồi)
// const x = coordinate[0];
// const y = coordinate[1];
// const z = coordinate[2];

const cars = ["BMW", "BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
for (let i = 0; i < cars.length; i++) {
    const element = cars[i];
}
// với các phương thức được cung cấp -> giúp làm việc với các phần tử của mảng nhanh chóng hơn
// phương thức -> là các hành động của đối tượng -> hành động này thường có kết quả

// map
const newArrCars = cars.map((element) => {
    return `Ô tô: ${element}`;
});
console.log(newArrCars);
// filter -> lọc -> trả về các phần tử (không làm thay đổi) thoả mãn điều kiện
const resultFilter = cars.filter((element) => {
    return element === "BMW";
});
console.log(resultFilter);