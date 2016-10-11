function findFactorial(input) {
    var count = 1; // set the counter to 1
    while(input > 1 && Math.round(input) === input) {
        count += 1; // increase counter by 1 each loop
        input /= count; // divide by the counter
    }
    
    if(input === 1) { // when it is a factorial
        return count+'!';
    }
    else { // when it is not
        return 'NONE';
    }
}