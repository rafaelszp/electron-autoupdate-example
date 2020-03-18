import React,{Fragment} from 'react'

import './ButtonGotoPlugin.scss';
import path from 'path'

const ButtonGotoPlugin = () =>{

    const onClick = (e) =>{
        window.ipcRenderer.send('goto-plugin-page',null);
    }

    return (
        <Fragment>
            <div className='btn-goto-plugin' onClick={(e)=>onClick(e)}>
                <div className="spacer"/>
    <a href="#" onClick={(e)=>onClick(e)}>Go to page configured in<br/>{__static+path.sep+'plugins'+path.sep}plugin.txt</a>
            </div>
        </Fragment>
    )
}

export default ButtonGotoPlugin;