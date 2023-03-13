import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }
    
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }
    
    const handleclearClick = () =>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }
    
    const handleCopy =() =>{
        // var text = document.getElementById("myBox")
        // document.getSelection().removeAllRanges();
        // text.select();
        navigator.clipboard.writeText(text);
        props.showAlert("copy Text!", "success");
    }
    
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed!", "success");
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
        <div className = "container" style={{color: props.mode==='dark'?'white':'#002040'}} >
            <h1 className='mb-3'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control my-4" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#002040'}} id="myBox" rows="10"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleclearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-4 " style={{color: props.mode==='dark'?'white':'black'}}>
            <h3 >Your Text Summary </h3>
            <p >{text.split(/\s+/).filter((element) =>{return element.length!==0}).length} Words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element) =>{return element.length!==0}).length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"nothing to preview it here"}</p>
        </div>
        </>
    )
}
