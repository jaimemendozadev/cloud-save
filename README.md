# [Cloud Save](https://github.com/jaimemendozadev/cloud-save)

A simple web app that saves your 💻 files to the ☁️


## Table of contents

- Initial Setup
- Create a `.env` File
- Starting the App
- Created By

## Initial Setup

Open up your terminal and clone the repo locally to your computer by running the following command at the target destination: `$ git clone https://github.com/jaimemendozadev/cloud-save.git`

This app uses a lot of different services that are beyond the scope of this README to cover. Here is the list of services you'll need to research to get the app running:

- [Passport.js Google OAuth](https://github.com/jaredhanson/passport-google-oauth2) (You'll need to register the app and use the Google+ API to get a user's Gmail and profile info.)

- Amazon Web Services S3 (You'll need to register with AWS, create an IAM user that can only access S3, and configure the bucket permissions/settings.)

- mLab (a free service that allows your app to save data in a sandbox environment in a Mongo Database. [Follow the quickstart guide](http://docs.mlab.com/) to sign up and create a database.)



## Create a `.env` File

Fire up your terminal and at the root folder, create a new `.env` by simply running `$ touch .env.`

After creating the `.env` file, use your text editor to enter all the information for each environment variable in the list below. There should be no spacing between the lines and do not end the line with punctuation or spacing. The `.env` should appear like the following snippet:

```
PORT = 

DB_URL = 

GOOGLE_CLIENT_ID=

GOOGLE_CLIENT_SECRET=

GOOGLE_AUTH_URL=

AWS_KEY_ID=

AWS_SECRET_KEY=

AWS_BUCKET_NAME=

AWS_BUCKET_BASE_URL=

JWTSecret=
```

After creating the `.env` and you fire up the app, the key value pairs in the file will correspond to any line of code that references `process.env`.

## Starting the App

In the root of the app, use your terminal to run `$ yarn install` to install all the app dependencies. Wait until everything finishes loading.

Open a second tab in your terminal and run the command `$ yarn run build` to build all the React components. Watch the terminal and wait until all the components finish building.

Finally in the first terminal tab, or in another opened terminal tab, run the command `$ yarn run start` to start the app.

Go to `http://localhost:3000` in your favorite browser to start using the app. 


## Created By

**Jaime Mendoza**
[https://github.com/jaimemendozadev](https://github.com/jaimemendozadev)