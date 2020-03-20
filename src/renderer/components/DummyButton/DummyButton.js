import React, {Fragment} from 'react'

const DummyButton = () =>{

    const onClick = (e) =>{
        console.log('A dummy click',e);
        alert('A dummy alert');
    }

    return (
        <Fragment>
            <button onClick={(e)=>onClick(e)}>A dummy button</button>
        </Fragment>
    )
}

export default DummyButton;