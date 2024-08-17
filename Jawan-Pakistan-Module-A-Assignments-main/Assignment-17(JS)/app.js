// Q1
// Done in html

// Q2
function hide() {
    var hideButton = document.getElementById("hide-me")
    hideButton.style.display = "none"
}

// Q3
function mouseover() {
    var colorChange = document.getElementById("over-clr-change")
    colorChange.style.backgroundColor = "Green"
}
function mouseout() {
    var colorChange1 = document.getElementById("over-clr-change")
    colorChange1.style.backgroundColor = "White"
}

// Q4
function scrollToTop() {
    window.scrollTo(0, 0);
}

// Q5
// Get references to the link and audio element
var playSoundLink = document.getElementById("playSoundLink");
var audio = document.getElementById("myAudio");

// Add a click event listener to the link
playSoundLink.addEventListener("click", function () {
    // Play the audio
    audio.play();
})



// Q6
var openWindowLink = document.getElementById("openWindowLink");
openWindowLink.addEventListener("click", function (event) {
    event.preventDefault();
    window.open("https://www.google.com", "_blank");
});

// Q7
// Done in html

// Q8
function mouseover1() {
    var colorChange2 = document.getElementById("over-clr-change2")
    colorChange2.style.backgroundColor = "Green"
}
function mouseout1() {
    var colorChange3 = document.getElementById("over-clr-change2")
    colorChange3.style.backgroundColor = "White"
}

// Q10
// Done in html

// Q11 
// Already done in Q3


//  Chapter 49, 50 (Reading and Setting field values)
// Q1
function getdata() {
    console.log(userdata.value)

}

// Q2
var checkbox = document.getElementById("myCheckbox");
checkbox.addEventListener("change", function () {
    isChecked = checkbox.checked;
    console.log("Checkbox value: " + isChecked);
});

// Q3
var selectBox = document.getElementById("mySelect");


selectBox.addEventListener("change", function () {
    var selectedValue = selectBox.value;
    console.log("Selected value: " + selectedValue);
});


// Q4
var textField = document.getElementById("customTextField");
console.log("Text field value: " + textField.value);

// Q5
function updateStatus() {
    var maritalStatus = document.getElementById("maritalStatus").value;
    var statusField = document.getElementById("status");

    if (maritalStatus === "false") {
        statusField.value = "available";
    } else {
        statusField.value = "";
    }
}

var maritalStatusSelect = document.getElementById("maritalStatus");
maritalStatusSelect.addEventListener("change", updateStatus);
updateStatus();


// Q6
var inputField = document.getElementById("myInput");


inputField.addEventListener("blur", function() {
   
    if (inputField.value === "") {
           inputField.value = "Default Text";
    }
});

// Q7
function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

   
    if (username === "" || email === "" || password === "" || confirmPassword === "") {
        alert("All fields are required");
        return false;
    }

       if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

       return true;
}
