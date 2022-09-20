import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { axiosReq } from "../../api/axiosDefaults";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function PopularProfiles() {
  const [profileData, setProfileData] = useState({
    popularProfiles: { results: [] },
    pageProfile: { results: [] },
  });

  const [loaded, setLoaded] = useState(false);

  const { popularProfiles } = profileData;
  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/profiles/?ordering=-followers_count"
        );
        setProfileData((prevState) => ({
          ...prevState,
          popularProfiles: data,
        }));
        setLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    handleMount();
  }, [currentUser]);

  return (
    <>
      {loaded ? (
        <Container className={appStyles.Content}>
          <p>Popular profiles</p>
          {popularProfiles.results.map((profile) => (
            <p key={profile.id}>{profile.owner}</p>
          ))}
        </Container>
      ) : (
        <Asset spinner />
      )}
    </>
  );
}

export default PopularProfiles;
