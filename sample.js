function openHamburger() {
    document.getElementById("mymenu").style.display = "block";
    closeLogInmenu();
    closeSignUpForm();
  }
  

  var modal = document.getElementById('mymenu');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}