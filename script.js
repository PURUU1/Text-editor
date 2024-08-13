const text = document.getElementById('text-area');

const bold = document.getElementById('bold')

const underline = document.getElementById('underline')

const itelic = document.getElementById('itelic')

const clean =  document.getElementById('clean')

let isbold = false;
bold.addEventListener('click',()=>{
  update();
  
  if(isbold == false){
    console.log('Bold')
  bold.classList.add('dis')
  text.style.fontWeight = 'bold'
    isbold = true
  }
  else if (isbold == true){
    console.log('none')
    bold.classList.remove('dis')
    text.style.fontWeight = "";
    isbold = false
  }
  ///
  
})
let isunderline = false
  underline.addEventListener('click',()=>{
    update();
  if(isunderline == false){
    underline.classList.add('dis')
  text.style.textDecoration = 'underline' 
    isunderline = true
  }
  else if (isunderline == true){
    underline.classList.remove('dis')
      text.style.textDecoration =  ""
   isunderline = false
  }
})

let isitalic = false
  itelic.addEventListener('click',()=>{
    update();
  if(isitalic == false){
    itelic.classList.add('dis')
  text.style.fontStyle = 'italic' 
    isitalic = true
  }
  else if (isitalic == true){
    itelic.classList.remove('dis')
    text.style.fontStyle = "" 
   isitalic = false
  }
})

clean.addEventListener('click',()=>{
  text.value = ''
})

/////
function update(){
  
localStorage.setItem("data", text.value);
}
function onload(){
  text.value = localStorage.getItem("data");
}

setInterval(()=>{
 console.log('updated') 
  update();
},3000)

// 
