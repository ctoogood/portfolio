---
title: Photojournalit
category: Web Project
slug: photojournalit
featured_image: https://res.cloudinary.com/dhat0b0ey/image/upload/v1593868600/portfolio/latestimages/photojournalit__home_sqvax5.png
description: A photo upload and storage website built using React JS & AWS Amplify
keywords:
- AWS
- Material-UI
- Amplify
- AWS Amplify
- AWS Cognito
- Serverless
- Dynamo DB
- React
- ReactJS
- Lambda
date: 2020-04-01
url: https://master.d2u97rkd7xed86.amplifyapp.com/
github: https://github.com/ctoogood/photojournal

---
Photojournalit is a photo storing website built using React and AWS Amplify.

***

![Login Page](https://res.cloudinary.com/dhat0b0ey/image/upload/v1589093377/portfolio/latestimages/pj_login_ahzkeg.png)

It features authentication built on AWS Cognito which allows users to register, login & reset forgotten passwords.

***

![Collections View](https://res.cloudinary.com/dhat0b0ey/image/upload/v1589093394/portfolio/latestimages/pj_collections_ess5kc.jpg)

Once logged in the user can create a collection.  The collections are listed on the user's profile page.

***

![Add a Post](https://res.cloudinary.com/dhat0b0ey/image/upload/v1589093420/portfolio/latestimages/pj_addPost_zhoq8d.jpg)

Within each collection, new posts can be added through the Add Post form. Using GraphQL subscriptions the list of posts is automatically updated on upload of the new post.

***

![Post Options](https://res.cloudinary.com/dhat0b0ey/image/upload/v1589093435/portfolio/latestimages/pj_postOptions_bz1xau.png)

Posts can be edited, downloaded, assigned to the collection cover,or deleted.  Each collection and post is stored in AWS Dynamo DB and the images are stored in AWS S3 storage.

***

![Post Detail](https://res.cloudinary.com/dhat0b0ey/image/upload/v1589093450/portfolio/latestimages/pj_post_mxt13r.png)

The posts can be viewed individually, with the option to navigate to the previous and next image in the collection.