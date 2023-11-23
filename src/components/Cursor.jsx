import { useEffect } from "react";
import "../assets/css/Cursor.css";
import { useRef } from "react";

function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      if (cursor) {
        cursor.setAttribute(
          "style",
          "top: " + (e.clientY - 10) + "px; left: " + (e.clientX - 10) + "px;"
        );
      }
    };

    document.addEventListener("mousemove", (e) => {
      moveCursor(e);
    });

    document.addEventListener("click", () => {
      if (cursor) {
        cursor.classList.add("expand");

        const timeout = setTimeout(() => {
          cursor.classList.remove("expand");
          clearTimeout(timeout);
        }, 300);
      }
    });
  }, [cursorRef]);

  return <div ref={cursorRef} className="cursor"></div>;
}

export default Cursor;
