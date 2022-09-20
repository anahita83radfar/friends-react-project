import React from "react";
import Media from "react-bootstrap/Media";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { axiosRes } from "../../api/axiosDefaults";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Comment.module.css";
import { MoreDropDown } from "../../components/MoreDropdown";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function Comment(props) {
    const {
        profile_id,
        profile_image,
        owner,
        updated_at,
        content,
        setPost,
        setComments,
        id,
      } = props;
    
      const currentUser = useCurrentUser();
      const is_owner = currentUser?.username === owner;
    
      const handleDelete = async () => {
        try {
          await axiosRes.delete(`/comments/${id}`);
          setPost((prevPost) => ({
            results: [
              {
                ...prevPost.results[0],
                comments_count: prevPost.results[0].comments_count - 1,
              },
            ],
          }));
    
          setComments((prevComments) => ({
            ...prevComments,
            results: prevComments.results.filter((comment) => comment.id !== id),
          }));
        } catch (error) {}
      };

  return (
    <div>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body>
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
          <p>{content}</p>
        </Media.Body>
        {is_owner && (
          <MoreDropDown handleEdit={() => {}} handleDelete={handleDelete} />
        )}
      </Media>
    </div>
  );
}

export default Comment;