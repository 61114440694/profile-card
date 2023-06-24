import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles.css"

function MyDateTime() {
    let date1 = new Date()
    date1 = toThaiDateString(date1)
    return <div> {date1} </div>
}

function App() {

    return (
        <>
            <div className='card'>
                <Avatar/>
                <div className='data'>
                    <Intro/>
                    <SkillList />
                </div>
            </div>
            {/* <MyDateTime/> */} </>
    )
}

function SkillList() {
  return(<>
  <div className='skill-lists'>
    <Skill skill="Javascript" emoji="😈" color="green"/>
    <Skill skill="CSS" emoji="☝️" color="blue"/>
    <Skill skill="HTML" emoji="👍" color="purple"/>
    <Skill skill="Java" emoji="🐷" color="pink"/>
  </div>
  </>)
}

function Skill(props) {
    return (
        <>
            <div className='skill' style={{backgroundColor : props.color}}></div>
        <span>{props.skill}</span>
        <span>{props.emoji}</span>
        </>
    )
}

function Intro() {
    return (
        <div>
            <h1>นายศักรินทร์ หาญชนะพล</h1>
            <p>
                นักเรียน ป.โท สาขาเทคโนโลยีสารสนเทศและดิจิตัล คณะวิทยาศาสตร์ มหาวิทยาลัยอุบลราชธานี
                                เวลาว่างๆ ชอบนั่งดูหนังแอคชั่น หรือ ไม่ก็เล่นเกม แนวเกมที่เล่นเป็นแบบ โมบ้า และ แนวกีฬา
            </p>
        </div>
    )
}

function Avatar() {
    return <img className='avatar' src='Sakkarin.jpg' alt='ok mai mi photo'/>;
}

function toThaiDateString(date) {
    let monthNames = [
        "มกราคม",
        "กุมภาพันธ์",
        "มีนาคม",
        "เมษายน",
        "พฤษภาคม",
        "มิถุนายน",
        "กรกฎาคม",
        "สิงหาคม.",
        "กันยายน",
        "ตุลาคม",
        "พฤศจิกายน",
        "ธันวาคม",
    ];

    let year = date.getFullYear() + 543;
    let month = monthNames[date.getMonth()];
    let numOfDay = date.getDate();

    let hour = date.getHours().toString().padStart(2, "0");
    let minutes = date.getMinutes().toString().padStart(2, "0");
    let second = date.getSeconds().toString().padStart(2, "0");
    return `${numOfDay} ${month} ${year} ` + `${hour}:${minutes}:${second} น.`;
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
