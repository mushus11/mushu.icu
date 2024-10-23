const 文字栏 = document.querySelector(".文字栏");
const 清单 = document.querySelector(".清单");
const 后台 = document.querySelector(".后台");

function 打开后台(){
    window.location.href = "static/html/back.html";
}


后台.addEventListener("click",打开后台);


文字栏.addEventListener("keyup", function(e){
    if (e.key === "Enter"){
        新任务();
    }
});