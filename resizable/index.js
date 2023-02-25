const resizable = document.querySelector('.resizable');
const handle = resizable.querySelector('.handle');
let isResizing = false;
let lastX;
let lastY;

handle.addEventListener('mousedown', function(e) {
  isResizing = true;
  lastX = e.clientX;
  lastY = e.clientY;
});

document.addEventListener('mousemove', function(e) {
  if (!isResizing) return;

  const diffX = e.clientX - lastX;
  const diffY = e.clientY - lastY;
  const newWidth = resizable.offsetWidth + diffX;
  const newHeight = resizable.offsetHeight + diffY;

  resizable.style.width = newWidth + 'px';
  resizable.style.height = newHeight + 'px';

  lastX = e.clientX;
  lastY = e.clientY;
});

document.addEventListener('mouseup', function(e) {
  isResizing = false;
});
