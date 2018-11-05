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