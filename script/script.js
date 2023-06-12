let items = document.querySelectorAll('.item')
function clickcrHandler(slidId){
let itemShow = document.getElementById(slidId)
items.forEach(function(slid){
    slid.classList.remove('active')
})
itemShow.classList.add('active')
}
let index = 1
setInterval(function(){
    items.forEach(function(slid){
        slid.classList.remove('active')
    }) 
    let randomItem = document.getElementById('item' + index)
    randomItem.classList.add('active')
    if(index == 3){
   index = 0
    }
    index++
},4000)
//remaning time
let timerRemaining = document.querySelector('.remainig-time')
let hour = 12
let minut = 20
let second = 50
let timer = setInterval(function(){
    
    if(second == -1){  
        minut--
        second = 59
    }
    if(minut == -1){
        hour--
        minut = 59
    }
    if(second == 0 && minut == 0 && hour == 0){
        clearInterval(timer)
    }
    if(second < 10){
            second = "0" + second 
    }
    if(minut < 10){
            minut = "0" + minut
    }
    if(hour < 10){
        hour = "0" + hour
    }
    
    timerRemaining.innerHTML = hour +' : '+minut+' : '+second
    minut *= 1
    hour *= 1
    second--
},1000)