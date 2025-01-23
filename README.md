# Rock-paper-scissors

Creating Rock Paper Scissors game in JavaScript based on instructions from The Odin Project.

## Step 1: Write the logic to get the computer choice

Your game will be played against the computer. You will write a function that randomly returns `"rock"`, `"paper"` or `"scissors"`.

1. **Create a new function named `getComputerChoice`.**

2. **Write the code** so that `getComputerChoice` will randomly return one of the following string values: `"rock"`, `"paper"` or `"scissors"`.

   - **Hint:** The `Math.random` method returns a random number that’s greater than or equal to 0 and less than 1. Think about how you can use this to conditionally return one of the multiple choices.
   - **Note:** Some learners might think that arrays are necessary for this problem, but they aren’t. If you’re unfamiliar with arrays, don’t worry – they’ll be covered later in the curriculum.

3. **Test your function** to ensure it returns what you expect using `console.log` or the browser developer tools before advancing to the next step.

---

## Step 2: Write the logic to get the human choice

Your game will be played by a human player. You will write a function that takes the user choice and returns it.

1. **Create a new function named `getHumanChoice`.**

2. **Write the code** so that `getHumanChoice` will return one of the valid choices depending on what the user inputs.

   - **Hint:** Use the `prompt` method to get the user’s input.

3. **Test your function** to ensure it returns what you expect by using `console.log`.

---

## Step 3: Declare the players score variables

Your game will keep track of the players score. You will write variables to keep track of the players score.

1. **Create two new variables** named `humanScore` and `computerScore` in the global scope.

2. **Initialize** those variables with the value of `0`.

---

## Step 4: Write the logic to play a single round

Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score, and logs a winner announcement.

1. **Create a new function named `playRound`.**

2. **Define two parameters** for `playRound`: `humanChoice` and `computerChoice`. Use these two parameters to take the human and computer choices as arguments.

3. **Make your function’s `humanChoice` parameter case-insensitive** so that players can input `"rock"`, `"ROCK"`, `"RoCk"`, or other variations.

4. **Write the code** for your `playRound` function to `console.log` a string value representing the round winner, such as: `"You lose! Paper beats Rock"`.

5. **Increment** the `humanScore` or `computerScore` variable based on the round winner.

## Step 5: Write the logic to play the entire game

Your game will play 5 rounds. You will write a function named `playGame` that calls `playRound` to play 5 rounds, keeps track of the scores, and declares a winner at the end.

1. **Create a new function named `playGame`.**

2. **Move your `playRound` function and score variables** so that they’re declared inside of the new `playGame` function.

3. **Play 5 rounds** by calling `playRound` 5 times.
