var sidenavbar=document.querySelector(".side-navbar")



function shownavbar(){
    sidenavbar.style.display="block"
}
function closenavbar(){
    sidenavbar.style.display="none"
}

var tablinks=document.getElementsByClassName("tab-links")
var tabcontents=document.getElementsByClassName("tab-contents")

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
} 