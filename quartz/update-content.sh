#!/bin/bash

# Function to find and change to the root directory of the git repository
goto_git_root() {
  local current_dir=$(pwd)
  while [ ! -d ".git" ] && [ "$current_dir" != "/" ]; do
    cd ..
    current_dir=$(pwd)
  done

  if [ ! -d ".git" ]; then
    echo "Error: No .git directory found. Are you inside a Git repository?"
    exit 1
  fi

  echo "Switched to Git root directory: $(pwd)"
}

# Go to the root directory of the git repository
goto_git_root

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

# Initialize and update the submodule if necessary
if [ ! -d "$submodule_path" ]; then
  echo "Initializing and updating submodule '$submodule_path'..."
  git submodule init $submodule_path
  git submodule update $submodule_path
else
  echo "Submodule directory '$submodule_path' already exists. Updating..."
  git submodule update --remote --merge $submodule_path
fi

# Check if the submodule directory is present after update
if [ ! -d "$submodule_path" ]; then
  echo "Error: Submodule directory '$submodule_path' still does not exist after update."
  exit 1
fi

# Navigate to the submodule directory
if cd $submodule_path; then
  # Check for changes in the submodule
  if [[ $(git status --porcelain) ]]; then
    echo "Changes detected in submodule: $submodule_path"
    changed=true
  else
    echo "No changes detected in submodule: $submodule_path"
    changed=false
  fi

  # Navigate back to the root project directory
  cd -
else
  echo "Failed to navigate to submodule directory: $submodule_path"
  exit 1
fi

# Run npx quartz sync --no-pull if there are changes
if [ "$changed" = true ]; then
  echo "Running npx quartz sync --no-pull"
  npx quartz sync --no-pull
else
  echo "No changes detected, skipping npx quartz sync --no-pull"
fi