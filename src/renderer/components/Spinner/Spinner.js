import React, {Fragment} from 'react'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const Spinner = (timeout,width,height) =>{
    return (
        <Fragment>
            <Loader
                type="Bars"
                color="#00BFFF"
                height={height|12}
                width={width|12}
                timeout={timeout|3000}
            />
        </Fragment>
    );
};

export default Spinner;