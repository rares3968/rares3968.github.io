particlesJS.load('particles-js', 'particles-config.json', function() {
    console.log('log [particles.js] -> config loaded!');
  });

function close_m(){
  document.getElementById("menu").style.visibility= "hidden";
  console.log('log [menu] -> main menu closed');
  document.getElementById("menu").classList.remove("animate__animated");
  document.getElementById("menu").classList.remove("animate__zoomIn");
}
function open_m(){
  document.getElementById("menu").style.visibility= "visible";
  document.getElementById("menu").classList.add("animate__animated");
  document.getElementById("menu").classList.add("animate__zoomIn");
  console.log('log [menu] -> main menu opened');
}