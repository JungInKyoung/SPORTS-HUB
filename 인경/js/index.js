let btn= document.querySelectorAll(".section1-top-imgbox-hover_select_color");
let change= document.querySelector(".section1-top-imgbox-img");
let balck= document.querySelector(".font")

    btn[0].addEventListener('mouseover',function(){
        change.src= "img/여자/나이키 브라탑/나이키 브라탑 보라색.png";
        // balck.style.color="white";
    })
    btn[1].addEventListener('mouseover',function(){
        change.src= "img/여자/나이키 브라탑/나이키 브라탑  검정.png";
        
        balck.style.color="black";
    })
    btn[2].addEventListener('mouseover',function(){
        change.src= "img/여자/나이키 브라탑/나이키 브라탑 분홍.png";
        balck.style.color="black";
    })
    btn[3].addEventListener('mouseover',function(){
        change.src= "img/여자/나이키 브라탑/나이키 브라탑 화이트.png";
        balck.style.color="black";
    })

