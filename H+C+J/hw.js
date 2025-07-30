const buttons=document.querySelector("button");
let beforeButton=null;

buttons.forEach(button=>{
    buttons.addEventListner('click',function(){
        if (beforeButton){
            beforeButton.style.backgroundColor='gray';
            this.style.backgroundColor='black';
            beforeButton=this;
        }
    })
})