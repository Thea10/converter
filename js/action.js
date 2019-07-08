const weight_tick = document.getElementById('weight');
const weight_display = document.getElementById('weight_display');

const height_tick = document.getElementById('height');
const height_display = document.getElementById('height_display');


const input_weight = document.getElementById('input_weight');
const input_height = document.getElementById('input_height');

const grams = document.getElementById('grams');
const kilograms = document.getElementById('kilograms');
const ounces = document.getElementById('ounces');

const feet = document.getElementById('feet');
const inches = document.getElementById('inches');
const centimeters = document.getElementById('centimeters');

const showresult = document.querySelectorAll('.output-weight div');

//console.log(showresult);


weight_tick.addEventListener('click', (e)=>{
  /*  input_weight.value = "";
    grams.innerText = "";
    kilograms.innerText = "";
    ounces.innerText = ""; */
     height_display.classList.remove('show');
     weight_display.classList.toggle('show')
     ;       
});

height_tick.addEventListener('click', (e)=>{
     weight_display.classList.remove('show');
     return height_display.classList.toggle('show');       
});


input_weight.addEventListener('keyup', (e)=>{
    var char = input_weight.value;
    if (isNaN(char)) {
        grams.innerHTML = "Couldn't process input, please input a  number";
        kilograms.innerHTML = "Couldn't process input, please input a  number";
        ounces.innerHTML = "Couldn't process input, please input a  number"; }
        else{
            grams.innerHTML = char * 453.592;
            kilograms.innerHTML = char * 0.454;
            ounces.innerHTML = char * 16;
            showresult.forEach(result =>  {
                if( char >= 145){ 
                    result.style.background = "red";result.style.transform = "scaleX(1.1)";
                } 
                else{
                    showresult[0].style.background = " #32e206e0";
                    showresult[1].style.background = " #0069bd";
                    showresult[2].style.background = " #FFC107";
                    result.style.transform = "";
                }   
        });
    }
});

input_height.addEventListener('keyup', (e)=>{
     var char2 = input_height.value;
     if  (isNaN(char2)){
         feet.innerHTML = "Couldn't process input, please input a  number";
         inches.innerHTML = "Couldn't process input, please input a  number";
         centimeters.innerHTML = "Couldn't process input, please input a  number"; 
        }
        else{
            feet.innerHTML = char2 * 3.28084;
            inches.innerHTML = char2 * 39.37;
            centimeters.innerHTML = char2 * 100;
       }
});








