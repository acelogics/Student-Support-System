var btn = document.getElementById('btn');
btn.addEventListener('click',function(e){
    e.preventDefault()
    var name =document.getElementById('name').value;
    var indexNumber =document.getElementById('indexnumber').value;
    var email =document.getElementById('email').value;
    var hall =document.getElementById('hall').value;
    var rm =document.getElementById('rm').value;
    var message =document.getElementById('message').value;
    var body = 'Name: ' + name + '<br> Index Number:  ' + indexNumber +
    '<br> Email:  ' + email + '<br> Hall: ' + hall + '<br> Room Number:  '
     + rm + '<br> Complaint:  ' + message;


    Email.send({
        Host : "smtp.gmail.com",
        Username : "kvngpatrickowusu@gmail.com",
        Password : "qbgrzncfwiuijqrt",
        To : 'kvngpatrickowusu@gmail.com',
        From : email,
        Subject : "Complaint Submission",
        Body : body
    }).then(
      message => alert('Your complaint has been submitted')
    );
})
