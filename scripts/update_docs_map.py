import os
import re

README_PATH = "README.md"
DOCS_MAP_HEADER = "## Repository documentation map"
SEPARATOR = "---"

IGNORE_DIRS = {
    "node_modules", ".git", ".venv", "__pycache__", ".next", 
    "apps", "packages", "infra", "scripts", ".vscode"
}
IGNORE_FILES = {
    "README.md", "TREE.md", "LICENSE.md", "CREDENTIALS.md", "PLAN.md", "task.md", "implementation_plan.md"
}

def get_file_info(filepath):
    """Extracts title and description from the first header line of a markdown file."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            # Check first few lines for a title
            for _ in range(5):
                line = f.readline().strip()
                if not line:
                    continue
                
                # Expecting format: # TITLE — Description
                match = re.match(r'^#\s*(.+?)\s*[—–-]\s*(.*)$', line)
                if match:
                    return match.group(1).strip(), match.group(2).strip()
                
                # Fallback: Just the title part if no description separator
                match_title = re.match(r'^#\s*(.+)$', line)
                if match_title:
                    return match_title.group(1).strip(), ""
            
            return os.path.basename(filepath), ""
    except Exception:
        return os.path.basename(filepath), ""

def scan_docs():
    """Scans for markdown files and returns a list of (path, description) tuples."""
    docs = []
    
    # 1. Scan valid root files
    try:
        root_files = [f for f in os.listdir('.') if os.path.isfile(f) and f.endswith('.md')]
        for f in root_files:
            if f not in IGNORE_FILES:
                 title, desc = get_file_info(f)
                 docs.append((f, desc))
    except OSError:
        pass

    # 2. Scan docs/ folder recursively
    for root, dirs, files in os.walk("docs"):
        # Modify dirs in-place to skip ignored directories
        dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]
        
        for f in files:
            if f.endswith(".md") and f not in IGNORE_FILES:
                full_path = os.path.join(root, f)
                title, desc = get_file_info(full_path)
                # Use relative path for link
                docs.append((full_path, desc))

    # Sort by path
    docs.sort(key=lambda x: x[0])
    return docs

def update_readme(docs):
    with open(README_PATH, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the section
    start_idx = content.find(DOCS_MAP_HEADER)
    if start_idx == -1:
        print(f"Error: Header '{DOCS_MAP_HEADER}' not found in {README_PATH}")
        return

    # Find the end of the section (next separator)
    end_idx = content.find(SEPARATOR, start_idx + len(DOCS_MAP_HEADER))
    if end_idx == -1:
        print(f"Error: End separator '{SEPARATOR}' not found after header.")
        return

    # Construct new list
    new_list = "\n\n"
    for path, desc in docs:
        if desc:
            new_list += f"- `{path}` — {desc}\n"
        else:
            new_list += f"- `{path}`\n"
    new_list += "\n"

    # Replace content
    new_content = content[:start_idx + len(DOCS_MAP_HEADER)] + new_list + content[end_idx:]
    
    with open(README_PATH, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"Successfully updated {README_PATH} with {len(docs)} files.")

if __name__ == "__main__":
    found_docs = scan_docs()
    update_readme(found_docs)
