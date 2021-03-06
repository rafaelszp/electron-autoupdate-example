import {format as formatUrl} from 'url'
import {app, BrowserWindow, ipcMain} from 'electron'
import fs from 'fs';
import isDev from 'electron-is-dev';
import path from 'path';


// const staticPath = isDev ? __dirname.replace(/src[\\||\/]main/g,'static'): __dirname.replace(/app\.asar/g,'static');
// const pluginsFolder = path.join(staticPath,path.sep,'plugins')
const pluginsFolder = path.join(__static, path.sep, 'plugins')
const pluginPath = path.join(pluginsFolder, path.sep, 'plugin.txt');
console.log('loading from ', pluginPath);

const pluginContent = fs.readFileSync(pluginPath, 'utf8');
console.log(pluginContent);

let mainWindow;

if(isDev){
    app.commandLine.appendSwitch('remote-debugging-port', '9222')
    app.commandLine.appendSwitch('userDataDir', true)
}

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
        show: true,
        webPreferences: {
            nodeIntegration: true,
            preload: path.resolve(__dirname, 'main_preload.js')
        }
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
    });

    mainWindow.webContents.on('devtools-opened', () => {
        mainWindow.focus()
        setImmediate(() => {
            mainWindow.focus()
        })
    });

    mainWindow.on('closed', () => {
        mainWindow = null
    });

    ipcMain.on('goto-plugin-page',(event,data)=>{
        mainWindow.loadURL(pluginContent);
    });

    ipcMain.on('goto-viewer',(event,data)=>{
        const newLocal = 'file://'+path.resolve(__dirname,`${STATIC_FOLDER}`,'js/pdfjs/web/viewer.html');
        mainWindow.loadURL(newLocal);
        console.log('=>',newLocal)
    });
    
});

if (module.hot) {
    module.hot.accept();
}