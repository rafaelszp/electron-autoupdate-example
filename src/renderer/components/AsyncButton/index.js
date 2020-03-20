import React from 'react';
import {asyncComponent} from 'react-async-component';
import Spinner from '../Spinner';

const randomLoadTime = parseInt(Math.random()*3000);

export default asyncComponent({
    resolve: async () => {
        const wait = new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(import('./AsyncButton'));
                console.log(`Loading completed after ${randomLoadTime}s`)
            },randomLoadTime);

        });
        return await wait;
    },
    LoadingComponent: () => (<Spinner/>)
});