#!/usr/bin/env python3
from pathlib import Path
from datetime import datetime
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
    header = [
        '# Árvore do repositório — Safari Escolar',
        f'*Gerado em {datetime.utcnow().strftime("%Y-%m-%d %H:%M:%SZ")} (UTC)*',
        '',
    ]
    content = '\n'.join(header + ['```'] + lines + ['```', '', 'Este arquivo é gerado automaticamente pelo script `scripts/generate_tree.py` e atualizado pelo workflow `.github/workflows/update-tree.yml`.', '', 'Para atualizar localmente:', '', '```bash', 'python3 scripts/generate_tree.py', '```', ''])
    out_path.write_text(content, encoding='utf-8')


def main():
    script_path = Path(__file__).resolve()
    repo_root = script_path.parents[1]
    out_path = repo_root / 'docs' / 'tree.md'
    write_tree_md(repo_root, out_path)
    print(f'Wrote {out_path}')


if __name__ == '__main__':
    try:
        main()
    except Exception as e:
        print('Erro ao gerar tree.md:', e, file=sys.stderr)
        sys.exit(1)
