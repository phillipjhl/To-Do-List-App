# To-Do-List-App
ChipRewards test to-do-list application. 

## Must-Haves
- To-do list web app
- React front-end
- Node back-end
- Use database or stored JSON data on server
- Ajax requests
- Unit test React components

### App Features
- HomePage: main to-do list page
- ToDoList Component: shows list, each task is a component
- Task Component: conatins checkbox, options component, displays time and text, and click to expand to show topic, location, etc.
- Topics: Assigned tags for each task at creation, able to sort and display through different tags
- Options: Single "options" icon to click to display edit button, delete button, and change topic button
- Hover: When task is hovered on, show left-border marker to identify
- OnClick: expand individual tasks
- Each task will be class-based component, giving it the ability to edit and re-render independently
- Jumbotron to contain current time, background image, number of tasks total/completed

### Requests
- Get: Request JSON data of tasks from server/database, map over list to create each unique task component
- Post: Create task from input field expanded and initiated from an icon at the top of the list
- Delete: when checked off, mute task, show delete button, if pressed, delete task from storage
- Put: edit icon to edit individual tasks

### Additional Features
- Make it fun: Add fun motivational quotes retrieved from an API
- Map-Api: add location to each tasks, click to show location on map
- Priority: Add priority markers to each task, sort list by higher priority markers

#Running App

1) npm install
- will install all dependencies

2) npm run dev 
- for developmet server watching client files

3) npm run start
- for production environment