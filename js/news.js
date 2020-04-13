function news() {
    var content = document.getElementById('content');
    content.innerHTML = '';
}

document.getElementById('news').addEventListener('click', news);
