// components/Typewriter.js
import React, { useState, useEffect } from "react";

const Typewriter = ({
  text = "",
  typingSpeed = 40,
  deletingSpeed = 20,
  pauseAfterTyping = 2000,
  loop = true,
  className = "",
}) => {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingTimeout;

    const handleTyping = () => {
      const current = text.substring(0, typedText.length + (isDeleting ? -1 : 1));
      setTypedText(current);

      if (!isDeleting && current === text) {
        if (loop) {
          typingTimeout = setTimeout(() => setIsDeleting(true), pauseAfterTyping);
        }
      } else if (isDeleting && current === "") {
        setIsDeleting(false);
      } else {
        typingTimeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
      }
    };

    typingTimeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [typedText, isDeleting, text, typingSpeed, deletingSpeed, pauseAfterTyping, loop]);

  return (
    <span className={className}>
      {typedText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default Typewriter;
