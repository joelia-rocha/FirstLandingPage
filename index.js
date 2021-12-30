let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let text = document.getElementById("text");
let text2 = document.getElementById("text2");
let pr = document.getElementById("pr");
let img2 = document.getElementById("img2");

window.addEventListener('scroll', function(){
    var value = window.scrollY;

    bg.style.top = value * 0.5 + 'px';
    moon.style.left = -value * 0.5 + 'px';
    mountain.style.top = -value * 0.15 + 'px';
    road.style.top = value * 0.15 + 'px';
    text.style.top = value * 0.5 + 'px';
    text2.style.right = -value * 0.6 + 'px';
    pr.style.left = value * 0.4 + 'px';
    img2.style.right = -value * 0.4 + 'px';
    
  })


  