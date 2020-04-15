function factorial( n = prompt('На какое число Факториал ? ', '')){
if (n < 0){
    return -1;
}else if (n === 0){
    return 1;
}else {
    return n * factorial(n-1)
}

}    
alert (factorial ());  
