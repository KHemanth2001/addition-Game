function restart(){
    let num1=Math.ceil(Math.random()*100);
    let num2=Math.ceil(Math.random()*100);
    document.getElementById("firstNumber").textContent=num1;
    document.getElementById("secondNumber").textContent=num2;
}
function check(){
    let num1=document.getElementById("firstNumber").textContent;
    let num2=document.getElementById("secondNumber").textContent;
    let num=document.getElementById("userInput").value;
    if(parseInt(num1)+parseInt(num2)===parseInt(num)){
        let doc=document.getElementById("gameResult");
        doc.textContent="Congratulations!,You got it right.";
        doc.style.backgroundColor="#028a0f";
    }else{
        let doc=document.getElementById("gameResult");
        doc.textContent="Please Try Again.";
        doc.style.backgroundColor="#1e217c";
    }
}