
const  panels = document.querySelectorAll('.panel')
panels.forEach(panel => {
  panel.addEventListener('click', ()=>{
    removeAcitve();
    panel.classList.add('active')
  });
});


function removeAcitve(){
  panels.forEach(panel => {
    panel.classList.remove('active')
  });

}
