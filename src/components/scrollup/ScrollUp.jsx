import "./ScrollUp.css";
const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollup = document.querySelector(".scrollup");
    // when the scroll is higher than 560 viewport height, add the show-scroll calss to a tag with the scroll-top class
    if (this.scrollY >= 560) scrollup.classList.add("show-scroll");
    else scrollup.classList.remove("show-scroll");
  });
  return (
    <a href="#" className="scrollup">
      <i
        className="uil uil-arrow-up scrollup_icon"
      style={{color:"white"}}
      ></i>
    </a>
  );
};

export default ScrollUp;
