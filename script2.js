document.querySelector('#white').addEventListener('click',()=>{
  
  text.style.color = 'white'
})

document.querySelector('#red').addEventListener('click',()=>{
  text.style.color = 'red'
})

document.querySelector('#yellow').addEventListener('click',()=>{
  text.style.color = 'yellow'
})

document.querySelector('#blue').addEventListener('click',()=>{
  text.style.color = 'blue'
})
document.querySelector('#green').addEventListener('click',()=>{
  text.style.color = 'green'
})

//plus - minus

let plus = document.querySelector('#plus');

let minus = document.querySelector('#minus');

let percentageText = document.querySelector('#perc');
let per = 20;

plus.addEventListener('click',()=>{
  per++;
  percentageText.innerHTML = `${per}%`
  text.style.fontSize = `${per}px`
  if(per > 40){
    per = 40;
  }
})

minus.addEventListener('click',()=>{
  per--;
  if(per <= 20){
    per = 20;
  }
  percentageText.innerHTML = `${per}%`
  text.style.fontSize = `${per}px`
})

///font

let up = document.querySelector('#up');

let down = document.querySelector('#down');

let currentFont = document.querySelector('#font_name');

let fonts =  [
  "Default",
  "Serif",
  "Monospace",
  "Fantasy",
  
  "Comic Sans MS, Comic Sans, cursive	",
  
];

let fontcount = 0;
up.addEventListener('click',()=>{
  if(fontcount >= fonts.length){
    fontcount = fonts.length-1
  }
  fontcount++;
  text.style.fontFamily = `${fonts[fontcount]}`
  currentFont.innerHTML = `${fonts[fontcount]}`

})

down.addEventListener('click',()=>{

  fontcount--;
  text.style.fontFamily = `${fonts[fontcount]}`
  currentFont.innerHTML = `${fonts[fontcount]}`
  if(fontcount == 0){
    fontcount = 0
  }
})


let ic1 = document.querySelector('.ic1');
let color = document.querySelector('.color');
let isClassActive = false

color.addEventListener('click',()=>{
  if(isClassActive == false){
  color.classList.add('open')  
    isClassActive = true
  }
  else if(isClassActive == true){
    color.classList.remove('open')
    isClassActive = false
  }
})



let ic2 = document.querySelector('.ic2');
let size = document.querySelector('.sizebox');
let isClassActive2 = false
    ic2.addEventListener('click',()=>{
  if(isClassActive2 == false){
    size.classList.add('open')  
      isClassActive2 = true
  }
  else if(isClassActive2 == true){
      size.classList.remove('open')
      isClassActive2 = false
  }
})


let ic3 = document.querySelector('.ic3');
let font = document.querySelector('.font');
let isClassActive3 = false
    ic3.addEventListener('click',()=>{
  if(isClassActive3 == false){
      font.classList.add('open')  
        isClassActive3 = true
  }
  else if(isClassActive3 == true){
        font.classList.remove('open')
        isClassActive3 = false
  }
})



function myFunction() {
  // Get the text field
  var copyText = document.getElementById("text-area");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
 
}