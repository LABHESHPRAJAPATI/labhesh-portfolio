import { useState, useEffect, useRef } from 'react';

/**
 * Typewriter effect for a single string or rotating array of strings.
 */
export function useTypewriter(
  input,
  options = {}
) {
  const {
    typingSpeed = 80,
    deletingSpeed = 60,
    pauseDuration = 2000,
    loop = false,
  } = options;

  const strings = Array.isArray(input) ? input : [input];
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!strings.length || !strings[0]) return;

    const current = strings[index];

    const tick = () => {
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));
        if (text === '') {
          setIsDeleting(false);
          if (loop) {
            setIndex((prev) => (prev + 1) % strings.length);
          }
        }
      } else {
        setText(current.slice(0, text.length + 1));
        if (text === current) {
          if (loop || index < strings.length - 1) {
            frameRef.current = setTimeout(() => setIsDeleting(true), pauseDuration);
          }
          return;
        }
      }

      frameRef.current = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed);
    };

    frameRef.current = setTimeout(tick, typingSpeed);

    return () => clearTimeout(frameRef.current);
  }, [strings, index, isDeleting, text, typingSpeed, deletingSpeed, pauseDuration, loop]);

  return { text, isDeleting };
}
