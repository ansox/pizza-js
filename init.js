(function() {
  console.log('working');

  const overworld = new Overworld({
    element: document.querySelector('.game-container')
  });
  overworld.init();
})();