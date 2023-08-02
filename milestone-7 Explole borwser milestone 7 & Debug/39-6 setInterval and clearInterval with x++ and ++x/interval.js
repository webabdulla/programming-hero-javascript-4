console.log(1);
console.log(2);
console.log(3);


let number = 0;
const intervalId = setInterval(()=>{
    number++;
      console.log(number)
    if(number === 10){
        clearInterval(intervalId);
    }
},1000);

// setInterval(()=>{
//   console.log(number++)
// },1000);


console.log(4);