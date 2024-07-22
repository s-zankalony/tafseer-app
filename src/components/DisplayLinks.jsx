import { getId } from '../assets/functions';

const DisplayLinks = ({ links }) => {
  return (
    <>
      <div className="row">
        {links.slice(0, 9).map((link, index) => {
          const videoId = getId(link.url);
          const thumbSRC = `https://www.youtube.com/embed/${videoId}`;
          return (
            <div className="col-sm-6 col-md-4" key={index}>
              <div className="card h-100 shadow-sm">
                <div className="ratio ratio-16x9">
                  <iframe
                    className="card-img-top"
                    width="250"
                    height="141"
                    src={thumbSRC}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>

                <div className="card-body d-flex flex-column">
                  <p className="card-title text-primary mb-2">
                    سورة: {link.sura}
                  </p>
                  <a
                    target="_blank"
                    className="card-link mt-auto btn btn-outline-primary"
                    href={link.url}
                    rel="noopener noreferrer"
                  >
                    الآيات: {link.verse}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default DisplayLinks;
