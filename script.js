
let input =``
let ans =``

document.querySelectorAll(".row button").forEach(function(elem){
    elem.addEventListener("click",function(e){ 
        if(e.target.textContent == '='){
            ans=``
            document.querySelector("#input2").value=ans
            input=eval(input);
        document.querySelector("#input1").value=input;
        }
        else if(e.target.textContent == 'A/C'){
            input=``;
        document.querySelector("#input1").value=input;
        document.querySelector("#input2").value=input;
        } 
        else if(e.target.innerHTML == `<i class="ri-delete-back-2-line"></i>`){
            
        var arr = document.querySelector("#input1").value.split("")
            arr.pop()
            input=``
            arr.forEach(function(val){
                input+=val
            })
        document.querySelector("#input1").value=input;
        document.querySelector("#input2").value=eval(input);
        

        } 
        else{
            input+= e.target.innerHTML;
            document.querySelector("#input1").value=input
            ans=eval(input);
        document.querySelector("#input2").value=ans;
        }
    })
})
var flag = 0
document.querySelector(".mode").addEventListener("click",function(){
    console.log("hey")
    if(flag==0){
        gsap.to(".mode",{
            justifyContent:"right",
        })
        gsap.to(".dot",{
            backgroundColor:"black",

        })
        gsap.to("#container",{
            backgroundColor:"white",
        })
        gsap.to(".row button",{
            backgroundColor:"white",
            color:"black",
        })
        flag=1
    }
    else{
        flag=0
        gsap.to(".mode",{
            justifyContent:"left",
        })
        gsap.to(".dot",{
            backgroundColor:"white",

        })
        gsap.to("#container",{
            backgroundColor:"black",
        })
        gsap.to(".row button",{
            backgroundColor:"black",
            color:"white",
        })
    }
})