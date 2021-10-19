// TASK MANAGER

const menu = `TASK MANAGER

What would you like to do (Please enter one of the options below):
"TASKS - Display All Tasks"
"NEW" - Add a New Task
"REMOVE" - Remove a Task
"CLOSE" - Close the Task Manager
`;

let userInput = prompt(menu);


// Loops and continues to display until the user enters close
while (userInput !== `CLOSE`) {

    
    
    // Displays the menu again
    userInput = prompt (menu);
}

// Alerts the user that they have closed the program
alert (`Thank you for using Task Manager`)








