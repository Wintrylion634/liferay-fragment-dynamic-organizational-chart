
fragmentElement.addEventListener('click', function (e) {
  //controla o clique de cada node independentemente de acordo com o evento para abrir a tree
  const node = e.target.closest('.node');

    if (node) {
        node.classList.toggle('open');
    }
});



