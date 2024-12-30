// To generate a random color
let StartChangingColor;
let StopChangingColor;

const randomColor = function(){
    let hex = '0123456789ABCDEF'
    let color = '#'
    for(i=0;i<6;i++){
        color += hex[(Math.floor(Math.random()*16))]
    }
    return color
}

StartChangingColor = function(){
    document.body.style.backgroundColor = randomColor()
}

document.getElementById('start').addEventListener('click', function(){
    StopChangingColor = setInterval(StartChangingColor,1000)
})

document.getElementById('stop').addEventListener('click', function() {
    clearInterval(StopChangingColor)
})
