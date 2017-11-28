This file contains my comments about the refactoring if the given app.
It explains my choices, doubts, and needs.

It tooks me about approx. 3 hours to get this result.


# Cleaning the project

1. the given archive contains unwanted directories and Git history (with a current state containing some files staged, others just modified or untracked). I choose to remove the `.git` dir, also the `.idea` and the `dist` one, as long as they are ot intended to be versioned.
2. add an `editorconfig` file to keep conventions explicit
3. remove unsed deps and sort the others
4. add a linter (`standard.js`) and fix linting on project

# Structure

1. Improve folders and files structure
2. Migrate to babel-preset-env

# Templates

1. Use a layout
2. Remove boostrap deps
3. Clean HTML views to make it more concise and standard compliant

# Server

1. Use a more concise syntax for express server
2. Create consistent routers for modules paths
3. Use a Promise-wise DB handler
4. Move db logics outside of routing

# TODO

There's many things to improve to get the code really clean and consistent. Here's some ideas:

* Make tests useful, the current one isn't relevant
* Use the available locales
* Refactor the views to extract some commponents
* Replace loose styles from bootstrap
* Refactor CSS to keep it DRY
* etc, the list isnt exhaustive
