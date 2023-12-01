const container = document.querySelector('.how-to-use');
const btnListOpen = container.querySelector('.how-to-use__btn');

if (container && btnListOpen) {
  function toggleList () {
    container.classList.toggle('how-to-use--open');
    
    if (container.classList.contains('how-to-use--open')) {
      gsap.to(".how-to-use__down", {
        duration: 0.4,
        height: 'auto',
      })
      
      return 0;
    }
    
      gsap.to(".how-to-use__down", {
        duration: 0.4,
        height: 0,
      })
  }
  
  btnListOpen.addEventListener('click', toggleList);
}
