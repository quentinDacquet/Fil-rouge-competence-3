const btn = document.querySelector('#btn_triangle');
const com = document.querySelector('.bloc_comment');

btn.addEventListener('click', () => {
    com.classList.toggle('triangle')
    btn.classList.toggle('rotate_triangle')
})