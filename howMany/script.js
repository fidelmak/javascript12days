var first_number = 45
var second_number =87

document.querySelector('.first_number').textContent = first_number
document.querySelector('.second_number').textContent = second_number
var total_number=0;
/* for loop */
/* for(i=0; i<(second_number - first_number); i++){
     total_number ++
     document.querySelector('.final_number').textContent = total_number
}*/ 
/* using while loop  */
let i=0
while(i<(second_number - first_number)){
    total_number++
    
    document.querySelector('.final_number').textContent = total_number
    i++;

}
