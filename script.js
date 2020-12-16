var x = document.getElementById("email");
var y = document.getElementById("error");

function validate() {
    var regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\.-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if (regexp.test(email.value.trim())) {

        return true;
    } else {
        alert("email not valid");
        y.innerHTML = " Refresh the page and enter again";
        y.style.color = "red";
        return false;
    }

}

var c = document.getElementById("email14");
var d = document.getElementById("emailerr");
var z = document.getElementById("inputpwd");
var a = document.getElementById("pwderror");
var b = document.getElementById("password");

function signvalidate() {
    var regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\.-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if (regexp.test(c.value.trim())) {

        return true;
    } else {
        alert("email not valid");
        d.innerHTML = " Refresh the page and enter again";
        d.style.color = "red";
        return false;
    }


}


function checkPass() {
    var pass1 = document.getElementById('inputpwd');
    var pass2 = document.getElementById('password');
    var message = document.getElementById('pwderror');
    var goodColor = "#66cc66";
    var badColor = "#ff6666";

    if (inputpwd.value.length > 7) {
        pass1.style.backgroundColor = goodColor;
        pass1.style.color = goodColor;
        message.innerHTML = "character number ok!"
    } else {
        pass1.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = " you have to enter at least 8 digit!"
        return;
    }

    if (pass1.value == pass2.value) {
        pass2.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "success!"
    } else {
        pass2.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = " These passwords don't match"
    }
}




var myInput = document.getElementById("inputpwd");

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;
  if((myInput.value.match(lowerCaseLetters))||(myInput.value.match(upperCaseLetters))||(myInput.value.match(numbers))) {  

    return true;
  } else {
    
    alert("Password Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters");
  }
}


// phone no validation
var re = document.getElementById("q");

function phonenumber(q)
{
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  var phone = /^\d{10}$/;
  if((re.value.match(phoneno))||(re.value.match(phone)))
        {
      return true;
        }
      else
        {
        alert("Phone Number Invalid!");
        return false;
        }
}
      
    



  