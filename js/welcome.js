function welcome() {
    var content = document.getElementById('content');
    content.innerHTML =
        '<div id="welcome-index">\n' +
        '  <h1>Welcome to my blog!</h1>\n' +
        '  <p>\n' +
        '    I\'m Kornelia and I hope You will spend here some really great time.' +
        '    I put a lot of effort to create all of my arts which are also on the other' +
        '    hand very practical in life. Thanks to my dear friend Kamil, handicrafts' +
        '    will delight your eyes :)\n' +
        '  </p>\n' +
        '  <p>\n' +
        '    Don\'t forget to check my arts on Instagram and of course check Kamil\'s socials :D\n' +
        '  </p>\n' +
        '</div>';
}

document.getElementById('welcome').addEventListener('click', welcome);
