import React, { Fragment } from 'react'

import DummyButton from '../DummyButton'
import ButtonGotoPlugin from '../ButtonGotoPlugin';

const Home = () => {
    return (
        <Fragment>
            <div>Home</div>
            <div>
                <DummyButton/>
            </div>
            <div>
                <ButtonGotoPlugin/>
            </div>
        </Fragment>
    )
}

export default Home;