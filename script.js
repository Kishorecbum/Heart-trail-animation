const body1le=document.querySelector("body")
body1le.addEventListener("mousemove",(event) =>{
    const xpos=event.offsetX
    const ypos=event.offsetY
    const spanele=document.createElement("span")
    spanele.style.left=xpos+"px"
    spanele.style.top=ypos+"px"
    const size=Math.random()*100
     spanele.style.height=size+"px"
    spanele.style.width=size+"px"
    body1le.appendChild(spanele)

    setTimeout(()=>{
        spanele.remove()

    },3000)

    
})