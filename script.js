const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", function () {
    if (textInput.value.trim() === "") {
       alert("Please enter some text.");
       return;
    }
    const text = textInput.value;
    const isPalindrome = checkPalindrome(text);
    result.textContent = isPalindrome ? `${text} is a palindrome!` : `${text} is not a palindrome.`;
});

function checkPalindrome(str) {
    const cleaned = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
    const reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
}