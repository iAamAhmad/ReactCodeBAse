
import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    function firstCap() {
        let newText = text.toLowerCase()
        let newText2 = newText.charAt(0).toUpperCase() + newText.slice(1);
        setText(newText2)
    }
    const handleEmail = () => {
        let newText = text.split("@");
        let later = newText[1].split(".");
        setText("Your account is on " + later[0] + " And your username could be" + newText[0]);
    }
    const reverseString = () => {
        let newText = text.split('').reverse().join('');
        setText(newText);
    }
    const vowelCheck = () => {
        const count = text.match(/[aero]/gi).length;
        setText("You have " + count + " no of vowels");
    }

    return (
        <>
            <div>
                <div className="mb-3">
                    <h2>{props.heading}</h2>
                    {/* <label for="myBox" className="form-label">Example textarea</label> */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={firstCap}>First letter capital</button>
                <button className="btn btn-primary mx-2" onClick={handleEmail}>Find Email</button>
                <button className="btn btn-primary mx-2" onClick={reverseString}>Reverse Text</button>
                <button className="btn btn-primary mx-2" onClick={vowelCheck}>Vowel Check</button>
            </div>
            <div className="container my-2">
                <h4>Text Summary</h4>
                <p>{text.split(" ").length} words and {text.length}</p>
                <p>{0.00008 * text.split(" ").length} Minutes to read</p>
                <p>{text}</p>
                <p>{text.split(".").length - 1}</p>
            </div>
        </>
    )
}
