import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const links = ['Twitter', 'Linkedln', 'RSS'];
        const linksList = links.map(function (link) {
            return <li><Link className="link" to="/">{link}</Link></li>;
        })
        return (
            <div>
                <footer className="footer_black_square">
                    <div className="square_first_text">
                        <div className="scroll_text bold_text">DIGITAL PRODUCT DESIGN</div>
                        <div className="scroll_text work">REMOTE WORK</div>
                        <div className="scroll_text bold_text">UX DESIGN</div>
                        <div className="scroll_text teams">DISTRIBUTED TEAMS</div>
                        <div className="scroll_text bold_text">CREATIVITY</div>
                        <div className="scroll_text strategy">STRATEGY</div>
                        <div className="scroll_text bold_text">SUSPENSE</div>
                        <div className="scroll_text growth">GROWTH</div>
                    </div>
                    <div className="bottom_rose">
                        <picture>
                            <source media="(max-width:854px)" width="245" height="35" srcset="/photos/bottom_rose_mobile.png" />
                            <source media="(min-width:854px)" width="300" height="40" srcset="/photos/bottom_rose_mobile.png" />
                            <img src="/photos/bottom_rose_mobile.png" width="300" height="40" alt="NORDIC ROSE" />
                        </picture>
                    </div>
                    <p className="lorem">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit
                        tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a
                        nunc eget ligula.
                    </p>
                    <div className="links_padding">
                        <ul className="links">
                            {linksList}
                        </ul>
                    </div>

                    <p className="copy_text">© 2012–2020 Nordic Rose Co. All rights reserved.</p>
                </footer>
            </div>
        );
    }
};
export default Footer;