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
- ToDoListPage: shows list, top of list has nav bar to navigate between topics
- Topics: Assigned tags for each task at creation, able to sort and display through different tags
- Options: Single "options" icon to click to display edit button, delete button, and change topic button
- Hover: When task is hovered on, show left-border marker
- Each task will be class-based component, giving it the ability to edit and re-render independently

### Requests
- Get: Request JSON data of tasks from server/database, map over list to create each unique task component
- Post: Create task from input field expanded and initiated from an icon at the top of the list
- Delete: when checked off, mute task, show delete button, if pressed, delete task from storage
- Put: edit icon to edit individual tasks

### Additional Features
- User login: landing page to create user/login, then navigates to list
- User functionality: personalized to-do lists for logged-in user
- Secure API if adding user-functionality, which may take additional time
- Make it fun: Add fun motivational quotes retrieved from an API
- Map-Api: add location to each tasks, click to show location on map
- Priority: Add priority markers to each task, sort list by higher priority markers
- Deploy most stable version of App when completed
