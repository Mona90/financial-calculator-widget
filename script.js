
let sum =0
let brex = sum* 0.3

let stripe = sum *2.9
let Amex = sum * 1.3

let unlimitedRewards = sum * 1.1
let lifetimeRewards = sum *1.2

const items = document.querySelectorAll('.form-control')
let rewardsValues = [0,0,0,0]

// function to handle inputs
items.forEach((item, index )=>{

  item.addEventListener('change', function(evt){

    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      evt.target.value = ''
      item.nextElementSibling.style.display = 'block';
    }else{
      item.nextElementSibling.style.display = 'none';
        if(evt.target.value == ''){
          rewardsValues.splice(index,1,0)

        }else{
          rewardsValues.splice(index,1,parseInt(evt.target.value))

        }
      setSum()
      checkValues()

    }

})

})
const setSum = ()=>{
  sum = 0
  for(let i =0; i <rewardsValues.length;i++){
    sum += rewardsValues[i]
  }
}
function checkValues(){
  if(rewardsValues.includes(0)){
    return false
  }else{
      document.getElementById('unlimited-result').innerHTML = (sum * 1.1).toFixed(3);
      document.getElementById('lifetime-result').innerHTML = (sum * 1.2).toFixed(3);
      localStorage.setItem("unlimited-result", (sum * 1.1).toFixed(3));
      localStorage.setItem("lifetime-result", (sum * 1.1).toFixed(3));
      return true

}

}
  //  function to add event listener for buttons
const compareBtn = document.querySelectorAll('.compareBtn')
compareBtn.forEach(btn =>{
  btn.addEventListener('click',function(){
  if(btn.id=== 'brex'){
    localStorage.setItem("result", sum* 0.3)
    localStorage.setItem('cardType','brex')
  }else if(btn.id=== 'stripe'){
        localStorage.setItem("result", sum* 2.9)
        localStorage.setItem('cardType','stripe')

  }else{
            localStorage.setItem("result", sum*1.2)
            localStorage.setItem('cardType', 'amex')
  }
   
  })
})
