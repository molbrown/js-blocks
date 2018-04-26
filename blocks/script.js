//FUNCTION TO PICK A RANDOM COLOR // FOUND AT https://stackoverflow.com/a/1484514/
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function addBlock() {
  var parent = document.getElementById('main');
  var block = document.createElement('div');
  block.classList.add('block');
  block.style.background=getRandomColor();
  parent.appendChild(block);
}


function deleteBlock() {
  var del = document.getElementsByTagName('div')[1];
  del = del.lastChild;
  var parent = del.parentNode;
  parent.removeChild(del);
}