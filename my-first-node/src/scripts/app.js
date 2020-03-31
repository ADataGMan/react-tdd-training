var sayHello = require('./sayHello.js');
window.addEventListener('load', function () {
  document.getElementById('welcome-message')
    .innerHTML = sayHello.greet();
});

console.log("Fancy meeting you here");
