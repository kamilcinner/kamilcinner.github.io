function contactMe() {
    window.scrollTo(0, 0);
    var content = document.getElementById("content");
    content.innerHTML =
        '<form method="get">\n' +
        '  <h1>Please fill the contact form</h1>\n' +
        '\n' +
        '  <div class="form-group">\n' +
        '    <label for="firstname">First name</label>\n' +
        '    <input type="text" id="firstname" required pattern="^([A-ZŁŚ][a-ząśćńęóżź]{1,25})$"\n' +
        '           title="Enter Your first name here">\n' +
        '  </div>\n' +
        '\n' +
        '  <div class="form-group">\n' +
        '    <label for="lastname">Last name</label>\n' +
        '    <input type="text" id="lastname" required pattern="^([A-ZŁŚ][a-ząśćńęóżź]{1,25})$"\n' +
        '           title="Enter Your last name here">\n' +
        '  </div>\n' +
        '\n' +
        '  <div class="form-group">\n' +
        '    <label for="email">Email</label>\n' +
        '    <input type="email" id="email" required placeholder="kamil.cinner@gmail.com"\n' +
        '           pattern="^[a-zA-Z0-9_\\.]+@[a-zA-Z0-9\\-]+\\.[a-zA-Z0-9\\-\\.]+$"\n' +
        '           title="Enter Your email here">\n' +
        '  </div>\n' +
        '\n' +
        '  <div class="form-group">\n' +
        '    <label for="phone">Phone number</label>\n' +
        '    <input type="text" id="phone" required placeholder="123456789" pattern="[0-9]{9}"\n' +
        '           title="Enter Your phone number here">\n' +
        '  </div>\n' +
        '\n' +
        '  <div class="form-group">\n' +
        '    <label for="message">Your message</label>\n' +
        '    <textarea rows="10" id="message" required title="Enter Your message here"\n' +
        '              placeholder="I love all of Your work Kornelia!"></textarea>\n' +
        '  </div>\n' +
        '\n' +
        '  <input type="submit" value="Send">\n' +
        '\n' +
        '</form>';
}

document.getElementById("contact-me").addEventListener('click', contactMe);
