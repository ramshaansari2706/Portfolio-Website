# Portfolio-Website
 This repository contains the code for my personal portfolio website. The website showcases my skills, interests, projects, and contact information. Below, you'll find a brief overview of the sections and functionalities of the website.

## Sections:
* Header: Contains the logo and navigation menu. <br>
* Home: Introduces me and provides a brief overview of my skills and interests. It also includes links to my social media profiles and a button to download my resume. <br>
* About: Provides a more detailed description of myself, including my educational background, skills, and experience. It also includes tabs for skills, experience, and education. <br>
* Interests: Lists my interests along with brief descriptions. <br>
* Skills: Displays my technical and professional skills using progress bars and radial bars, respectively. <br>
* Portfolio: Showcases my specializations with images and descriptions. <br>
* Contact: Provides ways to contact me, including a contact form and social media links. <br>

## Files:
* index.html: This is the main HTML file containing the structure and content of the website. <br>
* style.css: This CSS file contains the styles for the website's layout, fonts, colors, etc. <br>
* script.js: This JavaScript file contains scripts for interactive elements such as toggling menu, tab functionality, and smooth scrolling. <br>
* HomePicture.jpg: Image file for the home page background. <br>
* AboutPicture.jpg: Image file for the about page background. <br>
* Ramsha_Ansari_Resume.pdf: Resume file <br>

## Credits:
* Boxicons: Icons used in the website are sourced from boxicons.com. <br>
* Typed.js: Used for the animated typing effect, sourced from typed.js. <br>
* Unpkg CDN: Used for importing Boxicons and Typed.js libraries. <br>

## Icons used:
I have used these icons in my website and they are from [Boxicons.com](https://boxicons.com/) :
* Line no 28: Menu Icon ( <i class="bx bx-menu"></i> )
* Line no 43: Replit Icon ( <i class='bx bx-git-repo-forked' ></i> )
* Line no 44: Instagram Icon ( <i class='bx bxl-instagram'></i> )
* Line no 45: Linkedin Icon ( <i class='bx bxl-linkedin-square'></i> )
* Line no 46: Github Icon ( <i class='bx bxl-github'></i> )
* Line no 127: Internet/Web Development Icon ( <i class='bx bxs-planet'></i> )
* Line no 136: Android Development Icon (  <i class='bx bx-devices'></i> )
* Line no 146: Programming Languages Icon ( <i class='bx bx-code-block'></i> )
* Line no 155: Teaching Icon ( <i class='bx bx-book-reader'></i> )
* Line no 176: HTML Icon ( <i class='bx bxl-html5'></i> )
* Line no 185: CSS Icon ( <i class='bx bxl-css3'></i> )
* Line no 194: JavaScript Icon ( <i class='bx bxl-javascript'></i> )
* Line no 203: React Icon ( <i class='bx bxl-react'></i> )
* Line no 212: Python Icon ( <i class='bx bxl-python'></i> )
* Line no 221: Java Icon ( <i class='bx bxl-java'></i> )
* Line no 361: Email Icon ( <i class='bx bx-send'></i> )
* Line no 362: Phone Icon ( <i class='bx bx-phone-call'></i> )
* Line no 393: Arrow Icon ( <i class='bx bxs-up-arrow'></i> )

## Images used and that can be changed in the website:
I have also mentioned the images which I have used in the website so you can change them according to your choice Nearly every line is present in the index.html code except for the last one:
* Line no 53: HomePicture.jpg includes the home picture so first you should remove my image which is present in the code folder with your own image and note that it should be named as HomePicture and should be in .jpg format
* Line no 69: AboutPicture.jpg includes the about section picture so first you should remove my image which is present in the code folder with your own image and note that it should be named as AboutPicture and should be in .jpg format
* Line no 285: It consists of the image link of the Web Development Specialization so replace the image with image link which you want in the src tag.
* Line no 298: It consists of the image link of the Android Development Specialization so replace the image with image link which you want in the src tag.
* Line no 312: It consists of the image link of the Programming Languages Specialization so replace the image with image link which you want in the src tag.
* Line no 325: It consists of the image link of the Teaching Specialization so replace the image with image link which you want in the src tag.
* Line no 76 (style.css): This contains the image link of the background image so you can change it if you wish to do so.

## Styling of the Website:
Here's a brief overview of what each section does:
* Reset Styles and Body: Resets default styles and sets background and font for the body. <br>
* Header: Styles the header section which includes the logo and navigation bar. <br>
* Navbar: Styles the navigation links. <br>
* Home: Styles the home section including background image and content. <br>
* About: Styles the about section including the layout and content. <br>
* Interests: Styles the interests section including the subheading and list of interests. <br>
* Skills: Styles the skills section including technical and professional skills with progress bars. <br>
* Portfolio Content: Styles the portfolio section including images and overlays. <br>
* Contact: Styles the contact section including contact information and a form. <br>
* Last Text: Styles the last text section, possibly a footer. <br>
* Animations: Defines various animations like sliding in from different directions. <br>
* Media Queries: Adjustments for different screen sizes to ensure responsiveness. <br>

## JavaScript Part:
* Typed.js Initialization: <br>
Utilizes Typed.js to create a typing animation effect in the header section, showcasing various roles such as "Web Developer," "Android Developer," etc. <br>
* Social Media Links: <br>
Adds event listeners to social media icons in both the home and contact sections, enabling users to open corresponding social media profiles in new tabs. <br>
* Tab Navigation: <br>
Implements tab navigation functionality in the About section, allowing users to switch between skill, experience, and education tabs. The active tab is visually highlighted. <br>
* Resume Download: <br>
Provides a "Resume" button with an event listener to trigger the download of the resume file (Ramsha_Ansari_Resume.pdf). <br>
* Menu Toggle: <br>
Implements a menu toggle functionality for the navbar, allowing users to show/hide navigation links by clicking the menu icon. <br>
* Text-to-Speech (TTS): <br>
Implements TTS functionality for various sections and elements of the website, enabling users to listen to spoken descriptions when specific buttons or links are clicked. <br>
* Section Navigation: <br>
Adds event listeners to section links in the navbar, triggering spoken descriptions of each section (Home, About, Interests, Skills, Portfolio, Contact) when clicked. <br>
* Interests Summary: <br>
Enables users to listen to spoken summaries about various interests (Web Development, Android Development, Programming Languages, Teaching) by clicking corresponding buttons. <br>

# How you can make your own Website from using this !!!
As I have already created my website now I will pin-point all the fields/points which you should change in order to create your own website using my website. So Iam mentioning those areas which you should change file-wise.

# A>Changes in Files: 

## HomePicture.jpg:
Make sure that you have your own picture which you want to be used as your homepage display picture. To do this simply remove the existing HomePicture.jpg i.e my picture and add your own picture and name it HomePicture and make sure that your image is in .jpg format and it should be in  the same folder in which you have you have your codes and other files.

## AboutPicture.jpg:
Make sure that you have your own picture which you want to be used as your about section display picture. To do this simply remove the existing AboutPicture.jpg i.e my picture and add your own picture and name it AboutPicture and make sure that your image is in .jpg format and it should be in  the same folder in which you have you have your codes and other files.

## Ramsha_Ansari_Resume.pdf:
Make sure that you replace my resume name with your name i.e my name is Ramsha Ansari so the name of my resume is Ramsha_Ansari_Resume so you just remove my resume from the code's folder and replace it with yours and also make the changes in the JavaScript file. 

# B>Changes in Codes: 

## index.html:
Make sure you make some following changes in the html file of this Portfolio Website. So here are the points whih you will need to change
* Line no 36: Change the name from Zidaan Ahmad to your name.
* Lines 92-95: Make sure to change my Skills and write yours in place of them .
* Lines 101-103: Make sure you change my Expeirence and write yours in place of them.
* Lines 109-111: Make sure you change my Educational Qualifications and write yours in place of them.
* Lines 124-162: As this is my Interests Section so I have mentioned my Interests, so you just change it according to yourself.
* Lines 174-229: This section contains my Technical Skills so make sure you just replace my Technical Skills with yours.
* Lines 234-272: This section contains my Professional Skills so make sure you just replace my Professional Skills with yours.
* Lines 282-337: This section contains my Specializations so make sure that you just replace my Specializations with yours.
* Line no 360: Make sure you change the email id.
* Line no 361: Make sure you change the phone number.
* Line no 375: In the Contact form (<form action="https://formspree.io/f/xzblqrgk" method="POST">) replace the " https://formspree.io/f/xzblqrgk " with you formspree api otherwise your message requests will be coming on my account not yours. I will explain how to use formspree Dont Worry !!!
* Line no 389: Change the name from Zidaan to your name.

## script.js:
Make sure you make following changes in the JavaScript of the website:
* Line no 6: It includes what you want to be displayed in the form of typing animation effect so change it according to you.
* Lines 20 and 37: Both of these lines include the link to my Github profile so just remove my profiles link in the OpenSocialMediaLink() function and replace it with yours.
* Lines 24 and 41: Both of these lines include the link to my Replit profile so just remove my profiles link in the OpenSocialMediaLink() function and replace it with yours.
* Lines 28 and 45: Both of these lines include the link to my Instagram profile so just remove my profiles link in the OpenSocialMediaLink() function and replace it with yours.
* Lines 32 and 49: Both of these lines include the link to my Linkedin profile so just remove my profiles link in the OpenSocialMediaLink() function and replace it with yours.
* Line no 70: Change the Ramsha_Ansari_Resume.pdf with the name of your own Resume.
* Lines 93-149: This section contains the function which will enable the speech actions on the button clicks so I have written all the things which I want the website to speak. All you have to do is to just write what you want the system to speak in the speak() function.

# How to use Formspree to accept user queries on your email without using backend ?
Now I will explain you how you can accept queries from users on your portfolio website without using a backend. It is done by usig formspree a free tool which can mae our work very easy. So follow these steps to have your own formspree functionality:
* Go to the website https://formspree.io/
* Then click on "Get Started"  and sign up using your email.
* Verify your email then log in.
* Click on + icon in the My First Project.
* Click on "Create a form".
* Name your form  and set the email on which you want to receive the queries of the users.
* Click on "Create Form".
* Copy the link given in the title " Your form's endpoint is" heading.
* Paste your link in the (<form action=" " method="POST">) (index.html line no 375)
* Now you have successfully completed the steps. Now you will receive the queries from the user on your email.

  # How to insert your social media profile links in your website ?
  As I have already mentioned which lines you are required to change to link your social media profiles like Github, Replit, Instagram and Linkedin in the script.js code. Now I will tell you how you will get your profile links.
 * Github: <br>
   For getting your Github link just simply login to your Github account on your PC then click th icon/avatar and on that click on "Your Profile" and then copy the link from the url box.
* Replit: <br>
  For getting your Replit link just simply login to your Replit account on your PC then click th icon/avatar and on that click on "Your Profile" and then copy the link from the url box.
* Instagram: <br>
  For getting your Instagram link just simply login to your Instagram accoiunt on a web browser and click on "Profile" then simply copy the link in the url box.
* Linkedin: <br>
  For getting your Linkedin profile just simply login to your Linkedin account on a web browser and then click on "Me" then click on "View Profile" and then copy the link from the url box.

# My Words:
Iam Ramsha Ansari and I have created this portfolio website using my skills in HTML, CSS and JavaScript. I have tried my best to make it attractive and creative as far as possible but if you have any suggestions feel free to suggest me. I have explained everything above so if you just want a website you may just make some changes and make the complete website yours. Also I have explained my code line by line so if you want to copy you should definitely copy but also read that which part of code will do what. I hope you like my efforts and hardwork.

Warm Regards
Ramsha Ansari

# Thank You for your time !!!
