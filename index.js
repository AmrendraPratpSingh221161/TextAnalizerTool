document.addEventListener("DOMContentLoaded" , 
function () {
    const analyzerButton = document.getElementById("analyzerButton");
    analyzerButton.addEventListener("click" , analyzeText);
});

function analyzeText() {
    const textInput = document.getElementById("textInput").value;
    const wordCount = textInput.trim().split(/\s+/).length;
    const charCount = textInput.length;
    const sentCount = sentencesCount(textInput);
    let totalWordLength = 0;

    textInput.trim().split(/\s+/).forEach((word) => {
        totalWordLength += word.length;
    });
   
    displayResults(wordCount, charCount , sentCount );

}

function displayResults(wordCount, charCount , sentCount) {
    const wordCountSpan = document.getElementById("wordCount");
    const charCountSpan = document.getElementById("charCount");
    const sentCountSpan = document.getElementById("sentCount");

    wordCountSpan.textContent = wordCount;
    charCountSpan.textContent = charCount;
    sentCountSpan.textContent = sentCount;
}

function sentencesCount(text) {
    
    const sentences = text.split(/[.!?]+/).filter(Boolean);
    return sentences.length;
}
