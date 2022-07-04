# 12. Sidebar-Modal

This is a simple project from freecodecamp

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

Project features react concepts like contextApi, useContext and custom hooks
Features:

- HomePage with hamburger icon and modal button
- Sidebar and modal in separate components

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show modal and sidebar

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

### Built with

- React javascript
- CSS custom properties and dynamically rendered css classes
- Flexbox and grid

## My process

- I started by studying the design image and trying to walkthrough the process in my head
- Next i went through the mobile and desktop styles on the css files
- Created the layout of the components
- Setup the context with all the states and toggle functions
- Started with the navbar, to hero, to sidebar and the submenu(the most challenging)
- Gave the page life with the magic of javascript.


### What I learnt

1. Css:
  - Hero and navbar: 
  Hero section negative margin and pseudo class background (z-index: -1)
  Navbar with transparent bg 
  sidebar: scale, visibility and z-index transition on show.

2. React:
   First and foremost, i learnt the importance of default values. Had a bug that took me hours to solve.
   Default falues are important when dealing with map functions.
   That being said, i learnt about the onMouseOver event listener.
   Also learnt about event.target.textContent and .contains objects and got to practice .getBoundingClientRect()
   I was also able to put my debugging skills to test.
   Got to pratice using context.
   Practiced the useRef hook.
Overall it was a very wonderful project.

## Author

- Website - [coming soon...]
- LinkedIn - [Ebunoluwa Oyebola]
- Twitter - [@Ebun_ski](https://www.twitter.com/Ebun_ski)
- Email - [ebunoyebola03@gmail.com]

## Acknowledgments

Thank you freecodecamp for this series.
