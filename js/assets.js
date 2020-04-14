const FIBERS = new Array(9);
for (let i = 0;i < 9; i++) {
    var id = 'fiber-'+i;
    var imagePath = 'img/fibers/fiber-'+i+'.jpg';
    var title = 'Fiber '+i;
    var description = 'Brief description about my fiber. Bla bla bla. I love it. Would You mind?';
    var authorWords = 'I am so proud of my first ... I am really grateful of my skills.';
    FIBERS[i] = {
        'id': id,
        'image-path': imagePath,
        'title': title,
        'description': description,
        'author-words': authorWords
    };
}
