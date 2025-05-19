/**
 * Extracts the YouTube video ID from a given URL.
 *
 * @param {string} url - The YouTube video URL.
 * @returns {string|null} - The YouTube video ID if found, otherwise null.
 */
export function getId(url) {
  if (!url) return null;
  // match youtu.be/ID, youtube.com/watch?v=ID, youtube.com/embed/ID, etc.
  const regExp =
    /(?:youtube(?:-nocookie)?\.com\/(?:.*v=|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}

/**
 * Extracts the YouTube playlist ID from a given URL.
 *
 * @param {string} url - The YouTube playlist URL.
 * @returns {string|null} - The YouTube playlist ID if found, otherwise null.
 */
export function getPlaylistId(url) {
  if (!url) return null;
  // Extract list parameter from URL
  const regExp = /[?&]list=([A-Za-z0-9_-]+)/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}

/**
 * Generates a thumbnail URL based on a YouTube URL (handles both videos and playlists)
 *
 * @param {string} url - The YouTube video or playlist URL.
 * @param {string} quality - The quality of the thumbnail (default, hqdefault, mqdefault, etc.)
 * @returns {string|null} - The thumbnail URL if ID was found, otherwise null.
 */
export function getThumbnailUrl(url, quality = 'hqdefault') {
  if (!url) return null;

  try {
    // First try to get video ID - this works for regular videos
    const videoId = getId(url);
    if (videoId) {
      return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
    }

    // If not a direct video, check if it's a playlist
    const playlistId = getPlaylistId(url);
    if (playlistId) {
      // Try to extract first video from playlist URL
      const videoMatch = url.match(/&index=1&.*v=([A-Za-z0-9_-]{11})/);
      if (videoMatch && videoMatch[1]) {
        return `https://img.youtube.com/vi/${videoMatch[1]}/${quality}.jpg`;
      }

      // If we can't find a specific video, we use the YouTube playlist thumbnail API
      // This is a best-effort approach as YouTube doesn't have a public API for this
      return `https://i.ytimg.com/vi_webp/${playlistId}/${quality}.webp`;
    }

    // If neither a video nor a playlist with ID could be detected
    return null;
  } catch (error) {
    console.error('Error generating YouTube thumbnail URL:', error);
    return null;
  }
}
