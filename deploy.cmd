@echo off
setlocal

:: Ensure all changes are committed
echo Committing changes...
git add .
git commit -m "Update for responsive design and mobile friendliness"

:: Push changes to GitHub
echo Pushing changes to GitHub...
git push origin main

:: Deploy the project to GitHub Pages
echo Deploying to GitHub Pages...
npm run deploy

echo Deployment complete!

endlocal
pause