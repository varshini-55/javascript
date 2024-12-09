const possibleBonus= (a,b) => {
    let M=a;
    let N=b;
    for(let i =1;i<=6;i++)
    {
        M +=1;
        if(M === N)
        {
            
            return true;
        }
    }
    
    return false;
};

console.log(possibleBonus(3, 7));// True
console.log(possibleBonus(1, 9));  // False
console.log(possibleBonus(5, 3));  // False
console.log(possibleBonus(5, 5));//False

/* 
* OUTPUT
* true
*false
*false
*false
 */