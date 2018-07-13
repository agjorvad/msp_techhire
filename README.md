## Project Title
MSP TechHire is an amazing program that partnered with several high-quality advanced learning programs and regional companies to train and hire a more diverse community in technology fields in the Saint Paul and Minneapolis area. MSP TechHire asked us to create a full-stack application to help track student success supported by the program from MSP TechHire's partner organizations. They also needed a way to transfer this data from their partners to the program quarterly. Finally, MSP TechHire wanted us to find a way to access the data uploaded by their partner organizations in order to show State Representatives ROI, efficient ways to access specific data for meetings, seamless ways to get data to see how they could improve the program for MSP TechHire and their partners, and quick ways to show potential sponsors how well the program is working in the community.

## Prerequisites
This project will require node package manager (`npm`) to initially get this program set up and installed. If you are planning on cloning the repository, you will also need `git` installed. It also uses PostgreSQL as the database system, so having a program like Postico to run queries and manage your database will be required as well.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Create your database and tables using the `database.sql` file in the main project folder, naming the database `techhire_db` for a local instance, or using the credentials listed on your host for a hosted instance. The database in the code is named `techhire_db`. If you would like to name your database something else, you will need to change `techhire_db` to the name of your new database name in server/modules/pool.js  Start the server.

Run `npm install`

Create a .env file at the root of the project and paste this line into the file:

`SERVER_SESSION_SECRET=superDuperSecret`

While you're in your new .env file, take the time to replace superDuperSecret with some long random string like 25POUbVtx6RKVNWszd9ERB9Bb6 to keep your application secure. Here's a site that can help you: https://passwordsgenerator.net/. If you don't do this step, create a secret with less than eight characters, or leave it as superDuperSecret, you will get a warning.

Start postgres if not running already by using brew services start postgresql.

Run `npm run server` in your terminal.

Now that the server is running, open a new terminal tab with cmd + t and run `npm run client`

Navigate to `localhost:3000`

Before you can log in, you'll need to register a new administrator account. To do this, deactivate the security surrounding registration by _BRIEFLY_ commenting out the `componentDidUpdate` function in `src/components/RegisterPage/RegisterPage.js` and saving it, as well as _briefly_ removing the `rejectNonAdmins` middleware from the router.post to '/register' in `server/routes/user.router.js`.

Once you do this, go to `localhost:3000/#/register` and register a new administrator account, then go back to the project and re-implement the security to disallow registration. This will only register a partner account. To complete the administrator account creation process, connect to the database using Postico (or any your favorite database management tool) and go to the user table, find the user name you chose, and under the `role` field, change your role to `admin`. Once this is complete, the admin account is complete and you may log in.

## Deployment
To deploy a production version, run the command `npm run build` in the project folder, then deploy it to the website you would like to host it on.

When it is on the web server, if `npm start` is not automatically started (such as it is on hosts like Heroku), run it.

## Downloading CSV files
The "Download CSV File" button on the "Search" page of the admin portal will only download data rows that are returned in the table below it. Data for all columns, not just the columns visible within the table, will be downloaded. Use the "Search" fields above to tailor your table results to the data you wish to download.  If no search is run, the "Download CSV File" button will download all student data in the database.

The "Download CSV Spreadsheet" button on the "Summary" page of the admin portal will also download all student data in the database.

## Uploading CSV files
To upload student data, click on the "Upload File" button. Navigate to the spreadsheet you use to report MSP TechHire student data and click "Open".  This spreadsheet must be a .csv file.  This can be changed in Microsoft Excel while saving your spreadsheet.

## Built With
React - A JavaScript library for building user interfaces.
PostgreSQL - Open source database.
ChartJS - Open source HTML5 charts.
Node.js - A JavaScript runtime built on Chrome's V8 JavaScript engine.
Express - Web application framework running on Node.js.
Material-UI - React Components that Implement Google's Material Design.
Passport.js - Authentication middleware.
react-csv-parse - Import data from a csv file to your app and your api.

## Versioning
Version 1.0.0

## Authors
* Greg Orvik
* Michele Dexter
* Alex Gjorvad
* Liz Goff

License
This project is licensed under the MIT License - see the LICENSE.md file for details

Acknowledgments
Hat tip to anyone whose code was used
Inspiration
etc