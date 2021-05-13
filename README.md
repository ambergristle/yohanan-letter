# Yohanan Letter

creating and archiving newsletters

- all users can search for newsletters or segments by date, tag, or keywords
- admin can create and publish posts, and add new admin users
- _initially designed with csr + redux-toolkit, switched to next for seo + formik; global store no longer required_

## v0 - in development

**built with next + postgresql using:**

- components: material-ui
- forms: formik + yup
- wysiwyg: quilljs
- date handling: luxon
- db connection: prisma
- auth: bcrypt + jsonwebtoken
- email + newsletter handling: sendgrid
