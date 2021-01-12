window.onload = () => {
  window.onscroll = () => {
    const navbar = document.querySelector(".navbar");
    if (this.scrollY > 20) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  };
};


