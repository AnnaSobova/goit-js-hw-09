
// генерация случайного цета 
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const refs ={
    bodyEl: document.querySelector('body'),
    btnStartEl: document.querySelector('[data-start]'),
    btnStopEl: document.querySelector('[data-stop]'),
}

refs.btnStartEl.addEventListener('click', onClickStartColor);
refs.btnStopEl.addEventListener('click', onClickStopColor);

let timerID = null;

// добавить цвет
function onClickStartColor() {

    refs.btnStartEl.disabled = true;
    refs.btnStopEl.disabled = false;
   
    timerID = setInterval(() =>{
        refs.bodyEl.style.background = getRandomHexColor();
        
    },1000);
}
// убрать цвет
    function onClickStopColor() {
        refs.btnStartEl.disabled = false;
        refs.btnStopEl.disabled = true;
        clearInterval(timerID);
    }
