import React, {Fragment} from 'react'

import DummyButton from 'components/DummyButton'
import ButtonGotoPlugin from 'components/ButtonGotoPlugin';
import AsyncButton from "components/AsyncButton";
import Footer from 'components/Footer';


const Home = () => {
    

    const path = require('path')
    const staticFolder = path.resolve(__dirname, 'static/');

    

    return (
        <Fragment>
            <main>
                <div>This is a react application</div>
                <div>
                    <DummyButton/>
                </div>
                <div>
                    <ButtonGotoPlugin/>
                </div>
                <div>
                    <AsyncButton/>
                </div>
                <>
                    <button onClick={()=>window.ipcRenderer.send('goto-viewer',null)}>Viewer</button>
                </>
            </main>
            <Footer/>
        </Fragment>
    )
};

export default Home;