osascript -e 'tell app "Terminal"
   do script "cd ~/Desktop/Self/Resume/resume-site && sleep 8s && PORT=3001 npm run all-tests"
end tell'