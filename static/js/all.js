// 当窗口加载完成后执行的函数
window.onload = function () {
    // 获取界面上的按钮元素（这里的按钮应该是用于添加新任务之类的操作，根据类名".button"查找）
    const button = document.querySelector(".button");
    // 获取界面上的垃圾桶按钮元素（用于删除任务，通过类名".trash-bin"查找，这里假设是动态生成的元素）
    const trashBin = document.querySelectorAll(".trash-bin");
    // 获取界面上的复选框元素（用于标记任务完成状态，类名为".checkbox"）
    const checkbox = document.querySelectorAll(".checkbox");
    // 获取输入任务的文本框元素（用户在此输入新的任务内容，类名".input-text"）
    const inputText = document.querySelector(".input-text");
    // 获取任务列表的容器元素（用于容纳所有的任务项，类名".task-list"）
    const taskList = document.querySelector(".task-list");

    // 检查元素是否存在，如果有任何一个关键元素不存在，则在控制台输出错误信息并停止后续操作
    if (!button || !inputText || !taskList) {
        console.error("One or more elements not found.");
        return;
    }

    // 新建任务的函数，用于创建一个新的任务并添加到任务列表中
    function createNewTask() {
        // 如果文本框的值为空（即用户没有输入内容），则不执行创建新任务的操作
        if (inputText.value === "") {
            return;
        }
        // 创建一个新的列表项元素（<li>），用于表示一个新的任务
        const taskItem = document.createElement("li");
        // 设置列表项的内容，包括一个复选框、一个用于显示任务文本的标签和一个垃圾桶按钮
        // 使用模板字符串来方便地构建HTML结构
        taskItem.innerHTML = `
            <input type="checkbox" class="checkbox">
            <label>${inputText.value}</label>
            <button class="trash-bin">🗑</button>
        `;
        // 将新创建的任务项添加到任务列表中
        taskList.append(taskItem);
        // 清空文本框，以便用户输入下一个任务
        inputText.value = "";
    }

    // 为按钮添加点击事件监听器，当按钮被点击时，调用createNewTask函数来创建新任务
    button.addEventListener("click", createNewTask);

    // 为文本框添加按键事件监听器，当用户按下键抬起时触发
    inputText.addEventListener("keyup", function (e) {
        // 如果按下的键是回车键（Enter键）
        if (e.key === "Enter") {
            // 调用createNewTask函数来创建新任务
            createNewTask();
        }
    });

    // 为动态生成的垃圾桶按钮绑定点击事件监听器，通过在document上监听点击事件
    document.addEventListener("click", function (event) {
        // 如果被点击的元素的类名包含".trash-bin"（即点击了垃圾桶按钮）
        if (event.target.classList.contains("trash-bin")) {
            // 删除该垃圾桶按钮所在的父元素（即整个任务列表项）
            event.target.parentElement.remove();
        }
    });

    // 为动态生成的复选框绑定点击事件监听器，通过在document上监听点击事件
    document.addEventListener("click", function (event) {
        // 获取被点击的复选框元素
        const clickedCheckbox = event.target;
        // 获取复选框所在的任务列表项元素，这里通过向上两层父元素获取（假设HTML结构是固定的）
        const taskListItem = clickedCheckbox.parentElement.parentElement;
        // 获取复选框所在的标签元素
        const label = clickedCheckbox.nextElementSibling;
        if (clickedCheckbox.checked) {
            // 如果复选框被勾选，设置标签的文本装饰为划线，并将文本颜色设置为灰色
            label.style.textDecoration = "line-through";
            label.style.color = "#999";
        } else {
            // 如果复选框未被勾选，清除标签的文本装饰，恢复文本颜色为默认值
            label.style.textDecoration = "none";
            label.style.color = "";
        }
    });

    // 获取后台按钮元素（根据类名".background-button"查找，用于跳转到后台相关页面）
    const backgroundButton = document.querySelector(".background-button");

    // 打开后台的函数，用于实现跳转到后台页面的功能
    function openBackground() {
        // 更改当前窗口的URL，跳转到指定的后台页面（这里是"static/html/back.html"）
        window.location.href = "static/html/back.html";
    }
    // 为后台按钮添加点击事件监听器，当按钮被点击时，调用openBackground函数来跳转到后台页面
    backgroundButton.addEventListener("click", openBackground);
};