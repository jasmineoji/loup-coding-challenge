# Loup code challenge

A React application to display an article's content.

# Installation and Setup Instructions

You need the latest version of node JS installed on your machine.

## Installation:

`npm install`

### To Start Server:

`npm start`

### To Visit App:

`localhost:3000`

### To Run Test Suite:

`npm test`

# Reflection

Project goal included writing a React App to convert an API response for a blog article page to a live page. Once the user completes reading the blog post by reaching the bottom of the page, they will be prompted to rate the article out of 5. After rating, the user will be presented with the average rating for all users. (A mock data is being used to get the previous user ratings.)

I have used `create-react-app` to create the client's framework.
I also used libraries below to complete this code challenge:

- axios
- styled-components
- react-bottom-scroll-listener
- enzyme

# Application architecture:

- Writing React components using presentational and container pattern
- Separating constatnt variables to be reused across the app
- Using React hooks to manage states

# UI development

### Used styled-components library which allowed me to:

- Use props to conditionally render css
- Address CSS specificity
- Make re-usable components

### Responsive UI

- Used Flex-box and Grid for addaptive layout
- Support 4 breakpints (small mobile - standard mobile - tablet - desktop)

# Testing

- Provided examples of snapshot and functional unit testing

# Todo tasks

- Data validation and handling network request errors
- Add more unit tests
- Add type checking
- Use proper image asset for each breakpoint
- Improve UI elements' animations and transitions
