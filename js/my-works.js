function myWorks() {
    var content = document.getElementById("content");
    var fibers = '';
    for (let i = 1;i <= 9;i++) {
        fibers +=
            '<div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">\n' +
            '  <a href="#">\n' +
            '    <div class="card">\n' +
            '      <figure>\n' +
            '        <img src="../img/fibers/fiber-'+i+'.jpg" alt="Włóczka-'+i+'">\n' +
            '        <figcaption>Włóczka '+i+'</figcaption>\n' +
            '      </figure>\n' +
            '      <p>Short description here...</p>\n' +
            '    </div>\n' +
            '  </a>\n' +
            '</div>\n';
    }
    content.innerHTML = '<div id="fibers" class="row">'+fibers+'</div>';
}

document.getElementById("my-works").addEventListener('click', myWorks);
