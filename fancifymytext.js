var textarea=document.getElementById("textarea");
function Moo(){
    textarea.style.textTransform="uppercase"
    let str=textarea.value.split(".");
    let str2=str.join("-Moo");
    textarea.value=str2;
}

function makeBig(){
    textarea.style.fontSize="24pt";
}

document.getElementsByName("fancify")[0].addEventListener("change",function(){
    textarea.style.fontWeight="bold";
    textarea.style.color="blue";
    textarea.style.textDecoration="underline"
    alert("So fancy!");
})

document.getElementsByName("fancify")[1].addEventListener("change",function(){
    textarea.style.fontWeight="normal";
    textarea.style.color="black";
    textarea.style.textDecoration="none"
    alert("Bo-ring!");
})
