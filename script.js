const randomAdviceBtn = document.querySelector('.advice-generator')
const adviceHeader = document
  .getElementById('advice-container')
  .querySelector('h5')
  .querySelector('span')
const advicePara = document
  .getElementById('advice-container')
  .querySelector('p')

async function fetchAdvice(URL) {
  const genrateResponse = await fetch(URL)
  const adviceData = await genrateResponse.json()

  adviceHeader.innerText = `${adviceData?.slip?.id}`
  advicePara.innerText = `${adviceData?.slip?.advice}`
}

function generateRandomAdvice() {
  const adviceURL = `https://api.adviceslip.com/advice`
  fetchAdvice(adviceURL)
}

randomAdviceBtn.addEventListener('click', generateRandomAdvice)
document.addEventListener('DOMContentLoaded', generateRandomAdvice)

if(window.innerWidth <= 428) {
  document
    .querySelector('.divider')
    .querySelector('img')
    .setAttribute('src', '/images/pattern-divider-mobile.svg')
}