function news() {
    window.scrollTo(0, 0);
    var content = document.getElementById('content');
    var posts = '';
    for (let i = 4;i < 9;i++) {
        posts +=
            '<article>\n' +
            '  <a id="'+FIBERS[i]['id']+'" role="button" onclick="fiberDetails(this)">\n' +
            '    <div class="flip-flop">\n' +
            '      <div class="flip">\n' +
            '        <img src="'+FIBERS[i]['image-path']+'" alt="'+FIBERS[i]['title']+'">\n' +
            '      </div>\n' +
            '      <div class="flop">\n' +
            '        <header>\n' +
            '          <h2>'+FIBERS[i]['title']+'</h2>\n' +
            '        </header>\n' +
            '        <p>'+FIBERS[i]['description']+'</p>\n' +
            '      </div>\n' +
            '      <div class="overlay"><i class="icon-github-circled"></i><p>Look closer :)</p></div>\n' +
            '    </div>\n' +
            '  </a>\n' +
            '</article>\n';
    }

    content.innerHTML =
        '<div id="posts">\n' +
        '    <h1>Here are my most fresh works</h1>\n' +
            posts +
        '</div>';
}

document.getElementById('news').addEventListener('click', news);
