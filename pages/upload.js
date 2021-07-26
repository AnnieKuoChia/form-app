import Header from "../component/header";
import Footer from "../component/footer";
import axios from 'axios';
import React, { useState } from 'react';

export default function Upload(){
    const [name, setName] = useState('');
    const [info, setInfo] = useState('');
    const [link, setLink] = useState('');
    const [endTime, setEndTime] = useState('');

    const handleSubmit = () => {
        const data = {
          name: name,
          info: info,
          endTime: endTime,
          link: link,
        }
        console.log('123');
        
        axios.post('https://hopin.servehttp.com/api/createform', data, {
            withCredentials: true,
        }).then(res => {
            setName('');
            setInfo('');
            setLink('');
            setEndTime('');
        })
    }
    
    return (
        <div className="main">
            <Header />
            <div className="container">
                <div className="uploadArea">
                    <h4 className="formName">上傳問卷</h4>
                    <p className="formTitle">問卷名稱（限 20 字）</p>
                    <input type="text" name="name" onChange={e => setName(e.target.value)} />
                    <p className="formTitle dateTitle">截止日期</p>
                    <input type="date" name="endTime" onChange={e => setEndTime(e.target.value)} />
                    <p className="formTitle">問卷說明（限 500 字）</p>
                    <textarea name="info" rows="30" cols="100" onChange={e => setInfo(e.target.value)} />
                    <p className="formTitle">問卷嵌入連結</p>
                    <input type="text" name="link" onChange={e => setLink(e.target.value)} />
                    <button className="btn" onClick={handleSubmit}>送出</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}



