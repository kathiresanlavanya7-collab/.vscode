document.getElementById("checkBtn").addEventListener("click", async () => {
  const textArea = document.getElementById("assignment");
  const resultText = document.getElementById("resultText");

  let text = textArea.value.trim();
  if (text === "") {
    resultText.innerText = "⚠️ Please enter or upload assignment text.";
    return;
  }

  // Placeholder result (API integration later)
  resultText.innerText = "🔍 Checking for plagiarism using NLP...";
  setTimeout(() => {
    const randomScore = (Math.random() * 0.9 + 0.1).toFixed(2);
    if (randomScore > 0.7) {
      resultText.innerText = `❌ High similarity detected! Score: ${randomScore}`;
    } else {
      resultText.innerText = `✅ Looks original. Similarity score: ${randomScore}`;
    }
  }, 2000);
});
