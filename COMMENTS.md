This file contains my comments about the refactoring if the given app.
It explains my choices, doubts, and needs.

It tooks me about 1,5 hours to get tis result.


# Cleaning the project

1. the given archive contains unwanted directories and Git history (with a current state containing some files staged, others just modified or untracked). I choose to remove the `.git` dir, also the `.idea` and the `dist` one, as long as they are ot intended to be versioned.
2. add an `editorconfig` file to keep conventions explicit
3. remove unsed deps and sort the others
4. add a linter (`standard.js`) and fix linting on project

# Structure

1. Improve folders and files structure

# Templates

1. use a layout

# TODO

There's many things to improve to get the code really clean and consistent. Here's some ideas:

* Refactor the views to make them accessibles and consistent with HTML standard
* Refactor the vies to extract some commponents
* Refactor CSS to keep it DRY
* Refactor JS logic to isolate DB logic from the rest of the app
* Use Promises
* Make tests useful, the current one isn't relevant
* etc, the list isnt exhaustive
