//Remove Duplicates from string
//I/P : "Hello World"
//O/P : "Helo Wrld"

//Brute Force Algo

const removeDuplicateByBrut=(str)=>
{
   let inputStr = [...str];
   let st = new Set();
   inputStr.forEach((s)=>st.add(s));
   let orgStr = Array.from(st).join('');
   return orgStr;
   
}

const str = "Hello World";
const outputString = removeDuplicateByBrut(str);
console.log(outputString);
