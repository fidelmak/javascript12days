
document.getElementById('b').style.visibility="hidden"


function myfunc(){
    var x = document.getElementById('b')
    var y = document.querySelector('.btn')
    
    if(x.style.display === "none"){
        x.style.visibility="visible"
        x.style.display="block"
        y.style.visibility="hidden"
        
    }
    else {
        x.style.display ="none"
    }
    return console.log("clicked")
    
}
