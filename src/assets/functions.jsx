/**
 * Extracts the YouTube video ID from a given URL.
 *
 * @param {string} url - The YouTube video URL.
 * @returns {string|null} - The YouTube video ID if found, otherwise null.
 */
export function getId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11 ? match[2] : null;
}
