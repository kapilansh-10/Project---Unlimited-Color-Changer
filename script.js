// To generate a random color
let changeBgColor
const randomColor = function(){
    let hex = '0123456789ABCDEF'
    let color = '#'
    for(i=0;i<6;i++){
        color += hex[(Math.floor(Math.random()*16))]
    }
    return color
}

let intervalId;

const StartChangingColor = function () {
    if(!intervalId){
        intervalId = setInterval(changeBgColor,1000)
    }
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor()
    }
}

const StopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = (null)
}

document.getElementById('start').addEventListener('click', StartChangingColor) 

document.getElementById('stop').addEventListener('click', StopChangingColor)