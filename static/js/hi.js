const 文字栏 = document.querySelector(".文字栏");
const 清单 = document.querySelector(".清单");
const 按钮 = document.querySelector(".按钮");
const 后台 = document.querySelector(".后台");

function 打开后台(){
    window.location.href = "../unidex.php";
}

function 新任务(){
    if (文字栏.value === ""){
        return;
    }
    const 任务 = document.createElement("li");
    任务.textContent = 文字栏.value;
    清单.append(任务);
    文字栏.value = "";
}


后台.addEventListener("click",打开后台);

按钮.addEventListener("click",新任务);


文字栏.addEventListener("keyup", function(e){
    if (e.key === "Enter"){
        新任务();
    }
});