export default function OneLink({ thumbSRC, link }) {
  return (
    <div className="flex flex-col h-full bg-green-200 rounded-lg shadow-sm overflow-hidden">
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

      <div className="p-3 flex flex-col flex-grow">
        {' '}
        {/* Reduced padding */}
        <h4 className="text-base font-semibold text-green-700 mb-2">
          {' '}
          {/* Adjusted text size */}
          سورة: {link.sura}
        </h4>
        <a
          target="_blank"
          className="mt-auto py-2 px-3 bg-green-800 text-white rounded hover:bg-green-600 transition duration-300 text-center text-sm"
          href={link.url}
          rel="noopener noreferrer"
        >
          الآيات: {link.verse}
        </a>
      </div>
    </div>
  );
}
