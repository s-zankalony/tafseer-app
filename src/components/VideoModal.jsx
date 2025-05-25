// VideoModal.jsx
export function VideoModal({ videoId, playlistId, startTime, onClose }) {
  if (!videoId && !playlistId) return null;

  // Build the YouTube URL with the appropriate parameters
  let embedUrl = playlistId
    ? `https://www.youtube.com/embed/videoseries?list=${playlistId}&autoplay=1`
    : `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  if (startTime) {
    embedUrl += `&start=${startTime}`;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 bg-red-600 text-white hover:bg-red-700 rounded-md font-bold shadow-md z-[10000] py-2 px-4 md:-right-12 md:top-0"
        >
          ✕ إغلاق
        </button>
        <div className="relative pt-[56.25%] h-0">
          <iframe
            className="absolute inset-0 w-full h-full max-h-[90vh] landscape:max-h-[80vh]"
            src={embedUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
