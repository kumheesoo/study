const buttons = document.querySelectorAll(".button-grid button");
const display = document.querySelector(".display");
const deleteBtn = document.querySelector('.delete');
let beforeButton = null;

// 효과음 객체 생성
const clickSound = new Audio('click.mp3');
clickSound.volume = 0.3;

deleteBtn.addEventListener('click', function() {
    display.value = display.value.slice(0, -1);
});

buttons.forEach(button => {
    button.addEventListener('click', function() {
        button.classList.remove('pop');
        void button.offsetWidth; // reflow
        button.classList.add('pop');

        // 입력창에 값 추가
        display.value += button.textContent;

        // 효과음 재생
        clickSound.currentTime = 0;
        clickSound.play();

        // 기존 색상 변경 로직
        if (beforeButton) {
            beforeButton.style.backgroundColor = '';
        }
        this.style.backgroundColor = 'rgba(40,40,50,0.7)';
        beforeButton = this;
    });
});