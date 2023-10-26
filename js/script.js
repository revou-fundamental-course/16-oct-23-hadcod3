function generateForm() {
    const gmtDateTime = new Date().toUTCString('id-ID');
    const nameConfirmed = document.getElementById("nameValue").value
    const birthConfirmed = document.getElementById("birthValue").value
    const genderChecked = document.getElementsByName('gender');
    const messageConfirmed = document.getElementById("messageValue").value
    document.getElementById("date-confirmed").innerHTML = gmtDateTime
    document.getElementById("name-confirmed").innerHTML = nameConfirmed
    document.getElementById("birth-confirmed").innerHTML = birthConfirmed
    for (i = 0; i < genderChecked.length; i++) {
        if (genderChecked[i].checked) {
            document.getElementById("gender-confirmed").innerHTML = genderChecked[i].value;
        }
    }
    document.getElementById("message-confirmed").innerHTML = messageConfirmed

}