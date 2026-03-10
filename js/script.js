/* ================================= */
/* Through My Lens - script.js       */
/* ================================= */

window.addEventListener("load", () => {
document.body.classList.add("loaded");
});

/* ================================= */
/* PAGE TRANSITIONS                  */
/* ================================= */

document.addEventListener("DOMContentLoaded", () => {

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

```
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
```

});

});

/* ================================= */
/* PAGE LOAD ANIMATION               */
/* ================================= */

window.addEventListener("load", () => {
document.body.classList.add("loaded");
});
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
/* ================================= */
/* KONTAKT FORM                      */
/* ================================= */

document.addEventListener("DOMContentLoaded", () => {
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

popup.classList.add("show");

setTimeout(() => {
  popup.classList.remove("show");
}, 3000);


/* MAIL */

const mailtoLink =
  `mailto:martin.gerlach.2950@gmail.com?subject=Besked fra hjemmeside&body=Navn: ${name}%0AEmail: ${email}%0ABesked: ${message}`;

setTimeout(() => {
  window.location.href = mailtoLink;
}, 1000);

});
const form = document.getElementById("contactForm");

if (!form) return;

const imageInput = document.getElementById("image");
const preview = document.getElementById("imagePreview");
const popup = document.getElementById("popup");

/* IMAGE PREVIEW */

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

/* FORM SUBMIT */

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

popup.classList.add("show");

setTimeout(() => {
  popup.classList.remove("show");
}, 3000);


/* MAIL */

const mailtoLink =
  `mailto:martin.gerlach.2950@gmail.com?subject=Besked fra hjemmeside&body=Navn: ${name}%0AEmail: ${email}%0ABesked: ${message}`;

setTimeout(() => {
  window.location.href = mailtoLink;
}, 1000);


});

});

/* ================================= */
/* MOBILE MENU (BURGER)              */
/* ================================= */

const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobileNav");

if (burger) {

burger.addEventListener("click", () => {
mobileNav.classList.toggle("show");
});

}
