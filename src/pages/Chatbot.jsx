import { useState } from 'react';

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');
  };

  return (
    <div className="p-6 text-white flex flex-col h-screen">
      <h1 className="text-2xl font-bold mb-4">?? AI Travel Chatbot</h1>
      <div className="flex-1 bg-gray-800 p-4 rounded overflow-y-auto">
        {messages.map((msg, i) => (
          <div key={i} className={msg.sender === 'user' ? 'text-right mb-2' : 'text-left mb-2'}>
            <span className="inline-block bg-blue-600 px-3 py-2 rounded">{msg.text}</span>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="mt-4 flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 rounded text-black"
        />
        <button type="submit" className="bg-purple-600 px-4 ml-2 rounded">Send</button>
      </form>
    </div>
  );
}
