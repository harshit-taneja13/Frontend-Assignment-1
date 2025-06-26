const openBtn = document.getElementById("createCampaignBtn")
const closeBtn=document.getElementById("closeBtn")
const modal=document.getElementById("modal")

openBtn.addEventListener("click",function(){
    modal.style.display="flex";
    openBtn.style.visibility="hidden";
    modal.setAttribute("aria-hidden", "false");
})

closeBtn.onclick= () =>{
    modal.style.display="none";
    openBtn.style.visibility="visible";
    modal.setAttribute("aria-hidden", "true");
}

window.onclick=(e)=>{
    if (e.target==modal){
        modal.style.display="none";
        openBtn.style.visibility="visible";
        modal.setAttribute("aria-hidden", "true");
    }
}