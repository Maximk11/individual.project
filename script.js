var modal = document.getElementById("modal");

var modalImg = document.getElementById("modal-img");

var images = document.querySelectorAll(".project-photo");

images.forEach(function(image) {
  image.onclick = function() {
    modal.style.display = "flex";
    modalImg.src = this.src;
  };
});

var closeBtn = document.querySelector(".close");
closeBtn.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}