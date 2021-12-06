
function average(numbers) {
  
  let res = 0;
  let count = numbers.length;

  numbers.map((val,i)=>{
    if(isNaN(val)){
      count -= 1
    }
    else{
      res += val;
    }
  })

  return res/count

}

module.exports = {average};
