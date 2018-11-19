const {app, BrowserWindow} = require('electron')
const backgroundColorDark = '#002868'

createWindow = () => {
    mainWindow = new BrowserWindow({width: 500, height: 500, backgroundColor: backgroundColorDark})
    mainWindow.loadFile('index.html')
};

app.on('ready', createWindow);

app.on('close', function() {
    window = null
})