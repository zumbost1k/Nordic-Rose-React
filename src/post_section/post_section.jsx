import React, { useEffect, useState } from "react";
import "./post_section.css";
import { Link, useParams } from "react-router-dom";

const links = [
    {
        name: "github",
        src: "/photos/github.jpg",
        text: "Share on GitHub",
        href: "https://github.com/zumbost1k"
    },
    {
        name: "instagramm",
        src: "/photos/inst.jpg",
        text: "Share on Inst",
        href: "https://www.instagram.com/misha_mch/?hl=ru"
    },
    {
        name: "telegramm",
        src: "/photos/telegramm.jpg",
        text: "",
        href: "https://web.telegram.org/k/#@zumbost1k"
    },
];
function LinkListBottom({ link }) {
    const className =
        link.name === "telegramm" ? link.name : link.name + "_bottom_table";
    return (
        <td className={className}>
            <Link className="no_decoration" to={link.href}>
                <img
                    className="share_on_photo"
                    src={link.src}
                    width="20"
                    height="20"
                    alt={link.name}
                />
                <p className="share_on">{link.text}</p>
            </Link>
        </td>
    );
}

function LinkList({ link }) {
    const className = link.name === "telegramm" ? link.name + " abyss" : link.name;
    return (
        <td className={className}>
            <Link to={link.href}>
                <img src={link.src} width="20" height="20" alt={link.name} />
            </Link>
        </td>
    );
}
const PostSection = () => {
    const params = useParams();
    const current = params.id;
    const [data, setPosts] = useState({ posts: {} });
    useEffect(() => {
        fetch(`https://dolphin-app-cbjj4.ondigitalocean.app/posts/${current}`)
            .then((response) => response.json())
            .then((data) => setPosts({ posts: data }));
    }, [current]);
    const formattedDate = new Date(data.posts.created_at).toLocaleDateString(
        "en-US",
        { year: "numeric", month: "short", day: "numeric" }
    );
    return (
        <div>
            <section className="second_section">
                <div className="second_section_block">
                    <div className="author_of_post_info">
                        <div className="inf_about_author">
                            <img
                                className="avatar"
                                src="/photos/avatar.jpg"
                                width="56"
                                height="56"
                                alt="avatar"
                            />
                            <div className="text_about_author">
                                <p className="author_name">Misha Matusevich</p>
                                <p className="time">
                                    {" "}
                                    <time datetime="YYYY-MM-DD">
                                        {formattedDate || "recently"}
                                    </time>{" "}
                                    ·{" "}
                                    {data.posts.content
                                        ? Math.trunc(data.posts.content.replace(/(<([^>]+)>)/ig, '').length / 250)
                                        : "few"}{" "}
                                    min read
                                </p>
                            </div>
                        </div>
                        <table className="table_with_photo">
                            <tr className="table_of_contact">
                                {links.map((link) => (
                                    <LinkList link={link} />
                                ))}
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="rectangle">
                    <picture>
                        <source
                            media="(max-width:854px)"
                            width="375"
                            height="250"
                            srcset={data.posts.thumbnail_url}
                        />
                        <source
                            media="(min-width:854px)"
                            width="854"
                            height="570"
                            srcset={data.posts.thumbnail_url}
                        />
                        <img
                            src={data.posts.thumbnail_url}
                            width="854"
                            height="570"
                            alt="main photo"
                        />
                    </picture>
                    <figcaption className="rectangle_caption">
                        {data.posts.title}
                    </figcaption>
                </div>
                <div className="second_section_block">
                    {
                        <div
                            className="post_body"
                            dangerouslySetInnerHTML={{ __html: data.posts.content }}
                        />
                    }
                    <div className="article_section_footer">
                        <p className="section_footer_text share">Share:</p>
                        <table className="table_footer">
                            <tr className="table_of_contact_second">
                                {links.map((link) => (
                                    <LinkListBottom link={link} />
                                ))}
                            </tr>
                        </table>
                        <p className="section_footer_text tags">
                            Tags:{" "}
                            <Link to="/" className="black_link">
                                product design
                            </Link>
                            ,{" "}
                            <Link to="/" className="black_link">
                                culture
                            </Link>
                        </p>
                    </div>
                    <div className="comment_from_author">
                        <img
                            className="big_avatar"
                            src="/photos/big_avatar.jpg"
                            width="70"
                            height="70"
                            alt="big avatar"
                        />
                        <p className="big_avatar_text">
                            <span className="big_avatar_text_bold">Misha Matusevich</span> is
                            an aspiring programmer studying front-end development. Apprentice
                            MCB, vocalist of the rock band "Drick's End!.{" "}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default PostSection;
