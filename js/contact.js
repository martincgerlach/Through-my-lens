document.addEventListener("DOMContentLoaded", () => {

  if (typeof emailjs === "undefined") {
    console.error("EmailJS failed to load");
    return;
  }

  emailjs.init("E70-4Otl9rzC5FAho");

  const form = document.getElementById("contactForm");

  if (!form) return;

  form.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.send("service_owwk01r","template_yg0a95g",{
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
    })
    .then(() => {

      const popup = document.getElementById("popup");

      if (popup) {
        popup.classList.add("show");

        setTimeout(() => {
          popup.classList.remove("show");
        }, 3000);
      }

      form.reset();

    })
    .catch(() => {
      alert("Noget gik galt. Prøv igen.");
    });

  });

});