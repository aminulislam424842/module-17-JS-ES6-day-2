const counter = (start =0 ) =>{
  let count = start;

  return () => {
    count++;
    return count;
  };
};

const result = counter();

// console.log(result());
// console.log(result());
// console.log(result());
// console.log(result());
// console.log(result());