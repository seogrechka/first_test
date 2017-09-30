let a = -10, b = -4, c = 1;
if (a==0 || b==0 || c== 0) {
    console.log('0');
} else {
    if ((a > 0 && b>0 && c>0) ||
        (a > 0 && b<0 && c<0) ||
        (a < 0 && b>0 && c<0) ||
        (a < 0 && b<0 && c>0)){
    console.log('+');}
        else {console.log('-');}
        }