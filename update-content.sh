#!/bin/bash

# Define the submodule path
submodule_path="content/"

# Pull updates for the submodule
echo "Updating submodule at $submodule_path to the latest commit from its remote repository..."
git submodule update --remote --merge $submodule_path

# Navigate to the submodule directory
cd $submodule_path || exit

# Check for changes in the submodule
if [[ $(git diff --name-only) ]]; then
  echo "Changes detected in submodule: $submodule_path"
  changed=true
else
  echo "No changes detected in submodule: $submodule_path"
  changed=false
fi

# Navigate back to the root project directory
cd - || exit

# Run npx quartz sync --no-pull if there are changes
if [ "$changed" = true ]; then
  echo "Running npx quartz sync --no-pull"
  npx quartz sync --no-pull
else
  echo "No changes detected, skipping npx quartz sync --no-pull"
fi