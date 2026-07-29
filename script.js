const adviceNumber = document.getElementById("advice-number");
const adviceContent = document.getElementById("advice-content");
const diceBtn = document.getElementById("dice-btn");
getAdvice();
async function getAdvice() {
  diceBtn.disabled = true;

  try {
    adviceNumber.textContent = "...";
    adviceContent.textContent = "Loading advice...";
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    adviceNumber.textContent = data.slip.id;
    adviceContent.textContent = `"${data.slip.advice}"`;
  } catch (error) {
    adviceNumber.textContent = "--";
    adviceContent.textContent = "Failed to load advice.";

    console.error(error);
  } finally {
    diceBtn.disabled = false;
  }
}

diceBtn.addEventListener("click", () => {
  getAdvice();
});
