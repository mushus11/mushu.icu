window.onload = function () {
    const 按钮 = document.querySelector(".按钮");
    const 垃圾桶 = document.querySelector(".垃圾桶");

    function 新任务() {
      if (文字栏.value === "") {
        return;
      }
      const 任务 = document.createElement("li");
      任务.innerHTML = `
      <input type="checkbox" class="打勾方块">
      <label>${文字栏.value}</label>
      <button class="垃圾桶">🗑️</button>
      `;
      清单.append(任务);
      文字栏.value = "";
    }

    按钮.addEventListener("click", 新任务);

    // 为动态生成的垃圾桶按钮绑定事件
    document.addEventListener("click", function (event) {
      if (event.target.classList.contains("垃圾桶")) {
        event.target.parentElement.remove();
      }
    });
  };