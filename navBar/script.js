const button = document.querySelector('.nav_toggle')
const links = document.querySelector('.links')
button.addEventListener('click', function(){
    //console.log(links.classList.contains('links'))
    //links.classList.add('active_nav')
    // if(links.classList.contains('active_nav')){
    //     list.classList.remove('active_nav')
    // } else {
    //         list.classList.add('active_nav')
    //     }
    links.classList.toggle('active_nav')
})