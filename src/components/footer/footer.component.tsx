import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmazonPay,
} from "react-icons/fa"; // Importa los iconos que necesitas
import "./footer.styles.scss";
export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-container">
        <div className="payment-methods">
          <p>Nuestros métodos de pago:</p>
          <FaCcVisa size={60} style={{ margin: "0 1em" }} />
          <FaCcMastercard size={60} style={{ margin: "0 1em" }} />
          <FaCcPaypal size={60} style={{ margin: "0 1em" }} />
          <FaCcAmazonPay size={60} style={{ margin: "0 1em" }} />
        </div>
        {/* Resto del código del footer */}
      </div>{" "}
      <div>
        <footer
          className="footer"
          style={{
            backgroundColor: "#2d2d2d",
            color: "white",
            height: "200px",
            justifyContent: "center",
            padding: "1em",
          }}
        >
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            style={{ margin: "0 1em" }}
          >
            <FaFacebook size={60} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noreferrer"
            style={{ margin: "0 1em" }}
          >
            <FaTwitter size={60} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            style={{ margin: "0 1em" }}
          >
            <FaInstagram size={60} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            style={{ margin: "0 1em" }}
          >
            <FaLinkedin size={60} />
          </a>
        </footer>
      </div>
    </div>
  );
};
