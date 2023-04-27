
import React from 'react';
import './top_section.css';

class TopSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <section className="top_section">
                    <div>
                        <picture>
                            <source media="(max-width:854px)" width="375" height="234" srcset="photos/top_photo_mobile.jpg" />
                            <source media="(max-width:854px)" width="854" height="533" srcset="photos/desktop.jpg" />
                            <img src="photos/big_desktop.png" width="854" height="533" alt="big photo" />
                        </picture>
                    </div>
                    <div>
                        <h2 className="about_blog">
                            A few words about this blog platform, Ghost, and how this site was
                            made
                        </h2>
                        <h3 className="small_text_about_blog">
                            Why Ghost (& Figma) instead of Medium, WordPress or other options?
                        </h3>
                    </div>
                </section>
            </div>
        );
    }
};
export default TopSection;