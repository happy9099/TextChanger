import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleclearClick = () =>{
        let newText = '';
        setText(newText);
    }

    const handleCopy =() =>{
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }

    const handleOnChange = (event) => {
        // console.log("OnChange");
        setText(event.target.value);
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
            <button className="btn btn-primary mx-1 " onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 " onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1 " onClick={handleclearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1 " onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1 " onClick={handleExtraSpaces}>Remove Extra Spaces</button>
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
