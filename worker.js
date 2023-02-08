onmessage = function (e) {
  let acc = 0;
  for (let i = 0; i < 10000000000; i++) {
    acc += i;
  }

  postMessage(acc);
}