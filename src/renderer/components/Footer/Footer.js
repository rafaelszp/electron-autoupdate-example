import React,{Fragment} from 'react'

import {getLocalIPs} from 'common/Util';

const Footer = () =>{

    const renderIPs = () =>{
    const lips = getLocalIPs().map((ip)=>(<li>{ip}</li>))
        return (
            <Fragment>
                <p>Your IP address{lips.length>1?'es are':' is'}: </p>
                <ol>
                    {lips}            
                </ol>
            </Fragment>
        )
    }

    return (
        <Fragment>
            <footer>
                {renderIPs()}
            </footer>
        </Fragment>
    )
}

export default Footer;