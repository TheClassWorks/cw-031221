// console.log(window.innerWidth);
// console.log(window.outerWidth);
// console.log("----------------");

// console.log(window.innerHeight);
// console.log(window.outerHeight);
// console.log("----------------");

// let box = document.querySelector("body");
// console.log(box.clientWidth);
// console.log(box.clientHeight);
// console.log("-------------");
// console.log(window.scrollY);

let scroll = document.getElementById("scroll");
let precent = Math.round((window.scrollY / (document.body.clientHeight - window.innerHeight)) * 100);
console.log(precent);
scroll.style.width = precent + "%";
