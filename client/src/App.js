// 1. View dispatch action => redux saga (ở đây sẽ xử lí và thực thi callback theo đúng action đó) 
// 2. redux saga thực thi xong callback sẽ trả về giá trị và gửi đi một action success cộng với giá trị trả về đó.
// 3. khi đó reducer sẽ bắt action success đó và thực thi nhiệm vụ tương ứng với action đó.
// 4. sau khi reducer thực thi xong thì store sẽ được cập nhật lại => view (UI) sẽ được re-render

import HomePage from "./pages/HomePage";

function App() {

  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
