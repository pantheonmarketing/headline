@echo off
setlocal

:: Add .env to .gitignore
echo .env>>.gitignore

:: Remove .env from Git tracking
git rm --cached .env

:: Commit the changes
git add .gitignore
git commit -m "Add .env to .gitignore and remove from tracking"

:: Remove the secret from the commit history
git filter-branch --force --index-filter "git rm --cached --ignore-unmatch .env" --prune-empty --tag-name-filter cat -- --all

:: Force push the changes to GitHub
git push origin main --force

endlocal