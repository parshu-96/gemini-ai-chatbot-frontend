import "./App.css";
import ChatInput from "./compontents/ChatInput";
import ChatResponse from "./compontents/ChatResponse";

function App() {
  return (
    <>
      <div className="App">
        <header className="bg-primary text-white text-center py-4">
          <h1>Gemini AI ChatBot</h1>
        </header>
        <ChatInput />
        <ChatResponse />
      </div>
    </>
  );
}

export default App;
