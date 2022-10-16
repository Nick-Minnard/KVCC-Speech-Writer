
function deleteSpeech(speechId) {
  // Make a post to the delete speech route
  let c = confirm("Are you sure you want to DELETE this speech?");
  if(c) {
    fetch('/delete-speech', {
      method: 'POST',
      body: JSON.stringify({ speechId: speechId })
    })
    .then((_res) => {
      window.location.href = "/";
    })
  } else {
    return;
  }
}

function updateTitle(speechId) {
  // Make a post to the update speech title route
  let new_title = prompt('Enter new title: ');
  if(new_title.trim().length > 1) {
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
  // Make a post to the load speech route
  fetch('/load-speech', {
    method: 'POST',
    body: JSON.stringify({ speechId: speechId })
  })
  .then((_res) => {
    window.location.href = "/editor";
  })
}
