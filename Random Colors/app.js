let body = document.querySelector("body")

function Change(){
    let redK = (Math.random()*100).toFixed()
    let redB = (Math.random()*1000).toFixed()
    let greenK = (Math.random()*100).toFixed()
    let greenB = (Math.random()*1000).toFixed()
    let blueK = (Math.random()*100).toFixed()
    let blueB = (Math.random()*1000).toFixed()

    if(redB>255 && greenB>255 && blueB>255){
        body.style.backgroundColor = `rgb(${redK}, ${greenK}, ${blueK})`
    }else{
        body.style.backgroundColor = `rgb(${redB}, ${greenB}, ${greenK})`
    }
}