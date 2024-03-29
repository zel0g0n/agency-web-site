const bars = document.querySelectorAll('.burger'),
      navbar = document.querySelector('.nav'),
      wrapper = document.querySelector('.wrapper'),
      headerItem = document.querySelector('.header__item'),
      formBtn = document.querySelector('.form-btn'),
      navLinks = document.querySelectorAll('.nav__item-link')


headerItem.addEventListener('click',(e) => {
  const cname = e.target.parentElement.className
    if(cname.includes('burger')) {
      navbar.classList.toggle('animation')
      document.body.classList.toggle('hide')
      setTimeout(() => {
        bars.forEach(item => item.style.display='block')
        e.target.parentElement.style.display='none'
      }, 150);
      
    }
    if(cname.includes('nav__item')) {
      navbar.classList.remove('animation')
      document.body.classList.remove('hide')
      bars[1].style.display='none'
      bars[0].style.display='block'
    }
})

formBtn.addEventListener('click', (e) => {
  e.preventDefault()
  document.querySelector('.contact__msg-form').reset()
})
