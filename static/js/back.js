const 文字栏 = document.querySelector(".文字栏");
function 新任务(){
    if (文字栏.value === ""){
        return;
    }
    const 任务 = document.createElement("li");
    任务.innerHTML = `
    <input type="checkbox" class="打勾方块">
        <label>${文字栏.value}</label>
        <button class="垃圾桶">🗑️</button>
    `
    const 清单 = document.querySelector(".清单");
    清单.append(任务);
    文字栏.value = "";
}


文字栏.addEventListener("keyup", function(e){
    if (e.key === "Enter"){
        新任务();
    }
});

const 后台 = document.querySelector(".后台");

function 打开后台(){
    window.location.href = "static/html/back.html";
}
后台.addEventListener("click",打开后台);


const 打勾方块 = document.querySelector(".打勾方块");
