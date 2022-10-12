// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  //document.getElementById('modal').classList.add('hidden');
  let likeGlyphs = document.getElementsByClassName('like-glyph');
  for (let i = 0; i < likeGlyphs.length; i++) {
    likeGlyphs[i].addEventListener('click', likeClickedFunc);
  }
});

function likeClickedFunc(likeGlyphObj) {
  mimicServerCall()
  .then(successReponse => {
    const heartObj = likeGlyphObj.target;
    if (heartObj.classList.contains('activated-heart')) {
      heartObj.classList.remove('activated-heart');
    }
    else {
      heartObj.classList.add('activated-heart');
    }
  })
  .catch(errorResponce => {
    const errorMessage = document.getElementById('modal');
    errorMessage.classList.remove('hidden');
    errorMessage.children[1].textContent = errorResponce;
    setTimeout(() => errorMessage.classList.add('hidden'), 3000);
  });
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
