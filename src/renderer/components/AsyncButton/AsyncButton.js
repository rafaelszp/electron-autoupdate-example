import React, {Fragment, useState} from 'react'

import './asyncButton.scss'

const AsyncButton = () => {
    const [count, setCount] = useState(0);
    const click = () => {
        setCount(count + 1);
    };

    return (
        <Fragment>
            <a href="#"  onClick={()=>click()} className='async-button'>This is an async button</a>
            {
                count > 0 &&
                (<div>
                    <span>You've clicked the async button {count} times. ( ͡• ͜ʖ ͡•)</span>
                </div>)
            }
        </Fragment>
    );
};

export default AsyncButton;