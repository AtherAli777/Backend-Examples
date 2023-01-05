const progress = document.getElementById('progress')
const next = document.getElementById('next')
const prev = document.getElementById('pre')
const circles = document.querySelectorAll('.circle')

let currentActive = 1;

next.addEventListener('click', ()=>{
  currentActive++;
  if(currentActive > circles.length){
    currentActive = circles.length;
  }

  update();
});

pre.addEventListener('click', () =>{
  currentActive--;
  if(currentActive < 1){
    currentActive = 1;
  }

  update();
});

function update() {
  //Here we are taking index of every circle and adding them to active classes
  //which will fill the border of circle with blue

      circles.forEach((circle, idx) =>{
          if(idx<currentActive){
              circle.classList.add('active')
          }else{
              circle.classList.remove('active')
          }
      })

  //grab all the actives from above foreach loop
  const actives = document.querySelectorAll('.active')
  progress.style.width = (actives.length - 1) / (circles.length-1)*100 + '%'

  if(currentActive === 1){
    pre.disabled =true;
  }
  else if(currentActive === circles.length){
    next.disabled =true;
  }
  else{
    pre.disabled = false;
    next.disabled = false;
  }

}
