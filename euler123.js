//Sum of the multiples of 3 and 5 up to an input value 'limit'
var eulerProj001 = function() {
	var limit = document.getElementById('probOneLim').value;
	var sum = 0;
	var i = 1;
	while(i < limit) {
		if((i % 3 === 0) || (i % 5 === 0)) {
			sum += i;
			++i;
		}
		else {
			++i;
		}
	}
  document.getElementById('prOneInfo').innerHTML = "The sum of all the multiples of 3 or 5 less than ";
	document.getElementById('prOneLim').innerHTML = limit + " is: ";
  document.getElementById('solPrE001').innerHTML = sum;
};

//Sum of the even Fibbonaci sequence numbrs up to an input value 'limit'
var eulerProj002 = function() {
	var limit = document.getElementById('probTwoLim').value;
	var x = 1;
	var y = 2;
	var z = x + y;
	var sumFibEven = y;
	while(z <= limit) {
		if(z % 2 === 0) {
			sumFibEven += z;
			x = y;
			y = z;
			z = x + y;
		}
		else {
			x = y;
			y = z;
			z = x + y;
		}
	}
  document.getElementById('prTwoInfo').innerHTML = "The sum of the even-valued Fibonacci sequence terms up to "
	document.getElementById('prTwoLim').innerHTML = limit + " is: ";
	document.getElementById('solPrE002').innerHTML = sumFibEven;	
};

//Function to find the largest prime number factor of an input value 'limit'
//This function isn't very efficient and crashes browsers for an input value greater than 6 digits
var eulerProj003 = function() {
  var limit = document.getElementById('proThreeLim').value;
  var solution = limit;
  // check if limit is a prime number
  var isLimPrime = true;
  switch (limit) {
    case isNaN(limit):
      isLimPrime = false;
      break;
    case limit != Math.round(limit):
      isLimPrime = false;
      break;
    case 1:
      isLimPrime = true;
      break;
    case 2:
      isLimPrime = true;
      break;
    case 3:
      isLimPrime = true;
      break;
    case (limit % 2 === 0):
      isLimPrime = false;
      break;
    default:
      var q = Math.floor(Math.sqrt(limit));
      for (var i = 3; i <= q+2; i+=2) { //for loop just checks for odd numbers
        if (limit % i === 0) {
          isLimPrime = false;
        } 
      }     
  }


  if(isLimPrime === false) {
    var halfish = Math.floor(limit/2);
    //finds prime factor starting near half of input number (limit)
    for (var factor = halfish; factor > 2; factor--) {
      //check if factor is prime
      var isFactorPrime = true;
      switch (factor) {
        case factor < 1:
          isFactorPrime = false;
          break;
        case isNaN(factor):
          isFactorPrime = false;
          break;
        case factor != Math.round(factor):
          isFactorPrime = false;
          break;
        case 1:
          isFactorPrime = true;
          break;
        case 2:
          isFactorPrime = true;
          break;
        case 3:
          isFactorPrime = true;
          break;
        case (factor % 2 === 0):
          isFactorPrime = false;
          break;
        default:
          var q = Math.floor(Math.sqrt(factor));
          for (var i = 3; i <= q+2; i+=2) { //for loop just checks for odd factors
            if (factor % i === 0) {
              isFactorPrime = false;
            }
          }     
      }      //if a factor evenly divides and is prime it is the solution
      if ((limit % factor === 0) && (isFactorPrime === true)) {
        solution = factor;
        break; //break out of check loop once a prime factor is identified
               //working down from half of limit
      }
    }
  }
  //if no factors found the solution remains limit and limit is a prime number 

document.getElementById('prThreeInfo').innerHTML = "The largest prime number factor of ";
document.getElementById('prThreeLim').innerHTML = limit + " is: ";
document.getElementById('solPrE003').innerHTML = solution;
};