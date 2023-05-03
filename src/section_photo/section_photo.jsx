
import React from 'react';
import './section_photo.css';
const photos = [
    {
        path: "./photos/1.jpg",
        text: " Granny gives everyone the finger, and other tips from OFFF Barcelona",
        alt: "Granny gives everyone the finger",
        href:"/posts/1",
    },

    {
        path: "./photos/2.jpg",
        text: "Hello world, or, in other words, why this blog exists",
        alt: "Hello world",
        href:"/posts/2",
        
    },

    {
        path: "./photos/3.jpg",
        text: "Here are some things you should know regarding how we work",
        alt: "regarding how we work",
        href:"/posts/3",
    },

    {
        path: "./photos/4.jpg",
        text: "Updating list of 50+ sources on distributed teams, remote work, and how to make it all",
        alt: "remote work",
        href:"/posts/4",
    },

    {
        path: "./photos/5.jpg",
        text: "A few words about this blog platform, Ghost, and how this site was made",
        alt: "A few words about this blog platform",
        href:"/posts/5",
    },

    {
        path: "./photos/6.jpg",
        text: "How modern remote working tools get along with Old SchoolCowboy's methods",
        alt: "modern remote working",
        href:"/posts/6",
    },
]

function Photo({ item }) {
    return (
        <a href={item.href} className="atribute_home_page">
            <img className="second_page_photos_home_page" width="304" height="176" src={item.path}
                alt={item.alt} />
            <div>
                <p className="text_after_images_home_page">
                    {item.text}
                </p>
            </div>
        </a>
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
                        {photos.map((item) => (<Photo item={item} />))}
                    </div>
                </section>
            </div>
        );
    }
};
export default SectionPhoto;