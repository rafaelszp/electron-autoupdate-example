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
app.whenReady().then(() => {

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
        console.log('production')
    }

    console.log(process.env);
    mainWindow = new BrowserWindow({
        show: true
    });
    mainWindow.loadURL(pluginContent);
    mainWindow.maximize();
    mainWindow.on('close', () => {
        mainWindow.destroy();
        app.quit();
    })
});