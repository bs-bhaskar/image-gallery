let scrollContainer = document.querySelector(".gallary");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "smooth";
});

nextBtn.addEventListener("click",()=>{
    scrollContainer.scrollBy({ 
        left: scrollContainer.clientWidth, 
        behavior: "smooth" 
    });
});

backBtn.addEventListener("click",()=>{
     scrollContainer.scrollBy({ 
        left: -scrollContainer.clientWidth, 
        behavior: "smooth" 
    });
});