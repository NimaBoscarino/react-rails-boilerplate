// This file will use axios to make requests to the books api
import axios from "axios";

const getBookById = async (id) => {
  try {
    const res = await axios.get(`https://openlibrary.org${id}.json`);
    const bookData = res.data;
    const author =
      bookData.authors && bookData.authors.length > 0
        ? await getAuthorName(bookData.authors[0].author.key)
        : "Unknown Author";

    const cover = (bookData.covers && bookData.covers.length > 0)
        ? `https://covers.openlibrary.org/b/id/${bookData.covers[0]}-M.jpg`
        : `https://via.placeholder.com/128x192.png?text=No+Cover`;

    return {
      id: id,
      title: bookData.title || "No title available",
      description: bookData.description || "No description available",
      author: author || "No author available",
      cover: cover
    };
  } catch (err) {
    console.log("Error:", err.message);
    return null;
  }
};

const getAuthorName = async (authorKey) => {
  try {
    const res = await axios.get(`https://openlibrary.org${authorKey}.json`);
    return res.data.name;
  } catch (err) {
    console.log("Error fetching author:", err.message);
    return "Unknown Author";
  }
};

const getBooksByName = async (name) => {
  try {
    const res = await axios.get(
      `https://openlibrary.org/search.json?q=${replaceSpacesWithPlus(name)}`
    );
    const bookKeys = res.data.docs.map((doc) => doc.key);

    const books = await Promise.all(
      bookKeys.map((key) => {
        // return axios.get(`https://openlibrary.org${key}.json`);
        return getBookById(key);
      })
    );

    return books;
  } catch (err) {
    console.log("Error fetching books:", err.message);
    return "Unknown name";
  }
};

const replaceSpacesWithPlus = (name) => {
  return name.replace(/\s+/g, "+");
};

export { getBookById, getAuthorName, getBooksByName };