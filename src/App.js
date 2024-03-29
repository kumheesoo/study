import logo from './logo.svg';
import './App.css';
import './ex.css';
import Result from './result';

// h2태그에 파란색 디자인 입히기
// h태그 -> 제목
// p태그 -> 내용
// div -> 공용
// input -> 입력할 수 있는 창
// textarea -> 입력가능하고 크기 조절 가능한 창
function App() {
  return (
    <>
      {/* <div className='IDstyle'>리액트 안녕!</div>
      <h3>잘 작동하니?</h3>
      
      <h2  className='PWstyle'>파란 글씨</h2>
      <div>금희수 ㅎㅇ</div>
      ID:<input></input>
      PW:<input></input>
      <textarea></textarea>
      <div className='back'>gdg</div> */}
      <Result/>
    </>
  );
}
export default App;




  
