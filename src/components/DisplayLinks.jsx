import { getId } from '../assets/functions';

const DisplayLinks = ({ links }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {links.slice(1, 10).map((link, index) => {
          const videoId = getId(link.url);
          const thumbSRC = `https://www.youtube.com/embed/${videoId}`;
          return (
            <div key={index} className="flex flex-col h-full">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden flex-grow">
                <div className="relative pt-[56.25%]">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={thumbSRC}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="p-4 flex flex-col flex-grow">
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">
                    سورة: {link.sura}
                  </h4>
                  <a
                    target="_blank"
                    className="mt-auto py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 text-center"
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
