
function genratePassword(length,includeLowercase,includeUppercase,includeNumbers,includeSymbols)
{ const lowercaseChars="abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars="0123456789";
    const symbolChars="+-=_?@!#$%*()";
    let allowedChars="";
    let password="";
    allowedChars += includeLowercase?lowercaseChars:"";//to check if password can conations lowercase element or not
    allowedChars += includeUppercase?uppercaseChars:"";//to check if password can conations upperrcase element or not
    allowedChars +=includeNumbers?numberChars:"";//to check if password can conations number element or not
    allowedChars +=includeSymbols?symbolChars:"";//to check if password can conations symbol element or not
if( length<=0)
{
return`(password length must be 1)`;
}
if(allowedChars.length===0){
    return`(atleast 1 set of characters needs to be selected)`;  
}
for(let i=0;i<length;i++)
{
    const randomIndex=Math.floor(Math.random()*allowedChars.length);
    password += allowedChars[randomIndex];
}
return password;


}


const passwordLength=10;//length of our password
const includeLowercase=true;
const includeUppercase=true;
const includeNumbers=false;
const includeSymbols=true;

const password =genratePassword(passwordLength,
                            includeLowercase,
                            includeUppercase,
                            includeNumbers,
                            includeSymbols);

console.log(`genrated password:${password}`);