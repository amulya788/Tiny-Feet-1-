let nme = document.getElementById("nme");
    let mail = document.getElementById("mail");
    let pswd = document.getElementById("pswd");
function validateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value))
  {
    return true;
  }
    // alert("You have entered an invalid email address!")
    return false;
} 

function validate(){
    if((nme.value.length==0) || (mail.value.length==0) || (pswd.value.length==0)){
        alert("Please fill all the values");
    }
    
    if((nme.value.length!=0) && (mail.value.length!=0) && (pswd.value.length!=0)){
      if(validateEmail(mail)==false){
      alert("You have entered an invalid email address");
      }
      document.getElementById("myForm3").style.display = "block";
  }
}

function openSignUpForm() {
  document.getElementById("myForm").style.display = "block";
  closeLogInForm();
}

function closeSignUpForm() {
  document.getElementById("myForm").style.display = "none";
}

function openLogInForm() {
    document.getElementById("myForm2").style.display = "block";
    closeSignUpForm();
  }
  
  function closeLogInForm() {
    document.getElementById("myForm2").style.display = "none";
  }

  function openHamburger() {
    document.getElementById("mymenu").style.display = "block";
    closeLogInForm();
    closeSignUpForm();
  }
  
  var modal = document.getElementById('mymenu');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


  function thanksPopUp(){
    
  }

  function closeThanksPopUp(){
    document.getElementById("myForm3").style.display = "none";
  }


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
