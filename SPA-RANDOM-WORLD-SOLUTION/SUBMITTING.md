# Submitting your work

If you have downloaded this project via GitHub classroom, follow these instructions to prepare your work for submission.

## Preparing for your assignments

**Important!** Before working on these assignments, please make sure to create a new branch with the name "solution" in the terminal;

`git checkout -b solution`

When you have finished making your changes, use the following command to mark all changed files to be added to the next commit;

`git add .`

And then commit as follows;

`git commit -m "Your message"`

Replace the text _Your message_ with something a short summary of the changes you've made

It's good practise to separate your code changes into multiple commits, for example - if you're building a website, you might want to have 1 commit for your header code, one for your navigation code, etc.

## Submitting your assignments

Once you've finished your changes and you are ready to submit your work, you can push the changes to the remote server via the following commands;

If you've already pushed before, you can simply use:

`git push`

If however you get an error, telling you the remote branch for "solution" does not exist, use the following command:

`git push --set-upstream origin solution`

Once this is done, create a **Pull Request** from the `solution` branch to the `master` branch via the GitHub interface.