function findFactorial(input) {
    var count = 2;
    while(input > 1 && Math.ceil(input) === input) {
        input = input / count;
        count+= 1;
    }
    
    if(input === 1) {
        return count+'!';
    }
    else {
        return 'NONE';
    }
}