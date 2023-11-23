import { useCallback, useRef } from "react";

function Mail() {
  const myEmail = "cassandra.blondez@gmail.com";
  const emailRef = useRef(null);

  const handleClick = useCallback(() => {
    const email = emailRef.current;
    if (!email) return;

    email.href = `mailto:${myEmail}`;
    email.click();
  }, [emailRef]);

  return (
    <a id="email" href="#" ref={emailRef} onClick={handleClick}>
      Contact me by mail
    </a>
  );
}

export default Mail;
