import { useState } from "react";
import "./App.css";
import ChatInput from "./compontents/ChatInput";
import ChatResponse from "./compontents/ChatResponse";
import { fetchChatResponse } from "./assets/service/api";

function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleQuestionSubmit = async (question) => {
    setLoading(true);
    setResponse(null);
    try {
      const apiResponse = await fetchChatResponse(question);
      setResponse(apiResponse);
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
        {loading && <h3>Loading....</h3>}
        <ChatResponse response={response} />
      </div>
    </>
  );
}

export default App;
