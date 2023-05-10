import React from "react";
import "./top_section_post.css";

class TopSectionPost extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <section class="top_section">
                    <div>
                        <h2 class="about_blog">
                            A few words about this blog platform, Ghost, and how this site was made
                        </h2>
                        <h3 class="small_text_about_blog">
                            Why Ghost (& Figma) instead of Medium, WordPress or other options?
                        </h3>
                    </div>
                    <div class="top_photo padding_top52">
                        <picture>
                            <source
                                media="(max-width:854px)"
                                width="375"
                                height="234"
                                srcset="/photos/top_photo_mobile.jpg"
                            />
                            <source
                                media="(max-width:854px)"
                                width="854"
                                height="533"
                                srcset="/photos/desktop.jpg"
                            />
                            <source
                                media="(min-width:1440px)"
                                width="1440"
                                height="900"
                                srcset="/photos/big_desktop.png"
                            />
                            <img src="/photos/big_desktop.png" width="1440" height="900" alt="big photo" />
                        </picture>
                    </div>
                </section>
            </div>
        );
    }
}
export default TopSectionPost;
