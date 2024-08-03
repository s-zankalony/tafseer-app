import OneLink from './OneLink';
import { getId } from '../assets/functions';

const DisplayLinks = ({ links }) => {
  const numberOfPages = Math.ceil(links.length / 10);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-2 md:gap-4">
        {links.slice(1, 10).map((link, index) => {
          const videoId = getId(link.url);
          const thumbSRC = `https://www.youtube.com/embed/${videoId}`;
          return <OneLink key={index} thumbSRC={thumbSRC} link={link} />;
        })}
      </div>
    </>
  );
};

export default DisplayLinks;
