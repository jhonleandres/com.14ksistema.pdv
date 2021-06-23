const electron = require("electron")
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require("path")
const isDev = require("electron-is-dev")
require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});
 
require(path.join(__dirname, '../node/index.js'))

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    show: false,
    webPreferences: { 
      nodeIntegration: true 
    }
    
  });
  mainWindow.setMenu(null)
  mainWindow.maximize()
  mainWindow.show()
  mainWindow.setFullScreen(false)
  isDev
  ? mainWindow.loadURL("http://localhost:3000")
  : mainWindow.loadURL(`file://${path.join(__dirname, "../build/index.html")}`)
  // mainWindow.loadURL(`file://${path.join(__dirname, "../build/index.html")}`)

  mainWindow.on("closed", () => (mainWindow = null))
}

app.whenReady().then(createWindow);
// app.on("ready", createWindow)

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit()
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow()
  }
});