// We will create a function to clear the errors:-
let clearErrors = () => {
  errors = document.getElementsByClassName("formError");
  // now we itereate the errors one by one:-
  for (let item of errors) {
    item.innerHTML = "";
  }
};

const setError = (id, error) => {
  //set errror inside the div
  element = document.getElementById(id);
  element.getElementsByClassName("formError")[0].innerHTML = error;
};

const validateForm = () => {
  // return true then form will be submit
  let returnVal = true;

  // we have to clear the input after correct input:-
  clearErrors();

  // Perform validation and if Validation fails then it will return false and form will not submit.
  // VALIDATION FOR FULL NAME
  let name = document.forms["myForm"]["UFname"].value;

  if (name.length < 5) {
    setError("name", "*Length of name is too short");
    returnVal = false;
  }

  // VALIDATION FOR USER NAME
  let UName = document.forms["myForm"]["Uname"].value;

  if (UName.length < 5) {
    setError("UserName", "*Length of User name is too short");
    returnVal = false;
  }

  // VALIDATION FOR USER EMAIL
  let Useremail = document.forms["myForm"]["Uemail"].value;

  if (Useremail.length > 30) {
    setError("UserEmail", "*Length of Email is too long");
    returnVal = false;
  }

  // VALIDATION FOR USER PHONE
  let Userephone = document.forms["myForm"]["Uphone"].value;

  if (Userephone.length != 10) {
    setError("UserPhone", "*Phone number should be 10 digits");
    returnVal = false;
  }

  // VALIDATION FOR USER PASSWORD
  let Userepassword = document.forms["myForm"]["Upass"].value;

  if (Userepassword.length < 8) {
    setError("UserPass", "*Password should be atleast 8 digits");
    returnVal = false;
  }

  // VALIDATION FOR USER CONFIRM PASSWORD
  let Usereconfirmpassword = document.forms["myForm"]["UCpass"].value;

  if (Usereconfirmpassword != Userepassword) {
    setError("UserConfirmPass", "*Password should be matched");
    returnVal = false;
  }

  // VALIDATION FOR USER GENDER
  let UsereGender = document.forms["myForm"]["gender"];

  if (
    UsereGender[0].checked == false &&
    UsereGender[1].checked == false &&
    UsereGender[2].checked == false
  ) {
    setError("UserGender", "*Please select your gender");
    returnVal = false;
  }

  return returnVal;
};
