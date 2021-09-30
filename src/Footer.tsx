import { MouseEventHandler } from 'react';
import './Footer.css';

const Footer = (props: { buttonClicked: MouseEventHandler<HTMLButtonElement> | undefined; }) => {
  return (
    <div className="footer">
<button className="footerBlue" type="submit" onClick={props.buttonClicked}>GENERATE CHART</button>
    </div>
  )
}

export default Footer;