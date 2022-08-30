function UserMessage() {
  return (
    <>
      <div className="user-message">
        <div className="user-message-image">
          <i className="fa-solid fa-user"></i>
        </div>
        <div className="user-message-credentials">
          <div>
            <p>Ola Nordmann</p>
            <p>ola.nordmann@gmail.com</p>
          </div>
          <p>
            <span>Subject</span>
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aspernatur aliquid dolore placeat sunt eius inventore eum, dicta voluptates, saepe maxime ipsa quasi ratione nostrum assumenda corrupti pariatur id magnam?</p>
        </div>
      </div>
    </>
  );
}

export default UserMessage;
