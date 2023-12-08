import { useCallback, useRef } from "react";

import "../assets/css/Contact.css";
import mail from "../assets/mail-icon.svg";

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
    <a
      id="email"
      href="#"
      ref={emailRef}
      onClick={handleClick}
      className="mail"
    >
      <img src={mail} alt="mail" />
    </a>
  );
}

export default Mail;
