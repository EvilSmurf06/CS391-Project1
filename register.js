function validateForm() {
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  let data = localStorage.getItem('details') ? JSON.parse(localStorage.getItem('details')) : [];;
  let formData = {
    "name": document.getElementById("fName").value,
    "email": document.getElementById("email").value,
    "lname": document.getElementById("lName").value,
    "password": document.getElementById("password").value,
    "confirmpassword": document.getElementById("confirm-password").value
  }
  data.push(formData);
  let matchEmail = JSON.parse(localStorage.getItem("details"));
  let emailArray = [];
  let result = matchEmail.map((email, i, matchEmail) => {
    emailArray.push(matchEmail[i].email);
  });
  if (fName.value.length == 0 && password.value.length == 0) {
    alert('Please fill in email and password');
  } else if (email.value.length == 0) {
    alert('Please fill in the email');
  } else if (password.value.length < 6) {
    alert('Minimum 6 character please');
  } else if (emailArray.indexOf(document.getElementById("email").value) > -1) {
    alert("The same email is in use. Try again with another email")
  } else if (!(document.getElementById("password").value == document.getElementById("confirm-password").value)) {
    alert("Password do not match");
  } else {
    if (document.getElementById("email").value.match(mailformat)) {
      localStorage.setItem("details", JSON.stringify(data));
      alert("You have successfully registered ");
    }
  }
}
