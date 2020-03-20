import React, {Fragment} from 'react'

import { css } from "@emotion/core";
import PacmanLoader from "react-spinners/PacmanLoader";

let override = css(`
    margin: 5px 0;
    display: block;
    border-color: gold;
`);

const Spinner = (width,height) =>{


    console.log(typeof css)
    return (
        <Fragment>
            <PacmanLoader
                css={override}
                width={width|12}
                height={height|12}
                size={width|12}
                color={`gold`}
                loading={true}
            />
        </Fragment>
    );
};

export default Spinner;