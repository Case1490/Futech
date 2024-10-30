import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import TiktokIcon from "../icons/TiktokIcon";
import WhatsAppIcon from "../icons/WhatsAppIcon";

const SocialNetworks = () => {
  return (
    <div>
      <div className="cardSocialNetworks">
        <a
          href="https://www.instagram.com/futech_peru/"
          className="socialContainer containerOne"
          target="_blank"
        >
          <InstagramIcon />
        </a>

        <a
          href="https://www.tiktok.com/@futech_peru_"
          className="socialContainer containerTwo"
          target="_blank"
        >
          <TiktokIcon />
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=61565637762823"
          className="socialContainer containerThree"
          target="_blank"
        >
          <div>
            <FacebookIcon />
          </div>
        </a>

        <a
          href="https://wa.me/51902040118?text=Hola, quisiera más información..."
          className="socialContainer containerFour"
          target="_blank"
        >
          <WhatsAppIcon />
        </a>
      </div>
    </div>
  );
}

export default SocialNetworks