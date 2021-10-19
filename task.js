// TASK MANAGER

const menu = `TASK MANAGER

What would you like to do (Please enter one of the options below):
"TASKS - Display All Tasks"
"NEW" - Add a New Task
"REMOVE" - Remove a Task
"CLOSE" - Close the Task Manager
`;


// Storing tasks Array
const tasks = [
`Charge MacBook`,
`Master JavaScript`
];


// Used for displaying tasks to user
let showTasks = ``;


let userInput = prompt(menu);

// Loops and continues to display until the user enters close
while (userInput !== `CLOSE`) {

    // Checks if user entered TASKS
    if (userInput ===`TASKS`){

        // 
        for (task of tasks){
        //    Using \n to tcreate a new line after each task
            showTasks += `${task}\n`;
            
        }

        // Displays current tasks to user
        alert(showTasks);

        // Set the value of the showTasks string variable back to an empty string
        showTasks = "";
    }

    if (userInput === `NEW`){

        newTask = prompt (`Please enter the new task:`);
        
        
        // Alerts user task has been added  
        alert (`"${newTask}") has been added!`);
        
        // Prompts the user to enter a new task and stores their response
        let newTask = prompt (`Please enter the new task:`);
    }
    
    // Displays the menu again
    userInput = prompt (menu);
}

// Alerts the user that they have closed the program
alert (`Thank you for using Task Manager`)








