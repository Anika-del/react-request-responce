import React, {useState} from 'react'

export default function TextForm(props){
    const handleUpClick = ()=>{
        console.log("Uppercse was clicked " + text);
        // setText("You have clicked on handleUpClick")
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here ');
    //for update test Enter text here use setTest("abcxyz");
    return (
    <>
    <h3>{props.heading}</h3>
    <div className="mb-3">
    {/* <label for="myBox" class="form-label">Example textarea</label> */}
    <textarea className="form-control" value={text}  onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert Uppercase</button>
    </>

    )
}