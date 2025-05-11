import React, { useState } from 'react';
import { Bot, X } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');

  const predefinedAnswers = {
    'how do i sell my license?': 'To sell your license, click "Get a Quote", upload your license details, and receive your offer.',
    'what is softsell?': 'SoftSell is a platform to help you resell unused software licenses quickly and securely.',
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { sender: 'user', text: input };
    const lowerInput = input.toLowerCase();

    const replyText = predefinedAnswers[lowerInput] || "Sorry, I didn’t understand. Please contact support.";
    const botMsg = { sender: 'bot', text: replyText };

    setMessages([...messages, userMsg, botMsg]);
    setInput('');
  };

  return (
    <div>
     
      {!isOpen ? (
        <button
          className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-blue-700 z-10"
          onClick={() => setIsOpen(true)}
        >
          <Bot />
        </button>
      ) : (
        <div className="fixed bottom-4 right-4 w-80 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg flex flex-col z-10">
          
          <div className="flex justify-between items-center bg-blue-600 text-white px-4 py-2 rounded-t-lg">
            <span>Ask SoftSell</span>
            <button onClick={() => setIsOpen(false)}><X /></button>
          </div>

        
          <div className="p-3 h-64 overflow-y-auto space-y-2 text-sm">
            {messages.map((msg, idx) => (
              <div key={idx} className={`p-2 rounded ${msg.sender === 'user' ? 'bg-gray-100 text-gray-600 self-end text-right' : 'bg-gray-200 dark:bg-gray-700'}`}>
                {msg.text}
              </div>
            ))}
          </div>

         
          <div className="flex border-t border-gray-200 dark:border-gray-600">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a question..."
              className="flex-1 p-2 text-sm dark:bg-gray-800 dark:text-white outline-none rounded-bl-lg"
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-3 hover:bg-blue-700 rounded-br-lg"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
