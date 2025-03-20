# SOURCE CONTROL

`git init`

- Initializes source control

---

`git remote add origin https://github.com/yuki-konn/capstone-project-level-2.git`

1. Open Github
2. Open the repository
3. Copy the repository link

---

`git pull origin main` or `git pull --set-upstream origin main`

- Copy the files from GitHub and sets as upstream (Default origin and branch)

---

`gh auth login`

- Connects the project to GitHub

---

`git remote set-url origin https://github.com/yuki-konn/capstone-project-level-3.git`

- Changes the value of origin to the URL

---

`git push --set-upstream origin main`

- Pushes files to GitHub and makes origin and main the default options

---

### PUSHING TO GITHUB IN GENERAL

```
git add .
git commit -m "the changes I made"
git push
```

Example:

- `git add README.md` to add a single file.
- `git add file.md file2.md` to add multiple files by having a space between each file name.

### IF BRANCH IS MASTER

`git branch -M main`

- Renames the branch from master to main

```
git add .
git commit -m "renamed the branch"
git push --set-upstream origin main
```

# OTHER COMMANDS

### COPY THE FILES FROM GITHUB WITH THE DEFAULT UPSTREAM(DEFAULT ORIGIN AND BRANCH):

`git pull`

### DISPLAYS THE VALUE OF ORIGIN AND THE URL OF OTHER REMOTE REPOS

`git remote -v`

### CHECKS WHAT VERSION OF GIT YOU ARE ON

`git --version`
