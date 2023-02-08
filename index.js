// Responsiveness
const btnResponsive = document.querySelector("#btn-responsive");
const divColored = document.querySelector("#random-color");

btnResponsive.addEventListener("click", () => {
  const randomColor  = Math.floor(Math.random()*16777215).toString(16);
  divColored.style.backgroundColor = "#"+randomColor;
})

// Heavy work without worker
const btnFunc = document.querySelector("#btn-func");
const divResult = document.querySelector("#result");

btnFunc.addEventListener("click", () => {
  divResult.innerHTML = "Computing...";
  
  let acc = 0;
  for (let i = 0; i < 10000000000; i++) {
    acc += i;
  }

  divResult.innerHTML = "Result: " + acc;
})

// Heavy work with worker
const btnFuncWebWorker = document.querySelector("#btn-func-web-worker");

btnFuncWebWorker.addEventListener("click", () => {
  divResult.innerHTML = "Computing...";

  if(!window.Worker){
    console.log('No support for web workers');
    return;
  }
  const worker = new Worker("worker.js");
  worker.postMessage("trigger");

  worker.onmessage = function (e) {
    divResult.innerHTML = "Result: " + e.data;
  }
})
