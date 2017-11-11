# cat-application
A cat application developed using ReactJS with Redux

The Application uses ReactJS in the view layer and Redux for state management. The Application has the following dependencies

1. *Express* - To fetch the data.
2. *React-Router* - To manage the routing between all the 3 pages.
3. *Faker* - To generate a fake data in json format to be used in our application
4. *Redux-Thunk*
5. https://loremflickr.com/320/240/cat - To get random cat images on every page load.

We have used data belonging to 20 cats in the application and 4 categories. If we want to increase data, then in server.js on line 23, modify the value of array from 20 to whataver value is need.

The Application has 3 pages

**First Page** - This page displays the images of all the cats available with us. It also shows the categories link for the cats belonging to that category.
  On clicking of the categories, user will be taken to the category page, where the images of cats belonging to that particular category will be shown.
  If the user clicks on any cat image, the details of that particular cat will be shown to the user in other page(3rd Page).
  
  **2nd Page** - This page shows the cats belonging to that particular category. If the user clicks on any cat image, the details of that particular cat will be shown to the user in other page(3rd Page).
  
  **3rd Page** - Shows the cat image and description of the particular cat , which is clicked either in page 1 or page 2.
  
  ****How to Run the Application -: ****
  
  Node should be installed. If it is not installed, please install it through npm website.
  
  **By Downloading**
  1. Go the URL https://github.com/atulsingh0913/cat-application .
  2. Download the application in the zip folder.
  3. Extract the zip folder in some location , eg-:  d:/sample-project .
  4. Open Command Prompt and go to D:/sample-project/cat-application-master
  5. Run the command "npm install"
  6. It will take sometime to install the node modules. If the installation is not successfull, then run the same command again. After the installation is succesfull , run the express server by the command "npm run start-server" . You will see a message in the terminal "Start server in 4000" , means the server has started.
  7. Open another command promt window and go our project location and run the command "npm start" . It will start our application in port 3000.
  8. Hot modelling is enabled , so any changes which you make to the application will automatically reflect without starting the server of giving a build again.
  
  **By Cloning using HTTPS**
  
  1. Go the the URL https://github.com/atulsingh0913/cat-application.git .
  2. Click on clone or download and copy the URL i.e https://github.com/atulsingh0913/cat-application.git .
  3. Create a folder in any directory and run the command "git init" , in that folder. Open git bash and run the command "git clone https://github.com/atulsingh0913/cat-application.git"
  4. The project folders would have been cloned in the folder. Repeat the steps from above from 4 to 8.
