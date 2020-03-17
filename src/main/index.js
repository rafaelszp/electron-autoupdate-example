const { app, BrowserWindow, autoUpdater } = require('electron');
const isDev = require('electron-is-dev');
const fs = require('fs')
const path = require('path')

// const staticPath = isDev ? __dirname.replace(/src[\\||\/]main/g,'static'): __dirname.replace(/app\.asar/g,'static');
// const pluginsFolder = path.join(staticPath,path.sep,'plugins')
const pluginsFolder = path.join(__static, path.sep, 'plugins')
const pluginPath = path.join(pluginsFolder, path.sep, 'plugin.txt');
console.log('loading from ', pluginPath);

const pluginContent = fs.readFileSync(pluginPath, 'utf8');
console.log(pluginContent);

let mainWindow;

//Instructions: https://gist.github.com/iffy/0ff845e8e3f59dbe7eaf2bf24443f104
const checkForUpdates = () => {
    if (!isDev) {
        const { autoUpdater } = require("electron-updater")
        autoUpdater.logger = require("electron-log")
        autoUpdater.logger.transports.file.level = "info"

        autoUpdater.on('update-downloaded', (ev, info) => {
            // Wait 5 seconds, then quit and install
            // In your application, you don't need to wait 5 seconds.
            // You could call autoUpdater.quitAndInstall(); immediately
            setTimeout(function () {
                autoUpdater.quitAndInstall();
            }, 5000)
        });

        autoUpdater.checkForUpdates();

    } else {
        console.log('development')
    }
}

app.whenReady().then(() => {

    checkForUpdates();

    console.log(process.env);
    mainWindow = new BrowserWindow({
        show: true
    });
    // mainWindow.loadURL(pluginContent);
    if (isDev) {
        mainWindow.webContents.openDevTools();
        mainWindow.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`)
    } else {
        mainWindow.loadURL(formatUrl({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file',
            slashes: true
        }))
    }
    mainWindow.maximize();
    mainWindow.on('close', () => {
        mainWindow.destroy();
        app.quit();
    })
});

if (module.hot) {
    module.hot.accept();
}