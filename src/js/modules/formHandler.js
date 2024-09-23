const popupForm = document.getElementById('popup-form');
const popupMessageSuccess = document.querySelector('#popup-success');
const popupMessageError = document.querySelector('#popup-error');

function showMessage(message) {
  message.classList.add('show_true');
  setTimeout(() => {
    message.classList.remove('show_true');
  }, 3000);
}

async function handleFormSubmit(e) {
  e.preventDefault();

  const formData = Object.fromEntries(new FormData(e.target));
  const text = `${formData.name} залишив за'явку на сайті.\nНомер телефону: ${formData.telephone}\nКоментар: ${formData.comment}`
  
  const body = JSON.stringify({
    chat_id: 615227262,
    text: text,
  });

  return await fetch('https://api.telegram.org/bot7863398253:AAFqqKpCoOw0lPVpkiMxlOq0bvmJ3Udi_74/sendMessage', { 
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: body,
  });
}

popupForm.addEventListener('submit', async (e) => {
  const result = await handleFormSubmit(e);
  if (result.ok) {
    showMessage(popupMessageSuccess);
    e.target.reset();
  } else {
    showMessage(popupMessageError);
  }
});

const callbackForm = document.querySelector('#callback');
const callbackMessageSuccess = document.querySelector('#callback-success');
const callbackMessageError = document.querySelector('#callback-error');

callbackForm.addEventListener('submit', async (e) => {
  const result = await handleFormSubmit(e);
  if (result.ok) {
    showMessage(callbackMessageSuccess);
    e.target.reset();
  } else {
    showMessage(callbackMessageError);
  }
});