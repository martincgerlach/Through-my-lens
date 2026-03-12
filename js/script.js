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

  /* FORM SUBMIT */
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      /* VALIDATION */
      if (!name || !email || !message) {
        alert("Udfyld alle felter.");
        return;
      }

      if (!email.includes("@")) {
        alert("Indtast en gyldig email.");
        return;
      }

      /* POPUP */
      if (popup) {
        popup.classList.add("show");
        setTimeout(() => {
          popup.classList.remove("show");
        }, 3000);
      }

      /* MAIL */
      const mailtoLink =
        `mailto:martin.gerlach.2950@gmail.com?subject=Besked fra hjemmeside&body=Navn: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0ABesked: ${encodeURIComponent(message)}`;

      setTimeout(() => {
        window.location.href = mailtoLink;
      }, 1000);
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

const nycPhotos = document.querySelectorAll(".nyc-photo");
const secret = document.getElementById("nyc-secret");
const closeBtn = document.getElementById("secret-close");

let foundPhotos = 0;

nycPhotos.forEach(photo => {

  photo.addEventListener("click", function(){

    if(photo.classList.contains("found")){
      photo.classList.remove("found");
      foundPhotos--;
    } else {
      photo.classList.add("found");
      foundPhotos++;
    }

    if(foundPhotos === nycPhotos.length){
      secret.classList.add("show");

      setTimeout(() => {
        secret.classList.remove("show");
      }, 5000);
    }

  });

});

/* klik for at lukke */
if(closeBtn){
  closeBtn.addEventListener("click", function(){
    secret.classList.remove("show");
  });
}