
import React from 'react';
import './section_photo.css';
const photos = [
    {
        path: "photos/1.jpg",
        text: " Granny gives everyone the finger, and other tips from OFFF Barcelona",
        alt: "Granny gives everyone the finger",
        href:"",
    },

    {
        path: "photos/2.jpg",
        text: "Hello world, or, in other words, why this blog exists",
        alt: "Hello world",
        href:"",
        
    },

    {
        path: "photos/3.jpg",
        text: "Here are some things you should know regarding how we work",
        alt: "regarding how we work",
        href:"",
    },

    {
        path: "photos/4.jpg",
        text: "Updating list of 50+ sources on distributed teams, remote work, and how to make it all work better",
        alt: "remote work",
        href:"",
    },

    {
        path: "photos/5.jpg",
        text: "A few words about this blog platform, Ghost, and how this site was made",
        alt: "A few words about this blog platform",
        href:"",
    },

    {
        path: "photos/6.jpg",
        text: "How modern remote working tools get along with Old SchoolCowboy's methods",
        alt: "modern remote working",
        href:"",
    },
]

function Photo({ item }) {
    return (
        <a href={item.href} className="atribute">
            <img className="second_page_photos" width="304" height="176" src={item.path}
                alt={item.alt} />
            <div>
                <p className="text_after_images">
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
                <section className="section_with_photo">
                    <h2 className="articles">All articles</h2>
                    <div className="photo">
                        {photos.map((item) => (<Photo item={item} />))}
                    </div>
                </section>
            </div>
        );
    }
};
export default SectionPhoto;