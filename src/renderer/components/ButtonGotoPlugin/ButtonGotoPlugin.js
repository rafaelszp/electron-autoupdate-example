import React,{Fragment} from 'react'

const DummyButton = () =>{

    const onClick = (e) =>{
        window.ipcRenderer.send('goto-plugin-page',null);
    }

    return (
        <Fragment>
            <button onClick={(e)=>onClick(e)}>Go to page configured in plugin.txt</button>
        </Fragment>
    )
}

export default DummyButton;