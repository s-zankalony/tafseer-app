// VideoModal.jsx
export function VideoModal({ videoId, onClose }) {
  if (!videoId) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-center justify-center p-4">
      {' '}
      {/* Increased z-index */}
      <div className="relative w-full max-w-4xl">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 z-[10000] p-2" /* Adjusted positioning and added padding */
        >
          ✕ إغلاق
        </button>
        <div className="relative pt-[56.25%]">
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
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
