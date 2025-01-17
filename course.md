# React Course

## Part 1: Quick Recap of HTML, CSS, and JavaScript
Before diving into React, it’s essential to have a solid foundation in these core web technologies.

### HTML Recap
#### Topics to Cover:
- Structure of an HTML document (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`).
- Common tags: `<div>`, `<span>`, `<h1>`-`<h6>`, `<p>`, `<a>`, `<img>`, `<ul>`, `<ol>`, `<form>`, etc.
- Attributes: `id`, `class`, `src`, `href`, `alt`.
- Semantic HTML: `<header>`, `<footer>`, `<main>`, `<section>`, `<article>`.

#### Assignment 1:
Create a simple HTML page for a personal profile. It should include:
- A header with your name.
- An image (use any placeholder image for now).
- A short paragraph about yourself.
- An unordered list of your favorite hobbies.
- A link to an external website (e.g., your favorite learning platform).

---

### CSS Recap
#### Topics to Cover:
- Selectors: element, class (`.className`), id (`#idName`), descendant (`div p`).
- Box model: margin, border, padding, content.
- Flexbox basics: `justify-content`, `align-items`, `flex-direction`.
- CSS properties: `color`, `background-color`, `font-size`, `width`, `height`.

#### Assignment 2:
Style the HTML page you created in Assignment 1 using CSS:
- Make the header text larger and center it.
- Add a background color to the page.
- Use Flexbox to center the image and paragraph horizontally.
- Style the list of hobbies with custom colors and spacing.

---

### JavaScript Recap
#### Topics to Cover:
- Variables: `let`, `const`, `var`.
- Functions: regular functions and arrow functions.
- DOM manipulation: `document.getElementById`, `document.querySelector`.
- Events: `onclick`, `onmouseover`.
- Loops: `for`, `while`.
- Arrays and objects: basic methods like `.map()`, `.filter()`.

#### Assignment 3:
Enhance your profile page:
- Add a button that, when clicked, displays an alert with a welcome message.
- Display the current date and time on the page using JavaScript.
- Create an array of three of your favorite books/movies and display them dynamically

# React Course - Stage Two: Introduction to React

## Topics to Cover:
1. **What is React?**
   - Understanding the purpose of React.
   - Key features: Components, Virtual DOM, and JSX.

2. **Setting Up a React Environment**
   - Installing Node.js and npm (if not already installed).
   - Creating a new React app using `create-react-app` or Vite.
   - Understanding the folder structure.

3. **React Basics**
   - Writing your first component.
   - Understanding JSX and rendering elements.
   - Introduction to `props`.

---

## Assignment 4: Setting Up and First Component

1. Install Node.js and ensure `npm` is working.
2. Create a new React project:
   ```bash
   npx create-react-app my-first-react-app
   ```
   or
   ```bash
   npm create vite@latest my-first-react-app --template react
   ```
3. Open your project in your favorite code editor (e.g., VS Code).

4. Create a simple React component:
   - Inside the `src` folder, create a new file `Greeting.js`.
   - Write the following code:
     ```jsx
     import React from 'react';

     function Greeting() {
         return <h1>Hello, welcome to my React app!</h1>;
     }

     export default Greeting;
     ```
   - Import and use the `Greeting` component in `App.js`:
     ```jsx
     import React from 'react';
     import Greeting from './Greeting';

     function App() {
         return (
             <div>
                 <Greeting />
             </div>
         );
     }

     export default App;
     ```

5. Start the development server:
   ```bash
   npm start
   ```
6. Verify that the message "Hello, welcome to my React app!" is displayed in the browser.
