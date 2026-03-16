/* ================================= */
/* Through My Lens - script.js       */
/* ================================= */

/* PAGE LOAD ANIMATION */
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

/* DOM READY: setup page transitions, form, image preview and mobile menu */
document.addEventListener("DOMContentLoaded", () => {

  /* PAGE TRANSITIONS */
  const links = document.querySelectorAll("a[href]");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      const url = link.getAttribute("href");

      // kun interne links
      if (url && !url.startsWith("#") && !url.startsWith("http")) {
        e.preventDefault();
        document.body.classList.add("fade-out");
        setTimeout(() => {
          window.location.href = url;
        }, 300);
      }
    });
  });

  /* ELEMENT REFERENCES */
  const form = document.getElementById("contactForm");
  const imageInput = document.getElementById("image");
  const preview = document.getElementById("imagePreview");
  const popup = document.getElementById("popup");
  const burger = document.getElementById("burger");
  const mobileNav = document.getElementById("mobileNav");

  /* IMAGE PREVIEW */
  if (imageInput && preview) {
    imageInput.addEventListener("change", () => {
      const file = imageInput.files[0];
      if (!file) return;

      const reader = new FileReader();

      reader.onload = () => {
        preview.src = reader.result;
        preview.style.display = "block";
      };

      reader.readAsDataURL(file);
    });
  }

  

  /* MOBILE MENU (BURGER) */
  if (burger) {
    burger.addEventListener("click", () => {
      if (mobileNav) {
        mobileNav.classList.toggle("show");
      }
    });
  }
});

emailjs.init("E70-4Otl9rzC5FAho");

const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

emailjs.send("service_owwk01r","template_yg0a95g",{

name: document.getElementById("name").value,
email: document.getElementById("email").value,
message: document.getElementById("message").value

}).then(function(){

const popup = document.getElementById("popup");

if(popup){
popup.classList.add("show");

setTimeout(()=>{
popup.classList.remove("show");
},3000);
}

form.reset();

}, function(error){

alert("Noget gik galt. Prøv igen.");

});

});

}