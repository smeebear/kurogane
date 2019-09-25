function helloWorld() {
    mainWindow.loadURL(`file://${__dirname}/hello.html`);
  }

document.querySelector('#btnEd').addEventListener('click', () => {
    helloWorld()
  })