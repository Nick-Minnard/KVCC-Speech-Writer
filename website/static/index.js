function deleteSpeech(speechId) {
  fetch('/delete-speech', {
    method: 'POST',
    body: JSON.stringify({ speechId: speechId })
  })
  .then((_res) => {
    window.location.href = "/";
  })
}

function updateTitle(speechId) {
  let new_title = prompt('Enter new title: ');
  if(new_title.length > 1) {
    fetch('/update-speech-title', {
      method: 'POST',
      body: JSON.stringify({ speechId: speechId, newTitle: new_title })
    })
    .then((_res) => {
      window.location.href = "/";
    })
  }
}

function loadSpeech(speechId) {
  fetch('/load-speech', {
    method: 'POST',
    body: JSON.stringify({ speechId: speechId })
  })
  .then((_res) => {
    window.location.href = "/editor";
  })
}