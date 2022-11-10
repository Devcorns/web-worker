const worker1 = new Worker('worker.js?v=6');


const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
var isTrue = false
// 
btn1.addEventListener("click",function(e) {
    worker1.postMessage("hello")
    console.log(isTrue,isTrue)
})

btn2.addEventListener("click",function(e) {
    if(isTrue) {
        isTrue = false;
        document.body.style.background = "#fff"
    } else {
        isTrue = true;
        document.body.style.background = "#f00"
    }
    
})