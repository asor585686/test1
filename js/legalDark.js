
//------------dark mode---------//
function myFunction() {
  //-------------Dark Mode -----------//
  let element = document.body;
  let sBack = document.getElementsByClassName("sub-title")[0];
  let bottomLegalText = document.getElementsByClassName("legal_bottom_links");
  let bottomLegal = document.getElementsByClassName("legal_bottom");
  //mode icon slider
  let slider = document.getElementsByClassName("slider");
  //index icon!!
  let indexIcon = document.getElementsByClassName("ham_dot");

  // let allLegal=[element,sBack];
  element.classList.toggle("dark-mode");
  sBack.classList.toggle("dark-mode");
  bottomLegal[0].classList.toggle("dark-mode");
  slider[0].classList.toggle("dark-mode-r");
  //bottom legal text change
  Array.from(bottomLegalText).forEach((element) =>
    element.classList.toggle("dark-mode")
  );
  //index menu dark mode
  Array.from(indexIcon).forEach((element) =>
    element.classList.toggle("dark-mode-r")
  );
  //toggle the image of the legal logo
  let initialImg = document.getElementById("legal_logo").src;
  let srcTest = initialImg.includes("esources/img/sqsp_icon.svg");
  let newImg = {
    true: "resources/img/sqsp_icon_w.svg",
    false: "resources/img/sqsp_icon.svg",
  }[srcTest];
  document.getElementById("legal_logo").src = newImg;
}
//index menu animation
let indexButton = document.getElementById("hamburger");
// let legal_index = document.getElementById("legal_index");
// legal_index.addEventListener("click", indexFunction);

// function indexFunction() {
//   console.log("hello");
//   index_tl.classList.toggle("on");
//   index_tr.classList.toggle("on");
//   index_br.classList.toggle("on");
//   index_bl.classList.toggle("on");
//   render
//     .create("index5", document.getElementById("app"), {
//       animate: "fadeIn",
//       mode: "cover",
//       load: "loadIndex",
//     })
//     .then((res) => {
//       // window.loadMenu("add");
//       // topLegal.style.opacity = "100"; //make the upper legal appear
//       console.log("load index");
//       // window.loadIndex("cover");
//     });
// }
