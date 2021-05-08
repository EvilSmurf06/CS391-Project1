function loginUser() {
  let loginEmail = document.getElementById("user-email").value;
  let loginPass = document.getElementById("user-password").value;
  let matchEmail = JSON.parse(localStorage.getItem("details"));
  let emailArray = [];
  let passArray = [];
  let result = matchEmail.map((email, i, matchEmail) => {
    emailArray.push(matchEmail[i].email);
    passArray.push(matchEmail[i].password);
  });
  if (emailArray.indexOf(loginEmail) > -1 && passArray.indexOf(loginPass) > -1) {
    window.open("openpage.html");
  } else {
    alert("You have no registered with us");
  }
}

function redirect1() {
  location.href = "register.html";
}
