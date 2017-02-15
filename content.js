var x = document.getElementsByTagName('a');
var y = Math.floor(Math.random() * (x.length));
location.replace(x[y]);
console.log(x[y]);
