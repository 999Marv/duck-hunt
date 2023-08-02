//starter code
window.onload = () => {
  /* CODE INSIDE HERE */

  //PART 1

  //1
  // const duck = document.createElement('div');
  // duck.classList.add('duck');
  // document.body.append(duck);

  // //2
  // const flapping = () => {
  //   duck.classList.toggle('flap');
  // };

  // setInterval(flapping, 250);

  // //3
  // const moveDuck = () => {
  //   duck.style.top = `${Math.random() * window.innerHeight}px`;

  //   duck.style.left = `${Math.random() * window.innerWidth}px`;
  // };

  // setInterval(moveDuck, 1000);

  //PART 2

  //6
  const createDuck = () => {
    const duck = document.createElement('div');
    duck.classList.add('duck');
    document.body.append(duck);

    duck.style.top = `${Math.random() * window.innerHeight}px`;

    duck.style.left = `${Math.random() * window.innerWidth}px`;

    //2
    const flapping = () => {
      duck.classList.toggle('flap');
    };

    setInterval(flapping, 250);

    //3
    const moveDuck = () => {
      duck.style.top = `${Math.random() * window.innerHeight}px`;

      duck.style.left = `${Math.random() * window.innerWidth}px`;
    };

    setInterval(moveDuck, 1000);

    const handleShot = () => {
      duck.classList.add('shot');
      setTimeout(() => {
        duck.remove();
        checkForWinner();
      }, 1000);
    };

    duck.addEventListener('click', handleShot);

    return duck;
  };

  for (let i = 0; i < 5; i++) {
    createDuck();
  }

  const checkForWinner = () => {
    const amountOfDucks = document.querySelectorAll('.duck');
    if (amountOfDucks.length === 0) {
      alert('YOU WIN');
    }
  };
};
