# MAÇTAN
https://team23-frontend.herokuapp.com/

## Description

MAÇTAN is an e-commerce platform that aims to serve both football clubs and fans. Turkey football teams can upload match worn items; so that fans can purchase matched worn products with auctions.

## User Documentation

By clicking https://team23-frontend.herokuapp.com/ and signing-up, you can start using MAÇTAN.

For your information, there is a bug in the sign in page. Although you provide correct credentials, there is a possibility that the page will give you an error that indicates provided information is incorrect. For now, refreshing the page is a temporary solution. The bug will be fixed soon. 

For any further bugs, you can contact with emails provided in the footer.

## Developer Documentation

### How To Install

Repositories of the project

   * Frontend: https://github.com/SU-CS308-22FA/Team23-Frontend
   
   * Backend: https://github.com/SU-CS308-22FA/Team23-Backend

1. To obtain the source code for this project, you can clone the repositories of both backend and frontend using the following commands:
   ```sh
   git clone https://github.com/SU-CS308-22FA/Team23-Frontend.git
   ``` 
   ```sh
   git clone https://github.com/SU-CS308-22FA/Team23-Backend.git
   ``` 
   Alternatively, you can download a zip file of the code by clicking the "Clone or download" button on the repository page and selecting "Download ZIP".

2. To set up the project, you will need to install the dependencies listed in the package.json file. You can do this by running the following command from the root directory of the both frontend and backend files:
   ```sh
   npm install
   ```
3. Once the dependencies have been installed, you can start the development server by running the following command on both frontend and backend files:
   ```js
   npm start
   ```
   This will start a local development server on your machine, which you can access the backend at the URL http://localhost:3000/ and frontend at the URL http://localhost:3001/. 
   
   Any changes you make to the frontend code will be reflected in the browser automatically but for the changes on the backend code you need re-run the backend project in order to see the changes.

### Directory Structure

<ol>
  <b>1. Frontend</b>
  
    .
    ├── public
    ├── src                    # React source file
    │   ├── components         # React components 
    │   │   ├── ActiveBids         # Components for active bids page
    │   │   ├── Calendar           # Components for calendar in admin page
    │   │   ├── Card               # Components for listing auctions as cards
    │   │   ├── HotAuctions        # Components for hot auctions section
    │   │   ├── Navbar             # Components for navigation bar
    │   │   ├── Product            # Components for product page
    │   │   ├── Utils              # Static component divider
    │   ├── constant           # Constant variables such as server url
    │   ├── service            # Axios functions for http requests
    │   ├── style              # Css files for components
    │   ├── utils              # Utility functions
    │   ├── views              # Website Pages
    │   ├── app.js             
    │   ├── index.js           
    ├── package.json           
    └── README.md  


  <b>2. Backend</b>
  
  
    .
    ├── bin
    ├── config                          # Config files for nodejs
    ├── controller                          # Controller files for database operations
    │   ├── mongoDB.controller.js           
    │   ├── product.controller.js            
    │   ├── user.controller.js               
    ├── middleware                
    ├── model                     #Schemas for mongodb 
    ├── public                    
    ├── routes                    # Paths and functions from controllers are listed
    ├── seed                      # Seed files for generating fake data
    ├── utils
    ├── views                     
    ├── app.js
    ├── package.json              
    └── README.md  
    
   
</ol>   

### How to Deploy

To deploy this project on Heroku, follow these steps:

<ol>
  
  <li>
  First, make sure you have a Heroku account and the Heroku CLI installed on your machine.
  </li>
  
  <li>
  Go to directory of the project for both backend and frontend.
  </li>
  
  <li>
  Next, run the following command to create a new Heroku app:  
    
 ```sh
 heroku create -a app-name
 ``` 
    
  </li>
  
  <li>
    
  Finally, run the following command to deploy the app to Heroku:
    
 ```sh
 git push heroku main
 ``` 
    
  </li>
</ol>


<p align="right">(<a href="#readme-top">back to top</a>)</p>
