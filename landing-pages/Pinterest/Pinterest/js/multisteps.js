var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
    // This function will display the specified tab of the form ...
    var buttonContainer = document.getElementById("btnContainer")
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    // ... and fix the Previous/Next buttons:

    if (buttonContainer) {
        if (n == 0) {
            const prevBtn = document.getElementById("prevBtn");
            prevBtn.style.display = "none";

        } else {
            document.getElementById("prevBtn").style.display = "inline";
        }
        if (n == (x.length - 1)) {
            buttonContainer.querySelector("#submitBtn").style.display = "inline";
            buttonContainer.querySelector("#nextBtn").style.display = "none";

        } else {
            buttonContainer.querySelector("#submitBtn").style.display = "none";
            buttonContainer.querySelector("#nextBtn").style.display = "inline";
        }
    }

    // ... and run a function that displays the correct step indicator:
    fixStepIndicator(n)
}

function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form... :
    if (currentTab >= x.length) {
        //...the form gets submitted:
        document.getElementById("msForm").submit();
        return false;
        { }
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
}

function validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value == "") {
            // add an "invalid" class to the field:
            y[i].className += " invalid";
            // and set the current valid status to false:
            valid = false;
        }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status
}

function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class to the current step:
    x[n].className += " active";
}

function sendForm() {
    const form = document.querySelector('#msForm');
    const btnSubmit = form.querySelector('#submitBtn');

    btnSubmit.setAttribute("disabled", "true");

    //if (Landing.verificarValidacion()) {
    if (form.checkValidity()) {
        //$('button[type=submit]').hide();
        var data = {
            "webhookID": $('#hdnFormID').val(),
            "firstName": document.getElementById("firstName").value,
            "lastName": document.getElementById("lastName").value,
            "phone": document.getElementById("phone").value,
            "email": document.getElementById("email").value,
           "timeToReach": document.getElementById("timeToReach").value,
        "destinationID": 5
    };
    let url_string = window.location.href
    let url = new URL(url_string);
    let chat = url.searchParams.get("chat");


    if (chat !== null) {
        data.webhookID = "78aa7ac4-89ee-e6ef-2708-c565ff4fd746";
    }
    axios.post('https://developers.eplat.com/api/webhooks/incoming/genericjson/newlead?code=80f32f6123104d09a72c000047564e51', data)
        .then(function (response) {
            $('button[type=submit]').show();
            window.location.replace($('#hdnConfirmation').val());
            window.location = window.location.href.replace('pinterest-form.html', 'confirmation.html');
            btnSubmit.removeAttribute("disabled");

        })
        .catch(function (error) {
            console.log(error);
        });

} else {
    form.classList.add('was-validated');
    btnSubmit.removeAttribute("disabled");
}
}