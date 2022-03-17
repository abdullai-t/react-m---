import React from 'react';
import './style.css';
import ApiCallHandler from './send';
let url = 'http://127.0.0.1:8000/api/tasks.create';

export default function App() {
  const sendData = async () => {
    let data = {
      name: 'Send Nice Email',
      job_name: 'send_email',
      recurring_interval: 'ONE_OFF',
      recurring_details: JSON.stringify({
        day_of_month: '*',
        day_of_week: '4',
        month_of_year: '*',
        minute: '35',
        hour: '21',
      }),
    };

    let res = await ApiCallHandler.send(url, 'POST', data);
    console.log('====== RES ======', res);
  };
  return (
    <div>
      <h1 onClick={() => sendData()}>CREATE TASK</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
