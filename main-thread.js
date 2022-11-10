const worker1 = new Worker('worker.js?v=6');
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
var isTrue = false;
 
/**
 * un comment below code to see how for loop stcuk main thread
 */
btn1.addEventListener("click",function(e) {
    // console.log("click event stucks main tread works")
    // let sum = 0;
    //     for(let i = 0;i<10000000000;i++) {
    //         sum += i;
    //     }
    //     console.log(sum)
    worker1.postMessage("hello")
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