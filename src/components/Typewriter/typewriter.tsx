import { useEffect, useState } from "react";

export const Typewriter = (props: any) => {
  const [text, setText] = useState('');
  const [cursor, setCursor] = useState(false)

  const writer = (text: string, i = 0) => {
    if (i < text.length) {
      setCursor(true)
      setText(text.slice(0, i + 1));
      setTimeout(() => writer(text, i + 1), 100)
    } else if (i >= text.length && props?.hide) {
      setCursor(false)
    }
  };

  useEffect(() => {
    setTimeout(() => writer(props.text), props?.delay ?? 200)
  }, [props.text]);

  return (

    <div>
      {text}{cursor && (
        <span className="animate-animar-cursor text-xl md:text-2xl ml-1 font-medium">
          |
        </span>
      )}
    </div>
  );
}
