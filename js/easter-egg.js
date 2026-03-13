document.addEventListener("DOMContentLoaded", () => {

const nycPhotos = document.querySelectorAll(".photo-card.nyc-photo");
const secret = document.getElementById("nyc-secret");
const closeBtn = document.getElementById("secret-close");

if (nycPhotos.length > 0 && secret) {

  nycPhotos.forEach(photo => {

    photo.addEventListener("click", () => {

      photo.classList.add("found");

      const foundPhotos =
        document.querySelectorAll(".photo-card.nyc-photo.found").length;

      if (foundPhotos === nycPhotos.length) {

        secret.classList.add("show");

        setTimeout(() => {

          secret.classList.remove("show");

          /* reset cards */
          nycPhotos.forEach(card => {
            card.classList.remove("found");
          });

        }, 5000);

      }

    });

  });

}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    secret.classList.remove("show");
  });
}

});