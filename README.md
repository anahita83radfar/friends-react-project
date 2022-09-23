# Friends

Friends is a web application for people who are interested in communicating with each other. The web application's goal is to build a community of people who want to have contact to each other, and share posts and pictures. This weblog empowers people to find new friends around the world.

The user of this web application will be able to read, write, update and delete the post, leave comments on the post, update and delete the comment, like the post, and follow and unfollow other profiles. Through online registration, users can access their profiles and update them.

 ![Responsive page](/media/images/readme/responsive.jpg)

 # Features

- ## The Home Page

  ![The Home Page](/media/images/readme/home.jpg)

- ### Navigation Bar
  - Featured at the top of the page on all pages. The navigation bar includes links to the Logo, Home page, Sign up page, Sign in page, Profile page, Feed page, Liked page and Add post page.
  - The logo with the letter F, is related to the name of the web application Friends and by clicking on it the user redirect to the Home page.
  - The navigation makes the different pages of the web application easy to find. It is fully responsive and identical on each page to allow for easy navigation without having to revert to the previous page.

  ![Navigation bar](/media/images/readme/nav.jpg)

- ### The Main Section
  - The main section on the Home page is divided into different sections, the list of posts and the list of profiles. Each post is published by the relevant users.
  - Each post has an image with the post's owner's name and picture, the title, and content of the post, the date of publication, like's numbers, and comment numbers underneath it. The user can access the post's detail by clicking on the post's image.
  - Each profile has an image with the profile's owner's name. The user can access the profile's detail by clicking on the Profile's image. By clicking on the follow button next to each profile the logged-in user will be able to follow/unfollow other profiles.


  ![The Main section](/media/images/readme/main.jpg)
  
- ### The Sign up Page
  - This page will allow the user to get signed up to the web application. The user will be asked to submit their username, password, and confirm password.

  ![The Sign up page](/media/images/readme/signup.jpg)

- ### The Sign in Page
  - This page will allow the user to get the login to the web application if already has been registered.

  ![The Sign in page](/media/images/readme/signin.jpg)

- ### The Profile Page
  - This page will demonstrate the user's info such as image, name, number of posts, followers and following, bio, and all the published posts by the user.
  - The user will be able to edit and update the profile, username, and password by clicking on the dropdown menu. By editing the profile and updating the username and password the user redirects to the Profile page.

  ![The profile page](/media/images/readme/profile.jpg)
  ![The profile page dropdown menu](/media/images/readme/profile-edit-dropdown.jpg)
  ![The profile edit page](/media/images/readme/profile-edit-page.jpg)
  ![The profile edit username page](/media/images/readme/profile-edit-username.jpg)
  ![The profile edit password page](/media/images/readme/profile-edit-password.jpg)

- ### The Add post Page
  - This page allows the user to create a new post by completing a form with different sections such as title, and content and uploading an image.
  - By creating a new post the user redirects to the Post page.

  ![The Add post page](/media/images/readme/add-post.jpg)

- ### The Post Page
  - The user can access this page by clicking on the post's image on the Home page and the Profile page. Also by creating a new post the user redirects to this page.
  - This page allows the user to read, leave a comment and like the post, update and delete the post by clicking on the dropdown menu. By editing the post the user redirects to the Post page and by deleting the post the user redirects to the Home page.

  ![The Post page](/media/images/readme/post.jpg)
  ![The Post page dropdown menu](/media/images/readme/post-edit-dropdown.jpg)
  ![The Post edit page](/media/images/readme/post-edit.jpg)

- ### The Feed Page
  - This page allows the user to read the posts of other users whose the user follows.

  ![The Feed page](/media/images/readme/feed.jpg)

- ### The Like Page
  - This page allows the user to read the posts which the user leaves the like.

  ![The Like page](/media/images/readme/like.jpg)

- ### Edit and delete the comment
  - The user can update and delete the comment by clicking on the dropdown menu next to the comment.

  ![The comment dropdown menu](/media/images/readme/comment-dropdown.jpg)
  ![Edit comment](/media/images/readme/comment-edit.jpg)

# Data Model
   This diagram shows the different components of the web application. The web application is divided into different sections, authentication, creation post, access, read created posts, read the profiles, access and update the profile.

   ![Diagram](/media/images/readme/diagram.jpg)

# Design
- ### Sketch wireframes used in making the web application mockup.
  - The Home page

    ![The Home page wireframe](/media/images/readme/home-wf.jpg)

  - The Post page

    ![The Post page wireframe](/media/images/readme/post-wf.jpg)

  - The Sign up page

    ![The Sign up page wireframe](/media/images/readme/signup-wf.jpg)

  - The Sign in page

    ![The Sign in page wireframe](/media/images/readme/signin-wf.jpg)

  - The Profile page

    ![The Profile page wireframe](/media/images/readme/profile-wf.jpg)

  - The Add Post page

    ![The Add Post page wireframe](/media/images/readme/add-post-wf.jpg)

  - The Post edit page

    ![The Post edit page wireframe](/media/images/readme/post-edit-wf.jpg)

  - The Profile edit page

    ![The Profile edit page wireframe](/media/images/readme/profile-edit-wf.jpg)

 # User Stories  

 The user stories throughout this project:
  [User Stories](https://github.com/anahita83radfar/friends-react-project/issues)

# Front-End libraries
The libraries below have been used for this application:
- React

  The use of React helped with a better user experience as there was instant feedback to users whenever the state or composition of components changed.
  In addition, the use of components allowed for easy reuse and deduplication of code which made for a better programming experience.

- React-Bootstrap

   To aid the React project style and responsive design
- React-Router

   To control what the user sees depending on the URL they have accessed in the browser.
- Axios

   To tell the React project to send requests to API
- React-infinite-scroll-component

   To loads posts automatically as the user scroll toward the bottom of the page
- jwt-decode

   To decode JSON Web Tokens to access the timestamp within the response

- Mock Service Worker

   To creat mock API responses during testing the application

# Testing

- This web application is responsive for different devices such as desktop pc, tablets, and mobile. It functions on all standard screen sizes using the Chrome Dev Tools device toolbar.

- Different parts of the web application such as header, the main section, sign up, sign in, profile, add post and post detail page all are easy to understand and readable.

- Manual test case template

  The document below demonstrates the individual test cases and shows that the expected results are gotten.

![Manual test case template](/media/images/readme/Manual-Test-Case-Template.jpg)

### Validator Testing

- JavaScript/JSX
  - No errors were returned from **ESlint**.

- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator) (check by direct input)

- Accessibility

![Accessibility](/media/images/readme/accessibility.jpg)

# Deployment
[Friends project](https://friends-4hk0.onrender.com) was deployed to Heroku.
- Steps for deployment:
  - Create a new Heroku app
  - Link the Heroku app to the repository
  - Click on **Deploy**

# Credits
### Content
- The icons in the navbar, dropdowns menus, search bar, like and comment icon taken from [Font Awesome](https://fontawesome.com/)
- The commented code in the project is taken from CI [Moments](https://github.com/Code-Institute-Solutions/moments/tree/bb6657e265fb18360b841e10d9d633dad06f4e5c) project.

### Media
- The photos used on the home page are from [Pexels](https://www.pexels.com)
- The Logo are from [Behance](https://www.behance.net/gallery/18454091/F-Logo)
- The No result image are from [Flaticon](https://www.flaticon.com/free-icon/no-results_6195678)
- The Upload image are from [Flaticon](https://www.flaticon.com/free-icon/upload_272390)