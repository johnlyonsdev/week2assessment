/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/
//CODE HERE
let gitDefinition = "Git is a tool that allows users to backup iterations of their code while they work. It is a program that allows users to keep track of changes and prevents users from losing their progress."
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition = "Github is a website that allows users to upload and remotely store their repositories. This is useful for allowing remote backups of code to be created, as well as for teams to keep track of progress and changes that were made to a project."
//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE
const init = {
    description: "Lets a user initialize a local repository at the current location",
    code: "git init"
}
//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE
const clone = {
    description: "Clone makes a copy of an existing repository at a specified location",
    code: "git clone <existing repository> <specified directory>"
}
//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE
const status = {
    description: "Lets a user see the status of their repository branch. It shows if the branch is ahead of the main repository by a certain number of commits, and also shows if anything has been added but not committed yet",
    code: "git status"
}
//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE
const add = {
    description: "Git add lets a user add an updated version of their code to be tracked and be ready to be committed to the local repository",
    code: "git add projectname.js"
}
//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
const commit = {
    description: "Lets a user commit their tracked changes to their local repository",
    code: "git commit -m start quote-Insert comment about the new commit here-endquote"
}

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE
const push = {
    description: "This pushes the changes and commits from your local repository to the main repository. It is a way of backing up your local repository",
    code: "git push"
}