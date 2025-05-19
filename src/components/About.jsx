import React, { useState, useEffect } from 'react';

const About = () => {
  const [aboutText, setAboutText] = useState('');

  useEffect(() => {
    fetch(new URL('../assets/about_text.md', import.meta.url))
      .then((res) => res.text())
      .then(setAboutText)
      .catch(console.error);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-green-800 text-center p-4">
      <h1 className="text-3xl font-bold mb-4">عن الموقع</h1>
      <div className="prose text-right whitespace-pre-wrap text-lg leading-relaxed max-w-prose font-amiri-bold">
        {aboutText}
      </div>
    </div>
  );
};

export default About;
