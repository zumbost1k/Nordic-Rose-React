import React from 'react';
import './section_photo.css';
import { Link } from 'react-router-dom';
const photos = [
    {
        path: "./photos/1.jpg",
        text: " Granny gives everyone the finger, and other tips from OFFF Barcelona",
        alt: "Granny gives everyone the finger",
    },

    {
        path: "./photos/2.jpg",
        text: "Hello world, or, in other words, why this blog exists",
        alt: "Hello world",

    },

    {
        path: "./photos/3.jpg",
        text: "Here are some things you should know regarding how we work",
        alt: "regarding how we work",
    },

    {
        path: "./photos/4.jpg",
        text: "Updating list of 50+ sources on distributed teams, remote work, and how to make it all",
        alt: "remote work",
    },

    {
        path: "./photos/5.jpg",
        text: "A few words about this blog platform, Ghost, and how this site was made",
        alt: "A few words about this blog platform",
    },

    {
        path: "./photos/6.jpg",
        text: "How modern remote working tools get along with Old SchoolCowboy's methods",
        alt: "modern remote working",
    },
]

function Photo({ item, index }) {
    return (
        <Link to={"/posts/" + index} className="atribute_home_page">
            <img className="second_page_photos_home_page" width="304" height="176" src={item.path}
                alt={item.alt} />
            <div>
                <p className="text_after_images_home_page">
                    {item.text}
                </p>
            </div>
        </Link>
    );
}
class SectionPhoto extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <section className="section_with_photo_home_page">
                    <h2 className="articles_home_page"> All articles</h2>
                    <div className="photo_home_page">
                        {photos.map((item, index) => (<Photo item={item} index={index} />))}
                    </div>
                </section>
            </div>
        );
    }
};
export default SectionPhoto;