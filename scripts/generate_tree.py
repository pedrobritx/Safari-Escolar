
import os
import sys

def generate_tree(dir_path, prefix=""):
    try:
        # Get all files and verify permissions/existence
        items = os.listdir(dir_path)
    except PermissionError:
        return

    # Filter out node_modules and .git
    items = [i for i in items if i not in ("node_modules", ".git", ".DS_Store", "__pycache__", ".venv")]
    items.sort()

    for index, item in enumerate(items):
        path = os.path.join(dir_path, item)
        is_last = (index == len(items) - 1)
        connector = "└── " if is_last else "├── "
        
        print(f"{prefix}{connector}{item}")
        
        if os.path.isdir(path):
            extension = "    " if is_last else "│   "
            generate_tree(path, prefix + extension)

if __name__ == "__main__":
    print(".")
    generate_tree(".")
