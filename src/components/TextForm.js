import React,{useState} from 'react'

export default function TextForm(props) {

  function handleUpClick(){
    // console.log("handleClick is enabled");
    let newText=text.toUpperCase();
    setText(newText);
    newText && props.showAlert("Converted to Upper case !","success");
  }

  function handleLowClick(){
    // console.log("handleClick is enabled");
    let newText=text.toLowerCase();
    setText(newText);
    newText && props.showAlert("Converted to Lower case !","success");
  }

  function capitalizeText(){
    let newText=String(text).charAt(0).toUpperCase() + String(text).slice(1);
    setText(newText);
    newText && props.showAlert("The Text is capitalize !","success");
  }

  function clearText(){
    let newText="";
    setText(newText);
    newText && props.showAlert("The whole Text is Cleared !","danger");
  }

  function toSentenceCase() {
    // Convert entire text to lowercase first
    let newText = text.toLowerCase();

    // Capitalize first letter of the string
    newText = newText.charAt(0).toUpperCase() + newText.slice(1);

    // Capitalize after sentence endings (. ! ?)
    newText = newText.replace(/([.!?]\s*)([a-z])/g, (match, p1, p2) => {
      return p1 + p2.toUpperCase();
    });

    // Capitalize standalone "i"
    newText = newText.replace(/\bi\b/g, "I");

    setText(newText);
    newText && props.showAlert("The text is capitalized !","success");
  }

  function copyText(){
    navigator.clipboard.writeText(text);
    if(text!=="")
      props.showAlert("The text is copied !","success");
  }

  function downloadText() {
    // Create a Blob from the text state
    const blob = new Blob([text], { type: "text/plain" });

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "myTextFile.txt"; // file name

    // Programmatically click the link to trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    props.showAlert("Text downloaded !","succces");
  }

  function webSearch(){
    const query=encodeURIComponent(text);
    window.open(`https://www.google.com/search?q=${query}`,"_blank");
  }

  function keyDownEvent(event){
    if(event.key==="Enter" && event.shiftKey)
    {
      event.preventDefault();
      webSearch();
    }
  }

  function removeSpaces(){
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    text.length>1 && props.showAlert("The extra spaces are removed !","success");
  }

  function handleChange(event){
    //  console.log("onChnage is enabled");
     setText(event.target.value);
  } 

  const [text,setText]=useState('');


  return (
    <>
      <div className='container' style={{color : props.mode==='light' ? 'black' : 'white'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
              <textarea className="form-control" onChange={handleChange} onKeyDown={keyDownEvent} value={text}
              style={{backgroundColor: props.mode==='light' ? 'white' : 'grey',color : props.mode==='light' ? 'black' : 'white'}} 
              id="exampleFormControlTextarea1" rows="8"></textarea>
          </div>
          <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert To UpperCase</button>
          <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert To LowerCase</button>
          <button className='btn btn-primary mx-2' onClick={capitalizeText}>Capitalize Text</button>
          <button className='btn btn-primary mx-2' onClick={removeSpaces}>Remove Extra Spaces</button>
          <button className='btn btn-primary mx-2' onClick={toSentenceCase}>Sentence Case</button>
          <button className='btn btn-primary mx-2' onClick={clearText}>Clear</button>
          <button className='btn btn-primary mx-2' onClick={copyText}>copy</button>
          <button className='btn btn-success mx-2' onClick={downloadText}>Download</button>
          <button className='btn btn-info mx-2' onClick={webSearch}>Web Search</button>
      </div>

      <div className='container my-3' style={{color : props.mode==='light' ? 'black' : 'white'}}>
        <h2>Text Summary</h2>
        <p><b>{text==="" ? 0 : text.split(" ").length} </b>words and <b>{text.length}</b> characters</p>
        <p><b>{0.008 * text.split(" ").length} </b>Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Enter your text above to preview it here"}</p>
      </div>
    </>
  )
}
