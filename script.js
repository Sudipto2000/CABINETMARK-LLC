document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".navlist li");
  const hamburger = document.querySelector(".hamburger");
  const navlist = document.querySelector(".navlist");
 
 
  navItems.forEach(item => {
    const link = item.querySelector("a");
    const dropdown = item.querySelector(".dropdown");
 
    if (dropdown) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
 
 
        navItems.forEach(i => {
          if (i !== item) i.classList.remove("active");
        });
 
   
        item.classList.toggle("active");
      });
    }
  });
 
 
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".navlist") && !e.target.closest(".hamburger")) {
      navItems.forEach(item => item.classList.remove("active"));
      navlist.classList.remove("open");
    }
  });
 
 
  hamburger.addEventListener("click", function () {
    navlist.classList.toggle("open");
  });
});
 