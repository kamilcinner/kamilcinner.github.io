function fiberDetails(fiber) {
    window.scrollTo(0, 0);
    var content = document.getElementById('content');
    var id = fiber.getAttribute('id');
    id = parseInt(id[id.length-1]);
    // alert(id);
    content.innerHTML =
        '<article>\n' +
        '  <div id="fiber-details">' +
        '    <div class="card">\n' +
        '      <figure>\n' +
        '        <img src="' + FIBERS[id]['image-path'] + '" alt="' + FIBERS[id]['title'] + '">\n' +
        '          <figcaption><h2>' + FIBERS[id]['title'] + '</h2></figcaption>\n' +
        '      </figure>\n' +
        '      <p>' + FIBERS[id]['description'] + '</p>\n' +
        '      <hr>' +
        '      <p>'+FIBERS[id]['author-words']+'</p>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '</article>';
}
