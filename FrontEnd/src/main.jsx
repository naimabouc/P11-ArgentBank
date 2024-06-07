import React from 'react'
import ReactDOM from 'react-dom/client'

import './main.css'
import App from './App'
import { mainStore } from '../src/redux/store'
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={mainStore}>
    
    
     <App />
     
     </Provider>
  </React.StrictMode>,
)
