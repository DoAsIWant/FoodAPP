import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


function fetchData() {
    return Promise.all([
        fetch("http://localhost:8081/content").then(res => {
            return res.json()
        }),
        fetch("http://localhost:8081/section").then(res => {
            return res.json()
        })
    ])
}

fetchData()
    .then(data => {
        ReactDOM.render(
            <React.StrictMode>
                <App newData={data}/>
            </React.StrictMode>,
            document.getElementById('root')
        )
    })

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
