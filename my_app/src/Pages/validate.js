export default function validate() {
    var x = document.getElementById('email').value;
    var y = document.getElementById('passw').value;

    if (!x || !y) {
        alert("Email and password can't be empty");
        return;
    }

    alert("Success");
}
