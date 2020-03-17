import React from 'react'
import ReactDOM from 'react-dom'

import Home from './components/Home'

if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(<Home />, document.getElementById('app'));

(()=>{
    console.clear();
})()
