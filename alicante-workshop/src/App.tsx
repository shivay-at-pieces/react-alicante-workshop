import { useState } from "react";

export default function App() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim()) {
      setMessages([...messages, { sender: "You", text: question }]);
      // Here you would typically call your API to get a response
      // For now, let's just add a mock response
      setTimeout(() => {
        setMessages(prev => [...prev, { sender: "AI", text: "This is a mock response." }]);
      }, 1000);
      setQuestion("");
    }
  };

  return (
    <main className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <h1 className="text-3xl font-bold text-center p-4 bg-blue-500 text-white">
          React Alicante Ollama Workshop
        </h1>
        
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.sender === "You" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${message.sender === "You" ? "bg-blue-100" : "bg-gray-200"}`}>
                <p className="font-bold">{message.sender}</p>
                <p>{message.text}</p>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="p-4 border-t">
          <div className="flex space-x-2">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}