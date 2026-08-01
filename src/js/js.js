window.addEventListener("DOMContentLoaded", () => {

  let logo = document.querySelector(".logo");
  let square = document.querySelector(".square");
  let scrollTimer;
  const header = document.querySelector("header");
  // const debug = document.createElement('div');
  // debug.style.position = 'fixed';
  // debug.style.top = '20px';
  // debug.style.right = '20px';
  // debug.style.background = '#000';
  // debug.style.color = '#fff';
  // debug.style.padding = '10px';
  // debug.style.zIndex = '9999';
  // document.body.appendChild(debug);

  window.addEventListener("scroll", () => {
    // debug.textContent = `Y: ${window.scrollY}px`;
    square.classList.add("scrolling");
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      square.classList.remove("scrolling");
    }, 120);
    if (scrollY > 600 ) {
      square.classList.add("bg-white");
    }
  });

  AOS.init();
});