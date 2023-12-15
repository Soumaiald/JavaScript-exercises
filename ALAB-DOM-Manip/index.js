import "./style.css";
const mainEl = document.querySelector("main");
const root = document.querySelector(":root");
const color1 = getComputedStyle(root).getPropertyValue("--main-bg");
console.log(color1);
mainEl.style.backgroundColor = color1;
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.className = "flex-ctr";
console.log(mainEl.outerHTML);
const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
const color2 = getComputedStyle(root).getPropertyValue("--top-menu-bg");
topMenuEl.style.backgroundColor = color2;
topMenuEl.className = "flex-around";
console.log(topMenuEl.outerHTML);
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

for (let l of menuLinks) {
  const ach = document.createElement("a");
  ach.href = l.href;
  ach.textContent = l.text;
  topMenuEl.appendChild(ach);
}
