const students = JSON.parse(localStorage.getItem('students')) || [];
var currentStudent = [localStorage.getItem('fname'),localStorage.getItem('lname'),localStorage.getItem('c_name'),localStorage.getItem('tutor')];

const API_URL = 'http://localhost:5000/api';

const currentUser = localStorage.getItem('user');

if (currentUser) { 
    $('#logged').append(`<h4>Hello ${currentUser}</h4>`);
} else {
    const path = window.location.pathname;
    if (path !== '/login' && path !== '/registration') {
        location.href = '/login'; 
    }
}

$('#signup').on('click', () => {
    var fname = $('#name').val();
    var password = $('#password').val();
    var c_name = $('#c_name').val();
    var tutor = $('#tutor').val();
    $.post(`${API_URL}/registration`, { fname, password, c_name, tutor }) 
        .then((response) => {
            if (response.success) {
                location.href = '/login';
                console.log(fname)
                // $('#message').append(`<p class="alert alert-danger">${fname}</p>`); 
            } else {
                $('#message_error').append(`<p class="alert alert-danger">${response}</p>`); 
            }
        });
    
});

$('#login').on('click', () => {
    const user = $('#username').val();
    const password = $('#password').val(); 
    $.post(`${API_URL}/authenticate`, { user, password }) 
    .then((response) =>{
        console.log("response");
        console.log(response);
        if (response.success) {
            localStorage.setItem('user', user); 
            localStorage.setItem('isAdmin', response.isAdmin); 
            localStorage.setItem('isAuthenticated',true);
             
            location.href = '/homepage';
        } else {
            $('#message').append(`<p class="alert alert-danger">${response}</p>`); 
        }
    }); 
});

$('#makesubmit').on('click', () => {

    location.href = '/submit';
});

$('#submit').on('click', () => {
    //$('#message').append(`<p class="alert alert-danger">Message submitted successfully!</p>`); 
    
    if (confirm("Submitted successfully! Go to homepage?")) {
        location.href = '/homepage';
      } else {
        location.href = '/submit';
      }
    // sleep(2000);
    
});




const logout = () => { 
    localStorage.removeItem('user'); 
    location.href = '/login';
}

$('#message').append(`<p></p>`); 