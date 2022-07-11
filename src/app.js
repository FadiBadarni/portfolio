const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('navList')

function toggleButton(){
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)

function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "fadybd1@gmail.com",
        Password: "31629B777EC33A826C474620AE3CFE6EF4C7",
        To: 'fadybd1@gmail.com',
        From: "fadybd1@gmail.com",
        Subject: "New Contact Request",
        Body: "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Phone Number: " + document.getElementById("phone").value
        + "<br> Message: " + document.getElementById("message").value
    }).then(
        message => alert(message)
    );
}



