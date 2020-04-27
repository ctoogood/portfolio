---
 title: Photojournalit
 category: Web Project
 slug: photojournalit
 featuredImage: './photojournalit__home.png'
 description: 'A photo upload and storage website built using React JS & AWS Amplify'
 keywords: ["AWS", "Material-UI", "Amplify", "AWS Amplify", "AWS Cognito", "Serverless", "Dynamo DB", "React", "ReactJS", "Lambda"]
 date: '2020-04-01'
---

Photojournalit is a photo storing website built using React and AWS Amplify.

---

![Login Page](./pj_login.PNG)

It features authentication built on AWS Cognito which allows users to register, login & reset forgotten passwords.

---

![Collections Page](./pj_collections.jpg)

Once logged in the user can create a collection.  The collections are listed on the user's profile page.

---

![Posts Page](./pj_addPost.jpg)

Within each collection, new posts can be added through the Add Post form. Using GraphQL subscriptions the list of posts is automatically updated on upload of the new post.

---

![Post Options](./pj_postOptions.png)

Posts can be edited, downloaded, assigned to the collection cover,or deleted.  Each collection and post is stored in AWS Dynamo DB and the images are stored in AWS S3 storage.

---

![Post Detail](./pj_post.png)

The posts can be viewed individually, with the option to navigate to the previous and next image in the collection.