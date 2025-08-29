

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Using "getElementById" you can perform any action on a specific element — change its text, add CSS styles, change its color. It always returns the first element in the document with the given ID, and it only brings back a single element.

"getElementsByClassName" getElementsByClassName is a DOM method that finds all elements in a document with a specific class name. it return array of element.

"querySelector" It selects the first element in the document that matches a given CSS selector.


It’s a DOM method that returns all elements in the document that match a CSS selector.

querySelectorAll: Unlike querySelector (which returns only the first match), querySelectorAll gives you a NodeList (an array-like collection).

2. How do you **create and insert a new element into the DOM**?

Create the element → document.createElement("tagName")

Add content → element.textContent or element.innerHTML

Insert into the DOM → appendChild

3. What is **Event Bubbling** and how does it work?

The event bubbles up from the child to the parent, so you can detect which child was clicked/triggered using event.target.

4. What is **Event Delegation** in JavaScript? Why is it useful?

Event Delegation is a technique where you add a single event listener on a parent element instead of adding many listeners to each child element.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

preventDefault() : Stops the default action of an element from happening: 
Submitting a form (<form>) normally reloads the page.

If you use preventDefault(), that default behavior won’t happen.

stopPropagation() :Stops the event from bubbling up (or capturing down) the DOM tree.

Normally, when you click a child element, the event also triggers on its parent(s).

stopPropagation() prevents that.

