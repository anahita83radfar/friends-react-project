import React from "react";
import { Link } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import btnStyles from "../../styles/Button.module.css";
import styles from "../../styles/Profile.module.css";
import Avatar from "../../components/Avatar";
import Button from "react-bootstrap/Button";
import { useSetProfileData } from "../../contexts/ProfileDataContext";

// The code taken from the Code Institute moments project
function Profile(props) {
  const { profile, mobile, imageSize = 55 } = props;
  const { id, following_id, image, owner } = profile;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const { handleFollow, handleUnfollow } = useSetProfileData();

  return (
    <div
      className={`my-3 d-flex align-items-center ${mobile && "flex-column"}`}
    >
      <div>
        <Link className="align-self-center" to={`/profiles/${id}`}>
          <Avatar src={image} height={imageSize} />
        </Link>
      </div>
      <div className={`mx-2 ${styles.WordBreak}`}>
        <p className={styles.Text}>{owner}</p>
      </div>
      <div className={`text-right ${!mobile && "ml-auto"}`}>
        {!mobile &&
          currentUser &&
          !is_owner &&
          (following_id ? (
            <Button
              className={`${btnStyles.Button} ${btnStyles.Bright}`}
              onClick={() => handleUnfollow(profile)}
            >
              unfollow
            </Button>
          ) : (
            <Button
              className={`${btnStyles.Button} ${btnStyles.Bright}`}
              onClick={() => handleFollow(profile)}
            >
              follow
            </Button>
          ))}
      </div>
    </div>
  );
}

export default Profile;