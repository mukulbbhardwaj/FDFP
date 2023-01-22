const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const dots = document.querySelectorAll('.dot');
const last = document.getElementById('.last')
let curr = 1;

console.log(last)
console.log(progress)
console.log(prev)
console.log(next)
console.log(dots)

next.addEventListener('click', () => {
  console.log('next');
  curr++;
  if (curr > dots.length) {
    curr = dots.length;

  }
  update();
  console.log(curr)
})

prev.addEventListener('click', () => {
  console.log('prev');
  curr--;
  if (curr < 1) {
    curr = 1;
  }
  update();
   console.log(curr);
})

function update() {
  dots.forEach((dots, idx) =>{
    if (idx < curr) {
      dots.classList.add('active');
    }
    else {
      dots.classList.remove('active');
    }
  })
  // if () {
  //   alert("Can't")
  // }
  const actives = document.querySelectorAll('.active');
      progress.style.width = (actives.length - 1) / (dots.length - 1) * 100 + '%'

    if(curr === 1) {
        prev.disabled = true
    } else if(curr === dots.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}