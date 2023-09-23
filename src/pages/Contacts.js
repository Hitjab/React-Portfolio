const Contacts = () => {
    return (
      <main className="section">
        <div className="container">
          <h1 className="title-1">Contacts</h1>

          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Location</h2>
              <p>Saskatoon, Saskatchewan</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Telegram / WhatsApp</h2>
              <p>
                <a href="tel:+16394805457">+1 (639) 480-5457</a>
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Email</h2>
              <p>
                <a href="mailto:ssobicka@gmai.com">ssobicka@gmai.com</a>
              </p>
            </li>
          </ul>
        </div>
      </main>
    );
}

export default Contacts;