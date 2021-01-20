const cardMessage = document.getElementById('cardMessage');

const userText = document.getElementById('userText');

const updateText = () => {
  console.log('ola');
  cardMessage.innerHTML = userText.value;
}

const changeTextColor = (selectedColor) => {
  cardMessage.style.color = selectedColor
}
