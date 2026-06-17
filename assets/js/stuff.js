const chgTheme = document.getElementById("chgTheme");
const element = document.getElementById('nombre');
const textToWrite = 'Miguel Santamaria Mangabeira';
var i = 0;
var progress = 0;
var codingChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
var random = 0;

var light = '';
var dark = 'dark';
var thmSlctd = '';

function setTheme(chosenOne) {
  document.documentElement.setAttribute('data-theme', chosenOne);
  thmSlctd = chosenOne;
  if(chosenOne == 'dark'){
    chgTheme.className = 'fas fa-sun';
  }else{
    chgTheme.className = 'fas fa-moon';
  }
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  setTheme(dark);
} else {
  setTheme(light);
}

chgTheme.addEventListener("click", (e) => { 
  if(thmSlctd == 'light'){
    thmSlctd = 'dark'
  }else{
    thmSlctd = 'light'
  }
  setTheme(thmSlctd);
});

function decodeText() {
  random = rndmNumber(20,150);
  setTimeout(function(){ 
    i++;
    var currentText = textToWrite.substr(0, i);
    currentText += getRandomChars(textToWrite.length - i);

    element.innerHTML = currentText;
    progress = i/textToWrite.length;
  
    if(progress < 1) {
      decodeText()
    }
  }, random);
}

function getRandomChars(howMany) {
  var result = '';
  
  for(var i=0; i<howMany; i++) {
    if(i % 5 == 0) {
      result += ' '
    } else {
      result += codingChars.charAt(Math.floor(Math.random() * codingChars.length));
    }
  }
  return result
}

function rndmNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

decodeText();