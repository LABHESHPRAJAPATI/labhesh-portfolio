import { useState, useEffect, useRef } from 'react';

/**
 * Rotates through an array of strings with a typing/deleting effect.
 */
export function useTypewriter(
  strings,
  options = {}
) {
  const {
    typingSpeed = 100,
    deletingSpeed = 60,
    pauseDuration = 2000,
  } = options;

  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!strings.length) return;

    const current = strings[index];

    const tick = () => {
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));
        if (text === '') {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % strings.length);
        }
      } else {
        setText(current.slice(0, text.length + 1));
        if (text === current) {
          frameRef.current = setTimeout(() => setIsDeleting(true), pauseDuration);
          return;
        }
      }

      frameRef.current = setTimeout(
        tick,
        isDeleting ? deletingSpeed : typingSpeed
      );
    };

    frameRef.current = setTimeout(tick, typingSpeed);

    return () => clearTimeout(frameRef.current);
  }, [strings, index, isDeleting, text, typingSpeed, deletingSpeed, pauseDuration]);

  return { text, isDeleting };
}
