const progress = document.getElementById('progress')
const next = document.getElementById('next')
const prev = document.getElementById('prev')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () =>{
    currentActive++
    
    //if currentActive is greater than the circles then
    // whatever the length is which is last one 
    if(currentActive > circles.length){
        currentActive = circles.length
    }

    //Now update the DOM or make it happen in webpage
    update()
})

prev.addEventListener('click', () =>{
    currentActive--
    //if currentActive is less than 1 than we want it to stop there and not go to zero or negetive
    if(currentActive <1){
        currentActive =1
    }

    update()
})

function update() {
    //Here we are taking index of every circle and adding them to active classes which will fill the border of circle with blue
    circles.forEach((circle, idx) =>{
        if(idx<currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })
    //grab all the actives from above foreach loop
    const actives = document.querySelectorAll('.active')

    //Lighting the blue line
    progress.style.width = (actives.length - 1) / (circles.length-1)*100 + '%'

    //check for prev and next button
    if(currentActive === 1){
        prev.disabled = true;
    }else if(currentActive === circles.length) //if reaches to its full length
    {
        next.disabled = true;
    }
    else{
        prev.disabled = false;
        next.disabled = false;
    }
}