/***********************************************************************
Write a function, `intervalCount`, that accepts a callback, a delay in
milliseconds, and an amount. The function should set an interval with
the given callback and delay, but clear the interval after the callback
has been executed 'amount' number of times.

Hint: utilize a 'closure' to your advantage

test your code manually using
node with the examples below.
***********************************************************************/

function intervalCount(cb, delay, amount) {
    let count = 0;
    const intervalObj = setInterval(function() {
      cb();
      count++;
      if(count === amount){
        clearInterval(intervalObj);
      }
    }, delay);
    
    return intervalObj;
  
  }
  
  
  intervalCount(function() {
    console.log('hi');
  }, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times