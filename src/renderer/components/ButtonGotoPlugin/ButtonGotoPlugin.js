import React,{Fragment} from 'react'

import './ButtonGotoPlugin.scss';

import icon from 'Static/img/tux.ico'

const ButtonGotoPlugin = () =>{

    const onClick = (e) =>{
        window.ipcRenderer.send('goto-plugin-page',null);
    }

    return (
        <Fragment>
            <button className='btn-goto-plugin' onClick={(e)=>onClick(e)}>Go to page configured in plugin.txt</button>
            <img src={icon}/>
        </Fragment>
    )
}

export default ButtonGotoPlugin;