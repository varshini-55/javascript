class displayFullName {
    constructor() {
        this.Name1 = ['V', 'I', 'J', 'A', 'Y' ,'A','V','A','R','S','H','I','N','I'];
        console.log(" Before Joining :- "+this.Name1);
        this.makeFullName = function()
        {
             return this.Name1.join('');
        }   
    }
}
var Name = new displayFullName();
console.log(" After Joining :- "+Name.makeFullName());

/* 
* OUTPUT
* Before Joining :- V,I,J,A,Y,A,V,A,R,S,H,I,N,I
* After Joining :- VIJAYAVARSHINI
*/