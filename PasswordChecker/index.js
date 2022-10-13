const input = document.querySelector('input');
const message = document.querySelector(".message")
const show = document.querySelector(".show");



let WeakPassword = /[a-z]/;
let MediumPassword =/\d+/;
let StrongPassword = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

function run(){
    if(input.value !== ''
    ){
        show.style.display = "block"

        if((input.value.length <= 3) && (input.value.match(WeakPassword)|| input.value.match(MediumPassword)|| input.value.match(StrongPassword))){
            message.textContent = "Your Password is too weak"
        }

        else if (input.value.length > 3 && input.value.match(WeakPassword) && input.value.match(MediumPassword)){
            message.textContent =" Your Password is medium"
        }
        if (input.value.length > 8 && input.value.match(WeakPassword) && input.value.match(MediumPassword) && input.value.match(StrongPassword)) {
            message.textContent = "Your password is strong"
        }


        show.onclick = function() {
            if(input.type == "password") {
                input.type = "text";
                show.textContent = "HIDE"
                show.style.color = "red"
            } else {
                input.type = "password";
                show.textContent = "SHOW"
                show.style.color = "black"
            }
        }
    }

    else {
        show.style.display = "none"
        message.textContent = ''
    }

}