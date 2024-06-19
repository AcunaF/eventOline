import fondo from "../../../assets/fondo.jpg";
import "./publisher.styles.scss";
export const Advertisement = () => {
  return (
    <>
      <div className="publicidad">
        <img src={fondo} alt="Anuncio" />
      </div>
      <p className="tittle-publicidad">
        Follow us on our networks to get discounts on your favorite recitals
      </p>
    </>
  );
};
