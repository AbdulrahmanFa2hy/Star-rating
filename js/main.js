let stars = document.querySelectorAll('i')
let myAlert = document.querySelector('.alert')

stars.forEach(function (star, index) {
  star.addEventListener('click', function () {
    stars.forEach((el) => el.classList.remove('fa-solid', 'checked'))
    for (let i = 0; i <= index; i++) {
      stars[i].classList.add('fa-solid', 'checked')
    }

    myAlert.classList.add('active')
    myAlert.innerHTML = `You rated with ${index + 1} stars`

    setTimeout(function () {
      myAlert.classList.remove('active')
    }, 2000)
  })
  star.addEventListener('mousemove', function () {
    for (let i = 0; i <= index; i++) {
      stars[i].classList.add('hover')
    }
  })
  star.addEventListener('mouseout', function () {
    for (let i = 0; i <= index; i++) {
      stars[i].classList.remove('hover')
    }
  })
})
