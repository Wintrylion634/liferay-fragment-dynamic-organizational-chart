fragmentElement.addEventListener('click', function (e) {

  const node = e.target.closest('.node');

  if (node) {
    node.classList.toggle('open');
  }
});