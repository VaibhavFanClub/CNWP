function formValidation() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let address = document.getElementById("address").value;
    if (name === "" && email === "" && password === "" && address === "") {
        alert("Please fill in all fields");
        return false;
    }
    alert("Form submitted successfully");
    return true;
}