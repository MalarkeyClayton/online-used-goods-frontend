// components/Chatbot.tsx

import React from 'react';

const Chatbot: React.FC = () => {
    return (
        <div>
            <iframe
                className="sitespeak-ai-chatbot"
                src="https://chatbot.sitespeak.ai/embed/ec113f62-9ce1-4524-8e98-bb5357efab53?nc"
                allow="microphone;"
                frameBorder="0"
                style={{
                    position: 'fixed',
                    bottom: '110px',
                    right: '70px',
                    overflow: 'hidden',
                    borderRadius: '5px',
                    width: '450px',
                    height: '600px',
                    border: '1px solid #e2e8f1',
                    zIndex: 30,
                }}
            />
        </div>
    );
};

export default Chatbot;