## Notes

- The repository is a collection of all HTML/CSS challanges from frontend mentor

- Each subfolder is a challenge. All the configuration files for each challenge is within its folder.

- Files in the parent directory can't be added from the subfolders? Gotta check why!

- using gulp, a task runner, to minify and concat the style files for each of those challenges.

- updating the `.gitignore` file to ignore `node_modules` in the entire repository by adding this line  `/**/node_modules` .

### To do

- update the gulp file to process the tasks in a more configurable way.

- for example , all configurations should happen in the root directory of the repository and gulp should take arguments to determine which project/challenge to run.