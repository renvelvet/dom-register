let name = document.getElementById("inputName");
let submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function () {
  let fNama = document.getElementById("inputName").value;
  let fPhone = document.getElementById("inputPhone").value;
  let fEmail = document.getElementById("inputEmail").value;
  let fPassword = document.getElementById("inputPassword").value;

  console.log(`Name : ${fNama}`);
  console.log(`Phone : ${fPhone}`);
  console.log(`Email : ${fEmail}`);
  console.log(`Password : ${fPassword}`);
  alert(`
  Name : ${fNama}
  Phone : ${fPhone}
  Email : ${fEmail}
  Password : ${fPassword}`);
});
