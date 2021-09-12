import React from "react";

const Contact = () => (
  <div className="pt-4">
    <div className="container">
      <div className="text-center">
        <h2>Drop your message</h2>
        <p className="lead">
          Mauris non condimentum magna. Cras tempus gravida massa quis gravida.
        </p>
      </div>
      <div className="contact-form">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSe_Li52_9oAgmEmdmyiJByJXtfk0YuqFUgKd8T4H2ovehQO1A/viewform?embedded=true"
          width="640"
          height="800"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </div>
  </div>
);

export default Contact;
