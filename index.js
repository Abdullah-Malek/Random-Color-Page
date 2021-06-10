//Event and Event Handler
var btn = document.querySelector("#event button");
var bgcolor = document.getElementById("event");

// console.log(btn);

btn.onclick = function () {
    // var rand = Math.floor(Math.random() * 256);
    // alert("rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")");
    bgcolor.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
}