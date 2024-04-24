const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const instruction = document.getElementById('instruction')
const game = document.getElementById('playing')
const inputUsername = document.getElementById('inputan')
const play = document.getElementById("play")
const scr = document.getElementById('score')
const time = document.getElementById('time')
const player = document.getElementById('player')
const failed = document.getElementById('fail')
const gameOver = document.getElementById('game-over')
const scr2 = document.getElementById('score2')
const time2 = document.getElementById('time2')
const player2 = document.getElementById('player2')
const restart = document.getElementById('call-restart')
const restart1 = document.getElementById('restart1')
const restart2 = document.getElementById('restart2')
const countdown = document.getElementById('countdown')
const quit = document.getElementById('quit')
const pause = document.getElementById('pause')
const continu = document.getElementById('continue')
const img = document.getElementById('img')

let gameStatus = "stop";
let virus = []
let score = 0
let detik = 0
let menit = 0
let nama = ""
let fail = 0
let cd = 3
let gradient = 1000

inputUsername.addEventListener('input', (e) => {
  if (e.target.value != "") {
    play.removeAttribute('disabled')
    play.classList.add('show')
    nama = e.target.value
  }
  else{
    play.setAttribute('disabled',true)
    play.classList.remove('show')
  }
})

function setCd() {
  if (gameStatus == "stop" || gameStatus == "restart" || gameStatus == "continue") {
    countdown.innerHTML = cd == 0 ? 3 : cd
    if (cd <= 0) {
      cd = 3
      countdown.classList.add('hide')
      game.classList.remove('hide')
      if (gameStatus == "stop") {
        gameStatus = "play"
        draw()
        setInterval(setVirus,1000)
        setInterval(setTime,1000) 
      }
      else{
        gameStatus = "play"
      }
    }
    else{
      cd--
    }
  }
}

play.addEventListener('click', ()=>{
  instruction.classList.add('hide')
  countdown.classList.remove('hide')
  cd = 3
  setInterval(setCd,1000)
})


restart.addEventListener('click', () => {
  console.log("click");
  score = 0
  detik = 0
  menit = 0
  fail = 0
  virus = []
  game.classList.add('hide')
  countdown.classList.remove('hide')
  gameStatus = "restart"
})
restart1.addEventListener('click', () => {
  score = 0
  detik = 0
  menit = 0
  fail = 0
  virus = []
  pause.classList.add('hide')
  countdown.classList.remove('hide')
  gameStatus = "restart"
})
restart2.addEventListener('click', () => {
  score = 0
  detik = 0
  menit = 0
  fail = 0
  virus = []
  gameOver.classList.add('hide')
  countdown.classList.remove('hide')
  gameStatus = "restart"
})

quit.addEventListener('click', () => {
  document.location.reload()
})

document.addEventListener('keyup', (e) => {
  if (e.key == "Escape") {
    if (gameStatus == "stop") {
      return;
    }
    else if(gameStatus == "play"){
      gameStatus = "pause"
      game.classList.add('hide')
      pause.classList.remove('hide')
    }
    else if(gameStatus == "pause"){
      pause.classList.add('hide')
      gameStatus = "continue"
      countdown.classList.remove('hide')
    }
  }
})

continu.addEventListener('click', () => {
  pause.classList.add('hide')
  countdown.classList.remove('hide')
  gameStatus = "continue"
})

document.addEventListener('keypress',killVirus)
function killVirus(e){
  if (e.key == 'd' || e.key == 'D') {
    for (let i = 0; i < virus.length; i++) {
      let x = virus[i][0]
      let y = virus[i][1]
      if (x > 0 && x < 100 && y > 300 && y < 535) {
        virus.splice(i,1)
        score++
        gradient = 0
      }
    }
  }
  if (e.key == 'f' || e.key == 'F') {
    for (let i = 0; i < virus.length; i++) {
      let x = virus[i][0]
      let y = virus[i][1]
      if (x > 100 && x < 200 && y > 300 && y < 535) {
        console.log("kill");
        virus.splice(i,1)
        score++
        gradient = 100
      }
    }
  }
  if (e.key == 'j' || e.key == 'J') {
    for (let i = 0; i < virus.length; i++) {
      let x = virus[i][0]
      let y = virus[i][1]
      if (x > 200 && x < 300 && y > 300 && y < 535) {
        console.log("kill");
        virus.splice(i,1)
        score++
        gradient = 200
      }
    }
  }
  if (e.key == 'k' || e.key == 'K') {
    for (let i = 0; i < virus.length; i++) {
      let x = virus[i][0]
      let y = virus[i][1]
      if (x > 300 && x < 400 && y > 300 && y < 535) {
        console.log("kill");
        virus.splice(i,1)
        score++
        gradient = 300
      }
    }
  }
}

canvas.addEventListener('click',(e) => {
  console.log(e.clientX,e.clientY);
  let postionX = e.clientX
  let postionY = e.clientY
  const X = 534

  if (postionX < (X + 100)  && postionY > 550) {
    for (let i = 0; i < virus.length; i++) {
      let x = virus[i][0]
      let y = virus[i][1]
      if (x > 0 && x < 100 && y > 300 && y < 535) {
        virus.splice(i,1)
        score++
        gradient = 0
      }
    }
  }
  else if (postionX > (X + 100) && postionX <  (X + 200) && postionY > 550) {
    for (let i = 0; i < virus.length; i++) {
      let x = virus[i][0]
      let y = virus[i][1]
      if (x > 100 && x < 200 && y > 300 && y < 535) {
        virus.splice(i,1)
        score++
        gradient = 100
      }
    }
  }
  else if (postionX > (X + 200) && postionX <  (X + 300) && postionY > 550) {
    for (let i = 0; i < virus.length; i++) {
      let x = virus[i][0]
      let y = virus[i][1]
      if (x > 200 && x < 300 && y > 300 && y < 535) {
        virus.splice(i,1)
        score++
        gradient = 200
      }
    }
  }
  else if (postionX > (X + 300) && postionX <  (X + 400)  && postionY > 550) {
    for (let i = 0; i < virus.length; i++) {
      let x = virus[i][0]
      let y = virus[i][1]
      if (x > 300 && x < 400 && y > 300 && y < 535) {
        virus.splice(i,1)
        score++
        gradient = 300
      }
    }
  }
})

function drawKey(){
  let w = 97.5
  let h = 200
  let keyX = 0
  let keyY = canvas.height - h
  let key = 1
  for (let i = 0; i < 4; i++) {
    ctx.beginPath()
    ctx.rect(keyX,keyY, w, h)
    keyX / 100 % 2 == 0 ? ctx.fillStyle = '#3d3da9' : ctx.fillStyle = '#656f8c'
    ctx.fill()
    ctx.closePath() 
    keyX += 100
  }

  let borderX = 0
  for (let i = 0; i < 5; i++) {
    ctx.beginPath()
    ctx.rect(borderX,keyY, 2.5, h)
    ctx.fillStyle = 'black'
    ctx.fill()
    ctx.closePath()
    borderX += 100
  }
}

function drawGradient(x){
  let y = canvas.height - 315
  let grd = ctx.createLinearGradient(0,y,0,y+100);
  grd.addColorStop(0,"#ff000000");
  grd.addColorStop(1,"white");
  ctx.fillStyle = grd;
  ctx.fillRect(x,y,100,100);
}

function drawText(){
  ctx.font = '40px arial'
  ctx.fillStyle = 'white'
  ctx.fillText("D",30,650)
  ctx.fillText("F",135,650)
  ctx.fillText("J",240,650)
  ctx.fillText("K",335,650)
}

function drawLine(){
  let X = 100
  let Y = 0
  let w = 1
  let h = canvas.height - 210
  for (let i = 0; i < 4; i++) {
    ctx.beginPath()
    ctx.rect(X,Y, w, h)
    ctx.fillStyle = 'white'
    ctx.fill()
    ctx.closePath() 
    X += 100
  }
}

function drawPembatas() {
  ctx.beginPath()
  ctx.rect(0,(canvas.height - 215), canvas.width, 10)
  ctx.fillStyle = 'grey'
  ctx.strokeStyle = 'white'
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}

function drawBackground(){
  ctx.beginPath()
  ctx.rect(0,(canvas.height - 450), canvas.width, 250)
  ctx.fillStyle = '#fe00004c'
  ctx.fill()
  ctx.closePath()

  ctx.beginPath()
  ctx.rect(0,(canvas.height - 205), canvas.width, 200)
  ctx.fillStyle = 'black'
  ctx.fill()
  ctx.closePath()
}

function setVirus() {
  if (gameStatus == "play") {
    let random = Math.floor(Math.random() * 4)
    let virusX = random * 100 + 30
    let virusY = 5
    virus.push([virusX,virusY]) 
  }
}

function drawVirus() {
  if (gameStatus == "play") {
    for (let i = 0; i < virus.length; i++) {
      ctx.drawImage(img,virus[i][0],virus[i][1],40,40)
      let Y = virus[i][1]
      let X = virus[i][0]
      Y += 3
      virus.splice(i,1,[X,Y])
    } 
  }
}

function draw(){
  if (gameStatus == "play") {
    ctx.clearRect(0,0,canvas.width,canvas.height)

    drawBackground()
    drawLine()
    drawVirus()
    drawKey()
    drawText()
    drawPembatas()
    if (gradient != 1000) {
      drawGradient(gradient)
      gradient = 1000
    }

    for (let i = 0; i < virus.length; i++) {
      if (virus[i][1] > canvas.height - 215) {
        virus.splice(i,1)
        fail++
      }
    }
  }

  if (fail >= 5) {
    gameStatus = "gameOver"
    game.classList.add('hide')
    gameOver.classList.remove('hide')

    scr2.innerHTML = score
    player2.innerHTML = nama
    if (menit < 10) {
        if (detik < 10) {
            time2.innerHTML = `0${menit}:0${detik}`
        }
        else{
            time2.innerHTML = `0${menit}:${detik}`
        }
    }
    else{
        if (detik < 10) {
            time2.innerHTML = `${menit}:0${detik}`
        }
        else{
            time2.innerHTML = `${menit}:${detik}`
        }
    }
  }
  
  scr.innerHTML = score == 0 ? 0 :score
  player.innerHTML = nama
  
if (menit < 10) {
    if (detik < 10) {
        time.innerHTML = `0${menit}:0${detik}`
    }
    else{
        time.innerHTML = `0${menit}:${detik}`
    }
}
else{
    if (detik < 10) {
        time.innerHTML = `${menit}:0${detik}`
    }
    else{
        time.innerHTML = `${menit}:${detik}`
    }
}
  
  failed.innerHTML = fail

  requestAnimationFrame(draw)
}

function setTime() {
  if (gameStatus == "play") {
    detik++
    if (detik >= 60) {
      menit++
      detik = 0
    } 
  }
}