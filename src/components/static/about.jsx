import React from 'react';
import Markdown from 'react-markdown';
import aboutText from '../../pages.json';

const About = () => {
  return (
    <>
      <Markdown source={aboutText[0].content} escapeHtml={false} />
    </>
  );
};

export default About;
