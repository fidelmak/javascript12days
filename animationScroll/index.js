window.addEventListener("scroll", ()=>{
    let row = document.querySelector(".row")
    let rowPosition = row.getBoundingClientRect().top
    let windowPosition = window.innerHeight;
    if(rowPosition< windowPosition){
        row.classList.add('active')
    }
    else {
        row.classList.remove('active')
    }
})