  // change navbar style on scroll
  window.addEventListener('scroll', () => {
    document.getElementById('nav').classList.toggle('window-scroll', window.scrollY > 50)
  })