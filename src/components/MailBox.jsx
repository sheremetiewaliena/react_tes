import { useEffect } from "react";

const MailBox = ({
  emails,
  onClose,
  onLogEmail,
  onDeleteMail,
  emailCounter,
}) => {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener(`keydown`, onKeyDown);

    return () => {
      window.removeEventListener(`keydown`, onKeyDown);
    };
  }, [onClose]);
  return (
    <div>
      <h2>
        MailBox <b>{emailCounter}</b>
      </h2>
      <ul>
        {emails.map((email) => (
          <li key={email.id}>
            {email.email}{" "}
            <button onClick={() => onDeleteMail(email.id)}>&times;</button>
          </li>
        ))}
        {/* <li>
          Mail 1{" "}
          <button onClick={() => onDeleteMail(1)} type="button">
            &times;
          </button>
        </li>
        <li>
          Mail 2{" "}
          <button onClick={() => onDeleteMail(2)} type="button">
            &times;
          </button>
        </li>
        <li>
          Mail 3{" "}
          <button onClick={() => onDeleteMail(3)} type="button">
            &times;
          </button>
        </li> */}
      </ul>
      <button onClick={onLogEmail} type="button">
        Send mail
      </button>
    </div>
  );
};

export default MailBox;
