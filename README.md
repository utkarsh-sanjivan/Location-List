## About
`Location List`  is an application that displays the list of location for the user and these locations can be added deleted and edited as per the use of the user. For achieveing this the locations are stored in indexedDB and retieved, edited and deleted from there. Here, the lists are paginated and an be sorted in the basis of the name address and the phone number. There is also the functionality to change the number of locations in a page.<br />
This application has three main module, the first module is the `Location Table` module which shows the list of the locations, second one is the `Create/Edit Location` module that is used for creating an event or editing a particular event and the third is the `Location Timing` module that is used for defining the time of appointment in the location for a particular day of the week.<br />
The table module provides the list in a paginated way where the number of records per page can be selected. Initially this is 10 but it can be changed to 20 or 30 too. The pagination component is location at the footer of the table and has four button for the navigation purpose namely first page(Used for navigating to the first page), previous page(used for navigating to the previous page), next page(Used for noavigating to next page) and last page(Used for navigating to the last page). The buttons also hides when there is no scope for their use like the first page and the previous page will hide when the user is on the first page and the last page and the next page will hide when the user is on the last page.<br />
The table can  also be sorted and this can be achieved by clicking on the table header. Once a sorting is done a small arrow will appear next the the column using which the sorting is done. The arrow will point to up when the sorting is in ascending order and the arrow will point towards down when the sorting is in descending order.<br />
For adding a location there is a button with the name 'Add Location' that can be used for opening the modal for creating the location. The modal contains a form that takes data like the name of the location, address timezone, facility timing, appointment pool and phone number. Te input method for most of them is text box but the state and time zone are dropdown form where user can select. The appointment pool has an input box and that should have comma separated pools to creating different tags for different pool. The location name is required and the Zip Code should atleast have 5 to 10 characters but with no spaces. The Facility timing is actually a button which on clicking opens the modal for adding the facility timing.<br />
The modal for adding the facility timing has all seven days of the week with checkbox and time picker for to and from timing for each day. This time picker can be used to add timing for each days in 12 Hour format but once selecting the time is converted into 24 hour format. There is also a button named 'Apply To All Checked' and on clicking it the time in the 'To' and the 'From' of this day will be set for all the days whose checkbox have been checked. When the 'Save' button is clicked in this modal the timing data gets stored on the modal for Creating/Editing Location which then is used.<br />
This application is built on `React` for the front end, `HTML/CSS` for styling, `Ant Design` for designing and `indedexedDB` for storing the location data. the application can be accessed from the link below.

[Location List](https://utkarsh-sanjivan.github.io/Location-List/)

## Available Scripts
Following are the scripts that are available,<br />
To start the application
```bash
npm run start
```
To build the application
```bash
npm run build
```
To run the test cases
```bash
npm run test
```
To deploy the application on the Github.
```bash
npm run deploy
```

## Accessing the application
The application is deployed on https://utkarsh-sanjivan.github.io/Location-List/ and can be accessed there.

## Technologies Used
* HTML
* CSS
* React
* Ant Design
*IndexedDB
