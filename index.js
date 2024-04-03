function generatePasswords() {
    generatePassword('result1', 'randomfield1');
    generatePassword('result2', 'randomfield2');
}

function generatePassword(resultId, randomFieldId) {
    const length = document.getElementById("strlength").value;
    const includeSpecialChars = document.getElementById("includeSpecialChars").checked;
    const resultElement = document.getElementById(resultId);
    const randomFieldElement = document.getElementById(randomFieldId);

    resultElement.value = includeSpecialChars ? generatePasswordWithSpecialChars(length) : generatePasswordWithoutSpecialChars(length);
    randomFieldElement.innerText = resultElement.value;
}

function generatePasswordWithSpecialChars(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()-_=+";
    return generateRandomString(characters, length);
}

function generatePasswordWithoutSpecialChars(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    return generateRandomString(characters, length);
}

function generateRandomString(characters, length) {
    let result = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}

function copyToClipboard(elementId) {
    const copyText = document.getElementById(elementId);
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}
