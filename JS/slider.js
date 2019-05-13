const slider=document.querySelector('#slide');


const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

let counter=0;
const size=1420;

nextBtn.addEventListener('click',adelante);
prevBtn.addEventListener('click',atras);


function adelante(){
    if(counter==7){
        return;
    }else{
        slider.style.transition = "transform 0.5s ease-in-out";
        counter++;
        slider.style.transform = 'translateX('+(-size * counter)+'px';
    }
    
}

function atras(){
    if(counter==0){
        return;
    }else{
        slider.style.transition = "transform 0.5s ease-in-out";
        counter--;
        slider.style.transform = 'translateX('+(-size * counter)+'px';
    }
}