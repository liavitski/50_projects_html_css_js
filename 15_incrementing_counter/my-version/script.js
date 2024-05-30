const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
  counter.innerText = 0;

  function incrementFunc() {
    const target = +counter.getAttribute('data-target');
    const increment = target / 200;
    const c = +counter.innerText;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(incrementFunc, 1);
    } else {
      counter.innerText = target;
    }
  }

  incrementFunc();
});
