function myWorks() {
    window.scrollTo(0, 0);
    const content = document.getElementById("content");
    var fibers = '';
    for (let i = 0;i < 9;i++) {
        fibers +=
            '<div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">\n' +
            '<a id="'+FIBERS[i]['id']+'" role="button" onclick="fiberDetails(this)">\n' +
            '    <div class="card">\n' +
            '      <figure>\n' +
            '        <img src="'+FIBERS[i]['image-path']+'" alt="'+FIBERS[i]['title']+'">\n' +
            '        <figcaption>'+FIBERS[i]['title']+'</figcaption>\n' +
            '      </figure>\n' +
            '      <p>'+FIBERS[i]['description']+'</p>\n' +
            '    </div>\n' +
            '  </a>\n' +
            '</div>';
    }
    content.innerHTML = '<div id="fibers" class="row">'+fibers+'</div>';
}

document.getElementById("my-works").addEventListener('click', myWorks);
