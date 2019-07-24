
function verify(span) {
    
    console.log("hola");

    span.innerText = "x";
    span.className = "visto";
    span.parentNode.querySelector("svg").querySelector("defs").querySelector("path").classList.add("ani");

    //document.querySelector("#d9yfxVT89").classList.add("path");
   
}