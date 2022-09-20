import { axiosReq } from "../api/axiosDefaults";

// The code taken from the Code Institute moments project
{/*The reduce method loops through the new page of results from API. 
Then new results appends to the existing posts. The some method loops
through the array of posts in the accumulator. Inside, each accumulator
item id compares to the current post id from the newly fetched posts array.
If the some method returned true, this means it found a match and displayed
that post already. So in this case the accumulator returns without adding
the post to it. If the some method does not find a match, an array containing
spread accumulator returns with the new post added to it.*/}
export const fetchMoreData = async (resource, setResource) => {
    try {
      const { data } = await axiosReq.get(resource.next);
      setResource((prevResource) => ({
        ...prevResource,
        next: data.next,
        results: data.results.reduce((acc, cur) => {
          return acc.some((accResult) => accResult.id === cur.id)
            ? acc
            : [...acc, cur];
        }, prevResource.results),
      }));
    } catch (err) {}
  };

  export const followHelper = (profile, clickedProfile, following_id) => {
    return profile.id === clickedProfile.id
      ? // This is the profile I clicked on,
        // update its followers count and set its following id
        {
          ...profile,
          followers_count: profile.followers_count + 1,
          following_id,
        }
      : profile.is_owner
      ? // This is the profile of the logged in user
        // update its following count
        { ...profile, following_count: profile.following_count + 1 }
      : // this is not the profile the user clicked on or the profile
        // the user owns, so just return it unchanged
        profile;
      }
