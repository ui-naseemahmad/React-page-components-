import React from 'react';
import { add, sub, mul, div } from './Calc';
import Cards from './Cards';
import Data from './Sdata';
// import IncNum from './IncNum';
import GetTime from './GetTime';



const fname = 'Second';
const lname = 'Heading';
const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();
let curDate = new Date();
curDate = curDate.getHours();
let greet = "";
const cssStyle = {}
if (curDate >= 1 && curDate < 12) {
  greet = "Good Morning";
  cssStyle.color = 'green';
} else if (curDate >= 11 && curDate < 17) {
  greet = "Good Afternoon";
  cssStyle.color = 'orange';
} else if (curDate >= 17 && curDate < 19) {
  greet = "Good Evening";
  cssStyle.color = '#195fdf';
}
else {
  greet = "Good Night";
  cssStyle.color = 'black';
}
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const link1 = "https://google.com";
const internal = {
  color: '#fa9191',
  textTransform: 'capitalize',
  fontSize: '36px',
  fontWeight: 'bold'
}
const greeting = {
  height: '200px',
  width: '100%',
  backgroundColor: '#b4f2e1'

}




function App() {
  return(
  <>
    <h1>This is Heading</h1>
    <p>learn React</p>
    <ol>
      <li>Dark</li>
      <li>Extra Curricular</li>
      <li>Dark</li>
      <li>Extra Curricular</li>
      <li>Dark</li>
    </ol>
    <h2>hi, here  {fname} {lname} </h2>
    <p>Current Date = {currentDate} </p>
    <p>Current Time = {currentTime} </p>
    <hr />
    <p>JSX attribute here</p>
    <p contenteditable='true'>This is contenteditable</p>
    <p style={internal}>how to use inline css in react </p>
    <p className='internalcss'>internal css</p>
    <p>Addition is :  {add(1, 1)}</p>
    <p>Subtraction is :  {sub(4, 1)}</p>
    <p>Multiplication is :  {mul(4, 2)}</p>
    <p>Division is :  {div(4, 2)}</p>
    <img src={img1} alt="img" />
    <img src={img2} alt="img2" />
    <a href={link1} target="_blank"><img src={img3} alt="img3" /></a>
    <hr />
    <div style={greeting} className="grettingSection">
      <p className='greetText'>Hello guyss, <span style={cssStyle}>{greet} </span></p>
    </div>
    <hr />
   
    <div className='card-main'>
      {Data.map((val) => {
        return (
          <Cards
            // imgsrc={val.imgsrc}
            // subheading={val.subheading}
            // heading={val.heading}
            // link={val.link}
            // {...val}
            val = {val}
          />
        );
      })}
    </div>
 
    <GetTime />

  </>
  )
}

export default App;