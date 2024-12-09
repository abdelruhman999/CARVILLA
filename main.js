let myli = document.querySelectorAll("section li")
let mysec = document.getElementById("sec1")
let mybtn =document.getElementById("btn1")


myli.forEach((e)=>{
    e.addEventListener("click",(event)=>{
        myli.forEach((e)=>{
            e.classList.remove("active")
        })    
        event.currentTarget.classList.add("active")   
    })
})


    window.onscroll=function(){    
        if(window.scrollY>=300){
            mysec.style.background="black"    
            mybtn.classList.remove("hidden")        
        }    
        else{            
            mysec.style.background="" 
            mybtn.classList.add("hidden")
        }           
    }
    mybtn.addEventListener("click",()=>{
       window.scrollTo({
        top:0,
        behavior:"smooth"
       })
    })

    let index=0
    let mydiv = document.querySelectorAll("#div1 , #div2 , #div3")
    function showdiv(){
        mydiv.forEach((e)=>{
            e.classList.add("hidden")
            e.classList.add("opacity-0")
            
        })
    
        let currentdiv = mydiv[index]
        currentdiv.classList.remove("hidden")
        currentdiv.classList.remove("opacity-0")
        index =(index+1) % mydiv.length //recycle 
    }

    setInterval(showdiv,5000)
    showdiv()

    let mybtn2 = document.getElementById("btn2")
    let mylis =document.getElementById("lis")
    
    mybtn2.addEventListener("click", (e) => {       
        if (e.currentTarget.classList.contains("fa-list")) {
            e.currentTarget.setAttribute("class", "fa-solid fa-x");
            e.currentTarget.classList.add("text-blue-700","border","border-blue-700","p-3","rounded","text-lg")
            mylis.classList.remove("hidden")
        } else {           
            e.currentTarget.setAttribute("class", "fa-solid fa-list");
            e.currentTarget.classList.add("text-blue-700","border","border-blue-700","p-3","rounded","text-lg")
            mylis.classList.add("hidden")
        }
    });

  mylis.querySelectorAll("li").forEach((e)=>{
    e.onclick=function(){
        mylis.classList.add("hidden")
        mybtn2.setAttribute("class","fa-solid fa-list")
        mybtn2.classList.add("text-blue-700","border","border-blue-700","p-3","rounded","text-lg")
    }
  })

  
const text = ["Get your desired car in resonable price"]
const textspeed = 100;
const deletespeed = 50
const delaybetwentypeanddelete = 1000
let textIndex = 0
let charIndex = 0
let mytext = document.getElementById("test4")

function typedText(){
    if(charIndex < text[textIndex].length){
            mytext.textContent+=text[textIndex][charIndex]
            charIndex++
            setTimeout(typedText,textspeed)
    }else{
        setTimeout(deletetext,delaybetwentypeanddelete)
    }
}
function deletetext(){
    if(charIndex>0){
        mytext.textContent=text[textIndex].substring(0,charIndex-1)
        charIndex--
        setTimeout(deletetext,deletespeed)
    }else{
        // textIndex = [textIndex+1]%text.length
        setTimeout(typedText,textspeed)
    }
}
window.onload=function(){
    typedText()
}