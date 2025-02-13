document.addEventListener("DOMContentLoaded", function () {
  console.log("Website Loaded Successfully");
});
 
    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });
