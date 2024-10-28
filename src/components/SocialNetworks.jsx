import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import TiktokIcon from "../icons/TiktokIcon";
import WhatsAppIcon from "../icons/WhatsAppIcon";

const SocialNetworks = () => {
  return (
    <div>
      <div className="cardSocialNetworks">
        <a href="#" className="socialContainer containerOne">
          <InstagramIcon/>
        </a>

        <a href="#" className="socialContainer containerTwo">
          <TiktokIcon/>
        </a>

        <a href="#" className="socialContainer containerThree">
          <div>
            <FacebookIcon/>
          </div>
        </a>

        <a href="#" className="socialContainer containerFour">
          <WhatsAppIcon/>
        </a>
      </div>
    </div>
  );
}

export default SocialNetworks