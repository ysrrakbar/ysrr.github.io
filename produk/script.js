function showForm() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("formPopup").style.display = "block";
}

function hideForm() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("formPopup").style.display = "none";
}

function submitForm() {
    alert("Form telah dikirim!");
    hideForm();
}