// 使用fetch获取sidebar.html的内容
fetch('./static/html/sidebar.html')
    .then(response => response.text())
    .then(html => {
        // 将获取到的内容插入到侧边栏容器中
        document.getElementById('sidebar-container').innerHTML = html;
    })
    .catch(error => console.error('加载侧边栏失败:', error));