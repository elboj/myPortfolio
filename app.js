//DATA FOR PORTFOLIO
const works = [
  {
    img: "assets/work-plaqad.jpg",
    title: "Placad",
    link: "https://crenet.netlify.app/",
  },
  {
    img: "assets/work-alat.jpg",
    title: "Alat Foundation",
    link: "https://crenet.netlify.app/",
  },
  {
    img: "assets/work-insw.jpg",
    title: "Interswitch Recreate",
    link: "https://crenet.netlify.app/",
  },
  {
    img: "assets/work-pss.jpg",
    title: "PSS",
    link: "https://crenet.netlify.app/",
  },
  {
    img: "assets/work-crenet.jpg",
    title: "Crenet Recreate",
    link: "https://crenet.netlify.app/",
  },
  {
    img: "assets/work-udemy.jpg",
    title: "Udemy",
    link: "https://crenet.netlify.app/",
  },
  {
    img: "assets/work-react.jpg",
    title: "React Menu App",
    link: "https://crenet.netlify.app/",
  },
  {
    img: "assets/work-react-1.jpg",
    title: "React Review App",
    link: "https://crenet.netlify.app/",
  },
];
/**
 * Toggle functionality for main menu
 */

const toggler = document.querySelector(".toggle");
const toggler1 = document.querySelector(".toggle1");
const nav = document.querySelector(".nav_bar");
const header = document.querySelector(".header");
const lightImg = document.querySelector(".nav_logo");
const darkImg = document.querySelector(".nav_logo_one");

//for the hamburger fix, get an SVG icon or use font awesome and just change the color

toggler.addEventListener("click", () => {
  toggler.classList.toggle("toggle_hide");
  toggler1.classList.toggle("toggle1_show");

  if (lightImg.classList.contains("nav_logo")) {
    lightImg.classList.toggle("nav_logo_hide");
  }

  if (darkImg.classList.contains("nav_logo_one")) {
    darkImg.classList.toggle("nav_logo_one_show");
  }

  if (nav.classList.contains("nav_bar")) {
    nav.classList.toggle("nav_bar_show");
  }

  if (header.classList.contains("header")) {
    header.classList.toggle("header_bg_toggle");
  }
});

toggler1.addEventListener("click", () => {
  toggler.classList.toggle("toggle_hide");
  toggler1.classList.toggle("toggle1_show");

  if (lightImg.classList.contains("nav_logo")) {
    lightImg.classList.toggle("nav_logo_hide");
  }

  if (darkImg.classList.contains("nav_logo_one")) {
    darkImg.classList.toggle("nav_logo_one_show");
  }

  if (nav.classList.contains("nav_bar")) {
    nav.classList.toggle("nav_bar_show");
  }

  if (header.classList.contains("header")) {
    header.classList.toggle("header_bg_toggle");
  }
});

const main = document.querySelector("#portfolio_flex");

const testing = () => {
  for (const items of works) {
    const img = document.createElement("IMG");
    const flexItem = document.createElement("div");
    const bgHolder = document.createElement("article");
    const navRedirect = document.createElement("a");
    const p = document.createElement("p");
    const i = document.createElement("i");

    img.classList.add("img");
    img.src = items.img;

    navRedirect.href = items.link;
    navRedirect.target = "_blank";
    navRedirect.append(img);

    bgHolder.append(navRedirect);
    bgHolder.classList.add("hold");

    flexItem.appendChild(bgHolder);
    flexItem.classList.add("portfolio_items");

    main.appendChild(flexItem);

    p.textContent = items.title;
    flexItem.appendChild(p);
    flexItem.append(i);

    p.classList.add("caption");
    i.classList.add("fa", "fa-long-arrow-right");
  }
};

testing();

//STICKY NAV

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar
let navbar = document.querySelector(".header");
let overlay = document.querySelector(".overlay");

// Get the offset position of the navbar
let sticky = navbar.offsetTop;
console.log(sticky);

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= 600) {
    overlay.classList.add("sticky");
    overlay.classList.add("overlay_show");
    navbar.classList.add("sticky");
  } else {
    overlay.classList.remove("sticky");
    overlay.classList.remove("overlay_show");
    navbar.classList.remove("sticky");
  }
}