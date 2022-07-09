console.log("reshu");
document.querySelector(".cross").style.display = "none";
document.querySelector(".hamburger").addEventListener("click",()=>{
    document.querySelector(".sidevar").classList.toggle("sidevarGo");
    if(document.querySelector(".sidevar").classList.contains("sidevarGo")){
        document.querySelector(".ham").style.display = "inline"
        document.querySelector(".cross").style.display = "nona"
    }else{
        document.querySelector(".ham").style.display = "nona"
        setTimeout(() => {
            document.querySelector(".cross").style.display = "inline" 
        }, 300);  

    }

})