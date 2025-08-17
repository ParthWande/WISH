const yes = document.getElementsByClassName('btn')[0]
const no = document.getElementsByClassName('btn')[1]
var pageHeightStart = window.document.body.getBoundingClientRect().width
var pageWidth = window.document.body.scrollWidth;
var defaultScale = 1;
var currentTextPosition = 0
var text = ["AAI ZHAVADI", "ITS SO SIMPLE PRESS YES OMG RETARD", "SEND BINA KAPDE KE PHOTOS", "ANNIVERSARY GIFT INCOMING", "BHAI HEAVY BUDGET HAI MERA JUST PRESS YES DUMBASS"]
const funnyText = document.querySelector('.funny_text')
/* redirects */

yes.addEventListener('click', function(){
  window.location = 'yes.html'
})

function omg(){
  funnyText.innerHTML = "really?...😳"
}

function leave(){
  funnyText.innerHTML = text[4]
}


// default position in text
function setText(position){
  funnyText.innerHTML = text[position]
}

setText(currentTextPosition)

// triggers random movement 
function startMotion(){
    no.style.position = 'absolute'
    no.style.top =  `${(Math.random() * 700 ).toFixed(0)}px`
    no.style.right =  `${(Math.random() * 700).toFixed(0)}px`
    no.style.left =  `${(Math.random() * 700).toFixed(0)}px`
    no.style.bottom =  `${(Math.random() * 700).toFixed(0)}px`
}




no.addEventListener('click', function(){


  currentTextPosition = Math.ceil((Math.random() * 11))

  setText(currentTextPosition)

    
    yes.style.transform = `scale(${(defaultScale += 0.4).toFixed(2)})`
    
    if (defaultScale > 2.00) {
      
      
      startMotion();
      
        
    }
    let currentPageHeight = window.document.body.getBoundingClientRect().width

    if (pageHeightStart > currentPageHeight) {
      console.log('yes')
      startMotion()
    }
   
})

