# Password Generator App - Homework 3

### Project Description:

Using JavaScript, we created a password generator that:

- Prompts the user to enter a desired password length
- Prompts the user to confirm that they want to include lowercase letters
- Prompts the user to confirm that they want to include uppercase letters
- Prompts the user to confirm that they want to include numbers
- Prompts the user to confirm that they want to include special characters

First, we declare the variables *lowercase, uppercase, listNumbers* and *special* to store a list of each set of relevant characters in an array. We declare the *chosenArray* variable to store a combined array of each character type the user chose to include in their password.

Using conditionals, the function generatePassword() cycles through each confirm prompt from the user's character type choices and pushes the corresponding array to *chosenArray* if "confirm = true" (i.e. the user selected "OK" and not "Cancel" when prompted).

Next, we declare a new variable *passwordArray* to store an array of random characters from *chosenArray* with a set length based on the user's input to the original password length prompt.

Then, we run a for loop that does the following:

- Generates a random number between 0 and the length of *chosenArray*
- Uses that number to select a random index of *chosenArray* 
- Pushes that index to the new *passwordArray*
- Repeats *passwordLength* number of times and then stops

After that, we join *passwordArray* together as a single string and store in a new variable *newPassword*.

We then declare a new function writePassword() that both calls the generatePassword() function and uses query selectors to store the value (the new password) in the #password text-area element. We use an Event Listener to activate the Generate Password button, so that when we click it, it calls the writePassword() function.