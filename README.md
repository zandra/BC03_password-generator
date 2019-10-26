# Password Generator

The generator creates a randomized secure password based on user input. When the "Generate Password" button is pressed the user is initially promped to enter a character length within a stated parameter. 

After validating the character length, the user is directed to choose the type of characters in password through a series of prompts. 

A legal character string is created based on the user choice and a password is created via a randomized selection from this string.

If the user inputs an invalid character length or fails to choose at least one subset, the function ends and the user is directed to try again.

## Design

The page is repsonsive for small screens.

## Difficulties

The most difficult part of this assignment was actually clearing the screen if a password already existed. 

I eventually overcame this difficulty through an initial check for the element that is created to hold the password as well as reloading the screen (therefore resetting the generator) when the password is copied.
