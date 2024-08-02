export default function OneLink({ index, thumbSRC, link }) {
  return (
    <div key={index} className="flex flex-col h-full">
      <div className="bg-green-200  rounded-lg shadow-sm overflow-hidden flex-grow">
        <div className="relative pt-[56.25%]">
          <iframe
            className="absolute inset-0 w-full h-full"
            src={thumbSRC}
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="p-4 flex flex-col flex-grow">
          <h4 className="text-lg font-semibold text-green-700 mb-2">
            سورة: {link.sura}
          </h4>
          <a
            target="_blank"
            className="mt-auto py-2 px-4 bg-green-800 text-white rounded hover:bg-green-600 transition duration-300 text-center small: text-sm"
            href={link.url}
            rel="noopener noreferrer"
          >
            الآيات: {link.verse}
          </a>
        </div>
      </div>
    </div>
  );
}
