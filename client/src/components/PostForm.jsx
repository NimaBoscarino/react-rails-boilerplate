
import React, {useState, useEffect} from 'react';
import CustomRating from './CustomRating';
import PropTypes from 'prop-types';


const PostForm = ({onPostCreation}) => {
  const [rating, setRating] = useState('');
  const [timeSpent, setTimeSpent] = useState('');
  const [review, setReview] = useState('');
  const [userId, setUserId] = useState('');
  const [bookId, setBookId] = useState('');
  const [users, setUsers] = useState([]);
  const [books, setBooks] = useState([]);
  const [hours, setHours] = useState('');

useEffect(() => {
  fetch("/users")
    .then((response) => response.json())
    .then((userinfo) => setUsers(userinfo))
    .catch((error) => {
      console.error('Error fetching users:', error);
    });

  fetch("/books")
    .then((response) => response.json())
    .then((bookinfo) => setBooks(bookinfo))
    .catch((error) => {
      console.error('Error fetching books:', error);
    });
}, []);

const handleSubmit = (event) => {
  event.preventDefault();

  const post= {
    
    rating,
    time_spent: timeSpent,
    review,
    user_id: userId,
    book_id: bookId,
  };

  fetch("/posts", {
    method: "POST",
    headers: {
      "Content-Type": "Application/JSON",
    },
    body: JSON.stringify(post),
  })
    .then((response) => response.json())
    .then((newPost) => {
      onPostCreation(newPost);
      setRating("");
      setTimeSpent("");
      setReview("");
      setUserId("");
      setBookId("");
    })
    .catch((error) => {
      console.error('Error while creating the new post:', error);
    });

};

return (
  <div >
      <CustomRating />

      <form onSubmit={handleSubmit}>
      <div>
      <textarea
        type="text"
        name="review"
        rows="5"
        placeholder="Write a post:"
        value={review}
        onChange={(event) => setReview(event.target.value)}
        />
      </div >

      
      <div>
    <label>Time Spent (Hours):</label>
    <input
      type="number"
      value={hours}
      onChange={(e) => setHours(e.target.value)}
      required
    />
  </div>
 
      <div>
        <button type="submit"> Create My Post </button>
      </div>

      </form>
    </div>
  );
};

PostForm.propTypes = {
  onPostCreated: PropTypes.func.isRequired,
};

export default PostForm;
