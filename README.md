Blog CMS

It is a MERN stack based blogging content management application where users can read, write, comment, profile management , follow other user, like blogs, get daily updates and user, admin dashboard.

### create .env file with below variables

```bash

MONGO_URI=<mongodb-server-link>
PORT=8000
NODE_ENV=dev
JWT_SECRET=<your-jwt-secret>
CLIENT_URL=<client-url>
EMAIL_ID=<email-address-for-nodemailer>
PASS=<email-password-for-nodemailer>
OAUTH_CLIENT=<google-oauth-client-id>
```

edit client/src/user/SocialLogin.js  replace google-oauth-client

```bash

```