#!/usr/bin/env python3
from pathlib import Path
from datetime import datetime, timezone
import sys

def should_ignore(path: Path, ignore_names):
    for part in path.parts:
        if part in ignore_names:
            return True
    return False

def build_tree(root: Path, ignore_names=None):
    if ignore_names is None:
        ignore_names = {
            '.git', '.github', 'node_modules', '__pycache__', '.venv', 'venv', 'env', '.env',
            '.pytest_cache', '.vscode', '.idea', '.DS_Store',
            'dist', 'build', 'out', 'coverage', '.next', '.nuxt',
            'migrations', 'LC_MESSAGES', 'site-packages'
        }

    lines = []

    def _walk(path: Path, prefix=''):
        try:
            entries = sorted([p for p in path.iterdir() if not should_ignore(p.relative_to(root), ignore_names)])
        except PermissionError:
            return

        for i, entry in enumerate(entries):
            connector = '└── ' if i == len(entries) - 1 else '├── '
            if entry.is_dir():
                lines.append(f"{prefix}{connector}{entry.name}/")
                extension = '    ' if i == len(entries) - 1 else '│   '
                _walk(entry, prefix + extension)
            else:
                lines.append(f"{prefix}{connector}{entry.name}")

    lines.append(f"{root.name}/")
    _walk(root)
    return lines

def write_tree_md(root: Path, out_path: Path):
    lines = build_tree(root)

    new_tree_content = '\n'.join(['```'] + lines + ['```'])

    if out_path.exists():
        try:
            existing_content = out_path.read_text(encoding='utf-8')

            parts = existing_content.split('```')
            if len(parts) >= 3:
                existing_tree_content = '```' + parts[1] + '```'
                if existing_tree_content == new_tree_content:
                    print(f"No changes detected in tree structure. Skipping update for {out_path.name}.")
                    return
        except Exception as e:
            print(f"Warning: Could not read existing file for comparison: {e}")

    header = [
        '# Árvore do repositório — Safari Escolar',
        f'*Gerado em {datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%SZ")} (UTC)*',
        '',
    ]

    footer = [
        '',
        'Este arquivo é gerado automaticamente pelo script `scripts/generate_tree.py` e atualizado pelo workflow `.github/workflows/update-tree.yml`.',
        '',
        'Para atualizar localmente:',
        '',
        '```bash',
        'python3 scripts/generate_tree.py',
        '```',
        ''
    ]

    full_content = '\n'.join(header + [new_tree_content] + footer)
    out_path.write_text(full_content, encoding='utf-8')
    print(f'Wrote {out_path}')

def main():
    script_path = Path(__file__).resolve()
    repo_root = script_path.parents[1]
    out_path = repo_root / 'docs' / 'tree.md'
    write_tree_md(repo_root, out_path)

if __name__ == '__main__':
    try:
        main()
    except Exception as e:
        print('Erro ao gerar tree.md:', e, file=sys.stderr)
        sys.exit(1)