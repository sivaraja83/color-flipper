let btn = document.querySelector("button")
let color_code = document.querySelector("span")
const wrap = document.getElementById("wrap")

// Hex code
let hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

btn.addEventListener("click",function(){
    let hexcolour = '#'
    for(let i=1;i<=6;i++){
        hexcolour += randhexvalue()
    }
   wrap.style.backgroundColor = hexcolour
   color_code.innerHTML = hexcolour
}
)


function randhexvalue(){
    let randIndex = Math.floor(Math.random()*16)
    return hex[randIndex]
}
