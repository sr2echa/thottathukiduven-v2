// const urlToOpen = 'chrome://extensions/';

window.addEventListener('message', (event) => {
  // Ensure the message is coming from the web page
  if (event.source === window) {
    const { msg } = event.data;
    if (msg === 'pageReloaded' || msg === 'openNewTab' || msg === 'windowFocus') {
      const action = msg === 'pageReloaded' ? 'pageReloaded' :
                     msg === 'openNewTab' ? 'openNewTab' : 'windowFocus';

      const message = { action, key: event.data.currentKey };
      // if (action === 'openNewTab') message.url = urlToOpen;

      chrome.runtime.sendMessage(message);

    }
  }
});

window.addEventListener('beforeunload', removeInjectedElement);

function sendMessageToWebsite(message) {
  removeInjectedElement();

  const newElement = document.createElement('span');
  newElement.id = `x-template-base-${message.currentKey}`;
  document.body.appendChild(newElement);

  // window.postMessage(message.enabledExtensionCount, message.url);
  console.log('message', message);
  window.postMessage(0, message.url);
}

function removeInjectedElement() {
  const elementToRemove = document.querySelector('[id^="x-template-base-"]');
  if (elementToRemove) {
    elementToRemove.remove();
  }
}

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'getUrlAndExtensionData') {
    if (message.url) {
      sendMessageToWebsite(message);
    }
  } else if (message.action === 'removeInjectedElement') {
    removeInjectedElement();
  }
});
