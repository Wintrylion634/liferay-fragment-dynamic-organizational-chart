function updateLayout() {
  const containers = document.querySelectorAll('.children');

  containers.forEach(container => {
    const nodes = container.querySelectorAll(':scope > li > .node');

    const shouldCollapse =
      window.innerWidth < 768 || nodes.length > 6;

    container.classList.toggle('accordion-mode', shouldCollapse);
  });
}

updateLayout();

window.addEventListener('resize', updateLayout);

fragmentElement.addEventListener('click', function (e) {

  const node = e.target.closest('.node');

  if (node) {
    node.classList.toggle('open');
  }
});