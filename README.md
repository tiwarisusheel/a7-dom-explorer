# Browser Rendering Pipeline

This project explains how a browser converts HTML and CSS into a webpage. It shows the complete rendering process from HTML to the final screen using a simple flow diagram.

---

## Browser Rendering Process

- When we open a website, the browser does not display the HTML code directly.

- It first reads the HTML file and understands the structure of the page.

- This process is called **Parsing**. During parsing, the browser breaks the HTML into small pieces called **Tokens**.

- Next, the browser creates a **DOM (Document Object Model)** Tree from the HTML and a **CSSOM (CSS Object Model)** Tree from the CSS.

- The DOM contains the structure of the webpage, while the CSSOM contains all the styling information.

- After that, the browser combines the DOM Tree and CSSOM Tree to create the **Render Tree**.

- It then performs **Layout**, where it calculates the size and position of every element.

- Finally, the browser performs **Paint**, which draws all the text, colors, images, and borders on the screen. At this point, the complete webpage becomes visible to the user.

---

## Summary

- **HTML → DOM Tree:** Builds the webpage structure.

- **CSS → CSSOM Tree:** Adds style information.

- **DOM + CSSOM → Render Tree → Layout → Paint → Screen:** The browser combines everything, calculates positions, draws the page, and finally displays it on the screen.

---

# JavaScript Event Flow

## Event Bubbling

Event Bubbling means the event starts from the clicked element and moves upward to its parent elements.

**Example:**

```
Button → Div → Body → HTML → Document
```

---

## Event Capturing

Event Capturing means the event starts from the top and moves down to the clicked element.

**Example:**

```
Document → HTML → Body → Div → Button
```

---

## Event Delegation

Event Delegation means adding one event listener to the parent element instead of adding listeners to every child element.

It improves performance and also works for dynamically added elements.

**Example:**

Instead of adding click events to every button, add one click event to the parent `<div>` and detect which button was clicked.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript

---

## Author

Susheel Tiwari