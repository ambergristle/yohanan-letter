# Yohanan Letter

creating and archiving content for the yohanan letter, a weekly newsletter for investors and entrepreneurs

- all users can search for newsletters or segments by date, tag, or keywords
- admin can create and publish posts, and add new admin users
- _initially designed with csr + redux-toolkit, switched to ssr for seo_

## v0 - deployed at https://www.yohananletter.com

**built with next + postgresql using:**

- components: material-ui
- forms: formik + yup
- wysiwyg: quill.js
- zoned date handling: luxon
- db connection: prisma
- auth: bcrypt + jsonwebtoken
- email html generation: pug
- email + newsletter distribution: sendgrid
- global state (search, filter, logged-in): zustand
- fuzzy search + filtering: fuse.js
