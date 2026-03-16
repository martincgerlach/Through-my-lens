document.addEventListener("DOMContentLoaded", () => {

  const links = document.querySelectorAll("a[href]");

  links.forEach(link => {

    link.addEventListener("click", (e) => {

      const url = link.getAttribute("href");

      if (url && !url.startsWith("#") && !url.startsWith("http")) {

        e.preventDefault();

        document.body.classList.add("fade-out");

        setTimeout(() => {
          window.location.href = url;
        }, 300);

      }

    });

  });

});