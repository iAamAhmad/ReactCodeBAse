
export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '763d8e3aa9mshb66662a5576c245p1972b1jsn68bd64109216',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '763d8e3aa9mshb66662a5576c245p1972b1jsn68bd64109216',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
