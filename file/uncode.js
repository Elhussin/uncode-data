var input=document.getElementById("input")
var output=document.getElementById("output")
var submit =document.getElementById("submit")


input.addEventListener("input",()=>{
    out_put();
})
submit.addEventListener("change",()=>{
    out_put();
})


function out_put(){
    if(submit.value=="code"){
        output.value= window.atob(input.value)
    }

    else{
        output.value=window.btoa(input.value);
    }

}
onchange =out_put();
 function sceen_width(){
var davis=screen.width;
if(davis<"800"){
    document.getElementById("nav").style.height="300px"
    document.getElementById("nav").style.display="block"
   
   
    document.getElementById("nav_img").style.height="100px"
    document.getElementById("nav_img").style.width="100px"
    document.getElementById("nav_img").style.marginLeft="150px"
    document.getElementById("nav_h1").style.display="flex"
    document.getElementById("nav_h1").style.width="100%"
    document.getElementById("nav_h1").style.height="80px"

 
}
}
onchange=sceen_width();
setInterval(sceen_width(),100);