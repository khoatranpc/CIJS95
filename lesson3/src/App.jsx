import { useState } from 'react';
import Card from './Card.jsx';

function App() {
  // chuyên biệt để lưu dữ liệu, với tác dụng khi thay đổi thì sẽ re-render
  const [count, setCount] = useState(() => {
    return 0
  });
  const [person, setPerson] = useState({
    name: 'MindX'
  });
  /*
  Kết quả trả về của useState là một mảng, gồm 2 giá trị lần lượt: vị trí số 0 là giá trị hiện tại, hàm cập nhật state
  */
  const onClickMe = (e) => {
    // hàm set state nhận đầu vào là một giá trị mới
    setCount(count + 1);// => setCount(1)
    console.log(count);
    // cách thực hiện cập nhật dữ liệu của hàm set state

    // nhận đầu vào 1 giá trị bất kỳ, sau đó sẽ thực hiện so sánh giá trị đầu vào này và giá trị trước đó
    // để thực hiện cập nhật giá trị?
    // khi nào thì cập nhật?
    // thực hiện so sánh để xem có khác nhau hay không, nếu khác thì sẽ cập nhật, còn không, thì sẽ giữ nguyên
  }

  return (
    <div className="app">
      <h1>Hello lớp!</h1>
      {/* vừa là thẻ mở, vừa là thẻ đóng */}
      <Card name="Khoa" age={10} sayHello={<h1>hello {person.name}!</h1>} >
        <p>Đếm: {count}</p>
        <button onClick={onClickMe} onMouseOver={() => {
          console.log('Chuột qua nè!');
        }}>click</button>
        <button
          onClick={() => {
            person.name = "CIJS95";
            // cách cập nhật dữ liệu cho các giá trị tham chiếu
            // để hàm set state nhận đầu vào các dữ liệu mới, ta sẽ cung cấp địa chỉ mới, địa chỉ này sẽ bao gồm các thông tin của địa chỉ trước đó
            setPerson({
              ...person
            });
          }}
        >
          Đổi tên
        </button>
      </Card>
      {/* <Card name="Obito" age={14} sayHello={<h1>hello mindx!</h1>} />
      <Card name="Nobita" age={10} sayHello={<h1>hello mindx!</h1>} /> */}
    </div>
  )
}

export default App;
