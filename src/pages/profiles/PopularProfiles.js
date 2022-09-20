import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { axiosReq } from "../../api/axiosDefaults";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function PopularProfiles({ mobile }) {
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
        <Container
          className={`${appStyles.Content} ${
            mobile && "d-lg-none text-center mb-3"
          }`}
        >
          <p>Popular profiles</p>
          {mobile ? (
            <div className="d-flex justify-content-around">
              {popularProfiles.results.slice(0, 3).map((profile) => (
                <p key={profile.id}>{profile.owner}</p>
              ))}
            </div>
          ) : (
            <div>
              {popularProfiles.results.map((profile) => (
                <p key={profile.id}>{profile.owner}</p>
              ))}
            </div>
          )}
        </Container>
      ) : (
        <Asset spinner />
      )}
    </>
  );
}

export default PopularProfiles;
