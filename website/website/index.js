const { app, BrowserWindow } = require('electron')

function createWindow () {
  
  win = new BrowserWindow({
    opacity: 0.7,
    width: 1000,
    height: 1000,
    frame: false,
    backgroundColor: '#000000',
    webPreferences: {
      nodeIntegration: true
    }
  })
win.loadFile('website/index.html')

// Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})