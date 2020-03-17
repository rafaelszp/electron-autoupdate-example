import React, { Fragment } from 'react'

import DummyButton from 'components/DummyButton'
import ButtonGotoPlugin from 'components/ButtonGotoPlugin';

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