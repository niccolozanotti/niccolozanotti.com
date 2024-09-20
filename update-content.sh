#!/bin/bash

# Define the submodule path
submodule_path="content"

# Check if .gitmodules is configured correctly
if [ ! -f ".gitmodules" ]; then
  echo "Error: .gitmodules file does not exist. Please ensure the submodule is correctly configured."
  exit 1
fi

# Check if the submodule path exists in the .gitmodules
if ! grep -q "$submodule_path" ".gitmodules"; then
  echo "Error: Submodule '$submodule_path' is not listed in .gitmodules."
  exit 1
fi

# Update the submodule
echo "Updating submodule at $submodule_path..."
git submodule update --remote --merge $submodule_path

# Get the recorded commit for the submodule in the main repo
recorded_commit=$(git ls-tree HEAD $submodule_path | awk '{ print $3 }')

# Navigate to the submodule directory
cd $submodule_path || { echo "Failed to navigate to submodule directory: $submodule_path"; exit 1; }

# Get the current commit in the submodule
current_commit=$(git rev-parse HEAD)

# Check if the recorded commit is different from the current commit
if [ "$recorded_commit" != "$current_commit" ]; then
  echo "Changes detected in submodule: $submodule_path"
  changed=true
else
  echo "No changes detected in submodule: $submodule_path"
  changed=false
fi

# Navigate back to the root project directory
cd - || exit 1

# Run npx quartz sync --no-pull if there are changes
if [ "$changed" = true ]; then
  echo "Running npx quartz sync --no-pull"
  npx quartz sync --no-pull
else
  echo "No changes detected, skipping npx quartz sync --no-pull"
fi
