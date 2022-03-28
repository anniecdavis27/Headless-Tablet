function TripleContactMod() {
  return (
    <div className="TripleContactMod">
      <div className="contact-mod" id="email-mod">
        <div className="img-container">
          <img
            src="https://d1sacvjbhsczdb.cloudfront.net/media/ecs/global/icons/email.svg"
            alt="email icon"
          />
        </div>
        <div className="mod-content">
          <p>Email us at:</p>
          <a href="mailto:cs@tablethotels.com">cs@tablethotels.com</a>
        </div>
      </div>
      <div className="contact-mod" id="phone-mod">
        <div className="img-container">
          <img
            src="https://d1sacvjbhsczdb.cloudfront.net/media/ecs/global/icons/phonelink-ring100.png"
            alt="phone icon"
          />
        </div>
        <div className="mod-content">
          <a href="tel:8886447452">+1 888 644 7452</a>
          <p>Toll Free US & Canada</p>
          <a href="4408081962023">+44 08081962023</a>
          <p>Toll Free UK</p>
          <a href="6468803634">+1 646 880 3634</a>
          <p>Other locations</p>
        </div>
      </div>
      <div className="contact-mod" id="chat-mod">
        <div className="img-container">
          <img
            src="https://d1sacvjbhsczdb.cloudfront.net/media/ecs/global/icons/zendesk.png"
            alt="chat icon"
          />
        </div>
        <div className="mod-content">
          <p>Look for the Chat icon in the lower right of the screen.</p>
        </div>
      </div>
    </div>
  );
}

export default TripleContactMod;
