import React, { Fragment } from 'react'

import DummyButton from 'components/DummyButton'
import ButtonGotoPlugin from 'components/ButtonGotoPlugin';
import Footer from 'components/Footer';

const Home = () => {
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
            </main>
            <Footer/>
        </Fragment>
    )
}

export default Home;