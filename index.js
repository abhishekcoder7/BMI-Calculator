let form = document.querySelector('form')
let submit = document.querySelector('#submit')
let reset = document.querySelector('#reset')
submit.addEventListener('click',function(e){
    
    let height=document.querySelector('#height').value;
    let weight=document.querySelector('#weight').value;
    let result =document.querySelector('#result');
    let result2=document.querySelector('#result2');
    let age = document.querySelector('#age').value;
    let gender=document.querySelector('input[name="gender"]:checked');
    
    console.log(gender);
    if(age<1 || weight<1 || height<1 || gender==null){
        result.innerHTML='Invalid data'
        result2.innerHTML="";
    }else{
        let bmi = weight/((height/100) * (height/100));
        let category="Underweight";
        if(bmi>=18.5 && bmi<=25){
            category="Normal"
        }else if(bmi>25 && bmi<=30){
            category="Overweight"
        }else if(bmi>30){
            category="Obese"
        }
        result.innerHTML=`Your Body Mass Index is ${bmi.toFixed(1)}`
        result2.innerHTML=`You come under ${category} category.`
    }
    
    
})
reset.addEventListener('click',function(e){
    result.innerHTML="";
    result2.innerHTML="";
})