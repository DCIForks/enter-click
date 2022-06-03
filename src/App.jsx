/**
 * Demonstration of how to use Enter as a shortcut for a button click.
 */


import React, { useState } from 'react';


const App = () => {
  // Store the current text in the input field
  const [ text, setText ] = useState("")
  // Do something with the text when it is validated
  // by Enter or a click on the button
  const [ validatedText, setValidatedText ] = useState("")
    

  // Update `text` as the user types
  const updateText = event => {
    setText(event.target.value)
  }


  // Check on every keydown event if the user press Enter.
  // If so, call the same function as is called by a click
  // on the button, and prevent the Enter key from updating
  // the field
  const checkForEnter = event => {
    if (event.key === "Enter") {
      event.preventDefault()
      treatClick()
    }
  }


  // Called by checkForEnter or by a click on the button.
  // If the button was clicked, `event` will be a click event
  // object
  const treatClick = (event) => {
    event?.preventDefault()
    // Do whatever 
    setValidatedText(text)
  }
  

  return (
    <main>
     <form action="">
       <label htmlFor="texting">
         Press Enter to activate:
         <br />
         <input
           type="text"
           id="texting"
           name="text"
           onKeyDown={checkForEnter}
           onChange={updateText}
        />
       </label>
       <br />
       <button
         onClick={treatClick}
       >
         Or Click Here
       </button>
     </form>
     <p>You validated the text: <b>{validatedText}</b></p>
    </main>
  );
}

export default App;

