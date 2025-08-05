# Myers-Briggs Personality Test

## Acknowledgements / Sources

- [Test Code (CodePen)](https://codepen.io/pulpexploder/pen/pNpdeq)
- [Wikipedia – MBTI](https://en.wikipedia.org/wiki/Myers%E2%80%93Briggs_Type_Indicator)
- [16Personalities.com](https://www.16personalities.com/)
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

---

## Table of Contents

1. [UX](#ux)

   - [Goals](#goals)
     - [Visitor Goals](#visitor-goals)
     - [Business Goals](#business-goals)
     - [User Stories](#user-stories)
   - [Visual Design](#visual-design)
     - [Wireframes](#wireframes)
     - [Fonts](#fonts)
     - [Icons](#icons)
     - [Colors](#colors)
     - [Images](#images)
     - [Styling](#styling)

2. [Features](#features)

   - [Page Elements](#page-elements)
   - [Feature Ideas](#feature-ideas)

3. [Technologies Used](#technologies-used)

   - [Languages](#languages)
   - [Frameworks](#frameworks)
   - [Libraries](#libraries)

4. [Testing](#testing)

   - [Methods](#methods)
   - [Bugs](#bugs)

5. [Deployment](#deployment)

   - [Local Deployment](#local-deployment)
   - [GitHub Deployment](#github-deployment)

6. [Credit and Contact](#credit-and-contact)

   - [Content](#content)
   - [Contact](#contact)

7. [Introduction](#introduction)
8. [Design Overview](#design-overview)
9. [Page Functions](#page-functions)
10. [Personality Types](#personality-types)

---

## UX

### User Stories

1. I want to learn about the history of the MBTI.
2. I want to understand the results before starting the test.
3. I want access to external sources.
4. I want to easily start the test.
5. I want validation if questions are skipped.
6. I want the test to work on all devices.
7. I want to return to the homepage easily.
8. I want the site to be visually accessible.

---

## Visual Design

### Wireframes

> Include wireframe images or links here.

### Fonts

![Fonts](assets/readmeassets/readme-font.png)

- **Primary:** `Montserrat`, sans-serif – Bold and accessible for headings
- **Secondary:** `Varela`, sans-serif – Clean and minimalist for paragraph text

### Colors

![Color Palette](https://github.com/JamesBirchall-dev/imagehost/blob/main/mayersbriggsdiagram-colors.png?raw=true)

- Based on MBTI diagram used across multiple platforms
- Accessible color scheme with light backgrounds and high contrast

### Images

![Lifestyle Images](assets/readmeassets/readme-lifestyleimages.png)

- Sourced from 16Personalities.com and Wikipedia
- All images credited in the UI

### Background Color

- `RGB(168,180,211)` – A lighter, more accessible variant of the standard MBTI blue

### Styling

- Primarily uses Bootstrap classes for layout, buttons, and forms
- Custom styles in `style.css`

---

## Features

### Page Elements

#### Homepage (`index.html`)

- **Navbar** – Link to start test
- **Content Card** – MBTI overview
- **External Button** – Link to Wikipedia
- **Responsive Diagram**
- **Call-to-Action Buttons**
- **Responsive Layout**
- **Favicon + Custom CSS**

#### Quiz Pages

- **Navbar** – Home link
- **10 Questions per Section** – Radio input, Bootstrap card format
- **Validation** – HTML5 + Bootstrap
- **JavaScript Logic** – Controls flow, stores scores
- **Responsive + Accessible**

#### Results Page

- **Result Type Display**
- **Personality Description**
- **External Link**
- **Population Percentage**
- **Result Image**
- **Attribution**
- **Responsive Layout**
- **JavaScript Integration**

---

## Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript**
- **Bootstrap 5**
- **Git & GitHub**

---

## Testing

### Methods

- [x] HTML Validation
- [x] CSS Validation
- [x] User Testing
- [x] Lighthouse Audits
- [x] Mobile Responsiveness
- [x] Browser Compatibility

### Bugs

> Document any known or fixed bugs here.

---

## Deployment

### Local Deployment

1. Clone the repo
2. Open `index.html` in your browser

### GitHub Pages Deployment

1. Push to `main` branch
2. Enable Pages in repo settings
3. Visit `https://username.github.io/repo-name/`

---

## Credit and Contact

### Content

- Wikipedia
- 16Personalities
- CodePen quiz logic

### Contact

- [GitHub Profile](https://github.com/JamesBirchall-dev)

---

## Introduction

The **Myers-Briggs Personality Indicator Test** was developed during World War II, based on Carl Jung’s theories. It was designed to simplify complex psychological types and help assign individuals to suitable wartime roles.

The test is structured into **4 sections**, each with two answer options. Your responses result in one dominant trait from each category, forming a **four-letter personality type**.

### The Four Dichotomies

- **Extraversion (E)** or **Introversion (I)**
- **Sensing (S)** or **Intuition (N)**
- **Thinking (T)** or **Feeling (F)**
- **Judging (J)** or **Perceiving (P)**

> If tied, the **first trait** is assumed to be dominant.

---

## Design Overview

The website educates users on the MBTI framework, provides links to additional resources, and features an interactive test to reveal a user’s type.

---

## Page Functions

### Homepage (`index.html`)

- **Navbar** – Navigation to test pages using Bootstrap components
- **Take Test Button** – Uses JavaScript to avoid default anchor behavior
- **Information Card** – Overview of MBTI using a styled Bootstrap card
- **External Link** – Opens MBTI Wikipedia page in a new tab
- **Responsive Images** – Cognitive function diagrams and mockups
- **Custom CSS + Favicon Support**

### Test Pages (`ei.html`, `sn.html`, `tf.html`, `jp.html`)

- **Navbar** – "Home" button for navigation
- **Bootstrap Quiz Form** – 10 questions per section
- **Client-side Validation** – HTML5 `required` and Bootstrap validation
- **Custom Error Message** – Shown via JavaScript when fields are incomplete
- **JavaScript Logic** – `quiz.js` handles navigation and scoring
- **Responsive Layout** – Bootstrap ensures full mobile/tablet support

### Results Page

- **Navbar** – Home link
- **Result Display** – Personality type, description, image, and percentage
- **External Link** – More info on personality type
- **Responsive Image** – Using `img-fluid` class
- **Acknowledgements** – Attribution to 16Personalities.com
- **JavaScript Integration** – `results.js` retrieves and displays test results

---

## Personality Types

There are 16 possible outcomes:

- **ISTJ**: "The Logistician"
- **ISFJ**: "The Defender"
- **INFJ**: "The Advocate"
- **INTJ**: "The Architect"
- **ISTP**: "The Virtuoso"
- **ISFP**: "The Adventurer"
- **INFP**: "The Mediator"
- **INTP**: "The Logician"
- **ESTP**: "The Entrepreneur"
- **ESFP**: "The Entertainer"
- **ENFP**: "The Campaigner"
- **ENTP**: "The Debater"
- **ESTJ**: "The Executive"
- **ESFJ**: "The Consul"
- **ENFJ**: "The Protagonist"
- **ENTJ**: "The Commander"

### All Pages

#### Navbar

Desktop/Laptop Nav

<div align="center">
  <img src="assets/readmeassets/readme-nav-desktop.png" alt="Desktop Header">
</div>
Tablet Nav (Collapsed & expanded)
<div align="center">  
  <img src="assets/readmeassets/readme-nav-tablet-collapsed.png" alt="Tablet Header Collapsed">
  <img src="assets/readmeassets/readme-nav-tablet-expanded.png" alt="Tablet Header Expanded">
</div>
Mobile Nav (Collapsed & expanded)
<div align="center">  
   <img src="assets/readmeassets/readme-nav-mobile-collapsed.png" alt="Mobile Header Collapsed">
    <img src="assets/readmeassets/readme-nav-mobile-expanded.png" alt="Mobile Header Expanded">
</div>

- The Navbar is simple, providing links to the 3 main pages: Home, Contact and Classes.
- Button also in the nav for 'Join' which directs user to the Register page. This stands out more than the other links to make the registration process easy and more likely.
- Hover over functionality on links.
- On smaller devices, the menu becomes collapsible.
- Bootstrap 5 elements broken down in this sheet https://docs.google.com/document/d/1BvyNlDbG85mt_AnDzTFATYOsyBalbLm7DthT1MtFjgA/edit?usp=sharing

#### Footer

Mobile

<div align="center">
  <img src="assets/readmeassets/readme-footer-mobile.png" alt="Mobile Footer">
</div>
Tablet
<div align="center">
  <img src="assets/readmeassets/readme-footer-tablet.png" alt="Tablet Footer">
</div>

- Located at the bottom of every page, a simple approach like with the nav.
- 3 centered icons to make for elegant transition with smaller devices.
- Hover over functionality and high contrast icons against the footer background.

### Index Page

The homepage has been designed to maximise navigation and information within landing view, whilst upholding the asthetic of the site.
This is acheived with a sliding carousel with 3 slides, each directing to a part of the site, then the service cards below providing more information and a bolder text on background to stand out in the page. You will see a mission statement below this to provide more information on branding then finally a tour video fo the user to browse the facilities.

#### Carousel With Captions

- Using [Bootstrap](https://getbootstrap.com/docs/4.0/components/carousel/) as a template.
- 3 x images on automatic change. [Index Bootstrap Elements](https://docs.google.com/document/d/1Lz-XzIniIzwuXU_tz8ReggDIRi7KBWEWQR4D297tFEI/edit?usp=sharing)
- Caption text with Call to Action button linking to Classes & Register-Form (removed for mobile devices as too small to be interactive).
- White indicators and text for contrast against images.
Desktop/Laptop
<div align="center">
  <img src="assets/readmeassets/readme-carousel-desktop.png" alt="Carousel Desktop">
</div>
Tablet
<div align="center">
  <img src="assets/readmeassets/readme-carousel-tablet.png" alt="Carousel Tablet">
</div>
Mobile
<div align="center">
  <img src="assets/readmeassets/readme-carousel-mobile.png" alt="Carousel Desktop">
</div>

#### Service Card Section

- Using [Bootstrap Cards](https://getbootstrap.com/docs/4.0/components/card/) class as a template with manual CSS to adjust colors and sizing.
- After the carousel and main header, service cards x 4 to provide a preview to other pages on the site all with Call to Action buttons to direct the user.
- 4 in a row Desktop.
<div align="center">
  <img src="assets/readmeassets/readme-services-desktop.png" alt="services desktop">
</div>

- 2 for Tablet.
<div align="center">
  <img src="assets/readmeassets/readme-services-tablet.png" alt="services tablet">
</div>
- 1 for Mobile.

<div align="center">
  <img src="assets/readmeassets/readme-services-mobile.png" alt="services mobile">
</div>

#### Mission Statement Section

- Using Bootstrap 'flex-container' class for screen size adjustment.
- Content centred with left aligned text.
- Section text using the Transparent Teal for consistancy.
- Main text body using off-white/ light blue for better contrast with a large body of text.

<div align="center">
  <img src="assets/readmeassets/readme-mission-desktop.png" alt="Mission Statement Desktop">
</div>

<div align="center">
  <img src="assets/readmeassets/readme-mission-tablet.png" alt="Mission Statement Tablet">
</div>

<div align="center">
  <img src="assets/readmeassets/readme-mission-mobile.png" alt="Mission Statement Mobile">
</div>

#### Take the Tour Video Section

To allow users to see the Health Centre's facilities in more detail, key for users who want to see what gym equipment is available.

- Embedded youtube video using Bootstrap 'video-container' class for screen size adjustment.
- Fixed height
- 16:9 Aspect ratio maintained by youtube when the video is played.
- Shown in container with consistant Transparent Teal background.

<div align="center">
  <img src="assets/readmeassets/readme-youtubeunclicked-desktop.png" alt="Take the Tour Default">
</div>
<div align="center">
  <img src="assets/readmeassets/readme-youtubeclicked-desktop.png" alt="Take the Tour Video Playing">
</div>

### Classes Page

The primary purpose of this page is to show the user what kind of classes the gym has to offer members, as with the Business Goal of promoting the new 'Health Forum', this sits at the top of the page as priority and with the flexible bootstrap classes, it makes for a good experience with scrolling on hand held devices.

<div align="center">
  <img src="https://user-images.githubusercontent.com/44118951/92344160-fd78d700-f0c5-11ea-9017-7046a210424f.png" alt="Gallery Page">
</div>

- Bootstrap 5 elements broken down in this sheet [Classes Bootastrap Elements](https://docs.google.com/document/d/1tN2jn3ORCs-YBwR9UFiZBwcn5GD6hB5dueIYM0cXcoE/edit?usp=sharing)

<div align="center">
  <img src="assets/readmeassets/readme-classes-desktop.png" alt="Classes Desktop">
</div>
Text box aligns to the center of the image horizontally with image to the right.
<div align="center">
  <img src="assets/readmeassets/readme-classes-tablet.png" alt="Classes Tablet">
</div>
Image stacks underneath for tablet ensuring text information has reading priority.

<div align="center">
  <img src="assets/readmeassets/readme-classes-mobile.png" alt="Classes Mobile">
</div>
Spacing between class containers to seperate them visually whilst optimising space.

### Contact Page

The purpose of this page is to provide the neccessary information to contact the business, with a primary focus on trying to get the user to choose form contact over the phone (whilst making this accessible still).

- Bootstrap 5 elements broken down in this sheet [Contact Bootastrap Elements](https://docs.google.com/document/d/1XieEHmNwVU2Tya-WhcT6FXTDByMCNL7RiMXEJUwkH3U/edit?usp=sharing)
<div align="center">
  <img src="assets/Readmeassets/readme-contact-desktop.png" alt="Contact Desktop">
</div>
<div align="center">
  <img src="assets/Readmeassets/readme-contact-tablet.png" alt="Contact Tablet">
</div>

## Register Page

This page is designed to easily display membership pricing information and for the user to be able to submit interest for membership (with the kind of membership they want) and their contact details for the staff at the gym to prepare for the appropiate next steps with the user.

- Bootstrap 5 elements broken down in this sheet [Register Bootastrap Elements](https://docs.google.com/document/d/18ECCWaVpi4yynrV19uudBJnjc3bctX6IdtXs8tG1UtA/edit?usp=sharing)
<div align="center">
  <img src="assets/Readmeassets/readme-register-desktop.png" alt="Register Desktop">
</div>

- Heading and welcome text informing user of expected turn around for response.
- Membership table detailing pricing and discount for Business Goal.
- Form with optional checkbox and mandatory text fields, along with warnings.
- Button directing to success.html - Only if mandatory form elenment criteria met.

<div align="center">
  <img src="assets/Readmeassets/readme-register-tablet.png" alt="Register Tablet">
</div>

- Membership table wraps with smaller device.

<div align="center">
  <img src="assets/Readmeassets/readme-register-mobile.png" alt="Register Mobile">
</div>
- Overflow enables horizontal scroll bar to view all table information.

## Success Page

This page confirms to the user that their message has been sent. This page directs both from the contact-form.html and register-form.html submissions. It also allows for easy navigation back to the home page so they can continue browsing the site.

- Bootstrap 5 elements broken down in this sheet [Success Bootastrap Elements](https://docs.google.com/document/d/1tST-KRPXV6kTPkd2zjjJlJLHd1KfleX0C8LjhUV5xd4/edit?usp=sharing)
<div align="center">
  <img src="assets/Readmeassets/readme-success-desktop.png" alt="Success Desktop">

- Success Message with phone link and return to index.html button.
- Beneath message insert same contact box layout as contact.html.
</div>
<div align="center">
  <img src="assets/Readmeassets/readme-success-tablet.png" alt="Success Tablet">
</div>

- Scales down for tablet.
<div align="center">
  <img src="assets/Readmeassets/readme-success-mobile.png" alt="Success Mobile">
</div>

- Stacks vertically for mobile.

## Contact Form

-Simple form page with CTA button directing to success.html.
-All fields mandatory and validation format correct for each field. (ie email must have an @ in it)

- Bootstrap 5 elements broken down in this sheet [Contact Form Bootastrap Elements](https://docs.google.com/document/d/1tST-KRPXV6kTPkd2zjjJlJLHd1KfleX0C8LjhUV5xd4/edit?usp=sharing)

<div align="center">
  <img src="assets/Readmeassets/readme-contactform-desktop.png" alt="Contact Form Desktop">
</div>

<div align="center">
  <img src="assets/Readmeassets/readme-contactform-tablet.png" alt="Contact Form Tablet">
</div>

<div align="center">
  <img src="assets/Readmeassets/readme-contactform-mobile.png" alt="Contact Form Mobile">
</div>

## Feature Ideas

### Future Developement Ideas

- A 360 degree tour allowing users to interact with their virtual tour of the gym. Either through Googlemaps or a software company such as Kuula. (https://kuula.co/)
- Wider range of class information, such as timetables for existing members.
- Account and Checkout functionality for memberships.

---

# Technologies Used

## Languages

- [HTML](w3.org/standards/webdesign/htmlcss)
  - Page markup.
- [CSS](w3.org/standards/webdesign/htmlcss)
  - Styling.
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  - Running functions for interactive components, AJAX, etc.

## Frameworks

- [Bootstrap4](https://getbootstrap.com/)
  - Used for basic styles and outline.

## Libraries

- [JQuery](https://jquery.com/)
  - Animations and click functions.
- [Google Fonts](https://fonts.google.com)
  - Font Styles and icons.

## Platforms

- [Github](https://github.com/)
  - Storing code remotely and deployment.
- [VS Code](https://code.visualstudio.com/)
  - IDE Environment.

## Other Tools

- [Balsamiq](https://balsamiq.com/)
  - To create wireframes.
- [Coolor Picker](https://colorpicker.tools/)
  - Creating color pallettes.

---

# Testing

## Methods

- [Full testing external mastersheet](https://docs.google.com/spreadsheets/d/1MpcjnFR0sRtm0FBuqfoiV8ybn5v_BY5CXubD8ImN6pg/edit?usp=sharing).

### Validation

- HTML has been validated with [W3C HTML5 Validator](https://validator.w3.org/).
- CSS has been validated with [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) and auto-prefixed with [CSS Autoprefixer](https://autoprefixer.github.io/).

### General Testing

- The site was sent to friends for feedback and testing.
- All forms have validation and will not submit without the proper information.
- Youtube Video embed functionality tested.
- Map interaction controls fully tested.
- External links open in a new tab.
- Font and color placement.
- Image resolutions intrinsic vs rendered checekd.
- adhoc troubleshooting with the aid of Code Institute Network and https://www.stackoverflow.com.

### User Stories Testing

- 1. "As a user interested in joining a gym, I want an easy to navigate website with all the information easy to find."

Acheived by:
-Hompepage design and navigation. Home page designed so that landing view provides all the neccessary links in the navigation
-Service cards providing additional information with links to these pages also.

<div align="center">
  <img src="assets/testingassets/testing-userstories-1.png" alt="User Story 1">
</div>

- 2. "I expect to be able to find out what facilities and classes the gym has."

  - Homepage-Classes Navigation
    <div align="center">
    <img src="assets/testingassets/testing-userstories-2b.png" alt="User Story 2">
  </div>

  -'Take the Tour' youtube video giving the user a guided tour of the gym.
    <div align="center">
    <img src="assets/testingassets/testing-userstories-2c.png" alt="User Story 2b">
  </div>

- 3. "I expect to be able to register to join as a member."

  - 'Join' Call to action clearly displayed in the navigation as well as service card.
     <div align="center">
    <img src="assets/testingassets/testing-userstories-3.png" alt="User Story 3">
  </div>

- 4.  I expect to be able to contact and find the health centre.

      - 'Contact' Call to action clearly displayed in the navigation as well as service card.

            <div align="center">

          <img src="assets/testingassets/testing-userstories-4.png" alt="User Story 4">
        </div>
          <div align="center">
          <img src="assets/Readmeassets/readme-contact-desktop.png" alt="User Story 4b">
        </div>

- 5. I expect to see imagery which is health focussed.

  - Design choices: lifestyle imagery, background, blue & green color scheme, large focus on the 'Health Forum' class promotion.

        <div align="center">

      <img src="assets/Readmeassets/readme-lifestyleimages.png" alt="lifestyle imagery">
    </div> 
        <div align="center">
      <img src="assets/Readmeassets/readme-colors.png" alt="lifestyle imagery">
    </div>

- 6.  I expect to be able to read more detailed information about the classes.

      - Designated 'Classes' page (classes.html) detailing the activity, providing external wikipedia links for more information.

               <div align="center">

          <img src="assets/Readmeassets/readme-classes-desktop.png" alt="Classes.html">
        </div>

- 7.  I expect to be able to follow the health centre through social media.

      - Social media icons clearly displayed centred in the footer.

               <div align="center">

          <img src="assets/Readmeassets/readme-footer-tablet.png" alt="Classes.html">
        </div>

### Mobile Testing

- I tested the site personally on my Android Galaxy S24 device, going through the entire process, checking buttons, functions out, etc. I was personally unable to test on iOS.
- The site was sent to friends and relatives for them to follow the same process. They have tested on their devices, including iOS.
- Chrome was utilised to inspect the site in mobile format, going through the pages and functions.

### Desktop Testing

- The majority of testing occurred on Chrome.
- The site was tested by friends and relatives on numerous desktop devices.
- The sites functionality and navigation have been tested on Chrome, Firefox and Edge.
- Internet Explorer was not tested and the site was not developed with it in mind as support for the browser is gradually being dropped.

### Functionality and Navigation by Browser and Device

  <div align="center">
  <img src="assets/testingassets/testing-functionalityandnavigation-checklist.png" alt="Functionality & Navigation by Browser">
</div>
- [Full testing external mastersheet](https://docs.google.com/spreadsheets/d/1MpcjnFR0sRtm0FBuqfoiV8ybn5v_BY5CXubD8ImN6pg/edit?usp=sharing).

### Lighthouse Testing

\*Summary screenshots show both mobile (Left) and desktop (Right) report summaries.

- [Full testing external mastersheet](https://docs.google.com/spreadsheets/d/1MpcjnFR0sRtm0FBuqfoiV8ybn5v_BY5CXubD8ImN6pg/edit?usp=sharing).

## index.html

<div align="center">
  <img src="assets/testingassets/testing-lighthouse-index-summary.png" alt="Lighthouse Index Summary">
</div>

## classes.html

<div align="center">
  <img src="assets/testingassets/testing-lighthouse-classes-summary.png" alt="Lighthouse Classes Summary">
</div>

## contact.html

<div align="center">
  <img src="assets/testingassets/testing-lighthouse-contact-summary.png" alt="Lighthouse Contact Summary">
</div>

## contact-form.html

<div align="center">
  <img src="assets/testingassets/testing-lighthouse-contact-form-summary.png" alt="Lighthouse Contact Form Summary">
</div>

## register-form.html

<div align="center">
  <img src="assets/testingassets/testing-lighthouse-register-summary.png" alt="Lighthouse Register Form Summary">
</div>

## success.html

<div align="center">
  <img src="assets/testingassets/testing-lighthouse-success-summary.png" alt="Lighthouse Success Summary">
</div>

## Lighthouse Warning and Issue Resolution

Please see [Full testing external mastersheet](https://docs.google.com/spreadsheets/d/1MpcjnFR0sRtm0FBuqfoiV8ybn5v_BY5CXubD8ImN6pg/edit?usp=sharing). Lighthouse-tab for more information.

### #1

- Page: classes.html
- Section: Accessibility
- Type: Warning
- Message: 'Heading elements are not in sequentially-descending order. '
- Source: H3 Headers in class text.
- Action: Update to H2 Headers
- Status: Resolved

### #2

- Page(s): contact.html ; success.html
- Section: SEO
- Type: Warning
- Message: Background and foreground colors do not have sufficient contrast ratio.
- Source: Address and Google map background against phone text.
- Action: Update color to white for full contrast.
- Status: Resolved

## Bugs

No bugs have been identified in testing.

# Deployment

## Local Deployment

### Local Preparation

**Requirements:**

- An IDE of your choice, such as [Visual Studio Code](https://code.visualstudio.com/)
- Github Account

## Github Deployment

### Github Instructions

1. Log in to your GitHub account.
   navigate to [[https://github.com/Ri-Dearg/neverlost-thrift](https://github.com/JamesBirchall-dev/Invital-Health-Centre)](https://github.com/JamesBirchall-dev/Invital-Health-Centre).
1. You can set up your own repository and copy or clone it, or you fork the repository.
1. `git add`, `git commit` and `git push` to a GitHub repository, if necessary.
1. GitHub pages will update from the master branch by default.
1. Go to the **Settings** page of the repository.
1. Scroll down to the **Github Pages** section.
1. Select the Master Branch as the source and **Confirm** the selection.
1. Wait a minute or two and it should be live for viewing. See my own [here](https://jamesbirchall-dev.github.io/Invital-Health-Centre/).

## Credits and Contact

### Content

Imagery was almost exclusively obtained through [istockphoto](https://www.istockphoto.com/).

### Contact

Please feel free to contact me at `jamesbdorel@gmail.com`
