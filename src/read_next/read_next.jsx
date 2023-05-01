import React from 'react';
import './read_next.css';
let links = [{
    src: "/photos/1.jpg",
    alt: "Granny gives everyone the finger",
    text: "Granny gives everyone the finger, and other tips from OFFF Barcelona",
},
{
    src: "/photos/2.jpg",
    alt: "Hello world",
    text: "Hello world, or, in other words, why this blog exists",
},
{
    src: "/photos/3.jpg",
    alt: "regarding how wework",
    text: "Here are some things you should know regarding how we work ",
},
{
    src: "/photos/4.jpg",
    alt: "remote work",
    text: "Updating list of 50+ sources on distributed teams, remote work, and how to make it all",
},
{
    src: "/photos/5.jpg",
    alt: "A few words about this blog platform",
    text: "A few words about this blog platform, Ghost, and how this site was made",
},
{
    src: "/photos/6.jpg",
    alt: "modern remote working",
    text: "How modern remote working tools get along with Old School Cowboy's methods",
},
];
const linksList = links.map(function (link) {
    return <a href="/" className='decoration'> <div className="atribute">
        <img className="second_page_photos" width="304" height="176" src={link.src}
            alt={link.alt} />
        <div>
            <p className="text_after_images">{link.text}</p>
        </div>
    </div></a>;
})
class ReadNext extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {


        return (

            <section className="additional_articles">
                <h2 className="read_next">What to read next</h2>
                <div className="photo">
                    {linksList}
                </div>
            </section>

        );
    }
};
export default ReadNext;