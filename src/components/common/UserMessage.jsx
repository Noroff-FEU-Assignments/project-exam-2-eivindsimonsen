import Loader from "./Loader";
import Alert from "react-bootstrap/Alert";
import { useState, useEffect } from "react";
import { BASE_API_URL, BASE_API_URL_POSTS } from "../../constants/api";

function UserMessage() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = BASE_API_URL + BASE_API_URL_POSTS;

  useEffect(
    // function that will run every time the component renders
    function () {
      // The get request
      async function fetchData() {
        try {
          const response = await fetch(url);

          if (response.ok) {
            const json = await response.json();
            // Assign the json to product state
            setPost(json);
          } else {
            //  If response failes, set error value to error state
            setError("An error occured");
          }
        } catch (error) {
          setError(error.toString());
        } finally {
          // Will run regardless of fail or not
          setLoading(false);
        }
      }
      // Call the api
      fetchData();
    },
    [url]
  );

  // Display loading indicator until products load
  if (loading) {
    return <Loader />;
  }

  // Display message in dom if error state has a value
  if (error) {
    return <Alert variant="danger">ERROR: Failed to load messages, try again later</Alert>;
  }

  return (
    <>
      {post.map(function (posts) {
        return (
          <div key={posts.id} className="user-message">
            <div className="user-message-image">
              <i className="fa-solid fa-user"></i>
            </div>
            <div className="user-message-credentials">
              <div>
                <p>{posts.title.rendered}</p>
                <p>{posts.slug}</p>
              </div>
              <span>
                <p dangerouslySetInnerHTML={{ __html: posts.excerpt.rendered }}></p>
              </span>
              <p dangerouslySetInnerHTML={{ __html: posts.content.rendered }}></p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default UserMessage;
