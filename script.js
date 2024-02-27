// Portfolio Website (JavaScript Part)
// Execute the code once the DOM (Document Object Model) has been fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Typed.js for the typing animation effect
    var typed = new Typed(".text", {
        strings: ["Web Developer", "Android Developer", "Programming Enthusiast", "Tech-Savvy Student", "Tutor"], // An array of strings to be typed
        typeSpeed: 80, // Speed at which characters are typed
        backSpeed: 80, // Speed at which characters are erased (backspace)
        backDelay: 1000, // Delay before starting to type
        startDelay: 500, // Time to wait before starting to backspace after reaching the end of a string
        loop: true // Run the loop infinite times
    });
    // Function to open social media links in a new tab
    function openSocialMediaLink(link) {
        window.open(link, '_blank');
    }
// Event listeners for social media icons in the home section
    // Github Page (Home Section)
    document.querySelector('.home-sci .bx.bxl-github').parentElement.addEventListener('click', function () {
        openSocialMediaLink('https://github.com/ramshaansari2706'); // Your Github profile link
    });
    // Replit Profile (Home Section)
    document.querySelector('.home-sci .bx.bx-git-repo-forked').parentElement.addEventListener('click', function () {
        openSocialMediaLink('https://replit.com/@RamshaAnsari'); // Your Replit Profile link
    });
    // Instagram Profile (Home Section)
    document.querySelector('.home-sci .bx.bxl-instagram').parentElement.addEventListener('click', function () {
        openSocialMediaLink('https://www.instagram.com/ramshaansari2706/'); // Your Instagram profile link
    });
    // LinkedIn Profile (Home Section)
    document.querySelector('.home-sci .bx.bxl-linkedin-square').parentElement.addEventListener('click', function () {
        openSocialMediaLink('https://www.linkedin.com/in/ramsha-ansari-936840278/'); // Your Linkedin profile link
    });
// Event listeners for social media icons in the contact section
    // Github Page (Contact Section)
    document.querySelector('.contact-icons .bx.bxl-github').parentElement.addEventListener('click', function () {
        openSocialMediaLink('https://github.com/ramshaansari2706'); // Your Github profile link
    });
    // Replit Profile (Contact Section)
    document.querySelector('.contact-icons .bx.bx-git-repo-forked').parentElement.addEventListener('click', function () {
        openSocialMediaLink('https://replit.com/@RamshaAnsari'); // Your Replit Profile link
    });
    // Instagram Profile (Contact Section)
    document.querySelector('.contact-icons .bx.bxl-instagram-alt').parentElement.addEventListener('click', function () {
        openSocialMediaLink('https://www.instagram.com/ramshaansari2706/'); // Your Instagram profile link
    });
    // LinkedIn Profile (Contact Section)
    document.querySelector('.contact-icons .bx.bxl-linkedin-square').parentElement.addEventListener('click', function () {
        openSocialMediaLink('https://www.linkedin.com/in/ramsha-ansari-936840278/'); // Your Linkedin profile link
    });
});
// JavaScript functionality to handle the animations in About section
var tablinks = document.getElementsByClassName("tab-links"); // Declaring variable for skill, experienc and education tabs in About Section
var tabcontents = document.getElementsByClassName("tab-contents"); // Declaring variable which contains contents of skill, experience and education tabs in About Section
// Function to handle click events in the About section for skills, experience and education tabs
function opentab(tabname) {
    // It will make the clicked tab glow to show that it has been clicked
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
        }
    // It will show the content of the active tab 
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
        }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
// Event listener for the resume button to trigger a download
document.getElementById('resumeBtn').addEventListener('click', function () {
    var resumeFileName = 'Ramsha_Ansari_Resume.pdf'; // Make sure that you have your resume named as Ramsha_Ansari_Resume.pdf and in the same directory as your codes
    var link = document.createElement('a');  // Create a link element to trigger the download
    link.href = resumeFileName;
    link.download = resumeFileName;
    // Add the link to the body, trigger a click, and then remove the link
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
 // JavaScript functionality to handle menu toggle
 function toggleMenu() {
    var navLinks = document.querySelector('.navbar ul'); // variable for creating a navbar variable
    if (navLinks.style.display === 'block') {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'block';
    }
  }
// Speak function which will read aloud specific contents when some buttons are clicked
function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}
document.addEventListener('DOMContentLoaded', function () {
    // Home Section 
    const homeLink = document.querySelector('[href="#home"]');
    homeLink.addEventListener('click', function () {
        speak('Welcome to the Home section');
    });
    // About Section 
    const aboutLink = document.querySelector('[href="#about"]');
    aboutLink.addEventListener('click', function () {
        speak('Welcome to the About section');
    });
    // Interests Section 
    const interestsLink = document.querySelector('[href="#interests"]');
    interestsLink.addEventListener('click', function () {
        speak('Welcome to the Interests section');
    });
    // Skills Section 
    const skillsLink = document.querySelector('[href="#Skills"]');
    skillsLink.addEventListener('click', function () {
        speak('Welcome to the Skills section');
    });
    // Portfolio Section 
    const portfolioLink = document.querySelector('[href="#portfolio"]');
    portfolioLink.addEventListener('click', function () {
        speak('Welcome to the Portfolio section');
    });
    // Home Section 
    const contactLink = document.querySelector('[href="#contact"]');
    contactLink.addEventListener('click', function () {
        speak('Welcome to the Contact section');
    });
    // Read Alouds about Web Development
    const webDevSummaryLink = document.querySelector('.interests-list div:nth-child(1) .read');
    webDevSummaryLink.addEventListener('click', function () {
        speak('Web development encompasses designing, coding, and maintaining websites. It involves frontend (UI/UX) and backend (server-side logic) work, ensuring functionality, responsiveness, and optimal user experience across various browsers and devices.');
    });
    // Read Alouds about Android Development
    const androidDevSummaryLink = document.querySelector('.interests-list div:nth-child(2) .read');
    androidDevSummaryLink.addEventListener('click', function () {
        speak('Android development involves creating applications for Android devices using Java or Kotlin. It includes designing user interfaces, implementing functionality, and optimizing performance, providing seamless experiences on a diverse range of smartphones and tablets.');
    });
    // Read Alouds about Programming Languages
    const programmingSummaryLink = document.querySelector('.interests-list div:nth-child(3) .read');
    programmingSummaryLink.addEventListener('click', function () {
        speak('Programming languages are tools enabling humans to communicate with computers. They dictate how instructions are written and executed, with diverse languages like Python, Java, and C++ tailored for different applications and platforms.');
    });
    // Read Alouds about Web Development
    const teachingSummaryLink = document.querySelector('.interests-list div:nth-child(4) .read');
    teachingSummaryLink.addEventListener('click', function () {
        speak('Teaching is imparting knowledge and skills to learners. Effective teaching involves clear communication, fostering critical thinking, and adapting to individual needs. It empowers students to grow intellectually and reach their potential.');
    });
    // Speaks about the Resume button click event
    const resumeBtn = document.getElementById('resumeBtn');
    resumeBtn.addEventListener('click', function () {
        speak("Preparing the resume for you");
    });
});
// End of Program