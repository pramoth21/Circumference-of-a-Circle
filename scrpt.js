let radious;
let circumference;

document.getElementById("sub").onclick = function(){
    radious = document.getElementById("enter").value;
    radious = Number(radious);
    //when using conset cant change value letter for that varibale
  const circumference = (2 * Math.PI * radious).toFixed(2);
    
document.getElementById("hola").textContent = circumference + "CM";
} 
