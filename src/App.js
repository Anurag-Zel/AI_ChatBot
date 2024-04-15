import React, { useState } from "react";

function App(){
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  async function clear(){
    setValue("");
    setError("");
    setChatHistory([]);
  }

  async function getResponse(){
    if(!value){
      setError("Error");
      return;
    }

    try{
      const options = {
        method: 'POST',
        body: JSON.stringify({
          history: chatHistory,
          message: value
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const response = await fetch(`http://localhost:8000/gemini`, options);
      const data = await response.text(); 

      setChatHistory(oldChatHistory => [
        ...oldChatHistory,
        {role : "user", parts : [ {text : value} ] },
        {role : "model",  parts : [ {text : data} ] }
      ]);

      setValue("");
      console.log(data);
    }catch(error){
      console.error(error);
      setError("Something went wrong!");
    }
  }

  return (
    <>
      <section className="app">
        <p>
          What do you want to know?
        </p>

        <div className="input-container">
          <input 
            value={value}
            placeholder="Ask me about anything"
            onChange={(e) => setValue(e.target.value)}
          />

          {!error && <button onClick={getResponse}>Ask Me</button>}
          {error && <button onClick={clear}>Clear</button>}          
        </div>

        <div className="search-result">
          {chatHistory.map((chatItems, index) => (
            <div key={index}>
              <p className="answer">
                {chatItems.role}: {chatItems.parts.map((part, partIndex) => (
                  <span key={partIndex}>{part.text}</span>
                ))}
              </p>
            </div>
          ))}

        </div>

      </section>
    </>
  )
}

export default App;