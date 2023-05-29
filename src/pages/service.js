export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  const truncatedText = text.split(' ').slice(0, maxLength).join(' ');
  return truncatedText + '...';
};