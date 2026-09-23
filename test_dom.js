const { JSDOM } = require("jsdom");
const fs = require("fs");
const { Script } = require("vm");
const html = fs.readFileSync("C:/Users/Portotester/index.html", "utf8");

const dom = new JSDOM(html, { runScripts: "dangerously", url: "http://localhost/" });
dom.window.console.log = console.log;
dom.window.console.error = console.error;
dom.window.addEventListener('error', e => console.error("DOM ERROR:", e.error));

setTimeout(() => {
  console.log("Loader text:", dom.window.document.getElementById('loaderCounter').textContent);
  console.log("Loader classes:", dom.window.document.getElementById('loader').className);
}, 2000);
