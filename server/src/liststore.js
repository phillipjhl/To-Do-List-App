/**?
 * Service file to read and write to a JSON file to store list data.
 */

import fs from 'fs';
let toDoList = { nextid: 0 };

//conditional to check id there is already json file
//set contents to toDoList variable
if (fs.exists('list.json')) {
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

//put function

//delete function

//write to file- helper function
let writeList = async () => {
    await fs.writeFileSync('toDoList.json', JSON.stringify(toDoList));
}

//export
export default {
    getList,
    createTask
}