console.log("script loaded");

document.addEventListener("DOMContentLoaded", () => {

  const links = document.querySelectorAll("a[href]");

  links.forEach(link => {

    link.addEventListener("click", function(e) {

      const url = this.getAttribute("href");

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




  /* ---------------- */
  /* KONTAKT FORM     */
  /* ---------------- */

  const form = document.getElementById("contactForm");

if(form){

  const imageInput = document.getElementById("image");
  const preview = document.getElementById("imagePreview");
  const popup = document.getElementById("popup");

  /* IMAGE PREVIEW */

  imageInput.addEventListener("change", function(){

    const file = this.files[0];

    if(file){

      const reader = new FileReader();

      reader.addEventListener("load", function(){
        preview.src = reader.result;
        preview.style.display = "block";
      });

      reader.readAsDataURL(file);

    }

  });


  /* FORM SUBMIT */

  form.addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    /* VALIDATION */

    if(name === "" || email === "" || message === ""){
      alert("Udfyld alle felter.");
      return;
    }

    if(!email.includes("@")){
      alert("Indtast en gyldig email.");
      return;
    }

    /* POPUP */

    popup.classList.add("show");

    setTimeout(()=>{
      popup.classList.remove("show");
    },3000);


    /* MAIL */

    let mailtoLink =
    `mailto:martin.gerlach.2950@gmail.com?subject=Besked fra hjemmeside&body=Navn: ${name}%0AEmail: ${email}%0ABesked: ${message}`;

    setTimeout(()=>{
      window.location.href = mailtoLink;
    },1000);

  });

}
});

const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobileNav");

if(burger){

burger.addEventListener("click", () => {

mobileNav.classList.toggle("show");

});

}