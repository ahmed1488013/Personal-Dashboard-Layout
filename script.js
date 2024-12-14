// Optional functionality for interactive drag-and-drop widgets
// Drag-and-drop logic (just a simple placeholder)

const widgets = document.querySelectorAll('.widget');

widgets.forEach(widget => {
  widget.addEventListener('mousedown', (e) => {
    let offsetX = e.clientX - widget.getBoundingClientRect().left;
    let offsetY = e.clientY - widget.getBoundingClientRect().top;

    function onMouseMove(e) {
      widget.style.position = 'absolute';
      widget.style.left = `${e.clientX - offsetX}px`;
      widget.style.top = `${e.clientY - offsetY}px`;
    }

    function onMouseUp() {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
});
