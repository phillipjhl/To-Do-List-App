/**?
 * Service file to read and write to a JSON file to store list data.
 */

 import fs from 'fs';
 let toDoList = { nextid: 0 };

 //conditional to check id there is already json file
 if (fs.exists('list.json')) {
     toDoLst = JSON.parse(fs.readFile('toDoList.json'));
 }

 //get function

 //get all function

 //put function

 //delete function

 //write to file- helper function

 //export