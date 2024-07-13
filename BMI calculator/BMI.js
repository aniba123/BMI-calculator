 const form=document.querySelector('form');
 form.addEventListener('click',function(e){
    e.preventDefault();
   const height= parseInt(document.querySelector('#height').value);
   const weight= parseInt(document.querySelector('#weight').value);
   const result= document.querySelector('.result');
    if (height<0 || height==='' || isNaN(height)) {
        console.log(`Please enter valid height ${height}`);
    }
    else if (weight<0 || weight==='' || isNaN(weight)) {
        console.log(`Please enter valid weight ${weight}`);
    }
        else{
            const bmi=(weight/((height*height)/10000)).toFixed(2)
            if (bmi < 18.6) 
                result.innerHTML = `Under Weight : ${bmi}`;

          else  if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = `Normal : ${bmi}`;                
            }
            else {
                result.innerHTML = `Over Weight : ${bmi}`;                
            }
        }
 })