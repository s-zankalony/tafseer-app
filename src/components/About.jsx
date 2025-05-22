import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const About = () => {
  const [mainContent, setMainContent] = useState('');
  const [lastLine, setLastLine] = useState('');

  useEffect(() => {
    fetch(new URL('../assets/about_text.md', import.meta.url))
      .then((res) => res.text())
      .then((text) => {
        const trimmedText = text.trim();
        const lines = trimmedText.split('\n');
        if (lines.length > 0) {
          const last = lines.pop() || ''; // Ensure last is always a string
          setLastLine(last);
          setMainContent(lines.join('\n'));
        } else {
          setMainContent(trimmedText); // Handle case of empty text
          setLastLine('');
        }
      })
      .catch(console.error);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-green-800 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-700">
        عن الموقع
      </h1>
      <div className="prose prose-lg text-xl max-w-4xl text-right font-amiri-bold bg-white rounded-lg shadow-md p-6 md:p-8">
        <ReactMarkdown>{mainContent}</ReactMarkdown>
        {lastLine && (
          <div className="not-prose text-center mt-4">
            <ReactMarkdown
              components={{
                p: ({ node, ...props }) => (
                  <p className="text-center font-amiri-bold" {...props} />
                ),
              }}
            >
              {lastLine}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
