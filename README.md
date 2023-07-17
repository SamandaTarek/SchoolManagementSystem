# School Management System #
![Alt text](schoolBus.gif)
### Steps to Initiate the start : ###
---------------
1. git clone
2. Run the API server from inside WebAPI to connect to DB
3. Run my-app from command prompt using *npm start"*

### Getting Familiar With Application: ###
---------------
To help you get acquainted with the web application I designed, there is a *navigation bar* at the top of the application that enables you to switch between windows.
Since it is the first page and can make or break the user's first impression, the first window, which is thought of as the home page, essentially displays a GIF of a school bus to be more user-friendly and to catch the user's eye.  The Students data window is on page two, and the Multiple Students Registration window is on page three. Below, we'll go into more detail about these two windows.


### Students Data Window : ###
---------------
#### Required Features Implemented: ####
As Required, you can see all the data that was registered in our DB it includes the following fields:
1. Student First Name
2. Student Second Name
3. Student Photo (inserted and displayes)
4. Student Note (which is optional)

#### Additional Feautures: (not required) ####
1. *Edit/ delete buttons: * You can either edit or delete any of those entries whwnever you want with just a click of a button
2. *Add single Entry for 1 student button: * I personally think this feature is cool because the image get displayed before it is sent to the database and any of the previously mentioned fields could be filled in very easily.
3. "Real Time Change in DB": once you Edit, Delete or Add a new students it is directly sent to the database.

#### Required Feature that wasn't fully implemented:  ####
1. *Export Data To Excel*: I've put the button in the UI but due to issues that I'll mention further down. Sadly, I couldn't finish it within the time frame. (Please refer to the challenges section)

### Multiple Entry Registration Window : ###
---------------
#### Required Features Implemented: ####
As Required, you can add 1 or more students at the same time dynamically to the Database and there is *+1* button to add another entry and a *del* button if you decide to delete one of these entries before delivering it to the Database
1. Student First Name
2. Student Second Name
4. Student Note (which is optional)

#### Additional Feautures: (not required) ####
*real time display of the entries data: * while you're writing the data you can see it formulating in a table like area which is displayed sequentially with the order you typed with. this gives the user an quick overview of what he/she is going to deliver to the Database before delivering it.

#### Required Feature that wasn't fully implemented: ####
I discovered during testing that there is a bug that prevents it from delivering to the database as planned; but, given the circumstances and the deadline, I sadly had to submit the work with this feature incomplete. Later on, I'll try to figure out why it isn't functioning as I had hoped. (also a reminder, kindly refer to the challenges section)

### DataBase : ###
---------------
I created a table in Microsoft *SQL Management Studio* and created a table having 4 attributes:
1. Student First Name was *varchar(500)*
2. Student Last Name was *varchar(500)*
3. Student Photo was *varchar(500)*, example of accepted string "img.png"
4. Student Note was *varchar(3000)* ,since it should be longer

### Challenges I faced : ###
---------------
These are some of the major challeneged I faced during th creating of this project which lead me miss 2 of the feautures that were required which were (connecting multi user registration to DB and exporting excel file)
1. *No Previous Experience with React and .Net: * Using React and .Net was one of the first challenges I faced because I never used them before in any of the previous projects so the *School Management System* which is this project would be marked as my *FIRST* ever project done using React and .Net framework
2. *programs and Libraries Installation leading to the crash of my laptop*: Since I had no prior experience using React or .Net I had to install all the programs and libraries required to deliver this task and by doing so it led to my already not steady laptop to completetly crash and die. Therefore I spent 36 hours which is a day and a half trying to fix the laptop in order to be able to start with the task instead of actually work on it. Sadly, this situation delayed me but it was out of my hands and God's will.
3. *Starting from scratch on a different laptop: * With my laptop dying on me I had no choice but to borrow my friend's laptop and start the installations from scratch once again, it delayed me a bit more but it all worked out at the end but it took me at least another 3 hours.
4. *Technical Challenges: * It was my very first project using these frameworks as I said earlier, so I encoutered technical challenges but these were actually good and I was happy to learn and implement what I learnt directly on this project. However, it still was a delay so there was minor features that were required but I couldn't implement in time.

### My experience while doing this task: ###
---------------
I am very grateful for this opportunity and for you considering me for this position, it was a very fruitful experiencee. Yes, I faced alot of technical and non-technical challenges but it was still very fun to learn and create this project in almost 34 hours. Thank you for giving me this Project Task and I would love to hear your feedback and how I can improve as an engineer




