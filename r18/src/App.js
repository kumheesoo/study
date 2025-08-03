import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [displayValue, setDisplayValue] = useState('');
  const [lastClickedButton, setLastClickedButton] = useState(null);
  const [popButton, setPopButton] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    // 효과음 로드
    try {
      audioRef.current = new Audio('/click.mp3');
      audioRef.current.volume = 0.3;
      audioRef.current.load(); // 명시적으로 로드
    } catch (error) {
      console.log('오디오 파일을 로드할 수 없습니다:', error);
    }
  }, []);

  const handleNumberClick = (number) => {
    // 팝 애니메이션 효과
    setPopButton(number);
    setTimeout(() => setPopButton(null), 320);

    // 입력값 업데이트
    setDisplayValue(prev => prev + number);

    // 효과음 재생
    if (audioRef.current) {
      try {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(error => {
          console.log('오디오 재생 실패:', error);
        });
      } catch (error) {
        console.log('오디오 재생 중 오류:', error);
      }
    }

    // 이전 버튼 색상 초기화
    if (lastClickedButton) {
      lastClickedButton.style.backgroundColor = '';
    }
    
    // 현재 버튼 색상 변경
    const currentButton = document.querySelector(`[data-number="${number}"]`);
    if (currentButton) {
      currentButton.style.backgroundColor = 'rgba(40,40,50,0.7)';
      setLastClickedButton(currentButton);
    }
  };

  const handleDelete = () => {
    setDisplayValue(prev => prev.slice(0, -1));
  };

  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];

  return (
    <div className="App">
      <div className="glass-container">
        <h1>telephone</h1>
        <div className="input-row">
          <input 
            type="text" 
            className="display" 
            value={displayValue}
            readOnly 
          />
          <button className="delete" onClick={handleDelete}>←</button>
        </div>
        <div className="button-grid">
          {numbers.map((number) => (
            <button
              key={number}
              data-number={number}
              className={popButton === number ? 'pop' : ''}
              onClick={() => handleNumberClick(number)}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
