import { useState } from "react";
import "./App.css";
import ChatInput from "./compontents/ChatInput";
import ChatResponse from "./compontents/ChatResponse";

function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleQuestionSubmit = async (question) => {
    setLoading(true);
    setResponse(null);
    try {
      //Await
    } catch (error) {
      alert("Failed to get Response");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="App">
        <header className="bg-primary text-white text-center py-4">
          <h1>Gemini AI ChatBot</h1>
        </header>
        <ChatInput onSubmit={handleQuestionSubmit} />
        <ChatResponse response={response} />
      </div>
    </>
  );
}

export default App;
