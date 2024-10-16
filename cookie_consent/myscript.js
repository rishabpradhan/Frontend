const cookiebox=document.querySelector(".wrapper"),
buttons=document.querySelectorAll(".button");
//console.log(cookiebox,buttons);

const excutecodes =() =>{
cookiebox.classList.add("show");

buttons.forEach(button => {
    button.addEventListener("click",()=>{
        cookiebox.classList.remove("show");

        //if button is accepted
        if (button.id =="btn"){
            console.log("data")
            
            //set cookie for 1 day
            document.cookie="cookie=rishabpradhan" + 60* 60 * 24 * 1;
        }
    })
    
});

};
window.addEventListener("load",excutecodes);
