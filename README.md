# Created with Next JS 13 Features with Mongo DB.


#### Full Stack app without Node js and express js.

This app is simply for those who want to explore the new features and structure of NextJS 13 in an app and see how things work.


The app has a very simple structure with all the latest functionalities of NextJS 13. This app has a contact form (connected with MongoDB) and a Rest API integration for movie lists.




## Run locally

Beginner guide, who are just new in Next js can easily understand.

To deploy this project locally.

1. First of all simply fork the repo and download it into your local device.


2. After opening the repo folder in the IDE, in the terminal run the command,

```bash
  npm run i
```

3. then add the environment variables file in the root directory with name ".env.local" , inside it add two variables ( 1. RAPID_URL , 2. MONGODB_URL )

1- RAPID_URL : In this variable add the api url you will get from netflix rapid api.

2- MONGODB_URL : In this variable add your database connection url. 

4. then run command. 

```bash
  npm run dev
```

Note: This form will not work if you deploy the project on vercel because. vercel has some limitations on hobby package, in which one limitation is timeout of 5sec on api response. So the api response time from database is longer than 5sec. 





## Developers

- [@thapatechnical](https://github.com/thapatechnical)
- [@MAhmedSid](https://github.com/MAhmedSid)


### Thank you for visiting. I hope everyone gets benefits.
