const students = JSON.parse(localStorage.getItem('students')) || [];
var currentStudent = [localStorage.getItem('fname'),localStorage.getItem('lname'),localStorage.getItem('c_name'),localStorage.getItem('tutor')];

const API_URL = 'http://localhost:5000/api';

// $('#signup').on('click', function() {
//     const name = $('#name').val();
//     const lname = $('#lname').val();
//     const c_name = $('#c_name').val();
//     const tutor = $('#tutor').val();
//     students.push({ name, lname, c_name, tutor });
//     localStorage.setItem('students', JSON.stringify(students));
//     console.log("Student details: " + students);
//     location.href = '/homepage';
// });

$('#signup').on('click', () => {
    var fname = $('#name').val();
    var lname = $('#lname').val();
    var c_name = $('#c_name').val();
    var tutor = $('#tutor').val();
    $.post(`${API_URL}/registration`, { fname, lname, c_name, tutor }) 
        .then((response) => {
            if (response.success) {
                localStorage.setItem('fname', fname); 
                localStorage.setItem('lname', lname); 
                localStorage.setItem('c_name', c_name);
                localStorage.setItem('tutor', tutor);
                location.href = '/homepage';
                console.log(fname)
                // $('#message').append(`<p class="alert alert-danger">${fname}</p>`); 
            } else {
                $('#message_error').append(`<p class="alert alert-danger">${response}</p>`); 
            }
        });
    
});

$('#message').append(`<p class="alert alert-danger">${currentStudent[0]}</p>`); 