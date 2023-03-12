import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        // console.log("OnChange");
        setText(event.target.value);
    }

    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleclearClick = () =>{
        let newText = '';
        setText(newText);
    }

    const [text, setText] = useState( '');
    // text = "new"; //Wrong way to change the text
    // setText("new text"); //Correct way to change the text

    return (

        <>
        <div class = "container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control my-4" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-2 " onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 " onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2 " onClick={handleclearClick}>Clear Text</button>
        </div>
        <div className="container my-4 ">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} Words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
