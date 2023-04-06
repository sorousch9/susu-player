import { Container } from "react-bootstrap";

export const Footer = () => {
  return (
    <Container className="footer">
      <div className="tab1">
        <div className="footer-more">
          <h6>More</h6>
          <p>Get Web App</p>
          <p>Premium</p>
          <p>help and Support</p>
          <p>Advertise</p>
          <p>Contact</p>
        </div>
        <div className="footer-follow">
          <h6>Follow Us on</h6>
          <p>Instagram</p>
          <p>Youtube</p>
          <p>Twitter</p>
          <p>TikTok</p>
          <p>Telegram</p>
        </div>
      </div>
      <div className="tab2">
        <span>© 2023 Soroush Safarkhah</span>
        <span>Privacy Policy</span>
        <span>Terms of Use</span>
        <span>About</span>
      </div>
    </Container>
  );
};
