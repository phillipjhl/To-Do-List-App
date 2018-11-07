/**?
 * Service file to read and write to a JSON file to store list data.
 */

import fs from 'fs';
let toDoList = { nextid: 0 };

//conditional to check id there is already json file
//set contents to toDoList variable
if (fs.exists('toDolist.json')) {
    toDoLst = JSON.parse(fs.readFile('toDoList.json'));
}

//async get all function
//returns copy object(to do list)
let getList = async () => {
    let copy = await Object.assign({}, toDoList);
    return copy;
};

//async get one func
//returns one task
let getTask = async (id) => {
    let copy = await Object.assign({}, toDoList[id]);
    return copy;
}

//post function

//will create a task item and increments id
let createTask = async (task) => {
    toDoList[toDoList.nextid++] = task;
    await writeList();
}

//update function
let updateTask = async (id, task) => {
    // indexes requested task, replaces it with new task
    toDoList[id] = task;
    await writeList();
}

//delete function
let deleteTask = async (id) => {
    delete toDoList[id];
    await writeList();
}

//write to file- helper function
let writeList = async () => {
    await fs.writeFileSync('toDoList.json', JSON.stringify(toDoList));
}

//export
export default {
    getList,
    createTask,
    getTask,
    deleteTask,
    updateTask
}