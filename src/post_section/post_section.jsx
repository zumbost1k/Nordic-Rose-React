import React, { useEffect, useState } from 'react';
import './post_section.css';
import { Link, useNavigate, useParams } from 'react-router-dom';

const links = [
  {
    name: 'github',
    src: '/photos/github.jpg',
    text: 'Check on GitHub',
    href: 'https://github.com/zumbost1k',
    hasExtraClass: true,
  },
  {
    name: 'instagramm',
    src: '/photos/inst.jpg',
    text: 'Check on Inst',
    href: 'https://www.instagram.com/misha_mch/?hl=ru',
    hasExtraClass: true,
  },
  {
    name: 'telegramm',
    src: '/photos/telegramm.jpg',
    text: '',
    href: 'https://web.telegram.org/k/#@zumbost1k',
    hasExtraClass: false,
  },
];
function LinksBottom({ link }) {
  const className = link.hasExtraClass
    ? 'table_elem bottom_table'
    : 'table_elem no_border';
  return (
    <td className={className}>
      <Link className='no_decoration' to={link.href}>
        <img
          className='share_on_photo'
          src={link.src}
          width='20'
          height='20'
          alt={link.name}
        />
        <p className='share_on'>{link.text}</p>
      </Link>
    </td>
  );
}

function Links({ link }) {
  const className = link.hasExtraClass ? 'table_elem' : 'table_elem abyss';
  return (
    <td className={className}>
      <Link to={link.href}>
        <img src={link.src} width='20' height='20' alt={link.name} />
      </Link>
    </td>
  );
}
const PostSection = () => {
  const params = useParams();
  const current = params.id;
  const navigate = useNavigate();
  const [filter, setFilter] = useState('');
  useEffect(() => {
    navigate(`?tag=${filter}`);
  }, [filter, navigate]);
  const [data, setPosts] = useState({ post: {} });
  useEffect(() => {
    fetch(`https://study-group-backend.onrender.com/posts/${current}`)
      .then((response) => response.json())
      .then((data) => setPosts({ post: data }));
  }, [current]);
  if (data.post.id) {
    const formattedDate = new Date(data.post.created_at).toLocaleDateString(
      'en-US',
      { year: 'numeric', month: 'short', day: 'numeric' }
    );
    return (
      <div>
        <section className='second_section'>
          <div className='second_section_block'>
            <div className='author_of_post_info'>
              <div className='inf_about_author'>
                <img
                  className='avatar'
                  src='/photos/avatar.jpg'
                  width='56'
                  height='56'
                  alt='avatar'
                />
                <div className='text_about_author'>
                  <p className='author_name'>Misha Matusevich</p>
                  <p className='time'>
                    <time datetime='YYYY-MM-DD'>
                      {formattedDate || 'recently'}
                    </time>
                    &nbsp;·&nbsp;
                    {Math.trunc(
                      data.post.content.replace(/(<([^>]+)>)/gi, '').length /
                        250
                    )}
                    &nbsp; min read
                  </p>
                </div>
              </div>
              <table className='table_with_photo'>
                <tr className='table_of_contact'>
                  {links.map((link) => (
                    <Links link={link} />
                  ))}
                </tr>
              </table>
            </div>
          </div>
          <div className='rectangle'>
            <picture>
              <source
                media='(max-width:854px)'
                width='375'
                height='250'
                srcSet={data.post.thumbnail_url}
              />
              <source
                media='(min-width:854px)'
                width='854'
                height='570'
                srcSet={data.post.thumbnail_url}
              />
              <img
                src={data.post.thumbnail_url}
                width='854'
                height='570'
                alt='main'
              />
            </picture>
            <figcaption className='rectangle_caption'>
              {data.post.title}
            </figcaption>
          </div>
          <div className='second_section_block'>
            {
              <div
                className='post_body'
                dangerouslySetInnerHTML={{ __html: data.post.content }}
              />
            }
            <div className='article_section_footer'>
              <p className='section_footer_text share'>Share:</p>
              <table className='table_footer'>
                <tr className='table_of_contact_second'>
                  {links.map((link) => (
                    <LinksBottom link={link} />
                  ))}
                </tr>
              </table>
              {data.post.all_tags_list.length !== 0 ? (
                <p className='section_footer_text tags'>
                  Tags:{' '}
                  {data.post.all_tags_list.map((tag) => {
                    return (
                      <span
                        onClick={(e) => {
                          setFilter(tag);
                        }}
                        className='black_link'
                      >
                        {tag + ' '}
                      </span>
                    );
                  })}{' '}
                </p>
              ) : (
                ''
              )}
            </div>
            <div className='comment_from_author'>
              <img
                className='big_avatar'
                src='/photos/big_avatar.jpg'
                width='70'
                height='70'
                alt='big avatar'
              />
              <p className='big_avatar_text'>
                <span className='big_avatar_text_bold'>Misha Matusevich</span>{' '}
                is an aspiring programmer studying front-end development.
                Apprentice MCB, vocalist of the rock band 'Drick's End!.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};
export default PostSection;
