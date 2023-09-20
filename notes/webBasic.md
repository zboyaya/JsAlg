# How Websites Get Rendered: HTML, CSS, and JavaScript 
When you type the URL of a website into your browser's address bar and click enter, the browser requests the website, and the web server sends an HTML file to the browser.

The HTML file contains the content of the webpage and the linked files such as images, videos, and stylesheets. The web browser parses the HTML file and builds a Document Object Model (DOM) which is a tree-like structure containing the elements of the page (for example, buttons, paragraphs, links, and so on).

The browser initiates requests for the linked files and downloads them to the computer. It then parses the linked files, such as CSS and JavaScript, and applies the styling to the content, making it more presentable to the user. After all the files are downloaded, the browser renders the content on the screen.

The browser also runs any JavaScript code to make the page interactive. So, for example, if the user fills the wrong information in a form, JavaScript can be used to insert a <div> element into the page showing an error message to the user.

# Why use framework as React and Angular
1. However, one of the biggest problems of inserting elements into the DOM with JavaScript is that the code is not reusable. For example, if you want to insert the same button into the page, but with different background colors, you have to create the element twice in JavaScript:
```
let blueBtn = document.createElement("button").style.backgroundColor("blue")
let redBtn = document.createElement("button").style.backgroundColor("red")
// Insert blue and red button into the page

```
2. React was developed to solve this problem by making the process of creating web apps much more organized and intuitive.

Technically speaking, ReactJS is an open-source, front-end JavaScript library for building user interfaces or UI components. In simple terms, this means that you can use React to build all the parts of a website that the user can see and interact with on their browser window.

React makes the process of designing the user interface much easier. It allows you to create elements that you can easily re-use in other parts of the website or app.

3. React's component architecture solves this problem brilliantly. With React, you define a single piece of the UI, say a button, as a component.
```
const Button (props) => {
	return (
    	<div>
        	<button style={props.color}>Submit</button>
        </div>
    )
}
```
The component in this case is a function that returns HTML-like syntax called JSX, which defines the presentation and look of the component on the web browser.

Now, say you want to use the same button (but with different colors) in multiple places on your website. Instead of creating each button from scratch with different color properties  (as you would with JavaScript), with React, you simple use the same `<Button> `element and pass a different color to each of them as props, creating variations of the same button.
```
<Button color="red" />
<Button color="blue" />
<Button color="green" />
```
This method keeps everything simple and organized, which is the whole essence of the React.js library.

Another benefit of using React for UI development is separation of concerns. This means that the data used in a component exists separately from the logic, which exists separately from the view layer.

Here's an example:
```
const Button (props) => {
	// component data
    const [btnText, setBtnText] = useState("Submit")
    
    // component logic
    function onClick() {
    	setBtnText("Submitted!")
    }
    
	return (
    	// component view
    	<div>
        	<button style={props.color}>{btnText}</button>
        </div>
    )
}
```
As you can see here, the state, logic and presentation of a component are all separate from each other, making React UI components easier to understand and compose.

To conclude, React is a JavaScript library designed to simplify the process to building the frontend of web applications.