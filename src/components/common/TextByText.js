import React, { useState, useEffect, useCallback } from 'react';

const TextByText = ({ defaultText, time }) => {
  const LOADING_TEXT = defaultText;
  const [text, setText] = useState('');

  const animaLoading = useCallback(() => {
    const textLen = text.length;
    setText((preText) => (textLen >= LOADING_TEXT.length ? '' : preText + LOADING_TEXT[textLen]));
  }, [LOADING_TEXT, text.length]);

  useEffect(() => {
    const timer = window.setInterval(() => animaLoading(), time);
    return () => {
      window.clearInterval(timer);
    };
  }, [animaLoading, time]);

  return <>{text}</>;
};

export default TextByText;
