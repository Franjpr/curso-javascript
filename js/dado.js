var btn = document.querySelector('#dado span');

var caras_dado = ['/res/img/1.png','/res/img/2.png','/res/img/3.png',
                  '/res/img/4.png','/res/img/5.png','/res/img/6.png'];

btn.addEventListener('mouseup', clickHandler);

function clickHandler(){
  var num = randomNumberBetweenZeroAnd(6);
  document.querySelector('#imagen_dado').src = caras_dado[num - 1];
  document.querySelector('#num-reps li:nth-child(' + num + ')').innerHTML++;
}

function randomNumberBetweenZeroAnd(a){
  return Math.floor(Math.random() * a) + 1;
}
