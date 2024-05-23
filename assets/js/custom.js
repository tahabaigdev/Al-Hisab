// Fixed Navbar

const fixedNavbar = () => {
    const header = document.querySelector(".header");
    let lastScrollTop = 0;
  
    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        header.style.top = "-200px";
      } else {
        header.style.top = "0px";
      }
      lastScrollTop = scrollTop;
  
      header.classList.toggle("active", window.pageYOffset > 100);
    });
  };
  fixedNavbar();