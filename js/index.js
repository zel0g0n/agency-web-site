const bars = document.querySelectorAll('.burger'),
      navbar = document.querySelector('.nav'),
      wrapper = document.querySelector('.wrapper'),
      headerItem = document.querySelector('.header__item'),
      formBtn = document.querySelector('.form-btn')


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
})

formBtn.addEventListener('click', (e) => {
  e.preventDefault()
  document.querySelector('.contact__msg-form').reset()
})
