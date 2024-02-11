const rippleEffect=document.querySelectorAll(".ripple-effect");

rippleEffect.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        
        let xCordinatorValue = e.clientX - e.target.offsetLeft;
        let yCordinatorValue = e.clientY - e.target.offsetTop;
        console.log(xCordinatorValue,yCordinatorValue)

        let rippleElement = document.createElement('span');
        rippleElement.style.left =`${xCordinatorValue}px`;
        rippleElement.style.top = `${yCordinatorValue}px`;
        btn.appendChild(rippleElement);
        window.setTimeout(()=>{
            rippleElement.remove();
        },500)
    })
})