import React from 'react';
import './post_section.css';
const linksForFirstTable = [
    {
        name: "facebook",
        src: "/photos/facebook.png",
    },
    {
        name: "twitter",
        src: "/photos/twitter.png",
    },
    {
        name: "phone abyss",
        src: "/photos/phone.png",
    },
];
const linksForSecondTable = [
    {
        name: "facebook2",
        src: "/photos/facebook.png",
        text: "Share on Facebook"
    },
    {
        name: "twitter2",
        src: "/photos/twitter.png",
        text: "Share on Twitter"
    },
    {
        name: "phone",
        src: "/photos/phone.png",
        text: ""
    },
];

class PostSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const linksList2 = linksForSecondTable.map(function (link) {
            return <td className={link.name}><a className="no_decoration" href="/"><img className="share_on_photo" src={link.src} width="20" height="20"
                alt={link.name} /><p className="share_on">{link.text}</p></a></td>;
        })
        let linksList = linksForFirstTable.map(function (link) {
            return <td className={link.name}><a href="/"><img src={link.src} width="20" height="20"
                alt={link.name} /></a>
            </td>;
        })
        return (
            <div>
                <section className="second_section">
                    <div className="second_section_block">
                        <div className="author_of_post_info">
                            <div className="inf_about_author">
                                <img src="/photos/avatar.png" width="56" height="56" alt="avatar" />
                                <div className="text_about_author">
                                    <p className="author_name">Mika Matikainen</p>
                                    <p className="time"> <time datetime="2020-04-15">Apr 15, 2020</time> · 4 min read</p>
                                </div>
                            </div>
                            <table className="table_with_photo">
                                <tr className="table_of_contact">
                                    {linksList}
                                </tr>
                            </table>
                        </div>
                        <p className="author_comment text_of_section">This lovely web is full of everything which is created I don't
                            know what in mind,
                            considering that sometimes totally bonkers stuff might be highly relevant if it has the right kind
                            of
                            thinking behind it. </p>
                        <h2 className="pipeline">Next on the pipeline</h2>
                        <p className="text_after_pipeline text_of_section">This lovely web is full of everything which is created I
                            don't know what in
                            mind, considering
                            that
                            sometimes totally bonkers stuff might be highly relevant if it has the right kind of thinking behind
                            it.
                        </p>
                    </div>


                    <div className="rectangle">
                        <picture>
                            <source media="(max-width:854px)" width="375" height="250" srcset="/photos/rectangle.png" />
                            <source media="(min-width:854px)" width="854" height="570" srcset="/photos/rectangle_desktop.jpg" />
                            <img src="/photos/rectangle_desktop.jpg" width="854" height="570" alt="rectangle" />
                        </picture>
                        <figcaption className="rectangle_caption">Image caption centered this way and I’ll make this a bit longer to
                            indicate the amount of line-height</figcaption>
                    </div>
                    <div className="second_section_block">
                        <div className="last_section_text">
                            <p className="text_of_section">This lovely web is full of everything which is created I don't know what
                                in
                                mind, considering that
                                sometimes totally bonkers stuff might be highly relevant if it has the right kind of thinking
                                behind
                                it. </p>
                            <p className="text_of_section last_text_second">Luckily, in the middle of all that, there are some
                                pockets
                                of content that offer delightfully
                                valuable
                                contrast to cursory wisdom in some of the established channels.</p>
                            <div className="text_of_section list">
                                <p>A list looks like this:</p>
                                <ul>
                                    <li>First item in the list</li>
                                    <li className="list_part">Second item in the list lorem ipsum dolor sit amet nunc felis dolor
                                        lorem
                                        ipsum sit amet</li>
                                    <li className="list_part">Third item in the list</li>
                                </ul>

                            </div>
                            <p className="text_of_section text_after_list">Class aptent taciti sociosqu Fad litora torquent per
                                conubia
                                nostra, per inceptos himenaeos. Aliquam quis posuere ligula. </p>
                            <p className="text_of_section end">Thanks for reading,<br />
                                Mika</p>
                        </div>
                        <div className="article_section_footer">
                            <p className="section_footer_text share">Share:</p>

                            <table className="table_footer">
                                <tr className="table_of_contact2">
                                    {linksList2}
                                </tr>
                            </table>
                            <p className="section_footer_text tags">Tags: <a href="" className="black_link">product design</a>, <a
                                href="" className="black_link">culture</a></p>
                        </div>
                        <div className="comment_from_author">
                            <img className="big_avatar" src="/photos/big_avatar.png" width="70" height="70" alt="big avatar" />
                            <p className="big_avatar_text"><span className="big_avatar_text_bold">Mika Matikainen</span> is a Design
                                Founder
                                & Advisor, Berlin School of Creative Leadership Executive MBA participant, Zippie advisor, Wolt
                                co-founder, and Nordic Rose stakeholder. </p>
                        </div>
                    </div>

                </section>
            </div>
        );
    }
};
export default PostSection;