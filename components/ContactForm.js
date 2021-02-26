import React from 'react';
import { useInput } from '../hooks/input';

const ContactForm = (props) => {
  const { value: name, bind: bindName, reset: resetName } = useInput('');
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');
  const { value: message, bind: bindMessage, reset: resetMessage } = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    resetName();
    resetEmail();
    resetMessage();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" {...bindName} />
        </label>
        <label>
          E-mail:
          <input type="email" {...bindEmail} />
        </label>
        <label>
          Message:
          <textarea rows="10" cols="70" {...bindMessage} />
        </label>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ContactForm;
