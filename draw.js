const container = document.querySelector('.container');
const btn = document.querySelector('.btn')
const sound = new Audio('https://zvukipro.com/uploads/files/2019-05/1558333752_ultra-z_uk.mp3')

function fullScreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  }
}

btn.addEventListener('click', ()=>{
    container.style.backgroundImage = 'none'
    container.style.backgroundColor = 'white'
    sound.play()
    container.style.cursor = 'none'
    btn.style.cursor = 'none'
    btn.style.border = 'none'
    btn.style.borderRadius = "50%"
    setInterval(()=>{
      btn.style.fontSize = 0;
      if (container.style.backgroundColor === 'white' || btn.style.width === "100%" || btn.style.height === "100%"){
        container.style.backgroundColor = 'red'
        btn.style.width = "80%"
        btn.style.height = "80%"
      }
      else if (container.style.backgroundColor === 'red' || btn.style.width === "80%" || btn.style.height === "80%"){
        container.style.backgroundColor = 'green'
        btn.style.width = "60%"
        btn.style.height = "60%"
      }
      else if (container.style.backgroundColor === 'green' || btn.style.width === "60%" || btn.style.height === "60%"){
        container.style.backgroundColor = 'blue'
        btn.style.width = "40%"
        btn.style.height = "40%"
      }
      else if (container.style.backgroundColor === 'blue' || btn.style.width === "40%" || btn.style.height === "40%"){
        container.style.backgroundColor = 'pink'
        btn.style.width = "20%"
        btn.style.height = "20%"
      }
      else {
        container.style.backgroundColor = 'white'
        btn.style.width = "0"
        btn.style.height = "0"
      }
    },0.01)
  fullScreen(document.documentElement);
})
addEventListener('keydown', function event(){
  if (event.keyCode === 27){
    fullScreen(document.documentElement);
  }
})

document.documentElement.onkeydown = function (event){
  console.log(event)
  if (event.key === 'Escape'){
    fullScreen(document.documentElement)
  }
}