// 当窗口加载完成后执行的函数
window.onload = function () {
    // 获取界面上的按钮元素
    const 按钮 = document.querySelector(".按钮");
    // 获取界面上的垃圾桶按钮元素
    const 垃圾桶 = document.querySelector(".垃圾桶");
    // 获取界面上的复选框元素
    const 打勾方块 = document.querySelector(".打勾方块");
    // 获取输入任务的文本框元素
    const 文字栏 = document.querySelector(".文字栏");
    // 获取任务列表的容器元素
    const 清单 = document.querySelector(".清单");

    // 新建任务的函数
    function 新任务() {
        // 如果文本框为空，则不执行任何操作
        if (文字栏.value === "") {
            return;
        }
        // 创建一个新的列表项元素
        const 任务 = document.createElement("li");
        // 设置列表项的内容，包括复选框、标签和垃圾桶按钮
        任务.innerHTML = `
            <input type="checkbox" class="打勾方块">
            <label>${文字栏.value}</label>
            <button class="垃圾桶">🗑</button>
        `;
        // 将新的任务添加到任务列表中
        清单.append(任务);
        // 清空文本框
        文字栏.value = "";
    }

    // 为按钮添加点击事件，点击时新建任务
    按钮.addEventListener("click", 新任务);

    // 为文本框添加按键事件，按Enter键时新建任务
    文字栏.addEventListener("keyup", function(e){
        if (e.key === "Enter"){
            新任务();
        }
    });

    // 为动态生成的垃圾桶按钮绑定点击事件，点击时删除对应的任务
    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("垃圾桶")) {
            event.target.parentElement.remove();
        }
    });

    // 为动态生成的复选框绑定点击事件，点击时改变任务的样式
    document.addEventListener("click", function(event){
        // 获取被点击的复选框
        const 打勾方块 = event.target;
        // 获取复选框所在的任务列表项
        const 任务 = 打勾方块.parentElement.parentElement;
        if (打勾方块.checked) {
            // 如果复选框被勾选，任务文本划线并变灰
            任务.style.textDecoration = "line-through";
            任务.style.color = "#999";
        } else {
            // 如果复选框未被勾选，任务文本恢复正常
            任务.style.textDecoration = "none";
            任务.style.color = "";
        }
    });

    // 获取后台按钮元素
    const 后台 = document.querySelector(".后台");

    // 打开后台的函数
    function 打开后台() {
        // 跳转到后台页面
        window.location.href = "static/html/back.html";
    }
    // 为后台按钮添加点击事件，点击时打开后台页面
    后台.addEventListener("click", 打开后台);
};