# Árvore do repositório — Safari Escolar
*Gerado em 2026-01-22 04:56:46Z (UTC)*

```
Safari Escolar/
├── .env.example
├── .github/
│   └── workflows/
│       └── update-tree.yml
├── .gitignore
├── .vscode/
│   └── settings.json
├── API.md
├── README.md
├── SECURITY.md
├── TESTING.md
├── apps/
│   ├── api/
│   │   ├── accounts/
│   │   │   └── migrations/
│   │   ├── attendance/
│   │   │   └── migrations/
│   │   ├── audit/
│   │   │   └── migrations/
│   │   ├── calendar/
│   │   ├── classrooms/
│   │   │   └── migrations/
│   │   ├── config/
│   │   ├── core/
│   │   │   ├── management/
│   │   │   │   └── commands/
│   │   │   └── migrations/
│   │   ├── feedback/
│   │   │   └── migrations/
│   │   ├── grades/
│   │   │   └── migrations/
│   │   ├── messaging/
│   │   │   └── migrations/
│   │   ├── posts/
│   │   │   └── migrations/
│   │   ├── school_calendar/
│   │   │   └── migrations/
│   │   ├── schools/
│   │   │   └── migrations/
│   │   ├── students/
│   │   │   └── migrations/
│   │   └── venv/
│   │       ├── bin/
│   │       │   ├── Activate.ps1
│   │       │   ├── activate
│   │       │   ├── activate.csh
│   │       │   ├── activate.fish
│   │       │   ├── django-admin
│   │       │   ├── jsonschema
│   │       │   ├── pip
│   │       │   ├── pip3
│   │       │   ├── pip3.12
│   │       │   ├── python
│   │       │   ├── python3
│   │       │   ├── python3.12
│   │       │   └── sqlformat
│   │       ├── include/
│   │       │   └── python3.12/
│   │       ├── lib/
│   │       │   └── python3.12/
│   │       │       └── site-packages/
│   │       │           ├── _yaml/
│   │       │           │   └── __init__.py
│   │       │           ├── asgiref/
│   │       │           │   ├── __init__.py
│   │       │           │   ├── compatibility.py
│   │       │           │   ├── current_thread_executor.py
│   │       │           │   ├── local.py
│   │       │           │   ├── py.typed
│   │       │           │   ├── server.py
│   │       │           │   ├── sync.py
│   │       │           │   ├── testing.py
│   │       │           │   ├── timeout.py
│   │       │           │   ├── typing.py
│   │       │           │   └── wsgi.py
│   │       │           ├── asgiref-3.11.0.dist-info/
│   │       │           │   ├── INSTALLER
│   │       │           │   ├── METADATA
│   │       │           │   ├── RECORD
│   │       │           │   ├── REQUESTED
│   │       │           │   ├── WHEEL
│   │       │           │   ├── licenses/
│   │       │           │   │   └── LICENSE
│   │       │           │   └── top_level.txt
│   │       │           ├── attr/
│   │       │           │   ├── __init__.py
│   │       │           │   ├── __init__.pyi
│   │       │           │   ├── _cmp.py
│   │       │           │   ├── _cmp.pyi
│   │       │           │   ├── _compat.py
│   │       │           │   ├── _config.py
│   │       │           │   ├── _funcs.py
│   │       │           │   ├── _make.py
│   │       │           │   ├── _next_gen.py
│   │       │           │   ├── _typing_compat.pyi
│   │       │           │   ├── _version_info.py
│   │       │           │   ├── _version_info.pyi
│   │       │           │   ├── converters.py
│   │       │           │   ├── converters.pyi
│   │       │           │   ├── exceptions.py
│   │       │           │   ├── exceptions.pyi
│   │       │           │   ├── filters.py
│   │       │           │   ├── filters.pyi
│   │       │           │   ├── py.typed
│   │       │           │   ├── setters.py
│   │       │           │   ├── setters.pyi
│   │       │           │   ├── validators.py
│   │       │           │   └── validators.pyi
│   │       │           ├── attrs/
│   │       │           │   ├── __init__.py
│   │       │           │   ├── __init__.pyi
│   │       │           │   ├── converters.py
│   │       │           │   ├── exceptions.py
│   │       │           │   ├── filters.py
│   │       │           │   ├── py.typed
│   │       │           │   ├── setters.py
│   │       │           │   └── validators.py
│   │       │           ├── attrs-25.4.0.dist-info/
│   │       │           │   ├── INSTALLER
│   │       │           │   ├── METADATA
│   │       │           │   ├── RECORD
│   │       │           │   ├── WHEEL
│   │       │           │   └── licenses/
│   │       │           │       └── LICENSE
│   │       │           ├── corsheaders/
│   │       │           │   ├── __init__.py
│   │       │           │   ├── apps.py
│   │       │           │   ├── checks.py
│   │       │           │   ├── conf.py
│   │       │           │   ├── defaults.py
│   │       │           │   ├── middleware.py
│   │       │           │   ├── py.typed
│   │       │           │   └── signals.py
│   │       │           ├── django/
│   │       │           │   ├── __init__.py
│   │       │           │   ├── __main__.py
│   │       │           │   ├── apps/
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── config.py
│   │       │           │   │   └── registry.py
│   │       │           │   ├── conf/
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── app_template/
│   │       │           │   │   │   ├── __init__.py-tpl
│   │       │           │   │   │   ├── admin.py-tpl
│   │       │           │   │   │   ├── apps.py-tpl
│   │       │           │   │   │   ├── migrations/
│   │       │           │   │   │   │   └── __init__.py-tpl
│   │       │           │   │   │   ├── models.py-tpl
│   │       │           │   │   │   ├── tests.py-tpl
│   │       │           │   │   │   └── views.py-tpl
│   │       │           │   │   ├── global_settings.py
│   │       │           │   │   ├── locale/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── af/
│   │       │           │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── ar/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── ar_DZ/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── ast/
│   │       │           │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── az/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── be/
│   │       │           │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── bg/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── bn/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── br/
│   │       │           │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── bs/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── ca/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── ckb/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── cs/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── cy/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── da/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── de/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── de_CH/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── dsb/
│   │       │           │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── el/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── en/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── en_AU/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── en_CA/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── en_GB/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── en_IE/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── eo/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── es/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── es_AR/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── es_CO/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── es_MX/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── es_NI/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── es_PR/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── es_VE/
│   │       │           │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── et/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── eu/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── fa/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── fi/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── fr/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── fr_BE/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── fr_CA/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── fr_CH/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── fy/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── ga/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── gd/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── gl/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── he/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── hi/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── hr/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── hsb/
│   │       │           │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── ht/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── hu/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── hy/
│   │       │           │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── ia/
│   │       │           │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── id/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── ig/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── io/
│   │       │           │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── is/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── it/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── ja/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── ka/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── kab/
│   │       │           │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── kk/
│   │       │           │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── km/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── kn/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── ko/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── ky/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── lb/
│   │       │           │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── lt/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── lv/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── mk/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── ml/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── mn/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── mr/
│   │       │           │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── ms/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── my/
│   │       │           │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── nb/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── ne/
│   │       │           │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── nl/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── nn/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── os/
│   │       │           │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── pa/
│   │       │           │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── pl/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── pt/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── pt_BR/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── ro/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── ru/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── sk/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── sl/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── sq/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── sr/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── sr_Latn/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── sv/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── sw/
│   │       │           │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── ta/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── te/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── tg/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── th/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── tk/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── tr/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── tt/
│   │       │           │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── udm/
│   │       │           │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── ug/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── uk/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── ur/
│   │       │           │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── uz/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── vi/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── zh_Hans/
│   │       │           │   │   │   │   ├── LC_MESSAGES/
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   └── zh_Hant/
│   │       │           │   │   │       ├── LC_MESSAGES/
│   │       │           │   │   │       │   ├── django.mo
│   │       │           │   │   │       │   └── django.po
│   │       │           │   │   │       ├── __init__.py
│   │       │           │   │   │       └── formats.py
│   │       │           │   │   ├── project_template/
│   │       │           │   │   │   ├── manage.py-tpl
│   │       │           │   │   │   └── project_name/
│   │       │           │   │   │       ├── __init__.py-tpl
│   │       │           │   │   │       ├── asgi.py-tpl
│   │       │           │   │   │       ├── settings.py-tpl
│   │       │           │   │   │       ├── urls.py-tpl
│   │       │           │   │   │       └── wsgi.py-tpl
│   │       │           │   │   └── urls/
│   │       │           │   │       ├── __init__.py
│   │       │           │   │       ├── i18n.py
│   │       │           │   │       └── static.py
│   │       │           │   ├── contrib/
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── admin/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── actions.py
│   │       │           │   │   │   ├── apps.py
│   │       │           │   │   │   ├── checks.py
│   │       │           │   │   │   ├── decorators.py
│   │       │           │   │   │   ├── exceptions.py
│   │       │           │   │   │   ├── filters.py
│   │       │           │   │   │   ├── forms.py
│   │       │           │   │   │   ├── helpers.py
│   │       │           │   │   │   ├── locale/
│   │       │           │   │   │   │   ├── af/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── am/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ar/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── ar_DZ/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── ast/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── az/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── be/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── bg/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── bn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── br/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── bs/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── ca/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── ckb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── cs/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── cy/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── da/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── de/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── dsb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── el/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── en/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── en_AU/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── en_GB/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── eo/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── es/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── es_AR/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── es_CO/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── es_MX/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── es_VE/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── et/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── eu/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── fa/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── fi/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── fr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── fy/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── ga/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── gd/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── gl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── he/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── hi/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── hr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── hsb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── hu/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── hy/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── ia/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── id/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── io/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── is/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── it/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── ja/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── ka/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── kab/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── kk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── km/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── kn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── ko/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── ky/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── lb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── lt/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── lv/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── mk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── ml/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── mn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── mr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── ms/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── my/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── nb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── ne/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── nl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── nn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── os/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── pa/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── pl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── pt/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── pt_BR/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── ro/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── ru/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── sk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── sl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── sq/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── sr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── sr_Latn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── sv/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── sw/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── ta/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── te/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── tg/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── th/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── tk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── tt/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── udm/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── ug/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── uk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── ur/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── uz/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── vi/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── zh_Hans/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   └── zh_Hant/
│   │       │           │   │   │   │       └── LC_MESSAGES/
│   │       │           │   │   │   │           ├── django.mo
│   │       │           │   │   │   │           ├── django.po
│   │       │           │   │   │   │           ├── djangojs.mo
│   │       │           │   │   │   │           └── djangojs.po
│   │       │           │   │   │   ├── migrations/
│   │       │           │   │   │   │   ├── 0001_initial.py
│   │       │           │   │   │   │   ├── 0002_logentry_remove_auto_add.py
│   │       │           │   │   │   │   ├── 0003_logentry_add_action_flag_choices.py
│   │       │           │   │   │   │   └── __init__.py
│   │       │           │   │   │   ├── models.py
│   │       │           │   │   │   ├── options.py
│   │       │           │   │   │   ├── sites.py
│   │       │           │   │   │   ├── static/
│   │       │           │   │   │   │   └── admin/
│   │       │           │   │   │   │       ├── css/
│   │       │           │   │   │   │       │   ├── autocomplete.css
│   │       │           │   │   │   │       │   ├── base.css
│   │       │           │   │   │   │       │   ├── changelists.css
│   │       │           │   │   │   │       │   ├── dark_mode.css
│   │       │           │   │   │   │       │   ├── dashboard.css
│   │       │           │   │   │   │       │   ├── forms.css
│   │       │           │   │   │   │       │   ├── login.css
│   │       │           │   │   │   │       │   ├── nav_sidebar.css
│   │       │           │   │   │   │       │   ├── responsive.css
│   │       │           │   │   │   │       │   ├── responsive_rtl.css
│   │       │           │   │   │   │       │   ├── rtl.css
│   │       │           │   │   │   │       │   ├── unusable_password_field.css
│   │       │           │   │   │   │       │   ├── vendor/
│   │       │           │   │   │   │       │   │   └── select2/
│   │       │           │   │   │   │       │   │       ├── LICENSE-SELECT2.md
│   │       │           │   │   │   │       │   │       ├── select2.css
│   │       │           │   │   │   │       │   │       └── select2.min.css
│   │       │           │   │   │   │       │   └── widgets.css
│   │       │           │   │   │   │       ├── img/
│   │       │           │   │   │   │       │   ├── README.md
│   │       │           │   │   │   │       │   ├── calendar-icons.svg
│   │       │           │   │   │   │       │   ├── icon-addlink.svg
│   │       │           │   │   │   │       │   ├── icon-alert-dark.svg
│   │       │           │   │   │   │       │   ├── icon-alert.svg
│   │       │           │   │   │   │       │   ├── icon-calendar.svg
│   │       │           │   │   │   │       │   ├── icon-changelink.svg
│   │       │           │   │   │   │       │   ├── icon-clock.svg
│   │       │           │   │   │   │       │   ├── icon-debug-dark.svg
│   │       │           │   │   │   │       │   ├── icon-debug.svg
│   │       │           │   │   │   │       │   ├── icon-deletelink.svg
│   │       │           │   │   │   │       │   ├── icon-hidelink.svg
│   │       │           │   │   │   │       │   ├── icon-info-dark.svg
│   │       │           │   │   │   │       │   ├── icon-info.svg
│   │       │           │   │   │   │       │   ├── icon-no-dark.svg
│   │       │           │   │   │   │       │   ├── icon-no.svg
│   │       │           │   │   │   │       │   ├── icon-unknown-alt.svg
│   │       │           │   │   │   │       │   ├── icon-unknown.svg
│   │       │           │   │   │   │       │   ├── icon-viewlink.svg
│   │       │           │   │   │   │       │   ├── icon-yes-dark.svg
│   │       │           │   │   │   │       │   ├── icon-yes.svg
│   │       │           │   │   │   │       │   ├── inline-delete.svg
│   │       │           │   │   │   │       │   ├── search.svg
│   │       │           │   │   │   │       │   ├── selector-icons.svg
│   │       │           │   │   │   │       │   ├── sorting-icons.svg
│   │       │           │   │   │   │       │   ├── tooltag-add.svg
│   │       │           │   │   │   │       │   └── tooltag-arrowright.svg
│   │       │           │   │   │   │       └── js/
│   │       │           │   │   │   │           ├── SelectBox.js
│   │       │           │   │   │   │           ├── SelectFilter2.js
│   │       │           │   │   │   │           ├── actions.js
│   │       │           │   │   │   │           ├── admin/
│   │       │           │   │   │   │           │   ├── DateTimeShortcuts.js
│   │       │           │   │   │   │           │   └── RelatedObjectLookups.js
│   │       │           │   │   │   │           ├── autocomplete.js
│   │       │           │   │   │   │           ├── calendar.js
│   │       │           │   │   │   │           ├── cancel.js
│   │       │           │   │   │   │           ├── change_form.js
│   │       │           │   │   │   │           ├── core.js
│   │       │           │   │   │   │           ├── filters.js
│   │       │           │   │   │   │           ├── inlines.js
│   │       │           │   │   │   │           ├── jquery.init.js
│   │       │           │   │   │   │           ├── nav_sidebar.js
│   │       │           │   │   │   │           ├── popup_response.js
│   │       │           │   │   │   │           ├── prepopulate.js
│   │       │           │   │   │   │           ├── prepopulate_init.js
│   │       │           │   │   │   │           ├── theme.js
│   │       │           │   │   │   │           ├── urlify.js
│   │       │           │   │   │   │           └── vendor/
│   │       │           │   │   │   │               ├── jquery/
│   │       │           │   │   │   │               │   ├── LICENSE.txt
│   │       │           │   │   │   │               │   ├── jquery.js
│   │       │           │   │   │   │               │   └── jquery.min.js
│   │       │           │   │   │   │               ├── select2/
│   │       │           │   │   │   │               │   ├── LICENSE.md
│   │       │           │   │   │   │               │   ├── i18n/
│   │       │           │   │   │   │               │   │   ├── af.js
│   │       │           │   │   │   │               │   │   ├── ar.js
│   │       │           │   │   │   │               │   │   ├── az.js
│   │       │           │   │   │   │               │   │   ├── bg.js
│   │       │           │   │   │   │               │   │   ├── bn.js
│   │       │           │   │   │   │               │   │   ├── bs.js
│   │       │           │   │   │   │               │   │   ├── ca.js
│   │       │           │   │   │   │               │   │   ├── cs.js
│   │       │           │   │   │   │               │   │   ├── da.js
│   │       │           │   │   │   │               │   │   ├── de.js
│   │       │           │   │   │   │               │   │   ├── dsb.js
│   │       │           │   │   │   │               │   │   ├── el.js
│   │       │           │   │   │   │               │   │   ├── en.js
│   │       │           │   │   │   │               │   │   ├── es.js
│   │       │           │   │   │   │               │   │   ├── et.js
│   │       │           │   │   │   │               │   │   ├── eu.js
│   │       │           │   │   │   │               │   │   ├── fa.js
│   │       │           │   │   │   │               │   │   ├── fi.js
│   │       │           │   │   │   │               │   │   ├── fr.js
│   │       │           │   │   │   │               │   │   ├── gl.js
│   │       │           │   │   │   │               │   │   ├── he.js
│   │       │           │   │   │   │               │   │   ├── hi.js
│   │       │           │   │   │   │               │   │   ├── hr.js
│   │       │           │   │   │   │               │   │   ├── hsb.js
│   │       │           │   │   │   │               │   │   ├── hu.js
│   │       │           │   │   │   │               │   │   ├── hy.js
│   │       │           │   │   │   │               │   │   ├── id.js
│   │       │           │   │   │   │               │   │   ├── is.js
│   │       │           │   │   │   │               │   │   ├── it.js
│   │       │           │   │   │   │               │   │   ├── ja.js
│   │       │           │   │   │   │               │   │   ├── ka.js
│   │       │           │   │   │   │               │   │   ├── km.js
│   │       │           │   │   │   │               │   │   ├── ko.js
│   │       │           │   │   │   │               │   │   ├── lt.js
│   │       │           │   │   │   │               │   │   ├── lv.js
│   │       │           │   │   │   │               │   │   ├── mk.js
│   │       │           │   │   │   │               │   │   ├── ms.js
│   │       │           │   │   │   │               │   │   ├── nb.js
│   │       │           │   │   │   │               │   │   ├── ne.js
│   │       │           │   │   │   │               │   │   ├── nl.js
│   │       │           │   │   │   │               │   │   ├── pl.js
│   │       │           │   │   │   │               │   │   ├── ps.js
│   │       │           │   │   │   │               │   │   ├── pt-BR.js
│   │       │           │   │   │   │               │   │   ├── pt.js
│   │       │           │   │   │   │               │   │   ├── ro.js
│   │       │           │   │   │   │               │   │   ├── ru.js
│   │       │           │   │   │   │               │   │   ├── sk.js
│   │       │           │   │   │   │               │   │   ├── sl.js
│   │       │           │   │   │   │               │   │   ├── sq.js
│   │       │           │   │   │   │               │   │   ├── sr-Cyrl.js
│   │       │           │   │   │   │               │   │   ├── sr.js
│   │       │           │   │   │   │               │   │   ├── sv.js
│   │       │           │   │   │   │               │   │   ├── th.js
│   │       │           │   │   │   │               │   │   ├── tk.js
│   │       │           │   │   │   │               │   │   ├── tr.js
│   │       │           │   │   │   │               │   │   ├── uk.js
│   │       │           │   │   │   │               │   │   ├── vi.js
│   │       │           │   │   │   │               │   │   ├── zh-CN.js
│   │       │           │   │   │   │               │   │   └── zh-TW.js
│   │       │           │   │   │   │               │   ├── select2.full.js
│   │       │           │   │   │   │               │   └── select2.full.min.js
│   │       │           │   │   │   │               └── xregexp/
│   │       │           │   │   │   │                   ├── LICENSE.txt
│   │       │           │   │   │   │                   ├── xregexp.js
│   │       │           │   │   │   │                   └── xregexp.min.js
│   │       │           │   │   │   ├── templates/
│   │       │           │   │   │   │   ├── admin/
│   │       │           │   │   │   │   │   ├── 404.html
│   │       │           │   │   │   │   │   ├── 500.html
│   │       │           │   │   │   │   │   ├── actions.html
│   │       │           │   │   │   │   │   ├── app_index.html
│   │       │           │   │   │   │   │   ├── app_list.html
│   │       │           │   │   │   │   │   ├── auth/
│   │       │           │   │   │   │   │   │   └── user/
│   │       │           │   │   │   │   │   │       ├── add_form.html
│   │       │           │   │   │   │   │   │       └── change_password.html
│   │       │           │   │   │   │   │   ├── base.html
│   │       │           │   │   │   │   │   ├── base_site.html
│   │       │           │   │   │   │   │   ├── change_form.html
│   │       │           │   │   │   │   │   ├── change_form_object_tools.html
│   │       │           │   │   │   │   │   ├── change_list.html
│   │       │           │   │   │   │   │   ├── change_list_object_tools.html
│   │       │           │   │   │   │   │   ├── change_list_results.html
│   │       │           │   │   │   │   │   ├── color_theme_toggle.html
│   │       │           │   │   │   │   │   ├── date_hierarchy.html
│   │       │           │   │   │   │   │   ├── delete_confirmation.html
│   │       │           │   │   │   │   │   ├── delete_selected_confirmation.html
│   │       │           │   │   │   │   │   ├── edit_inline/
│   │       │           │   │   │   │   │   │   ├── stacked.html
│   │       │           │   │   │   │   │   │   └── tabular.html
│   │       │           │   │   │   │   │   ├── filter.html
│   │       │           │   │   │   │   │   ├── includes/
│   │       │           │   │   │   │   │   │   ├── fieldset.html
│   │       │           │   │   │   │   │   │   └── object_delete_summary.html
│   │       │           │   │   │   │   │   ├── index.html
│   │       │           │   │   │   │   │   ├── invalid_setup.html
│   │       │           │   │   │   │   │   ├── login.html
│   │       │           │   │   │   │   │   ├── nav_sidebar.html
│   │       │           │   │   │   │   │   ├── object_history.html
│   │       │           │   │   │   │   │   ├── pagination.html
│   │       │           │   │   │   │   │   ├── popup_response.html
│   │       │           │   │   │   │   │   ├── prepopulated_fields_js.html
│   │       │           │   │   │   │   │   ├── search_form.html
│   │       │           │   │   │   │   │   ├── submit_line.html
│   │       │           │   │   │   │   │   └── widgets/
│   │       │           │   │   │   │   │       ├── clearable_file_input.html
│   │       │           │   │   │   │   │       ├── date.html
│   │       │           │   │   │   │   │       ├── foreign_key_raw_id.html
│   │       │           │   │   │   │   │       ├── many_to_many_raw_id.html
│   │       │           │   │   │   │   │       ├── radio.html
│   │       │           │   │   │   │   │       ├── related_widget_wrapper.html
│   │       │           │   │   │   │   │       ├── split_datetime.html
│   │       │           │   │   │   │   │       ├── time.html
│   │       │           │   │   │   │   │       └── url.html
│   │       │           │   │   │   │   └── registration/
│   │       │           │   │   │   │       ├── logged_out.html
│   │       │           │   │   │   │       ├── password_change_done.html
│   │       │           │   │   │   │       ├── password_change_form.html
│   │       │           │   │   │   │       ├── password_reset_complete.html
│   │       │           │   │   │   │       ├── password_reset_confirm.html
│   │       │           │   │   │   │       ├── password_reset_done.html
│   │       │           │   │   │   │       ├── password_reset_email.html
│   │       │           │   │   │   │       └── password_reset_form.html
│   │       │           │   │   │   ├── templatetags/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── admin_list.py
│   │       │           │   │   │   │   ├── admin_modify.py
│   │       │           │   │   │   │   ├── admin_urls.py
│   │       │           │   │   │   │   ├── base.py
│   │       │           │   │   │   │   └── log.py
│   │       │           │   │   │   ├── tests.py
│   │       │           │   │   │   ├── utils.py
│   │       │           │   │   │   ├── views/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── autocomplete.py
│   │       │           │   │   │   │   ├── decorators.py
│   │       │           │   │   │   │   └── main.py
│   │       │           │   │   │   └── widgets.py
│   │       │           │   │   ├── admindocs/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── apps.py
│   │       │           │   │   │   ├── locale/
│   │       │           │   │   │   │   ├── af/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ar/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ar_DZ/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ast/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── az/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── be/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bg/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── br/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bs/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ca/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ckb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── cs/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── cy/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── da/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── de/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── dsb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── el/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en_AU/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en_GB/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── eo/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_AR/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_CO/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_MX/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_VE/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── et/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── eu/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fa/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fi/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fy/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ga/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── gd/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── gl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── he/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hi/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hsb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hu/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ia/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── id/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── io/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── is/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── it/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ja/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ka/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kab/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── km/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ko/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ky/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lt/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lv/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ml/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ms/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── my/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ne/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── os/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pa/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pt/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pt_BR/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ro/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ru/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sq/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sr_Latn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sv/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sw/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ta/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── te/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tg/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── th/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tt/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── udm/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ug/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── uk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ur/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── vi/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── zh_Hans/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   └── zh_Hant/
│   │       │           │   │   │   │       └── LC_MESSAGES/
│   │       │           │   │   │   │           ├── django.mo
│   │       │           │   │   │   │           └── django.po
│   │       │           │   │   │   ├── middleware.py
│   │       │           │   │   │   ├── templates/
│   │       │           │   │   │   │   └── admin_doc/
│   │       │           │   │   │   │       ├── bookmarklets.html
│   │       │           │   │   │   │       ├── index.html
│   │       │           │   │   │   │       ├── missing_docutils.html
│   │       │           │   │   │   │       ├── model_detail.html
│   │       │           │   │   │   │       ├── model_index.html
│   │       │           │   │   │   │       ├── template_detail.html
│   │       │           │   │   │   │       ├── template_filter_index.html
│   │       │           │   │   │   │       ├── template_tag_index.html
│   │       │           │   │   │   │       ├── view_detail.html
│   │       │           │   │   │   │       └── view_index.html
│   │       │           │   │   │   ├── urls.py
│   │       │           │   │   │   ├── utils.py
│   │       │           │   │   │   └── views.py
│   │       │           │   │   ├── auth/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── admin.py
│   │       │           │   │   │   ├── apps.py
│   │       │           │   │   │   ├── backends.py
│   │       │           │   │   │   ├── base_user.py
│   │       │           │   │   │   ├── checks.py
│   │       │           │   │   │   ├── common-passwords.txt.gz
│   │       │           │   │   │   ├── context_processors.py
│   │       │           │   │   │   ├── decorators.py
│   │       │           │   │   │   ├── forms.py
│   │       │           │   │   │   ├── handlers/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── modwsgi.py
│   │       │           │   │   │   ├── hashers.py
│   │       │           │   │   │   ├── locale/
│   │       │           │   │   │   │   ├── af/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ar/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ar_DZ/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ast/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── az/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── be/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bg/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── br/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bs/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ca/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ckb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── cs/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── cy/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── da/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── de/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── dsb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── el/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en_AU/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en_GB/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── eo/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_AR/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_CO/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_MX/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_VE/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── et/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── eu/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fa/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fi/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fy/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ga/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── gd/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── gl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── he/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hi/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hsb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hu/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hy/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ia/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── id/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── io/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── is/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── it/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ja/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ka/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kab/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── km/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ko/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ky/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lt/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lv/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ml/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ms/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── my/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ne/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── os/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pa/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pt/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pt_BR/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ro/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ru/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sq/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sr_Latn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sv/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sw/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ta/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── te/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tg/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── th/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tt/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── udm/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ug/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── uk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ur/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── uz/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── vi/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── zh_Hans/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   └── zh_Hant/
│   │       │           │   │   │   │       └── LC_MESSAGES/
│   │       │           │   │   │   │           ├── django.mo
│   │       │           │   │   │   │           └── django.po
│   │       │           │   │   │   ├── management/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── commands/
│   │       │           │   │   │   │       ├── __init__.py
│   │       │           │   │   │   │       ├── changepassword.py
│   │       │           │   │   │   │       └── createsuperuser.py
│   │       │           │   │   │   ├── middleware.py
│   │       │           │   │   │   ├── migrations/
│   │       │           │   │   │   │   ├── 0001_initial.py
│   │       │           │   │   │   │   ├── 0002_alter_permission_name_max_length.py
│   │       │           │   │   │   │   ├── 0003_alter_user_email_max_length.py
│   │       │           │   │   │   │   ├── 0004_alter_user_username_opts.py
│   │       │           │   │   │   │   ├── 0005_alter_user_last_login_null.py
│   │       │           │   │   │   │   ├── 0006_require_contenttypes_0002.py
│   │       │           │   │   │   │   ├── 0007_alter_validators_add_error_messages.py
│   │       │           │   │   │   │   ├── 0008_alter_user_username_max_length.py
│   │       │           │   │   │   │   ├── 0009_alter_user_last_name_max_length.py
│   │       │           │   │   │   │   ├── 0010_alter_group_name_max_length.py
│   │       │           │   │   │   │   ├── 0011_update_proxy_permissions.py
│   │       │           │   │   │   │   ├── 0012_alter_user_first_name_max_length.py
│   │       │           │   │   │   │   └── __init__.py
│   │       │           │   │   │   ├── mixins.py
│   │       │           │   │   │   ├── models.py
│   │       │           │   │   │   ├── password_validation.py
│   │       │           │   │   │   ├── signals.py
│   │       │           │   │   │   ├── templates/
│   │       │           │   │   │   │   ├── auth/
│   │       │           │   │   │   │   │   └── widgets/
│   │       │           │   │   │   │   │       └── read_only_password_hash.html
│   │       │           │   │   │   │   └── registration/
│   │       │           │   │   │   │       └── password_reset_subject.txt
│   │       │           │   │   │   ├── templatetags/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── auth.py
│   │       │           │   │   │   ├── tokens.py
│   │       │           │   │   │   ├── urls.py
│   │       │           │   │   │   ├── validators.py
│   │       │           │   │   │   └── views.py
│   │       │           │   │   ├── contenttypes/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── admin.py
│   │       │           │   │   │   ├── apps.py
│   │       │           │   │   │   ├── checks.py
│   │       │           │   │   │   ├── fields.py
│   │       │           │   │   │   ├── forms.py
│   │       │           │   │   │   ├── locale/
│   │       │           │   │   │   │   ├── af/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ar/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ar_DZ/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ast/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── az/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── be/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bg/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── br/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bs/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ca/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ckb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── cs/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── cy/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── da/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── de/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── dsb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── el/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en_AU/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en_GB/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── eo/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_AR/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_CO/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_MX/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_VE/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── et/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── eu/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fa/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fi/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fy/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ga/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── gd/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── gl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── he/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hi/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hsb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hu/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hy/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ia/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── id/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── io/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── is/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── it/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ja/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ka/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── km/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ko/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ky/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lt/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lv/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ml/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ms/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── my/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ne/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── os/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pa/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pt/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pt_BR/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ro/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ru/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sq/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sr_Latn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sv/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sw/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ta/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── te/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tg/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── th/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tt/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── udm/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ug/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── uk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ur/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── vi/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── zh_Hans/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   └── zh_Hant/
│   │       │           │   │   │   │       └── LC_MESSAGES/
│   │       │           │   │   │   │           ├── django.mo
│   │       │           │   │   │   │           └── django.po
│   │       │           │   │   │   ├── management/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── commands/
│   │       │           │   │   │   │       ├── __init__.py
│   │       │           │   │   │   │       └── remove_stale_contenttypes.py
│   │       │           │   │   │   ├── migrations/
│   │       │           │   │   │   │   ├── 0001_initial.py
│   │       │           │   │   │   │   ├── 0002_remove_content_type_name.py
│   │       │           │   │   │   │   └── __init__.py
│   │       │           │   │   │   ├── models.py
│   │       │           │   │   │   ├── prefetch.py
│   │       │           │   │   │   └── views.py
│   │       │           │   │   ├── flatpages/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── admin.py
│   │       │           │   │   │   ├── apps.py
│   │       │           │   │   │   ├── forms.py
│   │       │           │   │   │   ├── locale/
│   │       │           │   │   │   │   ├── af/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ar/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ar_DZ/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ast/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── az/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── be/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bg/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── br/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bs/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ca/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ckb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── cs/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── cy/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── da/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── de/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── dsb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── el/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en_AU/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en_GB/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── eo/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_AR/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_CO/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_MX/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_VE/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── et/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── eu/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fa/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fi/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fy/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ga/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── gd/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── gl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── he/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hi/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hsb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hu/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hy/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ia/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── id/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── io/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── is/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── it/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ja/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ka/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── km/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ko/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ky/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lt/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lv/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ml/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ms/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── my/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ne/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── os/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pa/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pt/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pt_BR/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ro/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ru/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sq/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sr_Latn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sv/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sw/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ta/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── te/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tg/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── th/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tt/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── udm/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ug/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── uk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ur/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── vi/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── zh_Hans/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   └── zh_Hant/
│   │       │           │   │   │   │       └── LC_MESSAGES/
│   │       │           │   │   │   │           ├── django.mo
│   │       │           │   │   │   │           └── django.po
│   │       │           │   │   │   ├── middleware.py
│   │       │           │   │   │   ├── migrations/
│   │       │           │   │   │   │   ├── 0001_initial.py
│   │       │           │   │   │   │   └── __init__.py
│   │       │           │   │   │   ├── models.py
│   │       │           │   │   │   ├── sitemaps.py
│   │       │           │   │   │   ├── templatetags/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── flatpages.py
│   │       │           │   │   │   ├── urls.py
│   │       │           │   │   │   └── views.py
│   │       │           │   │   ├── gis/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── admin/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── options.py
│   │       │           │   │   │   ├── apps.py
│   │       │           │   │   │   ├── db/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── backends/
│   │       │           │   │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   │   ├── base/
│   │       │           │   │   │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   │   │   ├── adapter.py
│   │       │           │   │   │   │   │   │   ├── features.py
│   │       │           │   │   │   │   │   │   ├── models.py
│   │       │           │   │   │   │   │   │   └── operations.py
│   │       │           │   │   │   │   │   ├── mysql/
│   │       │           │   │   │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   │   │   ├── base.py
│   │       │           │   │   │   │   │   │   ├── features.py
│   │       │           │   │   │   │   │   │   ├── introspection.py
│   │       │           │   │   │   │   │   │   ├── operations.py
│   │       │           │   │   │   │   │   │   └── schema.py
│   │       │           │   │   │   │   │   ├── oracle/
│   │       │           │   │   │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   │   │   ├── adapter.py
│   │       │           │   │   │   │   │   │   ├── base.py
│   │       │           │   │   │   │   │   │   ├── features.py
│   │       │           │   │   │   │   │   │   ├── introspection.py
│   │       │           │   │   │   │   │   │   ├── models.py
│   │       │           │   │   │   │   │   │   ├── operations.py
│   │       │           │   │   │   │   │   │   └── schema.py
│   │       │           │   │   │   │   │   ├── postgis/
│   │       │           │   │   │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   │   │   ├── adapter.py
│   │       │           │   │   │   │   │   │   ├── base.py
│   │       │           │   │   │   │   │   │   ├── const.py
│   │       │           │   │   │   │   │   │   ├── features.py
│   │       │           │   │   │   │   │   │   ├── introspection.py
│   │       │           │   │   │   │   │   │   ├── models.py
│   │       │           │   │   │   │   │   │   ├── operations.py
│   │       │           │   │   │   │   │   │   ├── pgraster.py
│   │       │           │   │   │   │   │   │   └── schema.py
│   │       │           │   │   │   │   │   ├── spatialite/
│   │       │           │   │   │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   │   │   ├── adapter.py
│   │       │           │   │   │   │   │   │   ├── base.py
│   │       │           │   │   │   │   │   │   ├── client.py
│   │       │           │   │   │   │   │   │   ├── features.py
│   │       │           │   │   │   │   │   │   ├── introspection.py
│   │       │           │   │   │   │   │   │   ├── models.py
│   │       │           │   │   │   │   │   │   ├── operations.py
│   │       │           │   │   │   │   │   │   └── schema.py
│   │       │           │   │   │   │   │   └── utils.py
│   │       │           │   │   │   │   └── models/
│   │       │           │   │   │   │       ├── __init__.py
│   │       │           │   │   │   │       ├── aggregates.py
│   │       │           │   │   │   │       ├── fields.py
│   │       │           │   │   │   │       ├── functions.py
│   │       │           │   │   │   │       ├── lookups.py
│   │       │           │   │   │   │       ├── proxy.py
│   │       │           │   │   │   │       └── sql/
│   │       │           │   │   │   │           ├── __init__.py
│   │       │           │   │   │   │           └── conversion.py
│   │       │           │   │   │   ├── feeds.py
│   │       │           │   │   │   ├── forms/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── fields.py
│   │       │           │   │   │   │   └── widgets.py
│   │       │           │   │   │   ├── gdal/
│   │       │           │   │   │   │   ├── LICENSE
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── base.py
│   │       │           │   │   │   │   ├── datasource.py
│   │       │           │   │   │   │   ├── driver.py
│   │       │           │   │   │   │   ├── envelope.py
│   │       │           │   │   │   │   ├── error.py
│   │       │           │   │   │   │   ├── feature.py
│   │       │           │   │   │   │   ├── field.py
│   │       │           │   │   │   │   ├── geometries.py
│   │       │           │   │   │   │   ├── geomtype.py
│   │       │           │   │   │   │   ├── layer.py
│   │       │           │   │   │   │   ├── libgdal.py
│   │       │           │   │   │   │   ├── prototypes/
│   │       │           │   │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   │   ├── ds.py
│   │       │           │   │   │   │   │   ├── errcheck.py
│   │       │           │   │   │   │   │   ├── generation.py
│   │       │           │   │   │   │   │   ├── geom.py
│   │       │           │   │   │   │   │   ├── raster.py
│   │       │           │   │   │   │   │   └── srs.py
│   │       │           │   │   │   │   ├── raster/
│   │       │           │   │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   │   ├── band.py
│   │       │           │   │   │   │   │   ├── base.py
│   │       │           │   │   │   │   │   ├── const.py
│   │       │           │   │   │   │   │   └── source.py
│   │       │           │   │   │   │   └── srs.py
│   │       │           │   │   │   ├── geoip2.py
│   │       │           │   │   │   ├── geometry.py
│   │       │           │   │   │   ├── geos/
│   │       │           │   │   │   │   ├── LICENSE
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── base.py
│   │       │           │   │   │   │   ├── collections.py
│   │       │           │   │   │   │   ├── coordseq.py
│   │       │           │   │   │   │   ├── error.py
│   │       │           │   │   │   │   ├── factory.py
│   │       │           │   │   │   │   ├── geometry.py
│   │       │           │   │   │   │   ├── io.py
│   │       │           │   │   │   │   ├── libgeos.py
│   │       │           │   │   │   │   ├── linestring.py
│   │       │           │   │   │   │   ├── mutable_list.py
│   │       │           │   │   │   │   ├── point.py
│   │       │           │   │   │   │   ├── polygon.py
│   │       │           │   │   │   │   ├── prepared.py
│   │       │           │   │   │   │   └── prototypes/
│   │       │           │   │   │   │       ├── __init__.py
│   │       │           │   │   │   │       ├── coordseq.py
│   │       │           │   │   │   │       ├── errcheck.py
│   │       │           │   │   │   │       ├── geom.py
│   │       │           │   │   │   │       ├── io.py
│   │       │           │   │   │   │       ├── misc.py
│   │       │           │   │   │   │       ├── predicates.py
│   │       │           │   │   │   │       ├── prepared.py
│   │       │           │   │   │   │       ├── threadsafe.py
│   │       │           │   │   │   │       └── topology.py
│   │       │           │   │   │   ├── locale/
│   │       │           │   │   │   │   ├── af/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ar/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ar_DZ/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ast/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── az/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── be/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bg/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── br/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bs/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ca/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ckb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── cs/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── cy/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── da/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── de/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── dsb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── el/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en_AU/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en_GB/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── eo/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_AR/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_CO/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_MX/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_VE/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── et/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── eu/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fa/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fi/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fy/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ga/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── gd/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── gl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── he/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hi/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hsb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hu/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hy/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ia/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── id/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── io/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── is/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── it/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ja/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ka/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── km/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ko/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ky/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lt/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lv/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ml/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ms/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── my/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ne/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── os/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pa/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pt/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pt_BR/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ro/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ru/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sq/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sr_Latn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sv/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sw/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ta/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── te/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tg/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── th/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tt/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── udm/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ug/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── uk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ur/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── vi/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── zh_Hans/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   └── zh_Hant/
│   │       │           │   │   │   │       └── LC_MESSAGES/
│   │       │           │   │   │   │           ├── django.mo
│   │       │           │   │   │   │           └── django.po
│   │       │           │   │   │   ├── management/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── commands/
│   │       │           │   │   │   │       ├── __init__.py
│   │       │           │   │   │   │       ├── inspectdb.py
│   │       │           │   │   │   │       └── ogrinspect.py
│   │       │           │   │   │   ├── measure.py
│   │       │           │   │   │   ├── ptr.py
│   │       │           │   │   │   ├── serializers/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── geojson.py
│   │       │           │   │   │   ├── shortcuts.py
│   │       │           │   │   │   ├── sitemaps/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── kml.py
│   │       │           │   │   │   │   └── views.py
│   │       │           │   │   │   ├── static/
│   │       │           │   │   │   │   └── gis/
│   │       │           │   │   │   │       ├── css/
│   │       │           │   │   │   │       │   └── ol3.css
│   │       │           │   │   │   │       ├── img/
│   │       │           │   │   │   │       │   ├── draw_line_off.svg
│   │       │           │   │   │   │       │   ├── draw_line_on.svg
│   │       │           │   │   │   │       │   ├── draw_point_off.svg
│   │       │           │   │   │   │       │   ├── draw_point_on.svg
│   │       │           │   │   │   │       │   ├── draw_polygon_off.svg
│   │       │           │   │   │   │       │   └── draw_polygon_on.svg
│   │       │           │   │   │   │       └── js/
│   │       │           │   │   │   │           └── OLMapWidget.js
│   │       │           │   │   │   ├── templates/
│   │       │           │   │   │   │   └── gis/
│   │       │           │   │   │   │       ├── kml/
│   │       │           │   │   │   │       │   ├── base.kml
│   │       │           │   │   │   │       │   └── placemarks.kml
│   │       │           │   │   │   │       └── openlayers.html
│   │       │           │   │   │   ├── utils/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── layermapping.py
│   │       │           │   │   │   │   ├── ogrinfo.py
│   │       │           │   │   │   │   ├── ogrinspect.py
│   │       │           │   │   │   │   └── srs.py
│   │       │           │   │   │   └── views.py
│   │       │           │   │   ├── humanize/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── apps.py
│   │       │           │   │   │   ├── locale/
│   │       │           │   │   │   │   ├── af/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ar/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ar_DZ/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ast/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── az/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── be/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bg/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── br/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bs/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ca/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ckb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── cs/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── cy/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── da/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── de/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── dsb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── el/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en_AU/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en_GB/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── eo/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_AR/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_CO/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_MX/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_VE/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── et/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── eu/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fa/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fi/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fy/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ga/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── gd/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── gl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── he/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hi/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hsb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hu/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hy/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ia/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── id/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── io/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── is/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── it/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ja/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ka/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── km/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ko/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ky/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lt/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lv/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ml/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ms/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── my/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ne/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── os/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pa/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pt/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pt_BR/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ro/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ru/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sq/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sr_Latn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sv/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sw/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ta/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── te/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tg/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── th/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tt/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── udm/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ug/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── uk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ur/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── uz/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── vi/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── zh_Hans/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   └── zh_Hant/
│   │       │           │   │   │   │       └── LC_MESSAGES/
│   │       │           │   │   │   │           ├── django.mo
│   │       │           │   │   │   │           └── django.po
│   │       │           │   │   │   └── templatetags/
│   │       │           │   │   │       ├── __init__.py
│   │       │           │   │   │       └── humanize.py
│   │       │           │   │   ├── messages/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── api.py
│   │       │           │   │   │   ├── apps.py
│   │       │           │   │   │   ├── constants.py
│   │       │           │   │   │   ├── context_processors.py
│   │       │           │   │   │   ├── middleware.py
│   │       │           │   │   │   ├── storage/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── base.py
│   │       │           │   │   │   │   ├── cookie.py
│   │       │           │   │   │   │   ├── fallback.py
│   │       │           │   │   │   │   └── session.py
│   │       │           │   │   │   ├── test.py
│   │       │           │   │   │   ├── utils.py
│   │       │           │   │   │   └── views.py
│   │       │           │   │   ├── postgres/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── aggregates/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── general.py
│   │       │           │   │   │   │   ├── mixins.py
│   │       │           │   │   │   │   └── statistics.py
│   │       │           │   │   │   ├── apps.py
│   │       │           │   │   │   ├── constraints.py
│   │       │           │   │   │   ├── expressions.py
│   │       │           │   │   │   ├── fields/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── array.py
│   │       │           │   │   │   │   ├── citext.py
│   │       │           │   │   │   │   ├── hstore.py
│   │       │           │   │   │   │   ├── jsonb.py
│   │       │           │   │   │   │   ├── ranges.py
│   │       │           │   │   │   │   └── utils.py
│   │       │           │   │   │   ├── forms/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── array.py
│   │       │           │   │   │   │   ├── hstore.py
│   │       │           │   │   │   │   └── ranges.py
│   │       │           │   │   │   ├── functions.py
│   │       │           │   │   │   ├── indexes.py
│   │       │           │   │   │   ├── jinja2/
│   │       │           │   │   │   │   └── postgres/
│   │       │           │   │   │   │       └── widgets/
│   │       │           │   │   │   │           └── split_array.html
│   │       │           │   │   │   ├── locale/
│   │       │           │   │   │   │   ├── af/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ar/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ar_DZ/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── az/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── be/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bg/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ca/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ckb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── cs/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── da/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── de/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── dsb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── el/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en_AU/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── eo/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_AR/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_CO/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_MX/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── et/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── eu/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fa/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fi/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ga/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── gd/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── gl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── he/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hsb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hu/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hy/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ia/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── id/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── is/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── it/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ja/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ka/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ko/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ky/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lt/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lv/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ml/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ms/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ne/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pt/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pt_BR/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ro/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ru/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sq/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sr_Latn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sv/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tg/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ug/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── uk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── uz/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── zh_Hans/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   └── zh_Hant/
│   │       │           │   │   │   │       └── LC_MESSAGES/
│   │       │           │   │   │   │           ├── django.mo
│   │       │           │   │   │   │           └── django.po
│   │       │           │   │   │   ├── lookups.py
│   │       │           │   │   │   ├── operations.py
│   │       │           │   │   │   ├── search.py
│   │       │           │   │   │   ├── serializers.py
│   │       │           │   │   │   ├── signals.py
│   │       │           │   │   │   ├── templates/
│   │       │           │   │   │   │   └── postgres/
│   │       │           │   │   │   │       └── widgets/
│   │       │           │   │   │   │           └── split_array.html
│   │       │           │   │   │   ├── utils.py
│   │       │           │   │   │   └── validators.py
│   │       │           │   │   ├── redirects/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── admin.py
│   │       │           │   │   │   ├── apps.py
│   │       │           │   │   │   ├── locale/
│   │       │           │   │   │   │   ├── af/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ar/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ar_DZ/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ast/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── az/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── be/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bg/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── br/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bs/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ca/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ckb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── cs/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── cy/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── da/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── de/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── dsb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── el/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en_AU/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en_GB/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── eo/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_AR/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_CO/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_MX/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_VE/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── et/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── eu/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fa/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fi/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fy/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ga/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── gd/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── gl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── he/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hi/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hsb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hu/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hy/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ia/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── id/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── io/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── is/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── it/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ja/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ka/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kab/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── km/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ko/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ky/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lt/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lv/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ml/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ms/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── my/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ne/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── os/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pa/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pt/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pt_BR/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ro/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ru/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sq/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sr_Latn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sv/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sw/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ta/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── te/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tg/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── th/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tt/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── udm/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ug/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── uk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ur/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── uz/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── vi/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── zh_Hans/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   └── zh_Hant/
│   │       │           │   │   │   │       └── LC_MESSAGES/
│   │       │           │   │   │   │           ├── django.mo
│   │       │           │   │   │   │           └── django.po
│   │       │           │   │   │   ├── middleware.py
│   │       │           │   │   │   ├── migrations/
│   │       │           │   │   │   │   ├── 0001_initial.py
│   │       │           │   │   │   │   ├── 0002_alter_redirect_new_path_help_text.py
│   │       │           │   │   │   │   └── __init__.py
│   │       │           │   │   │   └── models.py
│   │       │           │   │   ├── sessions/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── apps.py
│   │       │           │   │   │   ├── backends/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── base.py
│   │       │           │   │   │   │   ├── cache.py
│   │       │           │   │   │   │   ├── cached_db.py
│   │       │           │   │   │   │   ├── db.py
│   │       │           │   │   │   │   ├── file.py
│   │       │           │   │   │   │   └── signed_cookies.py
│   │       │           │   │   │   ├── base_session.py
│   │       │           │   │   │   ├── exceptions.py
│   │       │           │   │   │   ├── locale/
│   │       │           │   │   │   │   ├── af/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ar/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ar_DZ/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ast/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── az/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── be/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bg/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── br/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bs/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ca/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ckb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── cs/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── cy/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── da/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── de/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── dsb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── el/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en_AU/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en_GB/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── eo/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_AR/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_CO/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_MX/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_VE/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── et/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── eu/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fa/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fi/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fy/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ga/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── gd/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── gl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── he/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hi/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hsb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hu/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hy/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ia/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── id/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── io/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── is/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── it/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ja/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ka/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kab/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── km/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ko/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ky/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lt/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lv/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ml/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ms/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── my/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ne/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── os/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pa/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pt/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pt_BR/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ro/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ru/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sq/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sr_Latn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sv/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sw/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ta/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── te/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tg/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── th/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tt/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── udm/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ug/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── uk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ur/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── uz/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── vi/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── zh_Hans/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   └── zh_Hant/
│   │       │           │   │   │   │       └── LC_MESSAGES/
│   │       │           │   │   │   │           ├── django.mo
│   │       │           │   │   │   │           └── django.po
│   │       │           │   │   │   ├── management/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── commands/
│   │       │           │   │   │   │       ├── __init__.py
│   │       │           │   │   │   │       └── clearsessions.py
│   │       │           │   │   │   ├── middleware.py
│   │       │           │   │   │   ├── migrations/
│   │       │           │   │   │   │   ├── 0001_initial.py
│   │       │           │   │   │   │   └── __init__.py
│   │       │           │   │   │   ├── models.py
│   │       │           │   │   │   └── serializers.py
│   │       │           │   │   ├── sitemaps/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── apps.py
│   │       │           │   │   │   ├── templates/
│   │       │           │   │   │   │   ├── sitemap.xml
│   │       │           │   │   │   │   └── sitemap_index.xml
│   │       │           │   │   │   └── views.py
│   │       │           │   │   ├── sites/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── admin.py
│   │       │           │   │   │   ├── apps.py
│   │       │           │   │   │   ├── checks.py
│   │       │           │   │   │   ├── locale/
│   │       │           │   │   │   │   ├── af/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ar/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ar_DZ/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ast/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── az/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── be/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bg/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── br/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bs/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ca/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ckb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── cs/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── cy/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── da/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── de/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── dsb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── el/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en_AU/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en_GB/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── eo/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_AR/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_CO/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_MX/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_VE/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── et/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── eu/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fa/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fi/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fy/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ga/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── gd/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── gl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── he/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hi/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hsb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hu/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hy/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ia/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── id/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── io/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── is/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── it/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ja/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ka/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kab/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── km/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ko/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ky/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lt/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lv/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ml/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ms/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── my/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nb/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ne/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── os/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pa/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pt/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pt_BR/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ro/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ru/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sl/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sq/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sr_Latn/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sv/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sw/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ta/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── te/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tg/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── th/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tr/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tt/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── udm/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ug/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── uk/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ur/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── uz/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── vi/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── zh_Hans/
│   │       │           │   │   │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   └── zh_Hant/
│   │       │           │   │   │   │       └── LC_MESSAGES/
│   │       │           │   │   │   │           ├── django.mo
│   │       │           │   │   │   │           └── django.po
│   │       │           │   │   │   ├── management.py
│   │       │           │   │   │   ├── managers.py
│   │       │           │   │   │   ├── middleware.py
│   │       │           │   │   │   ├── migrations/
│   │       │           │   │   │   │   ├── 0001_initial.py
│   │       │           │   │   │   │   ├── 0002_alter_domain_unique.py
│   │       │           │   │   │   │   └── __init__.py
│   │       │           │   │   │   ├── models.py
│   │       │           │   │   │   ├── requests.py
│   │       │           │   │   │   └── shortcuts.py
│   │       │           │   │   ├── staticfiles/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── apps.py
│   │       │           │   │   │   ├── checks.py
│   │       │           │   │   │   ├── finders.py
│   │       │           │   │   │   ├── handlers.py
│   │       │           │   │   │   ├── management/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── commands/
│   │       │           │   │   │   │       ├── __init__.py
│   │       │           │   │   │   │       ├── collectstatic.py
│   │       │           │   │   │   │       ├── findstatic.py
│   │       │           │   │   │   │       └── runserver.py
│   │       │           │   │   │   ├── storage.py
│   │       │           │   │   │   ├── testing.py
│   │       │           │   │   │   ├── urls.py
│   │       │           │   │   │   ├── utils.py
│   │       │           │   │   │   └── views.py
│   │       │           │   │   └── syndication/
│   │       │           │   │       ├── __init__.py
│   │       │           │   │       ├── apps.py
│   │       │           │   │       └── views.py
│   │       │           │   ├── core/
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── asgi.py
│   │       │           │   │   ├── cache/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── backends/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── base.py
│   │       │           │   │   │   │   ├── db.py
│   │       │           │   │   │   │   ├── dummy.py
│   │       │           │   │   │   │   ├── filebased.py
│   │       │           │   │   │   │   ├── locmem.py
│   │       │           │   │   │   │   ├── memcached.py
│   │       │           │   │   │   │   └── redis.py
│   │       │           │   │   │   └── utils.py
│   │       │           │   │   ├── checks/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── async_checks.py
│   │       │           │   │   │   ├── caches.py
│   │       │           │   │   │   ├── commands.py
│   │       │           │   │   │   ├── compatibility/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── django_4_0.py
│   │       │           │   │   │   ├── database.py
│   │       │           │   │   │   ├── files.py
│   │       │           │   │   │   ├── messages.py
│   │       │           │   │   │   ├── model_checks.py
│   │       │           │   │   │   ├── registry.py
│   │       │           │   │   │   ├── security/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── base.py
│   │       │           │   │   │   │   ├── csrf.py
│   │       │           │   │   │   │   └── sessions.py
│   │       │           │   │   │   ├── templates.py
│   │       │           │   │   │   ├── translation.py
│   │       │           │   │   │   └── urls.py
│   │       │           │   │   ├── exceptions.py
│   │       │           │   │   ├── files/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── base.py
│   │       │           │   │   │   ├── images.py
│   │       │           │   │   │   ├── locks.py
│   │       │           │   │   │   ├── move.py
│   │       │           │   │   │   ├── storage/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── base.py
│   │       │           │   │   │   │   ├── filesystem.py
│   │       │           │   │   │   │   ├── handler.py
│   │       │           │   │   │   │   ├── memory.py
│   │       │           │   │   │   │   └── mixins.py
│   │       │           │   │   │   ├── temp.py
│   │       │           │   │   │   ├── uploadedfile.py
│   │       │           │   │   │   ├── uploadhandler.py
│   │       │           │   │   │   └── utils.py
│   │       │           │   │   ├── handlers/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── asgi.py
│   │       │           │   │   │   ├── base.py
│   │       │           │   │   │   ├── exception.py
│   │       │           │   │   │   └── wsgi.py
│   │       │           │   │   ├── mail/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── backends/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── base.py
│   │       │           │   │   │   │   ├── console.py
│   │       │           │   │   │   │   ├── dummy.py
│   │       │           │   │   │   │   ├── filebased.py
│   │       │           │   │   │   │   ├── locmem.py
│   │       │           │   │   │   │   └── smtp.py
│   │       │           │   │   │   ├── message.py
│   │       │           │   │   │   └── utils.py
│   │       │           │   │   ├── management/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── base.py
│   │       │           │   │   │   ├── color.py
│   │       │           │   │   │   ├── commands/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── check.py
│   │       │           │   │   │   │   ├── compilemessages.py
│   │       │           │   │   │   │   ├── createcachetable.py
│   │       │           │   │   │   │   ├── dbshell.py
│   │       │           │   │   │   │   ├── diffsettings.py
│   │       │           │   │   │   │   ├── dumpdata.py
│   │       │           │   │   │   │   ├── flush.py
│   │       │           │   │   │   │   ├── inspectdb.py
│   │       │           │   │   │   │   ├── loaddata.py
│   │       │           │   │   │   │   ├── makemessages.py
│   │       │           │   │   │   │   ├── makemigrations.py
│   │       │           │   │   │   │   ├── migrate.py
│   │       │           │   │   │   │   ├── optimizemigration.py
│   │       │           │   │   │   │   ├── runserver.py
│   │       │           │   │   │   │   ├── sendtestemail.py
│   │       │           │   │   │   │   ├── shell.py
│   │       │           │   │   │   │   ├── showmigrations.py
│   │       │           │   │   │   │   ├── sqlflush.py
│   │       │           │   │   │   │   ├── sqlmigrate.py
│   │       │           │   │   │   │   ├── sqlsequencereset.py
│   │       │           │   │   │   │   ├── squashmigrations.py
│   │       │           │   │   │   │   ├── startapp.py
│   │       │           │   │   │   │   ├── startproject.py
│   │       │           │   │   │   │   ├── test.py
│   │       │           │   │   │   │   └── testserver.py
│   │       │           │   │   │   ├── sql.py
│   │       │           │   │   │   ├── templates.py
│   │       │           │   │   │   └── utils.py
│   │       │           │   │   ├── paginator.py
│   │       │           │   │   ├── serializers/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── base.py
│   │       │           │   │   │   ├── json.py
│   │       │           │   │   │   ├── jsonl.py
│   │       │           │   │   │   ├── python.py
│   │       │           │   │   │   ├── pyyaml.py
│   │       │           │   │   │   └── xml_serializer.py
│   │       │           │   │   ├── servers/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   └── basehttp.py
│   │       │           │   │   ├── signals.py
│   │       │           │   │   ├── signing.py
│   │       │           │   │   ├── validators.py
│   │       │           │   │   └── wsgi.py
│   │       │           │   ├── db/
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── backends/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── base/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── base.py
│   │       │           │   │   │   │   ├── client.py
│   │       │           │   │   │   │   ├── creation.py
│   │       │           │   │   │   │   ├── features.py
│   │       │           │   │   │   │   ├── introspection.py
│   │       │           │   │   │   │   ├── operations.py
│   │       │           │   │   │   │   ├── schema.py
│   │       │           │   │   │   │   └── validation.py
│   │       │           │   │   │   ├── ddl_references.py
│   │       │           │   │   │   ├── dummy/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── base.py
│   │       │           │   │   │   │   └── features.py
│   │       │           │   │   │   ├── mysql/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── base.py
│   │       │           │   │   │   │   ├── client.py
│   │       │           │   │   │   │   ├── compiler.py
│   │       │           │   │   │   │   ├── creation.py
│   │       │           │   │   │   │   ├── features.py
│   │       │           │   │   │   │   ├── introspection.py
│   │       │           │   │   │   │   ├── operations.py
│   │       │           │   │   │   │   ├── schema.py
│   │       │           │   │   │   │   └── validation.py
│   │       │           │   │   │   ├── oracle/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── base.py
│   │       │           │   │   │   │   ├── client.py
│   │       │           │   │   │   │   ├── creation.py
│   │       │           │   │   │   │   ├── features.py
│   │       │           │   │   │   │   ├── functions.py
│   │       │           │   │   │   │   ├── introspection.py
│   │       │           │   │   │   │   ├── operations.py
│   │       │           │   │   │   │   ├── schema.py
│   │       │           │   │   │   │   ├── utils.py
│   │       │           │   │   │   │   └── validation.py
│   │       │           │   │   │   ├── postgresql/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── base.py
│   │       │           │   │   │   │   ├── client.py
│   │       │           │   │   │   │   ├── compiler.py
│   │       │           │   │   │   │   ├── creation.py
│   │       │           │   │   │   │   ├── features.py
│   │       │           │   │   │   │   ├── introspection.py
│   │       │           │   │   │   │   ├── operations.py
│   │       │           │   │   │   │   ├── psycopg_any.py
│   │       │           │   │   │   │   └── schema.py
│   │       │           │   │   │   ├── signals.py
│   │       │           │   │   │   ├── sqlite3/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── _functions.py
│   │       │           │   │   │   │   ├── base.py
│   │       │           │   │   │   │   ├── client.py
│   │       │           │   │   │   │   ├── creation.py
│   │       │           │   │   │   │   ├── features.py
│   │       │           │   │   │   │   ├── introspection.py
│   │       │           │   │   │   │   ├── operations.py
│   │       │           │   │   │   │   └── schema.py
│   │       │           │   │   │   └── utils.py
│   │       │           │   │   ├── migrations/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── autodetector.py
│   │       │           │   │   │   ├── exceptions.py
│   │       │           │   │   │   ├── executor.py
│   │       │           │   │   │   ├── graph.py
│   │       │           │   │   │   ├── loader.py
│   │       │           │   │   │   ├── migration.py
│   │       │           │   │   │   ├── operations/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── base.py
│   │       │           │   │   │   │   ├── fields.py
│   │       │           │   │   │   │   ├── models.py
│   │       │           │   │   │   │   └── special.py
│   │       │           │   │   │   ├── optimizer.py
│   │       │           │   │   │   ├── questioner.py
│   │       │           │   │   │   ├── recorder.py
│   │       │           │   │   │   ├── serializer.py
│   │       │           │   │   │   ├── state.py
│   │       │           │   │   │   ├── utils.py
│   │       │           │   │   │   └── writer.py
│   │       │           │   │   ├── models/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── aggregates.py
│   │       │           │   │   │   ├── base.py
│   │       │           │   │   │   ├── constants.py
│   │       │           │   │   │   ├── constraints.py
│   │       │           │   │   │   ├── deletion.py
│   │       │           │   │   │   ├── enums.py
│   │       │           │   │   │   ├── expressions.py
│   │       │           │   │   │   ├── fields/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── composite.py
│   │       │           │   │   │   │   ├── files.py
│   │       │           │   │   │   │   ├── generated.py
│   │       │           │   │   │   │   ├── json.py
│   │       │           │   │   │   │   ├── mixins.py
│   │       │           │   │   │   │   ├── proxy.py
│   │       │           │   │   │   │   ├── related.py
│   │       │           │   │   │   │   ├── related_descriptors.py
│   │       │           │   │   │   │   ├── related_lookups.py
│   │       │           │   │   │   │   ├── reverse_related.py
│   │       │           │   │   │   │   └── tuple_lookups.py
│   │       │           │   │   │   ├── functions/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── comparison.py
│   │       │           │   │   │   │   ├── datetime.py
│   │       │           │   │   │   │   ├── json.py
│   │       │           │   │   │   │   ├── math.py
│   │       │           │   │   │   │   ├── mixins.py
│   │       │           │   │   │   │   ├── text.py
│   │       │           │   │   │   │   └── window.py
│   │       │           │   │   │   ├── indexes.py
│   │       │           │   │   │   ├── lookups.py
│   │       │           │   │   │   ├── manager.py
│   │       │           │   │   │   ├── options.py
│   │       │           │   │   │   ├── query.py
│   │       │           │   │   │   ├── query_utils.py
│   │       │           │   │   │   ├── signals.py
│   │       │           │   │   │   ├── sql/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── compiler.py
│   │       │           │   │   │   │   ├── constants.py
│   │       │           │   │   │   │   ├── datastructures.py
│   │       │           │   │   │   │   ├── query.py
│   │       │           │   │   │   │   ├── subqueries.py
│   │       │           │   │   │   │   └── where.py
│   │       │           │   │   │   └── utils.py
│   │       │           │   │   ├── transaction.py
│   │       │           │   │   └── utils.py
│   │       │           │   ├── dispatch/
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── dispatcher.py
│   │       │           │   │   └── license.txt
│   │       │           │   ├── forms/
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── boundfield.py
│   │       │           │   │   ├── fields.py
│   │       │           │   │   ├── forms.py
│   │       │           │   │   ├── formsets.py
│   │       │           │   │   ├── jinja2/
│   │       │           │   │   │   └── django/
│   │       │           │   │   │       └── forms/
│   │       │           │   │   │           ├── attrs.html
│   │       │           │   │   │           ├── div.html
│   │       │           │   │   │           ├── errors/
│   │       │           │   │   │           │   ├── dict/
│   │       │           │   │   │           │   │   ├── default.html
│   │       │           │   │   │           │   │   ├── text.txt
│   │       │           │   │   │           │   │   └── ul.html
│   │       │           │   │   │           │   └── list/
│   │       │           │   │   │           │       ├── default.html
│   │       │           │   │   │           │       ├── text.txt
│   │       │           │   │   │           │       └── ul.html
│   │       │           │   │   │           ├── field.html
│   │       │           │   │   │           ├── formsets/
│   │       │           │   │   │           │   ├── div.html
│   │       │           │   │   │           │   ├── p.html
│   │       │           │   │   │           │   ├── table.html
│   │       │           │   │   │           │   └── ul.html
│   │       │           │   │   │           ├── label.html
│   │       │           │   │   │           ├── p.html
│   │       │           │   │   │           ├── table.html
│   │       │           │   │   │           ├── ul.html
│   │       │           │   │   │           └── widgets/
│   │       │           │   │   │               ├── attrs.html
│   │       │           │   │   │               ├── checkbox.html
│   │       │           │   │   │               ├── checkbox_option.html
│   │       │           │   │   │               ├── checkbox_select.html
│   │       │           │   │   │               ├── clearable_file_input.html
│   │       │           │   │   │               ├── color.html
│   │       │           │   │   │               ├── date.html
│   │       │           │   │   │               ├── datetime.html
│   │       │           │   │   │               ├── email.html
│   │       │           │   │   │               ├── file.html
│   │       │           │   │   │               ├── hidden.html
│   │       │           │   │   │               ├── input.html
│   │       │           │   │   │               ├── input_option.html
│   │       │           │   │   │               ├── multiple_hidden.html
│   │       │           │   │   │               ├── multiple_input.html
│   │       │           │   │   │               ├── multiwidget.html
│   │       │           │   │   │               ├── number.html
│   │       │           │   │   │               ├── password.html
│   │       │           │   │   │               ├── radio.html
│   │       │           │   │   │               ├── radio_option.html
│   │       │           │   │   │               ├── search.html
│   │       │           │   │   │               ├── select.html
│   │       │           │   │   │               ├── select_date.html
│   │       │           │   │   │               ├── select_option.html
│   │       │           │   │   │               ├── splitdatetime.html
│   │       │           │   │   │               ├── splithiddendatetime.html
│   │       │           │   │   │               ├── tel.html
│   │       │           │   │   │               ├── text.html
│   │       │           │   │   │               ├── textarea.html
│   │       │           │   │   │               ├── time.html
│   │       │           │   │   │               └── url.html
│   │       │           │   │   ├── models.py
│   │       │           │   │   ├── renderers.py
│   │       │           │   │   ├── templates/
│   │       │           │   │   │   └── django/
│   │       │           │   │   │       └── forms/
│   │       │           │   │   │           ├── attrs.html
│   │       │           │   │   │           ├── div.html
│   │       │           │   │   │           ├── errors/
│   │       │           │   │   │           │   ├── dict/
│   │       │           │   │   │           │   │   ├── default.html
│   │       │           │   │   │           │   │   ├── text.txt
│   │       │           │   │   │           │   │   └── ul.html
│   │       │           │   │   │           │   └── list/
│   │       │           │   │   │           │       ├── default.html
│   │       │           │   │   │           │       ├── text.txt
│   │       │           │   │   │           │       └── ul.html
│   │       │           │   │   │           ├── field.html
│   │       │           │   │   │           ├── formsets/
│   │       │           │   │   │           │   ├── div.html
│   │       │           │   │   │           │   ├── p.html
│   │       │           │   │   │           │   ├── table.html
│   │       │           │   │   │           │   └── ul.html
│   │       │           │   │   │           ├── label.html
│   │       │           │   │   │           ├── p.html
│   │       │           │   │   │           ├── table.html
│   │       │           │   │   │           ├── ul.html
│   │       │           │   │   │           └── widgets/
│   │       │           │   │   │               ├── attrs.html
│   │       │           │   │   │               ├── checkbox.html
│   │       │           │   │   │               ├── checkbox_option.html
│   │       │           │   │   │               ├── checkbox_select.html
│   │       │           │   │   │               ├── clearable_file_input.html
│   │       │           │   │   │               ├── color.html
│   │       │           │   │   │               ├── date.html
│   │       │           │   │   │               ├── datetime.html
│   │       │           │   │   │               ├── email.html
│   │       │           │   │   │               ├── file.html
│   │       │           │   │   │               ├── hidden.html
│   │       │           │   │   │               ├── input.html
│   │       │           │   │   │               ├── input_option.html
│   │       │           │   │   │               ├── multiple_hidden.html
│   │       │           │   │   │               ├── multiple_input.html
│   │       │           │   │   │               ├── multiwidget.html
│   │       │           │   │   │               ├── number.html
│   │       │           │   │   │               ├── password.html
│   │       │           │   │   │               ├── radio.html
│   │       │           │   │   │               ├── radio_option.html
│   │       │           │   │   │               ├── search.html
│   │       │           │   │   │               ├── select.html
│   │       │           │   │   │               ├── select_date.html
│   │       │           │   │   │               ├── select_option.html
│   │       │           │   │   │               ├── splitdatetime.html
│   │       │           │   │   │               ├── splithiddendatetime.html
│   │       │           │   │   │               ├── tel.html
│   │       │           │   │   │               ├── text.html
│   │       │           │   │   │               ├── textarea.html
│   │       │           │   │   │               ├── time.html
│   │       │           │   │   │               └── url.html
│   │       │           │   │   ├── utils.py
│   │       │           │   │   └── widgets.py
│   │       │           │   ├── http/
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── cookie.py
│   │       │           │   │   ├── multipartparser.py
│   │       │           │   │   ├── request.py
│   │       │           │   │   └── response.py
│   │       │           │   ├── middleware/
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── cache.py
│   │       │           │   │   ├── clickjacking.py
│   │       │           │   │   ├── common.py
│   │       │           │   │   ├── csp.py
│   │       │           │   │   ├── csrf.py
│   │       │           │   │   ├── gzip.py
│   │       │           │   │   ├── http.py
│   │       │           │   │   ├── locale.py
│   │       │           │   │   └── security.py
│   │       │           │   ├── shortcuts.py
│   │       │           │   ├── tasks/
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── backends/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── base.py
│   │       │           │   │   │   ├── dummy.py
│   │       │           │   │   │   └── immediate.py
│   │       │           │   │   ├── base.py
│   │       │           │   │   ├── checks.py
│   │       │           │   │   ├── exceptions.py
│   │       │           │   │   └── signals.py
│   │       │           │   ├── template/
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── autoreload.py
│   │       │           │   │   ├── backends/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── base.py
│   │       │           │   │   │   ├── django.py
│   │       │           │   │   │   ├── dummy.py
│   │       │           │   │   │   ├── jinja2.py
│   │       │           │   │   │   └── utils.py
│   │       │           │   │   ├── base.py
│   │       │           │   │   ├── context.py
│   │       │           │   │   ├── context_processors.py
│   │       │           │   │   ├── defaultfilters.py
│   │       │           │   │   ├── defaulttags.py
│   │       │           │   │   ├── engine.py
│   │       │           │   │   ├── exceptions.py
│   │       │           │   │   ├── library.py
│   │       │           │   │   ├── loader.py
│   │       │           │   │   ├── loader_tags.py
│   │       │           │   │   ├── loaders/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── app_directories.py
│   │       │           │   │   │   ├── base.py
│   │       │           │   │   │   ├── cached.py
│   │       │           │   │   │   ├── filesystem.py
│   │       │           │   │   │   └── locmem.py
│   │       │           │   │   ├── response.py
│   │       │           │   │   ├── smartif.py
│   │       │           │   │   └── utils.py
│   │       │           │   ├── templatetags/
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── cache.py
│   │       │           │   │   ├── i18n.py
│   │       │           │   │   ├── l10n.py
│   │       │           │   │   ├── static.py
│   │       │           │   │   └── tz.py
│   │       │           │   ├── test/
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── client.py
│   │       │           │   │   ├── html.py
│   │       │           │   │   ├── runner.py
│   │       │           │   │   ├── selenium.py
│   │       │           │   │   ├── signals.py
│   │       │           │   │   ├── testcases.py
│   │       │           │   │   └── utils.py
│   │       │           │   ├── urls/
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── base.py
│   │       │           │   │   ├── conf.py
│   │       │           │   │   ├── converters.py
│   │       │           │   │   ├── exceptions.py
│   │       │           │   │   ├── resolvers.py
│   │       │           │   │   └── utils.py
│   │       │           │   ├── utils/
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── _os.py
│   │       │           │   │   ├── archive.py
│   │       │           │   │   ├── asyncio.py
│   │       │           │   │   ├── autoreload.py
│   │       │           │   │   ├── cache.py
│   │       │           │   │   ├── choices.py
│   │       │           │   │   ├── connection.py
│   │       │           │   │   ├── copy.py
│   │       │           │   │   ├── crypto.py
│   │       │           │   │   ├── csp.py
│   │       │           │   │   ├── datastructures.py
│   │       │           │   │   ├── dateformat.py
│   │       │           │   │   ├── dateparse.py
│   │       │           │   │   ├── dates.py
│   │       │           │   │   ├── deconstruct.py
│   │       │           │   │   ├── decorators.py
│   │       │           │   │   ├── deprecation.py
│   │       │           │   │   ├── duration.py
│   │       │           │   │   ├── encoding.py
│   │       │           │   │   ├── feedgenerator.py
│   │       │           │   │   ├── formats.py
│   │       │           │   │   ├── functional.py
│   │       │           │   │   ├── hashable.py
│   │       │           │   │   ├── html.py
│   │       │           │   │   ├── http.py
│   │       │           │   │   ├── inspect.py
│   │       │           │   │   ├── ipv6.py
│   │       │           │   │   ├── json.py
│   │       │           │   │   ├── log.py
│   │       │           │   │   ├── lorem_ipsum.py
│   │       │           │   │   ├── module_loading.py
│   │       │           │   │   ├── numberformat.py
│   │       │           │   │   ├── regex_helper.py
│   │       │           │   │   ├── safestring.py
│   │       │           │   │   ├── termcolors.py
│   │       │           │   │   ├── text.py
│   │       │           │   │   ├── timesince.py
│   │       │           │   │   ├── timezone.py
│   │       │           │   │   ├── translation/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── reloader.py
│   │       │           │   │   │   ├── template.py
│   │       │           │   │   │   ├── trans_null.py
│   │       │           │   │   │   └── trans_real.py
│   │       │           │   │   ├── tree.py
│   │       │           │   │   ├── version.py
│   │       │           │   │   └── xmlutils.py
│   │       │           │   └── views/
│   │       │           │       ├── __init__.py
│   │       │           │       ├── csrf.py
│   │       │           │       ├── debug.py
│   │       │           │       ├── decorators/
│   │       │           │       │   ├── __init__.py
│   │       │           │       │   ├── cache.py
│   │       │           │       │   ├── clickjacking.py
│   │       │           │       │   ├── common.py
│   │       │           │       │   ├── csp.py
│   │       │           │       │   ├── csrf.py
│   │       │           │       │   ├── debug.py
│   │       │           │       │   ├── gzip.py
│   │       │           │       │   ├── http.py
│   │       │           │       │   └── vary.py
│   │       │           │       ├── defaults.py
│   │       │           │       ├── generic/
│   │       │           │       │   ├── __init__.py
│   │       │           │       │   ├── base.py
│   │       │           │       │   ├── dates.py
│   │       │           │       │   ├── detail.py
│   │       │           │       │   ├── edit.py
│   │       │           │       │   └── list.py
│   │       │           │       ├── i18n.py
│   │       │           │       ├── static.py
│   │       │           │       └── templates/
│   │       │           │           ├── csrf_403.html
│   │       │           │           ├── default_urlconf.html
│   │       │           │           ├── directory_index.html
│   │       │           │           ├── i18n_catalog.js
│   │       │           │           ├── technical_404.html
│   │       │           │           ├── technical_500.html
│   │       │           │           └── technical_500.txt
│   │       │           ├── django-6.0.1.dist-info/
│   │       │           │   ├── INSTALLER
│   │       │           │   ├── METADATA
│   │       │           │   ├── RECORD
│   │       │           │   ├── REQUESTED
│   │       │           │   ├── WHEEL
│   │       │           │   ├── entry_points.txt
│   │       │           │   ├── licenses/
│   │       │           │   │   ├── LICENSE
│   │       │           │   │   └── LICENSE.python
│   │       │           │   └── top_level.txt
│   │       │           ├── django_cors_headers-4.9.0.dist-info/
│   │       │           │   ├── INSTALLER
│   │       │           │   ├── METADATA
│   │       │           │   ├── RECORD
│   │       │           │   ├── REQUESTED
│   │       │           │   ├── WHEEL
│   │       │           │   ├── licenses/
│   │       │           │   │   └── LICENSE
│   │       │           │   └── top_level.txt
│   │       │           ├── djangorestframework-3.16.1.dist-info/
│   │       │           │   ├── INSTALLER
│   │       │           │   ├── METADATA
│   │       │           │   ├── RECORD
│   │       │           │   ├── REQUESTED
│   │       │           │   ├── WHEEL
│   │       │           │   ├── licenses/
│   │       │           │   │   └── LICENSE.md
│   │       │           │   └── top_level.txt
│   │       │           ├── drf_spectacular/
│   │       │           │   ├── __init__.py
│   │       │           │   ├── apps.py
│   │       │           │   ├── authentication.py
│   │       │           │   ├── checks.py
│   │       │           │   ├── contrib/
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── django_allauth.py
│   │       │           │   │   ├── django_filters.py
│   │       │           │   │   ├── django_oauth_toolkit.py
│   │       │           │   │   ├── djangorestframework_camel_case.py
│   │       │           │   │   ├── knox_auth_token.py
│   │       │           │   │   ├── pydantic.py
│   │       │           │   │   ├── rest_auth.py
│   │       │           │   │   ├── rest_framework.py
│   │       │           │   │   ├── rest_framework_dataclasses.py
│   │       │           │   │   ├── rest_framework_gis.py
│   │       │           │   │   ├── rest_framework_jwt.py
│   │       │           │   │   ├── rest_framework_recursive.py
│   │       │           │   │   ├── rest_framework_simplejwt.py
│   │       │           │   │   └── rest_polymorphic.py
│   │       │           │   ├── drainage.py
│   │       │           │   ├── extensions.py
│   │       │           │   ├── generators.py
│   │       │           │   ├── helpers.py
│   │       │           │   ├── hooks.py
│   │       │           │   ├── management/
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   └── commands/
│   │       │           │   │       ├── __init__.py
│   │       │           │   │       └── spectacular.py
│   │       │           │   ├── openapi.py
│   │       │           │   ├── plumbing.py
│   │       │           │   ├── py.typed
│   │       │           │   ├── renderers.py
│   │       │           │   ├── serializers.py
│   │       │           │   ├── settings.py
│   │       │           │   ├── templates/
│   │       │           │   │   └── drf_spectacular/
│   │       │           │   │       ├── redoc.html
│   │       │           │   │       ├── swagger_ui.html
│   │       │           │   │       └── swagger_ui.js
│   │       │           │   ├── types.py
│   │       │           │   ├── utils.py
│   │       │           │   ├── validation/
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── openapi_3_0_schema.json
│   │       │           │   │   └── openapi_3_1_schema.json
│   │       │           │   └── views.py
│   │       │           ├── drf_spectacular-0.29.0.dist-info/
│   │       │           │   ├── INSTALLER
│   │       │           │   ├── METADATA
│   │       │           │   ├── RECORD
│   │       │           │   ├── REQUESTED
│   │       │           │   ├── WHEEL
│   │       │           │   ├── licenses/
│   │       │           │   │   └── LICENSE
│   │       │           │   └── top_level.txt
│   │       │           ├── inflection/
│   │       │           │   ├── __init__.py
│   │       │           │   └── py.typed
│   │       │           ├── inflection-0.5.1.dist-info/
│   │       │           │   ├── INSTALLER
│   │       │           │   ├── LICENSE
│   │       │           │   ├── METADATA
│   │       │           │   ├── RECORD
│   │       │           │   ├── WHEEL
│   │       │           │   └── top_level.txt
│   │       │           ├── inflection.py
│   │       │           ├── jsonschema/
│   │       │           │   ├── __init__.py
│   │       │           │   ├── __main__.py
│   │       │           │   ├── _format.py
│   │       │           │   ├── _keywords.py
│   │       │           │   ├── _legacy_keywords.py
│   │       │           │   ├── _types.py
│   │       │           │   ├── _typing.py
│   │       │           │   ├── _utils.py
│   │       │           │   ├── benchmarks/
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── const_vs_enum.py
│   │       │           │   │   ├── contains.py
│   │       │           │   │   ├── import_benchmark.py
│   │       │           │   │   ├── issue232/
│   │       │           │   │   │   └── issue.json
│   │       │           │   │   ├── issue232.py
│   │       │           │   │   ├── json_schema_test_suite.py
│   │       │           │   │   ├── nested_schemas.py
│   │       │           │   │   ├── subcomponents.py
│   │       │           │   │   ├── unused_registry.py
│   │       │           │   │   ├── useless_applicator_schemas.py
│   │       │           │   │   ├── useless_keywords.py
│   │       │           │   │   └── validator_creation.py
│   │       │           │   ├── cli.py
│   │       │           │   ├── exceptions.py
│   │       │           │   ├── protocols.py
│   │       │           │   ├── tests/
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── _suite.py
│   │       │           │   │   ├── fuzz_validate.py
│   │       │           │   │   ├── test_cli.py
│   │       │           │   │   ├── test_deprecations.py
│   │       │           │   │   ├── test_exceptions.py
│   │       │           │   │   ├── test_format.py
│   │       │           │   │   ├── test_jsonschema_test_suite.py
│   │       │           │   │   ├── test_types.py
│   │       │           │   │   ├── test_utils.py
│   │       │           │   │   ├── test_validators.py
│   │       │           │   │   └── typing/
│   │       │           │   │       ├── __init__.py
│   │       │           │   │       └── test_all_concrete_validators_match_protocol.py
│   │       │           │   └── validators.py
│   │       │           ├── jsonschema-4.26.0.dist-info/
│   │       │           │   ├── INSTALLER
│   │       │           │   ├── METADATA
│   │       │           │   ├── RECORD
│   │       │           │   ├── WHEEL
│   │       │           │   ├── entry_points.txt
│   │       │           │   └── licenses/
│   │       │           │       └── COPYING
│   │       │           ├── jsonschema_specifications/
│   │       │           │   ├── __init__.py
│   │       │           │   ├── _core.py
│   │       │           │   ├── schemas/
│   │       │           │   │   ├── draft201909/
│   │       │           │   │   │   ├── metaschema.json
│   │       │           │   │   │   └── vocabularies/
│   │       │           │   │   │       ├── applicator
│   │       │           │   │   │       ├── content
│   │       │           │   │   │       ├── core
│   │       │           │   │   │       ├── format
│   │       │           │   │   │       ├── meta-data
│   │       │           │   │   │       └── validation
│   │       │           │   │   ├── draft202012/
│   │       │           │   │   │   ├── metaschema.json
│   │       │           │   │   │   └── vocabularies/
│   │       │           │   │   │       ├── applicator
│   │       │           │   │   │       ├── content
│   │       │           │   │   │       ├── core
│   │       │           │   │   │       ├── format-annotation
│   │       │           │   │   │       ├── format-assertion
│   │       │           │   │   │       ├── meta-data
│   │       │           │   │   │       ├── unevaluated
│   │       │           │   │   │       └── validation
│   │       │           │   │   ├── draft3/
│   │       │           │   │   │   └── metaschema.json
│   │       │           │   │   ├── draft4/
│   │       │           │   │   │   └── metaschema.json
│   │       │           │   │   ├── draft6/
│   │       │           │   │   │   └── metaschema.json
│   │       │           │   │   └── draft7/
│   │       │           │   │       └── metaschema.json
│   │       │           │   └── tests/
│   │       │           │       ├── __init__.py
│   │       │           │       └── test_jsonschema_specifications.py
│   │       │           ├── jsonschema_specifications-2025.9.1.dist-info/
│   │       │           │   ├── INSTALLER
│   │       │           │   ├── METADATA
│   │       │           │   ├── RECORD
│   │       │           │   ├── WHEEL
│   │       │           │   └── licenses/
│   │       │           │       └── COPYING
│   │       │           ├── pip/
│   │       │           │   ├── __init__.py
│   │       │           │   ├── __main__.py
│   │       │           │   ├── __pip-runner__.py
│   │       │           │   ├── _internal/
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── build_env.py
│   │       │           │   │   ├── cache.py
│   │       │           │   │   ├── cli/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── autocompletion.py
│   │       │           │   │   │   ├── base_command.py
│   │       │           │   │   │   ├── cmdoptions.py
│   │       │           │   │   │   ├── command_context.py
│   │       │           │   │   │   ├── index_command.py
│   │       │           │   │   │   ├── main.py
│   │       │           │   │   │   ├── main_parser.py
│   │       │           │   │   │   ├── parser.py
│   │       │           │   │   │   ├── progress_bars.py
│   │       │           │   │   │   ├── req_command.py
│   │       │           │   │   │   ├── spinners.py
│   │       │           │   │   │   └── status_codes.py
│   │       │           │   │   ├── commands/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── cache.py
│   │       │           │   │   │   ├── check.py
│   │       │           │   │   │   ├── completion.py
│   │       │           │   │   │   ├── configuration.py
│   │       │           │   │   │   ├── debug.py
│   │       │           │   │   │   ├── download.py
│   │       │           │   │   │   ├── freeze.py
│   │       │           │   │   │   ├── hash.py
│   │       │           │   │   │   ├── help.py
│   │       │           │   │   │   ├── index.py
│   │       │           │   │   │   ├── inspect.py
│   │       │           │   │   │   ├── install.py
│   │       │           │   │   │   ├── list.py
│   │       │           │   │   │   ├── search.py
│   │       │           │   │   │   ├── show.py
│   │       │           │   │   │   ├── uninstall.py
│   │       │           │   │   │   └── wheel.py
│   │       │           │   │   ├── configuration.py
│   │       │           │   │   ├── distributions/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── base.py
│   │       │           │   │   │   ├── installed.py
│   │       │           │   │   │   ├── sdist.py
│   │       │           │   │   │   └── wheel.py
│   │       │           │   │   ├── exceptions.py
│   │       │           │   │   ├── index/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── collector.py
│   │       │           │   │   │   ├── package_finder.py
│   │       │           │   │   │   └── sources.py
│   │       │           │   │   ├── locations/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── _distutils.py
│   │       │           │   │   │   ├── _sysconfig.py
│   │       │           │   │   │   └── base.py
│   │       │           │   │   ├── main.py
│   │       │           │   │   ├── metadata/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── _json.py
│   │       │           │   │   │   ├── base.py
│   │       │           │   │   │   ├── importlib/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── _compat.py
│   │       │           │   │   │   │   ├── _dists.py
│   │       │           │   │   │   │   └── _envs.py
│   │       │           │   │   │   └── pkg_resources.py
│   │       │           │   │   ├── models/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── candidate.py
│   │       │           │   │   │   ├── direct_url.py
│   │       │           │   │   │   ├── format_control.py
│   │       │           │   │   │   ├── index.py
│   │       │           │   │   │   ├── installation_report.py
│   │       │           │   │   │   ├── link.py
│   │       │           │   │   │   ├── scheme.py
│   │       │           │   │   │   ├── search_scope.py
│   │       │           │   │   │   ├── selection_prefs.py
│   │       │           │   │   │   ├── target_python.py
│   │       │           │   │   │   └── wheel.py
│   │       │           │   │   ├── network/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── auth.py
│   │       │           │   │   │   ├── cache.py
│   │       │           │   │   │   ├── download.py
│   │       │           │   │   │   ├── lazy_wheel.py
│   │       │           │   │   │   ├── session.py
│   │       │           │   │   │   ├── utils.py
│   │       │           │   │   │   └── xmlrpc.py
│   │       │           │   │   ├── operations/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── build/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── build_tracker.py
│   │       │           │   │   │   │   ├── metadata.py
│   │       │           │   │   │   │   ├── metadata_editable.py
│   │       │           │   │   │   │   ├── metadata_legacy.py
│   │       │           │   │   │   │   ├── wheel.py
│   │       │           │   │   │   │   ├── wheel_editable.py
│   │       │           │   │   │   │   └── wheel_legacy.py
│   │       │           │   │   │   ├── check.py
│   │       │           │   │   │   ├── freeze.py
│   │       │           │   │   │   ├── install/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── editable_legacy.py
│   │       │           │   │   │   │   └── wheel.py
│   │       │           │   │   │   └── prepare.py
│   │       │           │   │   ├── pyproject.py
│   │       │           │   │   ├── req/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── constructors.py
│   │       │           │   │   │   ├── req_file.py
│   │       │           │   │   │   ├── req_install.py
│   │       │           │   │   │   ├── req_set.py
│   │       │           │   │   │   └── req_uninstall.py
│   │       │           │   │   ├── resolution/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── base.py
│   │       │           │   │   │   ├── legacy/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── resolver.py
│   │       │           │   │   │   └── resolvelib/
│   │       │           │   │   │       ├── __init__.py
│   │       │           │   │   │       ├── base.py
│   │       │           │   │   │       ├── candidates.py
│   │       │           │   │   │       ├── factory.py
│   │       │           │   │   │       ├── found_candidates.py
│   │       │           │   │   │       ├── provider.py
│   │       │           │   │   │       ├── reporter.py
│   │       │           │   │   │       ├── requirements.py
│   │       │           │   │   │       └── resolver.py
│   │       │           │   │   ├── self_outdated_check.py
│   │       │           │   │   ├── utils/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── _jaraco_text.py
│   │       │           │   │   │   ├── _log.py
│   │       │           │   │   │   ├── appdirs.py
│   │       │           │   │   │   ├── compat.py
│   │       │           │   │   │   ├── compatibility_tags.py
│   │       │           │   │   │   ├── datetime.py
│   │       │           │   │   │   ├── deprecation.py
│   │       │           │   │   │   ├── direct_url_helpers.py
│   │       │           │   │   │   ├── egg_link.py
│   │       │           │   │   │   ├── encoding.py
│   │       │           │   │   │   ├── entrypoints.py
│   │       │           │   │   │   ├── filesystem.py
│   │       │           │   │   │   ├── filetypes.py
│   │       │           │   │   │   ├── glibc.py
│   │       │           │   │   │   ├── hashes.py
│   │       │           │   │   │   ├── logging.py
│   │       │           │   │   │   ├── misc.py
│   │       │           │   │   │   ├── packaging.py
│   │       │           │   │   │   ├── retry.py
│   │       │           │   │   │   ├── setuptools_build.py
│   │       │           │   │   │   ├── subprocess.py
│   │       │           │   │   │   ├── temp_dir.py
│   │       │           │   │   │   ├── unpacking.py
│   │       │           │   │   │   ├── urls.py
│   │       │           │   │   │   ├── virtualenv.py
│   │       │           │   │   │   └── wheel.py
│   │       │           │   │   ├── vcs/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── bazaar.py
│   │       │           │   │   │   ├── git.py
│   │       │           │   │   │   ├── mercurial.py
│   │       │           │   │   │   ├── subversion.py
│   │       │           │   │   │   └── versioncontrol.py
│   │       │           │   │   └── wheel_builder.py
│   │       │           │   ├── _vendor/
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── cachecontrol/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── _cmd.py
│   │       │           │   │   │   ├── adapter.py
│   │       │           │   │   │   ├── cache.py
│   │       │           │   │   │   ├── caches/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── file_cache.py
│   │       │           │   │   │   │   └── redis_cache.py
│   │       │           │   │   │   ├── controller.py
│   │       │           │   │   │   ├── filewrapper.py
│   │       │           │   │   │   ├── heuristics.py
│   │       │           │   │   │   ├── py.typed
│   │       │           │   │   │   ├── serialize.py
│   │       │           │   │   │   └── wrapper.py
│   │       │           │   │   ├── certifi/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── __main__.py
│   │       │           │   │   │   ├── cacert.pem
│   │       │           │   │   │   ├── core.py
│   │       │           │   │   │   └── py.typed
│   │       │           │   │   ├── distlib/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── compat.py
│   │       │           │   │   │   ├── database.py
│   │       │           │   │   │   ├── index.py
│   │       │           │   │   │   ├── locators.py
│   │       │           │   │   │   ├── manifest.py
│   │       │           │   │   │   ├── markers.py
│   │       │           │   │   │   ├── metadata.py
│   │       │           │   │   │   ├── resources.py
│   │       │           │   │   │   ├── scripts.py
│   │       │           │   │   │   ├── t32.exe
│   │       │           │   │   │   ├── t64-arm.exe
│   │       │           │   │   │   ├── t64.exe
│   │       │           │   │   │   ├── util.py
│   │       │           │   │   │   ├── version.py
│   │       │           │   │   │   ├── w32.exe
│   │       │           │   │   │   ├── w64-arm.exe
│   │       │           │   │   │   ├── w64.exe
│   │       │           │   │   │   └── wheel.py
│   │       │           │   │   ├── distro/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── __main__.py
│   │       │           │   │   │   ├── distro.py
│   │       │           │   │   │   └── py.typed
│   │       │           │   │   ├── idna/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── codec.py
│   │       │           │   │   │   ├── compat.py
│   │       │           │   │   │   ├── core.py
│   │       │           │   │   │   ├── idnadata.py
│   │       │           │   │   │   ├── intranges.py
│   │       │           │   │   │   ├── package_data.py
│   │       │           │   │   │   ├── py.typed
│   │       │           │   │   │   └── uts46data.py
│   │       │           │   │   ├── msgpack/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── exceptions.py
│   │       │           │   │   │   ├── ext.py
│   │       │           │   │   │   └── fallback.py
│   │       │           │   │   ├── packaging/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── _elffile.py
│   │       │           │   │   │   ├── _manylinux.py
│   │       │           │   │   │   ├── _musllinux.py
│   │       │           │   │   │   ├── _parser.py
│   │       │           │   │   │   ├── _structures.py
│   │       │           │   │   │   ├── _tokenizer.py
│   │       │           │   │   │   ├── markers.py
│   │       │           │   │   │   ├── metadata.py
│   │       │           │   │   │   ├── py.typed
│   │       │           │   │   │   ├── requirements.py
│   │       │           │   │   │   ├── specifiers.py
│   │       │           │   │   │   ├── tags.py
│   │       │           │   │   │   ├── utils.py
│   │       │           │   │   │   └── version.py
│   │       │           │   │   ├── pkg_resources/
│   │       │           │   │   │   └── __init__.py
│   │       │           │   │   ├── platformdirs/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── __main__.py
│   │       │           │   │   │   ├── android.py
│   │       │           │   │   │   ├── api.py
│   │       │           │   │   │   ├── macos.py
│   │       │           │   │   │   ├── py.typed
│   │       │           │   │   │   ├── unix.py
│   │       │           │   │   │   ├── version.py
│   │       │           │   │   │   └── windows.py
│   │       │           │   │   ├── pygments/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── __main__.py
│   │       │           │   │   │   ├── cmdline.py
│   │       │           │   │   │   ├── console.py
│   │       │           │   │   │   ├── filter.py
│   │       │           │   │   │   ├── filters/
│   │       │           │   │   │   │   └── __init__.py
│   │       │           │   │   │   ├── formatter.py
│   │       │           │   │   │   ├── formatters/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── _mapping.py
│   │       │           │   │   │   │   ├── bbcode.py
│   │       │           │   │   │   │   ├── groff.py
│   │       │           │   │   │   │   ├── html.py
│   │       │           │   │   │   │   ├── img.py
│   │       │           │   │   │   │   ├── irc.py
│   │       │           │   │   │   │   ├── latex.py
│   │       │           │   │   │   │   ├── other.py
│   │       │           │   │   │   │   ├── pangomarkup.py
│   │       │           │   │   │   │   ├── rtf.py
│   │       │           │   │   │   │   ├── svg.py
│   │       │           │   │   │   │   ├── terminal.py
│   │       │           │   │   │   │   └── terminal256.py
│   │       │           │   │   │   ├── lexer.py
│   │       │           │   │   │   ├── lexers/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── _mapping.py
│   │       │           │   │   │   │   └── python.py
│   │       │           │   │   │   ├── modeline.py
│   │       │           │   │   │   ├── plugin.py
│   │       │           │   │   │   ├── regexopt.py
│   │       │           │   │   │   ├── scanner.py
│   │       │           │   │   │   ├── sphinxext.py
│   │       │           │   │   │   ├── style.py
│   │       │           │   │   │   ├── styles/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── _mapping.py
│   │       │           │   │   │   ├── token.py
│   │       │           │   │   │   ├── unistring.py
│   │       │           │   │   │   └── util.py
│   │       │           │   │   ├── pyproject_hooks/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── _compat.py
│   │       │           │   │   │   ├── _impl.py
│   │       │           │   │   │   └── _in_process/
│   │       │           │   │   │       ├── __init__.py
│   │       │           │   │   │       └── _in_process.py
│   │       │           │   │   ├── requests/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── __version__.py
│   │       │           │   │   │   ├── _internal_utils.py
│   │       │           │   │   │   ├── adapters.py
│   │       │           │   │   │   ├── api.py
│   │       │           │   │   │   ├── auth.py
│   │       │           │   │   │   ├── certs.py
│   │       │           │   │   │   ├── compat.py
│   │       │           │   │   │   ├── cookies.py
│   │       │           │   │   │   ├── exceptions.py
│   │       │           │   │   │   ├── help.py
│   │       │           │   │   │   ├── hooks.py
│   │       │           │   │   │   ├── models.py
│   │       │           │   │   │   ├── packages.py
│   │       │           │   │   │   ├── sessions.py
│   │       │           │   │   │   ├── status_codes.py
│   │       │           │   │   │   ├── structures.py
│   │       │           │   │   │   └── utils.py
│   │       │           │   │   ├── resolvelib/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── compat/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── collections_abc.py
│   │       │           │   │   │   ├── providers.py
│   │       │           │   │   │   ├── py.typed
│   │       │           │   │   │   ├── reporters.py
│   │       │           │   │   │   ├── resolvers.py
│   │       │           │   │   │   └── structs.py
│   │       │           │   │   ├── rich/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── __main__.py
│   │       │           │   │   │   ├── _cell_widths.py
│   │       │           │   │   │   ├── _emoji_codes.py
│   │       │           │   │   │   ├── _emoji_replace.py
│   │       │           │   │   │   ├── _export_format.py
│   │       │           │   │   │   ├── _extension.py
│   │       │           │   │   │   ├── _fileno.py
│   │       │           │   │   │   ├── _inspect.py
│   │       │           │   │   │   ├── _log_render.py
│   │       │           │   │   │   ├── _loop.py
│   │       │           │   │   │   ├── _null_file.py
│   │       │           │   │   │   ├── _palettes.py
│   │       │           │   │   │   ├── _pick.py
│   │       │           │   │   │   ├── _ratio.py
│   │       │           │   │   │   ├── _spinners.py
│   │       │           │   │   │   ├── _stack.py
│   │       │           │   │   │   ├── _timer.py
│   │       │           │   │   │   ├── _win32_console.py
│   │       │           │   │   │   ├── _windows.py
│   │       │           │   │   │   ├── _windows_renderer.py
│   │       │           │   │   │   ├── _wrap.py
│   │       │           │   │   │   ├── abc.py
│   │       │           │   │   │   ├── align.py
│   │       │           │   │   │   ├── ansi.py
│   │       │           │   │   │   ├── bar.py
│   │       │           │   │   │   ├── box.py
│   │       │           │   │   │   ├── cells.py
│   │       │           │   │   │   ├── color.py
│   │       │           │   │   │   ├── color_triplet.py
│   │       │           │   │   │   ├── columns.py
│   │       │           │   │   │   ├── console.py
│   │       │           │   │   │   ├── constrain.py
│   │       │           │   │   │   ├── containers.py
│   │       │           │   │   │   ├── control.py
│   │       │           │   │   │   ├── default_styles.py
│   │       │           │   │   │   ├── diagnose.py
│   │       │           │   │   │   ├── emoji.py
│   │       │           │   │   │   ├── errors.py
│   │       │           │   │   │   ├── file_proxy.py
│   │       │           │   │   │   ├── filesize.py
│   │       │           │   │   │   ├── highlighter.py
│   │       │           │   │   │   ├── json.py
│   │       │           │   │   │   ├── jupyter.py
│   │       │           │   │   │   ├── layout.py
│   │       │           │   │   │   ├── live.py
│   │       │           │   │   │   ├── live_render.py
│   │       │           │   │   │   ├── logging.py
│   │       │           │   │   │   ├── markup.py
│   │       │           │   │   │   ├── measure.py
│   │       │           │   │   │   ├── padding.py
│   │       │           │   │   │   ├── pager.py
│   │       │           │   │   │   ├── palette.py
│   │       │           │   │   │   ├── panel.py
│   │       │           │   │   │   ├── pretty.py
│   │       │           │   │   │   ├── progress.py
│   │       │           │   │   │   ├── progress_bar.py
│   │       │           │   │   │   ├── prompt.py
│   │       │           │   │   │   ├── protocol.py
│   │       │           │   │   │   ├── py.typed
│   │       │           │   │   │   ├── region.py
│   │       │           │   │   │   ├── repr.py
│   │       │           │   │   │   ├── rule.py
│   │       │           │   │   │   ├── scope.py
│   │       │           │   │   │   ├── screen.py
│   │       │           │   │   │   ├── segment.py
│   │       │           │   │   │   ├── spinner.py
│   │       │           │   │   │   ├── status.py
│   │       │           │   │   │   ├── style.py
│   │       │           │   │   │   ├── styled.py
│   │       │           │   │   │   ├── syntax.py
│   │       │           │   │   │   ├── table.py
│   │       │           │   │   │   ├── terminal_theme.py
│   │       │           │   │   │   ├── text.py
│   │       │           │   │   │   ├── theme.py
│   │       │           │   │   │   ├── themes.py
│   │       │           │   │   │   ├── traceback.py
│   │       │           │   │   │   └── tree.py
│   │       │           │   │   ├── tomli/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── _parser.py
│   │       │           │   │   │   ├── _re.py
│   │       │           │   │   │   ├── _types.py
│   │       │           │   │   │   └── py.typed
│   │       │           │   │   ├── truststore/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── _api.py
│   │       │           │   │   │   ├── _macos.py
│   │       │           │   │   │   ├── _openssl.py
│   │       │           │   │   │   ├── _ssl_constants.py
│   │       │           │   │   │   ├── _windows.py
│   │       │           │   │   │   └── py.typed
│   │       │           │   │   ├── typing_extensions.py
│   │       │           │   │   ├── urllib3/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── _collections.py
│   │       │           │   │   │   ├── _version.py
│   │       │           │   │   │   ├── connection.py
│   │       │           │   │   │   ├── connectionpool.py
│   │       │           │   │   │   ├── contrib/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── _appengine_environ.py
│   │       │           │   │   │   │   ├── _securetransport/
│   │       │           │   │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   │   ├── bindings.py
│   │       │           │   │   │   │   │   └── low_level.py
│   │       │           │   │   │   │   ├── appengine.py
│   │       │           │   │   │   │   ├── ntlmpool.py
│   │       │           │   │   │   │   ├── pyopenssl.py
│   │       │           │   │   │   │   ├── securetransport.py
│   │       │           │   │   │   │   └── socks.py
│   │       │           │   │   │   ├── exceptions.py
│   │       │           │   │   │   ├── fields.py
│   │       │           │   │   │   ├── filepost.py
│   │       │           │   │   │   ├── packages/
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── backports/
│   │       │           │   │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   │   ├── makefile.py
│   │       │           │   │   │   │   │   └── weakref_finalize.py
│   │       │           │   │   │   │   └── six.py
│   │       │           │   │   │   ├── poolmanager.py
│   │       │           │   │   │   ├── request.py
│   │       │           │   │   │   ├── response.py
│   │       │           │   │   │   └── util/
│   │       │           │   │   │       ├── __init__.py
│   │       │           │   │   │       ├── connection.py
│   │       │           │   │   │       ├── proxy.py
│   │       │           │   │   │       ├── queue.py
│   │       │           │   │   │       ├── request.py
│   │       │           │   │   │       ├── response.py
│   │       │           │   │   │       ├── retry.py
│   │       │           │   │   │       ├── ssl_.py
│   │       │           │   │   │       ├── ssl_match_hostname.py
│   │       │           │   │   │       ├── ssltransport.py
│   │       │           │   │   │       ├── timeout.py
│   │       │           │   │   │       ├── url.py
│   │       │           │   │   │       └── wait.py
│   │       │           │   │   └── vendor.txt
│   │       │           │   └── py.typed
│   │       │           ├── pip-24.3.1.dist-info/
│   │       │           │   ├── AUTHORS.txt
│   │       │           │   ├── INSTALLER
│   │       │           │   ├── LICENSE.txt
│   │       │           │   ├── METADATA
│   │       │           │   ├── RECORD
│   │       │           │   ├── REQUESTED
│   │       │           │   ├── WHEEL
│   │       │           │   ├── entry_points.txt
│   │       │           │   └── top_level.txt
│   │       │           ├── psycopg2/
│   │       │           │   ├── .dylibs/
│   │       │           │   │   ├── libcom_err.3.0.dylib
│   │       │           │   │   ├── libcrypto.3.dylib
│   │       │           │   │   ├── libgssapi_krb5.2.2.dylib
│   │       │           │   │   ├── libk5crypto.3.1.dylib
│   │       │           │   │   ├── libkrb5.3.3.dylib
│   │       │           │   │   ├── libkrb5support.1.1.dylib
│   │       │           │   │   ├── liblber.2.dylib
│   │       │           │   │   ├── libldap.2.dylib
│   │       │           │   │   ├── libpq.5.dylib
│   │       │           │   │   ├── libsasl2.3.dylib
│   │       │           │   │   └── libssl.3.dylib
│   │       │           │   ├── __init__.py
│   │       │           │   ├── _ipaddress.py
│   │       │           │   ├── _json.py
│   │       │           │   ├── _psycopg.cpython-312-darwin.so
│   │       │           │   ├── _range.py
│   │       │           │   ├── errorcodes.py
│   │       │           │   ├── errors.py
│   │       │           │   ├── extensions.py
│   │       │           │   ├── extras.py
│   │       │           │   ├── pool.py
│   │       │           │   ├── sql.py
│   │       │           │   └── tz.py
│   │       │           ├── psycopg2_binary-2.9.11.dist-info/
│   │       │           │   ├── INSTALLER
│   │       │           │   ├── METADATA
│   │       │           │   ├── RECORD
│   │       │           │   ├── REQUESTED
│   │       │           │   ├── WHEEL
│   │       │           │   ├── licenses/
│   │       │           │   │   └── LICENSE
│   │       │           │   └── top_level.txt
│   │       │           ├── pyyaml-6.0.3.dist-info/
│   │       │           │   ├── INSTALLER
│   │       │           │   ├── METADATA
│   │       │           │   ├── RECORD
│   │       │           │   ├── WHEEL
│   │       │           │   ├── licenses/
│   │       │           │   │   └── LICENSE
│   │       │           │   └── top_level.txt
│   │       │           ├── referencing/
│   │       │           │   ├── __init__.py
│   │       │           │   ├── _attrs.py
│   │       │           │   ├── _attrs.pyi
│   │       │           │   ├── _core.py
│   │       │           │   ├── exceptions.py
│   │       │           │   ├── jsonschema.py
│   │       │           │   ├── py.typed
│   │       │           │   ├── retrieval.py
│   │       │           │   ├── tests/
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── test_core.py
│   │       │           │   │   ├── test_exceptions.py
│   │       │           │   │   ├── test_jsonschema.py
│   │       │           │   │   ├── test_referencing_suite.py
│   │       │           │   │   └── test_retrieval.py
│   │       │           │   └── typing.py
│   │       │           ├── referencing-0.37.0.dist-info/
│   │       │           │   ├── INSTALLER
│   │       │           │   ├── METADATA
│   │       │           │   ├── RECORD
│   │       │           │   ├── WHEEL
│   │       │           │   └── licenses/
│   │       │           │       └── COPYING
│   │       │           ├── rest_framework/
│   │       │           │   ├── __init__.py
│   │       │           │   ├── apps.py
│   │       │           │   ├── authentication.py
│   │       │           │   ├── authtoken/
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── admin.py
│   │       │           │   │   ├── apps.py
│   │       │           │   │   ├── management/
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   └── commands/
│   │       │           │   │   │       ├── __init__.py
│   │       │           │   │   │       └── drf_create_token.py
│   │       │           │   │   ├── migrations/
│   │       │           │   │   │   ├── 0001_initial.py
│   │       │           │   │   │   ├── 0002_auto_20160226_1747.py
│   │       │           │   │   │   ├── 0003_tokenproxy.py
│   │       │           │   │   │   ├── 0004_alter_tokenproxy_options.py
│   │       │           │   │   │   └── __init__.py
│   │       │           │   │   ├── models.py
│   │       │           │   │   ├── serializers.py
│   │       │           │   │   └── views.py
│   │       │           │   ├── checks.py
│   │       │           │   ├── compat.py
│   │       │           │   ├── decorators.py
│   │       │           │   ├── documentation.py
│   │       │           │   ├── exceptions.py
│   │       │           │   ├── fields.py
│   │       │           │   ├── filters.py
│   │       │           │   ├── generics.py
│   │       │           │   ├── locale/
│   │       │           │   │   ├── ach/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── ar/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── az/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── be/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── bg/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── ca/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── ca_ES/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── cs/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── da/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── de/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── el/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── el_GR/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── en/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── en_AU/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── en_CA/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── en_US/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── es/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── et/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── fa/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── fa_IR/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── fi/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── fr/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── fr_CA/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── gl/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── gl_ES/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── he_IL/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── hu/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── hy/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── id/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── it/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── ja/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── kk/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── ko_KR/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── lt/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── lv/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── mk/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── nb/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── ne_NP/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── nl/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── nn/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── no/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── pl/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── pt/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── pt_BR/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── pt_PT/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── ro/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── ru/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── ru_RU/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── sk/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── sl/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── sv/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── th/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── tr/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── tr_TR/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── uk/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── vi/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── zh_CN/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── zh_Hans/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── zh_Hant/
│   │       │           │   │   │   └── LC_MESSAGES/
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   └── zh_TW/
│   │       │           │   │       └── LC_MESSAGES/
│   │       │           │   │           └── django.mo
│   │       │           │   ├── management/
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   └── commands/
│   │       │           │   │       ├── __init__.py
│   │       │           │   │       └── generateschema.py
│   │       │           │   ├── metadata.py
│   │       │           │   ├── mixins.py
│   │       │           │   ├── negotiation.py
│   │       │           │   ├── pagination.py
│   │       │           │   ├── parsers.py
│   │       │           │   ├── permissions.py
│   │       │           │   ├── relations.py
│   │       │           │   ├── renderers.py
│   │       │           │   ├── request.py
│   │       │           │   ├── response.py
│   │       │           │   ├── reverse.py
│   │       │           │   ├── routers.py
│   │       │           │   ├── schemas/
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── coreapi.py
│   │       │           │   │   ├── generators.py
│   │       │           │   │   ├── inspectors.py
│   │       │           │   │   ├── openapi.py
│   │       │           │   │   ├── utils.py
│   │       │           │   │   └── views.py
│   │       │           │   ├── serializers.py
│   │       │           │   ├── settings.py
│   │       │           │   ├── static/
│   │       │           │   │   └── rest_framework/
│   │       │           │   │       ├── css/
│   │       │           │   │       │   ├── bootstrap-theme.min.css
│   │       │           │   │       │   ├── bootstrap-theme.min.css.map
│   │       │           │   │       │   ├── bootstrap-tweaks.css
│   │       │           │   │       │   ├── bootstrap.min.css
│   │       │           │   │       │   ├── bootstrap.min.css.map
│   │       │           │   │       │   ├── default.css
│   │       │           │   │       │   ├── font-awesome-4.0.3.css
│   │       │           │   │       │   └── prettify.css
│   │       │           │   │       ├── docs/
│   │       │           │   │       │   ├── css/
│   │       │           │   │       │   │   ├── base.css
│   │       │           │   │       │   │   ├── highlight.css
│   │       │           │   │       │   │   └── jquery.json-view.min.css
│   │       │           │   │       │   ├── img/
│   │       │           │   │       │   │   ├── favicon.ico
│   │       │           │   │       │   │   └── grid.png
│   │       │           │   │       │   └── js/
│   │       │           │   │       │       ├── api.js
│   │       │           │   │       │       ├── highlight.pack.js
│   │       │           │   │       │       └── jquery.json-view.min.js
│   │       │           │   │       ├── fonts/
│   │       │           │   │       │   ├── fontawesome-webfont.eot
│   │       │           │   │       │   ├── fontawesome-webfont.svg
│   │       │           │   │       │   ├── fontawesome-webfont.ttf
│   │       │           │   │       │   ├── fontawesome-webfont.woff
│   │       │           │   │       │   ├── glyphicons-halflings-regular.eot
│   │       │           │   │       │   ├── glyphicons-halflings-regular.svg
│   │       │           │   │       │   ├── glyphicons-halflings-regular.ttf
│   │       │           │   │       │   ├── glyphicons-halflings-regular.woff
│   │       │           │   │       │   └── glyphicons-halflings-regular.woff2
│   │       │           │   │       ├── img/
│   │       │           │   │       │   ├── glyphicons-halflings-white.png
│   │       │           │   │       │   ├── glyphicons-halflings.png
│   │       │           │   │       │   └── grid.png
│   │       │           │   │       └── js/
│   │       │           │   │           ├── ajax-form.js
│   │       │           │   │           ├── bootstrap.min.js
│   │       │           │   │           ├── coreapi-0.1.1.js
│   │       │           │   │           ├── csrf.js
│   │       │           │   │           ├── default.js
│   │       │           │   │           ├── jquery-3.7.1.min.js
│   │       │           │   │           ├── load-ajax-form.js
│   │       │           │   │           └── prettify-min.js
│   │       │           │   ├── status.py
│   │       │           │   ├── templates/
│   │       │           │   │   └── rest_framework/
│   │       │           │   │       ├── admin/
│   │       │           │   │       │   ├── detail.html
│   │       │           │   │       │   ├── dict_value.html
│   │       │           │   │       │   ├── list.html
│   │       │           │   │       │   ├── list_value.html
│   │       │           │   │       │   └── simple_list_value.html
│   │       │           │   │       ├── admin.html
│   │       │           │   │       ├── api.html
│   │       │           │   │       ├── base.html
│   │       │           │   │       ├── docs/
│   │       │           │   │       │   ├── auth/
│   │       │           │   │       │   │   ├── basic.html
│   │       │           │   │       │   │   ├── session.html
│   │       │           │   │       │   │   └── token.html
│   │       │           │   │       │   ├── document.html
│   │       │           │   │       │   ├── error.html
│   │       │           │   │       │   ├── index.html
│   │       │           │   │       │   ├── interact.html
│   │       │           │   │       │   ├── langs/
│   │       │           │   │       │   │   ├── javascript-intro.html
│   │       │           │   │       │   │   ├── javascript.html
│   │       │           │   │       │   │   ├── python-intro.html
│   │       │           │   │       │   │   ├── python.html
│   │       │           │   │       │   │   ├── shell-intro.html
│   │       │           │   │       │   │   └── shell.html
│   │       │           │   │       │   ├── link.html
│   │       │           │   │       │   └── sidebar.html
│   │       │           │   │       ├── filters/
│   │       │           │   │       │   ├── base.html
│   │       │           │   │       │   ├── ordering.html
│   │       │           │   │       │   └── search.html
│   │       │           │   │       ├── horizontal/
│   │       │           │   │       │   ├── checkbox.html
│   │       │           │   │       │   ├── checkbox_multiple.html
│   │       │           │   │       │   ├── dict_field.html
│   │       │           │   │       │   ├── fieldset.html
│   │       │           │   │       │   ├── form.html
│   │       │           │   │       │   ├── input.html
│   │       │           │   │       │   ├── list_field.html
│   │       │           │   │       │   ├── list_fieldset.html
│   │       │           │   │       │   ├── radio.html
│   │       │           │   │       │   ├── select.html
│   │       │           │   │       │   ├── select_multiple.html
│   │       │           │   │       │   └── textarea.html
│   │       │           │   │       ├── inline/
│   │       │           │   │       │   ├── checkbox.html
│   │       │           │   │       │   ├── checkbox_multiple.html
│   │       │           │   │       │   ├── dict_field.html
│   │       │           │   │       │   ├── fieldset.html
│   │       │           │   │       │   ├── form.html
│   │       │           │   │       │   ├── input.html
│   │       │           │   │       │   ├── list_field.html
│   │       │           │   │       │   ├── list_fieldset.html
│   │       │           │   │       │   ├── radio.html
│   │       │           │   │       │   ├── select.html
│   │       │           │   │       │   ├── select_multiple.html
│   │       │           │   │       │   └── textarea.html
│   │       │           │   │       ├── login.html
│   │       │           │   │       ├── login_base.html
│   │       │           │   │       ├── pagination/
│   │       │           │   │       │   ├── numbers.html
│   │       │           │   │       │   └── previous_and_next.html
│   │       │           │   │       ├── raw_data_form.html
│   │       │           │   │       ├── schema.js
│   │       │           │   │       └── vertical/
│   │       │           │   │           ├── checkbox.html
│   │       │           │   │           ├── checkbox_multiple.html
│   │       │           │   │           ├── dict_field.html
│   │       │           │   │           ├── fieldset.html
│   │       │           │   │           ├── form.html
│   │       │           │   │           ├── input.html
│   │       │           │   │           ├── list_field.html
│   │       │           │   │           ├── list_fieldset.html
│   │       │           │   │           ├── radio.html
│   │       │           │   │           ├── select.html
│   │       │           │   │           ├── select_multiple.html
│   │       │           │   │           └── textarea.html
│   │       │           │   ├── templatetags/
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   └── rest_framework.py
│   │       │           │   ├── test.py
│   │       │           │   ├── throttling.py
│   │       │           │   ├── urlpatterns.py
│   │       │           │   ├── urls.py
│   │       │           │   ├── utils/
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── breadcrumbs.py
│   │       │           │   │   ├── encoders.py
│   │       │           │   │   ├── field_mapping.py
│   │       │           │   │   ├── formatting.py
│   │       │           │   │   ├── html.py
│   │       │           │   │   ├── humanize_datetime.py
│   │       │           │   │   ├── json.py
│   │       │           │   │   ├── mediatypes.py
│   │       │           │   │   ├── model_meta.py
│   │       │           │   │   ├── representation.py
│   │       │           │   │   ├── serializer_helpers.py
│   │       │           │   │   ├── timezone.py
│   │       │           │   │   └── urls.py
│   │       │           │   ├── validators.py
│   │       │           │   ├── versioning.py
│   │       │           │   ├── views.py
│   │       │           │   └── viewsets.py
│   │       │           ├── rpds/
│   │       │           │   ├── __init__.py
│   │       │           │   ├── __init__.pyi
│   │       │           │   ├── py.typed
│   │       │           │   └── rpds.cpython-312-darwin.so
│   │       │           ├── rpds_py-0.30.0.dist-info/
│   │       │           │   ├── INSTALLER
│   │       │           │   ├── METADATA
│   │       │           │   ├── RECORD
│   │       │           │   ├── WHEEL
│   │       │           │   └── licenses/
│   │       │           │       └── LICENSE
│   │       │           ├── sqlparse/
│   │       │           │   ├── __init__.py
│   │       │           │   ├── __main__.py
│   │       │           │   ├── cli.py
│   │       │           │   ├── engine/
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── filter_stack.py
│   │       │           │   │   ├── grouping.py
│   │       │           │   │   └── statement_splitter.py
│   │       │           │   ├── exceptions.py
│   │       │           │   ├── filters/
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── aligned_indent.py
│   │       │           │   │   ├── others.py
│   │       │           │   │   ├── output.py
│   │       │           │   │   ├── reindent.py
│   │       │           │   │   ├── right_margin.py
│   │       │           │   │   └── tokens.py
│   │       │           │   ├── formatter.py
│   │       │           │   ├── keywords.py
│   │       │           │   ├── lexer.py
│   │       │           │   ├── py.typed
│   │       │           │   ├── sql.py
│   │       │           │   ├── tokens.py
│   │       │           │   └── utils.py
│   │       │           ├── sqlparse-0.5.5.dist-info/
│   │       │           │   ├── INSTALLER
│   │       │           │   ├── METADATA
│   │       │           │   ├── RECORD
│   │       │           │   ├── REQUESTED
│   │       │           │   ├── WHEEL
│   │       │           │   ├── entry_points.txt
│   │       │           │   └── licenses/
│   │       │           │       ├── AUTHORS
│   │       │           │       └── LICENSE
│   │       │           ├── typing_extensions-4.15.0.dist-info/
│   │       │           │   ├── INSTALLER
│   │       │           │   ├── METADATA
│   │       │           │   ├── RECORD
│   │       │           │   ├── WHEEL
│   │       │           │   └── licenses/
│   │       │           │       └── LICENSE
│   │       │           ├── typing_extensions.py
│   │       │           ├── uritemplate/
│   │       │           │   ├── __init__.py
│   │       │           │   ├── api.py
│   │       │           │   ├── orderedset.py
│   │       │           │   ├── py.typed
│   │       │           │   ├── template.py
│   │       │           │   └── variable.py
│   │       │           ├── uritemplate-4.2.0.dist-info/
│   │       │           │   ├── INSTALLER
│   │       │           │   ├── METADATA
│   │       │           │   ├── RECORD
│   │       │           │   ├── WHEEL
│   │       │           │   ├── licenses/
│   │       │           │   │   └── LICENSE
│   │       │           │   └── top_level.txt
│   │       │           └── yaml/
│   │       │               ├── __init__.py
│   │       │               ├── _yaml.cpython-312-darwin.so
│   │       │               ├── composer.py
│   │       │               ├── constructor.py
│   │       │               ├── cyaml.py
│   │       │               ├── dumper.py
│   │       │               ├── emitter.py
│   │       │               ├── error.py
│   │       │               ├── events.py
│   │       │               ├── loader.py
│   │       │               ├── nodes.py
│   │       │               ├── parser.py
│   │       │               ├── reader.py
│   │       │               ├── representer.py
│   │       │               ├── resolver.py
│   │       │               ├── scanner.py
│   │       │               ├── serializer.py
│   │       │               └── tokens.py
│   │       └── pyvenv.cfg
│   └── web/
│       ├── .next/
│       │   └── dev/
│       │       ├── build/
│       │       │   ├── chunks/
│       │       │   │   ├── [root-of-the-server]__51225daf._.js
│       │       │   │   ├── [root-of-the-server]__51225daf._.js.map
│       │       │   │   ├── [root-of-the-server]__974941ed._.js
│       │       │   │   ├── [root-of-the-server]__974941ed._.js.map
│       │       │   │   ├── [turbopack-node]_transforms_postcss_ts_6920245c._.js
│       │       │   │   ├── [turbopack-node]_transforms_postcss_ts_6920245c._.js.map
│       │       │   │   ├── [turbopack]_runtime.js
│       │       │   │   ├── [turbopack]_runtime.js.map
│       │       │   │   ├── node_modules_fe693df6._.js
│       │       │   │   └── node_modules_fe693df6._.js.map
│       │       │   ├── package.json
│       │       │   ├── postcss.js
│       │       │   └── postcss.js.map
│       │       ├── build-manifest.json
│       │       ├── cache/
│       │       │   ├── .rscinfo
│       │       │   ├── next-devtools-config.json
│       │       │   └── turbopack/
│       │       │       └── v16.1.0-canary.22-66-gf01cf07ab/
│       │       │           ├── 00000001.sst
│       │       │           ├── 00000003.sst
│       │       │           ├── 00000004.sst
│       │       │           ├── 00000005.sst
│       │       │           ├── 00000006.meta
│       │       │           ├── 00000007.meta
│       │       │           ├── 00000009.meta
│       │       │           ├── 00000010.meta
│       │       │           ├── 00000015.sst
│       │       │           ├── 00000016.sst
│       │       │           ├── 00000017.sst
│       │       │           ├── 00000018.sst
│       │       │           ├── 00000019.meta
│       │       │           ├── 00000020.meta
│       │       │           ├── 00000022.meta
│       │       │           ├── 00000023.meta
│       │       │           ├── 00000024.sst
│       │       │           ├── 00000026.sst
│       │       │           ├── 00000027.sst
│       │       │           ├── 00000028.sst
│       │       │           ├── 00000029.meta
│       │       │           ├── 00000030.meta
│       │       │           ├── 00000032.meta
│       │       │           ├── 00000033.meta
│       │       │           ├── 00000035.sst
│       │       │           ├── 00000036.sst
│       │       │           ├── 00000037.sst
│       │       │           ├── 00000038.sst
│       │       │           ├── 00000039.meta
│       │       │           ├── 00000040.meta
│       │       │           ├── 00000042.meta
│       │       │           ├── 00000043.meta
│       │       │           ├── 00000045.sst
│       │       │           ├── 00000046.sst
│       │       │           ├── 00000047.meta
│       │       │           ├── 00000049.meta
│       │       │           ├── 00000051.sst
│       │       │           ├── 00000052.sst
│       │       │           ├── 00000053.meta
│       │       │           ├── 00000055.meta
│       │       │           ├── 00000057.sst
│       │       │           ├── 00000058.sst
│       │       │           ├── 00000059.meta
│       │       │           ├── 00000060.meta
│       │       │           ├── 00000062.sst
│       │       │           ├── 00000064.sst
│       │       │           ├── 00000065.meta
│       │       │           ├── 00000066.meta
│       │       │           ├── 00000069.sst
│       │       │           ├── 00000070.sst
│       │       │           ├── 00000071.meta
│       │       │           ├── 00000073.meta
│       │       │           ├── 00000075.sst
│       │       │           ├── 00000076.sst
│       │       │           ├── 00000077.sst
│       │       │           ├── 00000078.sst
│       │       │           ├── 00000079.meta
│       │       │           ├── 00000080.meta
│       │       │           ├── 00000081.meta
│       │       │           ├── 00000083.meta
│       │       │           ├── 00000084.sst
│       │       │           ├── 00000086.sst
│       │       │           ├── 00000087.meta
│       │       │           ├── 00000088.meta
│       │       │           ├── 00000090.sst
│       │       │           ├── 00000092.sst
│       │       │           ├── 00000093.meta
│       │       │           ├── 00000094.meta
│       │       │           ├── 00000097.sst
│       │       │           ├── 00000098.sst
│       │       │           ├── 00000099.sst
│       │       │           ├── 00000100.sst
│       │       │           ├── 00000101.meta
│       │       │           ├── 00000102.meta
│       │       │           ├── 00000103.meta
│       │       │           ├── 00000105.meta
│       │       │           ├── 00000107.sst
│       │       │           ├── 00000108.sst
│       │       │           ├── 00000109.meta
│       │       │           ├── 00000111.meta
│       │       │           ├── 00000113.sst
│       │       │           ├── 00000114.sst
│       │       │           ├── 00000115.sst
│       │       │           ├── 00000116.sst
│       │       │           ├── 00000117.meta
│       │       │           ├── 00000118.meta
│       │       │           ├── 00000120.meta
│       │       │           ├── 00000121.meta
│       │       │           ├── 00000122.sst
│       │       │           ├── 00000124.sst
│       │       │           ├── 00000125.sst
│       │       │           ├── 00000126.sst
│       │       │           ├── 00000127.meta
│       │       │           ├── 00000128.meta
│       │       │           ├── 00000129.meta
│       │       │           ├── 00000130.meta
│       │       │           ├── 00000133.sst
│       │       │           ├── 00000134.sst
│       │       │           ├── 00000135.sst
│       │       │           ├── 00000136.sst
│       │       │           ├── 00000137.meta
│       │       │           ├── 00000138.meta
│       │       │           ├── 00000140.meta
│       │       │           ├── 00000141.meta
│       │       │           ├── 00000143.sst
│       │       │           ├── 00000144.sst
│       │       │           ├── 00000145.sst
│       │       │           ├── 00000146.sst
│       │       │           ├── 00000147.meta
│       │       │           ├── 00000148.meta
│       │       │           ├── 00000150.meta
│       │       │           ├── 00000151.meta
│       │       │           ├── 00000153.sst
│       │       │           ├── 00000154.sst
│       │       │           ├── 00000155.sst
│       │       │           ├── 00000156.sst
│       │       │           ├── 00000157.meta
│       │       │           ├── 00000158.meta
│       │       │           ├── 00000160.meta
│       │       │           ├── 00000161.meta
│       │       │           ├── 00000162.sst
│       │       │           ├── 00000164.sst
│       │       │           ├── 00000165.meta
│       │       │           ├── 00000166.meta
│       │       │           ├── 00000172.sst
│       │       │           ├── 00000174.sst
│       │       │           ├── 00000175.meta
│       │       │           ├── 00000176.meta
│       │       │           ├── 00000178.sst
│       │       │           ├── 00000180.sst
│       │       │           ├── 00000181.meta
│       │       │           ├── 00000182.meta
│       │       │           ├── 00000184.sst
│       │       │           ├── 00000186.sst
│       │       │           ├── 00000187.meta
│       │       │           ├── 00000188.meta
│       │       │           ├── 00000191.sst
│       │       │           ├── 00000192.sst
│       │       │           ├── 00000193.sst
│       │       │           ├── 00000194.sst
│       │       │           ├── 00000195.meta
│       │       │           ├── 00000197.meta
│       │       │           ├── 00000198.meta
│       │       │           ├── 00000199.meta
│       │       │           ├── 00000201.sst
│       │       │           ├── 00000202.sst
│       │       │           ├── 00000203.meta
│       │       │           ├── 00000204.meta
│       │       │           ├── 00000206.sst
│       │       │           ├── 00000208.sst
│       │       │           ├── 00000209.sst
│       │       │           ├── 00000210.sst
│       │       │           ├── 00000211.meta
│       │       │           ├── 00000212.meta
│       │       │           ├── 00000213.meta
│       │       │           ├── 00000215.meta
│       │       │           ├── 00000216.sst
│       │       │           ├── 00000218.sst
│       │       │           ├── 00000219.meta
│       │       │           ├── 00000221.meta
│       │       │           ├── 00000222.sst
│       │       │           ├── 00000224.sst
│       │       │           ├── 00000225.meta
│       │       │           ├── 00000226.meta
│       │       │           ├── 00000228.sst
│       │       │           ├── 00000230.sst
│       │       │           ├── 00000231.sst
│       │       │           ├── 00000232.sst
│       │       │           ├── 00000233.meta
│       │       │           ├── 00000234.meta
│       │       │           ├── 00000236.meta
│       │       │           ├── 00000237.meta
│       │       │           ├── 00000238.sst
│       │       │           ├── 00000240.sst
│       │       │           ├── 00000241.meta
│       │       │           ├── 00000242.meta
│       │       │           ├── 00000244.sst
│       │       │           ├── 00000246.sst
│       │       │           ├── 00000247.sst
│       │       │           ├── 00000248.sst
│       │       │           ├── 00000249.meta
│       │       │           ├── 00000250.meta
│       │       │           ├── 00000252.meta
│       │       │           ├── 00000253.meta
│       │       │           ├── 00000254.sst
│       │       │           ├── 00000256.sst
│       │       │           ├── 00000257.meta
│       │       │           ├── 00000258.meta
│       │       │           ├── 00000260.sst
│       │       │           ├── 00000262.sst
│       │       │           ├── 00000263.meta
│       │       │           ├── 00000264.meta
│       │       │           ├── 00000266.sst
│       │       │           ├── 00000268.sst
│       │       │           ├── 00000269.meta
│       │       │           ├── 00000271.meta
│       │       │           ├── 00000272.sst
│       │       │           ├── 00000274.sst
│       │       │           ├── 00000275.meta
│       │       │           ├── 00000277.meta
│       │       │           ├── 00000279.sst
│       │       │           ├── 00000280.sst
│       │       │           ├── 00000281.meta
│       │       │           ├── 00000282.meta
│       │       │           ├── 00000284.sst
│       │       │           ├── 00000286.sst
│       │       │           ├── 00000287.meta
│       │       │           ├── 00000288.meta
│       │       │           ├── 00000290.sst
│       │       │           ├── 00000292.sst
│       │       │           ├── 00000293.meta
│       │       │           ├── 00000294.meta
│       │       │           ├── 00000297.sst
│       │       │           ├── 00000298.sst
│       │       │           ├── 00000299.sst
│       │       │           ├── 00000300.sst
│       │       │           ├── 00000301.meta
│       │       │           ├── 00000302.meta
│       │       │           ├── 00000304.meta
│       │       │           ├── 00000305.meta
│       │       │           ├── 00000306.sst
│       │       │           ├── 00000308.sst
│       │       │           ├── 00000309.meta
│       │       │           ├── 00000311.meta
│       │       │           ├── 00000313.sst
│       │       │           ├── 00000314.sst
│       │       │           ├── 00000315.meta
│       │       │           ├── 00000317.meta
│       │       │           ├── 00000319.sst
│       │       │           ├── 00000320.sst
│       │       │           ├── 00000321.meta
│       │       │           ├── 00000323.meta
│       │       │           ├── 00000324.sst
│       │       │           ├── 00000326.sst
│       │       │           ├── 00000327.meta
│       │       │           ├── 00000328.meta
│       │       │           ├── 00000331.sst
│       │       │           ├── 00000332.sst
│       │       │           ├── 00000333.sst
│       │       │           ├── 00000334.sst
│       │       │           ├── 00000335.meta
│       │       │           ├── 00000336.meta
│       │       │           ├── 00000337.meta
│       │       │           ├── 00000339.meta
│       │       │           ├── 00000341.sst
│       │       │           ├── 00000342.sst
│       │       │           ├── 00000343.sst
│       │       │           ├── 00000344.sst
│       │       │           ├── 00000345.meta
│       │       │           ├── 00000346.meta
│       │       │           ├── 00000348.meta
│       │       │           ├── 00000349.meta
│       │       │           ├── 00000351.sst
│       │       │           ├── 00000352.sst
│       │       │           ├── 00000353.sst
│       │       │           ├── 00000354.sst
│       │       │           ├── 00000355.meta
│       │       │           ├── 00000356.meta
│       │       │           ├── 00000357.meta
│       │       │           ├── 00000359.meta
│       │       │           ├── 00000361.sst
│       │       │           ├── 00000362.sst
│       │       │           ├── 00000363.meta
│       │       │           ├── 00000365.meta
│       │       │           ├── 00000371.sst
│       │       │           ├── 00000372.sst
│       │       │           ├── 00000373.sst
│       │       │           ├── 00000374.sst
│       │       │           ├── 00000375.meta
│       │       │           ├── 00000376.meta
│       │       │           ├── 00000378.meta
│       │       │           ├── 00000379.meta
│       │       │           ├── 00000381.sst
│       │       │           ├── 00000382.sst
│       │       │           ├── 00000383.meta
│       │       │           ├── 00000384.meta
│       │       │           ├── 00000387.sst
│       │       │           ├── 00000388.sst
│       │       │           ├── 00000389.meta
│       │       │           ├── 00000390.meta
│       │       │           ├── 00000393.sst
│       │       │           ├── 00000394.sst
│       │       │           ├── 00000395.sst
│       │       │           ├── 00000396.sst
│       │       │           ├── 00000397.meta
│       │       │           ├── 00000399.meta
│       │       │           ├── 00000400.meta
│       │       │           ├── 00000401.meta
│       │       │           ├── 00000403.sst
│       │       │           ├── 00000404.sst
│       │       │           ├── 00000405.sst
│       │       │           ├── 00000406.sst
│       │       │           ├── 00000407.meta
│       │       │           ├── 00000408.meta
│       │       │           ├── 00000409.meta
│       │       │           ├── 00000410.meta
│       │       │           ├── 00000413.sst
│       │       │           ├── 00000414.sst
│       │       │           ├── 00000415.sst
│       │       │           ├── 00000416.sst
│       │       │           ├── 00000417.meta
│       │       │           ├── 00000418.meta
│       │       │           ├── 00000419.meta
│       │       │           ├── 00000420.meta
│       │       │           ├── 00000423.sst
│       │       │           ├── 00000424.sst
│       │       │           ├── 00000425.sst
│       │       │           ├── 00000426.sst
│       │       │           ├── 00000427.meta
│       │       │           ├── 00000429.meta
│       │       │           ├── 00000430.meta
│       │       │           ├── 00000431.meta
│       │       │           ├── 00000432.sst
│       │       │           ├── 00000434.sst
│       │       │           ├── 00000435.sst
│       │       │           ├── 00000436.sst
│       │       │           ├── 00000437.meta
│       │       │           ├── 00000439.meta
│       │       │           ├── 00000440.meta
│       │       │           ├── 00000441.meta
│       │       │           ├── 00000443.sst
│       │       │           ├── 00000444.sst
│       │       │           ├── 00000445.sst
│       │       │           ├── 00000446.sst
│       │       │           ├── 00000447.meta
│       │       │           ├── 00000448.meta
│       │       │           ├── 00000449.meta
│       │       │           ├── 00000451.meta
│       │       │           ├── 00000453.sst
│       │       │           ├── 00000454.sst
│       │       │           ├── 00000455.sst
│       │       │           ├── 00000456.sst
│       │       │           ├── 00000457.meta
│       │       │           ├── 00000458.meta
│       │       │           ├── 00000460.meta
│       │       │           ├── 00000461.meta
│       │       │           ├── 00000467.sst
│       │       │           ├── 00000468.sst
│       │       │           ├── 00000469.sst
│       │       │           ├── 00000470.sst
│       │       │           ├── 00000471.meta
│       │       │           ├── 00000473.meta
│       │       │           ├── 00000474.meta
│       │       │           ├── 00000475.meta
│       │       │           ├── 00000477.sst
│       │       │           ├── 00000478.sst
│       │       │           ├── 00000479.sst
│       │       │           ├── 00000480.sst
│       │       │           ├── 00000481.meta
│       │       │           ├── 00000482.meta
│       │       │           ├── 00000483.meta
│       │       │           ├── 00000485.meta
│       │       │           ├── 00000487.sst
│       │       │           ├── 00000488.sst
│       │       │           ├── 00000489.sst
│       │       │           ├── 00000490.sst
│       │       │           ├── 00000491.meta
│       │       │           ├── 00000492.meta
│       │       │           ├── 00000494.meta
│       │       │           ├── 00000495.meta
│       │       │           ├── 00000497.sst
│       │       │           ├── 00000498.sst
│       │       │           ├── 00000499.sst
│       │       │           ├── 00000500.sst
│       │       │           ├── 00000501.meta
│       │       │           ├── 00000502.meta
│       │       │           ├── 00000504.meta
│       │       │           ├── 00000505.meta
│       │       │           ├── 00000507.sst
│       │       │           ├── 00000508.sst
│       │       │           ├── 00000509.sst
│       │       │           ├── 00000510.sst
│       │       │           ├── 00000511.meta
│       │       │           ├── 00000512.meta
│       │       │           ├── 00000514.meta
│       │       │           ├── 00000515.meta
│       │       │           ├── 00000517.sst
│       │       │           ├── 00000518.sst
│       │       │           ├── 00000519.meta
│       │       │           ├── 00000520.meta
│       │       │           ├── 00000523.sst
│       │       │           ├── 00000524.sst
│       │       │           ├── 00000525.sst
│       │       │           ├── 00000526.sst
│       │       │           ├── 00000527.meta
│       │       │           ├── 00000529.meta
│       │       │           ├── 00000530.meta
│       │       │           ├── 00000531.meta
│       │       │           ├── 00000532.sst
│       │       │           ├── 00000534.sst
│       │       │           ├── 00000535.meta
│       │       │           ├── 00000536.meta
│       │       │           ├── 00000539.sst
│       │       │           ├── 00000540.sst
│       │       │           ├── 00000541.sst
│       │       │           ├── 00000542.sst
│       │       │           ├── 00000543.meta
│       │       │           ├── 00000545.meta
│       │       │           ├── 00000546.meta
│       │       │           ├── 00000547.meta
│       │       │           ├── 00000553.sst
│       │       │           ├── 00000554.sst
│       │       │           ├── 00000555.meta
│       │       │           ├── 00000557.meta
│       │       │           ├── 00000559.sst
│       │       │           ├── 00000560.sst
│       │       │           ├── 00000561.meta
│       │       │           ├── 00000563.meta
│       │       │           ├── 00000565.sst
│       │       │           ├── 00000566.sst
│       │       │           ├── 00000567.sst
│       │       │           ├── 00000568.sst
│       │       │           ├── 00000569.meta
│       │       │           ├── 00000570.meta
│       │       │           ├── 00000572.meta
│       │       │           ├── 00000573.meta
│       │       │           ├── 00000574.sst
│       │       │           ├── 00000576.sst
│       │       │           ├── 00000577.sst
│       │       │           ├── 00000578.sst
│       │       │           ├── 00000579.meta
│       │       │           ├── 00000580.meta
│       │       │           ├── 00000582.meta
│       │       │           ├── 00000583.meta
│       │       │           ├── 00000584.sst
│       │       │           ├── 00000586.sst
│       │       │           ├── 00000587.meta
│       │       │           ├── 00000588.meta
│       │       │           ├── 00000590.sst
│       │       │           ├── 00000592.sst
│       │       │           ├── 00000593.meta
│       │       │           ├── 00000594.meta
│       │       │           ├── 00000596.sst
│       │       │           ├── 00000598.sst
│       │       │           ├── 00000599.meta
│       │       │           ├── 00000600.meta
│       │       │           ├── 00000603.sst
│       │       │           ├── 00000604.sst
│       │       │           ├── 00000605.meta
│       │       │           ├── 00000606.meta
│       │       │           ├── 00000609.sst
│       │       │           ├── 00000610.sst
│       │       │           ├── 00000611.meta
│       │       │           ├── 00000612.meta
│       │       │           ├── 00000614.sst
│       │       │           ├── 00000616.sst
│       │       │           ├── 00000617.meta
│       │       │           ├── 00000618.meta
│       │       │           ├── 00000620.sst
│       │       │           ├── 00000622.sst
│       │       │           ├── 00000623.sst
│       │       │           ├── 00000624.sst
│       │       │           ├── 00000625.meta
│       │       │           ├── 00000627.meta
│       │       │           ├── 00000628.meta
│       │       │           ├── 00000629.meta
│       │       │           ├── 00000631.sst
│       │       │           ├── 00000632.sst
│       │       │           ├── 00000633.sst
│       │       │           ├── 00000634.sst
│       │       │           ├── 00000635.meta
│       │       │           ├── 00000636.meta
│       │       │           ├── 00000638.meta
│       │       │           ├── 00000639.meta
│       │       │           ├── 00000641.sst
│       │       │           ├── 00000642.sst
│       │       │           ├── 00000643.meta
│       │       │           ├── 00000644.meta
│       │       │           ├── 00000646.sst
│       │       │           ├── 00000648.sst
│       │       │           ├── 00000649.meta
│       │       │           ├── 00000650.meta
│       │       │           ├── 00000652.sst
│       │       │           ├── 00000654.sst
│       │       │           ├── 00000655.meta
│       │       │           ├── 00000656.meta
│       │       │           ├── 00000659.sst
│       │       │           ├── 00000660.sst
│       │       │           ├── 00000661.sst
│       │       │           ├── 00000662.sst
│       │       │           ├── 00000663.meta
│       │       │           ├── 00000664.meta
│       │       │           ├── 00000666.meta
│       │       │           ├── 00000667.meta
│       │       │           ├── 00000669.sst
│       │       │           ├── 00000670.sst
│       │       │           ├── 00000671.sst
│       │       │           ├── 00000672.sst
│       │       │           ├── 00000673.meta
│       │       │           ├── 00000674.meta
│       │       │           ├── 00000676.meta
│       │       │           ├── 00000677.meta
│       │       │           ├── 00000679.sst
│       │       │           ├── 00000680.sst
│       │       │           ├── 00000681.meta
│       │       │           ├── 00000682.meta
│       │       │           ├── 00000685.sst
│       │       │           ├── 00000686.sst
│       │       │           ├── 00000687.sst
│       │       │           ├── 00000688.sst
│       │       │           ├── 00000689.meta
│       │       │           ├── 00000690.meta
│       │       │           ├── 00000692.meta
│       │       │           ├── 00000693.meta
│       │       │           ├── 00000695.sst
│       │       │           ├── 00000696.sst
│       │       │           ├── 00000697.meta
│       │       │           ├── 00000698.meta
│       │       │           ├── 00000700.sst
│       │       │           ├── 00000702.sst
│       │       │           ├── 00000703.meta
│       │       │           ├── 00000705.meta
│       │       │           ├── 00000706.sst
│       │       │           ├── 00000708.sst
│       │       │           ├── 00000709.meta
│       │       │           ├── 00000710.meta
│       │       │           ├── 00000712.sst
│       │       │           ├── 00000714.sst
│       │       │           ├── 00000715.meta
│       │       │           ├── 00000716.meta
│       │       │           ├── 00000719.sst
│       │       │           ├── 00000720.sst
│       │       │           ├── 00000721.meta
│       │       │           ├── 00000722.meta
│       │       │           ├── 00000724.sst
│       │       │           ├── 00000726.sst
│       │       │           ├── 00000727.meta
│       │       │           ├── 00000728.meta
│       │       │           ├── 00000731.sst
│       │       │           ├── 00000732.sst
│       │       │           ├── 00000733.meta
│       │       │           ├── 00000735.meta
│       │       │           ├── 00000737.sst
│       │       │           ├── 00000738.sst
│       │       │           ├── 00000739.meta
│       │       │           ├── 00000740.meta
│       │       │           ├── 00000743.sst
│       │       │           ├── 00000744.sst
│       │       │           ├── 00000745.meta
│       │       │           ├── 00000746.meta
│       │       │           ├── 00000748.sst
│       │       │           ├── 00000750.sst
│       │       │           ├── 00000751.meta
│       │       │           ├── 00000752.meta
│       │       │           ├── 00000755.sst
│       │       │           ├── 00000756.sst
│       │       │           ├── 00000757.sst
│       │       │           ├── 00000758.sst
│       │       │           ├── 00000759.meta
│       │       │           ├── 00000760.meta
│       │       │           ├── 00000762.meta
│       │       │           ├── 00000763.meta
│       │       │           ├── 00000765.sst
│       │       │           ├── 00000766.sst
│       │       │           ├── 00000767.meta
│       │       │           ├── 00000768.meta
│       │       │           ├── 00000770.sst
│       │       │           ├── 00000772.sst
│       │       │           ├── 00000773.meta
│       │       │           ├── 00000774.meta
│       │       │           ├── 00000777.sst
│       │       │           ├── 00000778.sst
│       │       │           ├── 00000779.meta
│       │       │           ├── 00000781.meta
│       │       │           ├── 00000783.sst
│       │       │           ├── 00000784.sst
│       │       │           ├── 00000785.meta
│       │       │           ├── 00000786.meta
│       │       │           ├── 00000789.sst
│       │       │           ├── 00000790.sst
│       │       │           ├── 00000791.sst
│       │       │           ├── 00000792.sst
│       │       │           ├── 00000793.meta
│       │       │           ├── 00000794.meta
│       │       │           ├── 00000795.meta
│       │       │           ├── 00000797.meta
│       │       │           ├── 00000799.sst
│       │       │           ├── 00000800.sst
│       │       │           ├── 00000801.sst
│       │       │           ├── 00000802.sst
│       │       │           ├── 00000803.meta
│       │       │           ├── 00000804.meta
│       │       │           ├── 00000806.meta
│       │       │           ├── 00000807.meta
│       │       │           ├── 00000809.sst
│       │       │           ├── 00000810.sst
│       │       │           ├── 00000811.meta
│       │       │           ├── 00000812.meta
│       │       │           ├── 00000814.sst
│       │       │           ├── 00000816.sst
│       │       │           ├── 00000817.meta
│       │       │           ├── 00000818.meta
│       │       │           ├── 00000820.sst
│       │       │           ├── 00000822.sst
│       │       │           ├── 00000823.meta
│       │       │           ├── 00000824.meta
│       │       │           ├── 00000826.sst
│       │       │           ├── 00000828.sst
│       │       │           ├── 00000829.sst
│       │       │           ├── 00000830.sst
│       │       │           ├── 00000831.meta
│       │       │           ├── 00000832.meta
│       │       │           ├── 00000833.meta
│       │       │           ├── 00000834.meta
│       │       │           ├── 00000837.sst
│       │       │           ├── 00000838.sst
│       │       │           ├── 00000839.sst
│       │       │           ├── 00000840.sst
│       │       │           ├── 00000841.meta
│       │       │           ├── 00000842.meta
│       │       │           ├── 00000844.meta
│       │       │           ├── 00000845.meta
│       │       │           ├── 00000846.sst
│       │       │           ├── 00000848.sst
│       │       │           ├── 00000849.sst
│       │       │           ├── 00000850.sst
│       │       │           ├── 00000851.meta
│       │       │           ├── 00000852.meta
│       │       │           ├── 00000853.meta
│       │       │           ├── 00000854.meta
│       │       │           ├── 00000857.sst
│       │       │           ├── 00000858.sst
│       │       │           ├── 00000859.sst
│       │       │           ├── 00000860.sst
│       │       │           ├── 00000861.meta
│       │       │           ├── 00000862.meta
│       │       │           ├── 00000863.meta
│       │       │           ├── 00000865.meta
│       │       │           ├── 00000867.sst
│       │       │           ├── 00000868.sst
│       │       │           ├── 00000869.meta
│       │       │           ├── 00000870.meta
│       │       │           ├── 00000872.sst
│       │       │           ├── 00000874.sst
│       │       │           ├── 00000875.meta
│       │       │           ├── 00000876.meta
│       │       │           ├── 00000878.sst
│       │       │           ├── 00000880.sst
│       │       │           ├── 00000881.sst
│       │       │           ├── 00000882.sst
│       │       │           ├── 00000883.meta
│       │       │           ├── 00000884.meta
│       │       │           ├── 00000886.meta
│       │       │           ├── 00000887.meta
│       │       │           ├── 00000889.sst
│       │       │           ├── 00000890.sst
│       │       │           ├── 00000891.sst
│       │       │           ├── 00000892.sst
│       │       │           ├── 00000893.meta
│       │       │           ├── 00000894.meta
│       │       │           ├── 00000896.meta
│       │       │           ├── 00000897.meta
│       │       │           ├── 00000899.sst
│       │       │           ├── 00000900.sst
│       │       │           ├── 00000901.sst
│       │       │           ├── 00000902.sst
│       │       │           ├── 00000903.meta
│       │       │           ├── 00000904.meta
│       │       │           ├── 00000906.meta
│       │       │           ├── 00000907.meta
│       │       │           ├── 00000909.sst
│       │       │           ├── 00000910.sst
│       │       │           ├── 00000911.meta
│       │       │           ├── 00000912.meta
│       │       │           ├── 00000915.sst
│       │       │           ├── 00000916.sst
│       │       │           ├── 00000917.meta
│       │       │           ├── 00000918.meta
│       │       │           ├── 00000920.sst
│       │       │           ├── 00000922.sst
│       │       │           ├── 00000923.meta
│       │       │           ├── 00000924.meta
│       │       │           ├── 00000926.sst
│       │       │           ├── 00000928.sst
│       │       │           ├── 00000929.meta
│       │       │           ├── 00000930.meta
│       │       │           ├── 00000932.sst
│       │       │           ├── 00000934.sst
│       │       │           ├── 00000935.meta
│       │       │           ├── 00000936.meta
│       │       │           ├── 00000939.sst
│       │       │           ├── 00000940.sst
│       │       │           ├── 00000941.sst
│       │       │           ├── 00000942.sst
│       │       │           ├── 00000943.meta
│       │       │           ├── 00000944.meta
│       │       │           ├── 00000946.meta
│       │       │           ├── 00000947.meta
│       │       │           ├── 00000948.sst
│       │       │           ├── 00000950.sst
│       │       │           ├── 00000951.meta
│       │       │           ├── 00000952.meta
│       │       │           ├── 00000954.sst
│       │       │           ├── 00000956.sst
│       │       │           ├── 00000957.meta
│       │       │           ├── 00000958.meta
│       │       │           ├── 00000960.sst
│       │       │           ├── 00000962.sst
│       │       │           ├── 00000963.meta
│       │       │           ├── 00000964.meta
│       │       │           ├── 00000966.sst
│       │       │           ├── 00000968.sst
│       │       │           ├── 00000969.meta
│       │       │           ├── 00000971.meta
│       │       │           ├── 00000973.sst
│       │       │           ├── 00000974.sst
│       │       │           ├── 00000975.meta
│       │       │           ├── 00000976.meta
│       │       │           ├── 00000978.sst
│       │       │           ├── 00000980.sst
│       │       │           ├── 00000981.meta
│       │       │           ├── 00000982.meta
│       │       │           ├── 00000984.sst
│       │       │           ├── 00000986.sst
│       │       │           ├── 00000987.meta
│       │       │           ├── 00000988.meta
│       │       │           ├── 00000991.sst
│       │       │           ├── 00000992.sst
│       │       │           ├── 00000993.meta
│       │       │           ├── 00000994.meta
│       │       │           ├── 00000997.sst
│       │       │           ├── 00000998.sst
│       │       │           ├── 00000999.sst
│       │       │           ├── 00001000.sst
│       │       │           ├── 00001001.meta
│       │       │           ├── 00001002.meta
│       │       │           ├── 00001004.meta
│       │       │           ├── 00001005.meta
│       │       │           ├── 00001007.sst
│       │       │           ├── 00001008.sst
│       │       │           ├── 00001009.sst
│       │       │           ├── 00001010.sst
│       │       │           ├── 00001011.meta
│       │       │           ├── 00001012.meta
│       │       │           ├── 00001014.meta
│       │       │           ├── 00001015.meta
│       │       │           ├── 00001017.sst
│       │       │           ├── 00001018.sst
│       │       │           ├── 00001019.meta
│       │       │           ├── 00001020.meta
│       │       │           ├── 00001025.del
│       │       │           ├── 00001027.sst
│       │       │           ├── 00001028.sst
│       │       │           ├── 00001029.sst
│       │       │           ├── 00001030.sst
│       │       │           ├── 00001031.meta
│       │       │           ├── 00001032.meta
│       │       │           ├── 00001034.meta
│       │       │           ├── 00001035.meta
│       │       │           ├── 00001037.sst
│       │       │           ├── 00001038.sst
│       │       │           ├── 00001039.meta
│       │       │           ├── 00001040.meta
│       │       │           ├── 00001042.sst
│       │       │           ├── 00001044.sst
│       │       │           ├── 00001045.meta
│       │       │           ├── 00001046.meta
│       │       │           ├── 00001049.sst
│       │       │           ├── 00001050.sst
│       │       │           ├── 00001051.meta
│       │       │           ├── 00001053.meta
│       │       │           ├── 00001055.sst
│       │       │           ├── 00001056.sst
│       │       │           ├── 00001057.sst
│       │       │           ├── 00001058.sst
│       │       │           ├── 00001059.meta
│       │       │           ├── 00001060.meta
│       │       │           ├── 00001061.meta
│       │       │           ├── 00001063.meta
│       │       │           ├── 00001065.sst
│       │       │           ├── 00001066.sst
│       │       │           ├── 00001067.meta
│       │       │           ├── 00001068.meta
│       │       │           ├── 00001070.sst
│       │       │           ├── 00001072.sst
│       │       │           ├── 00001073.meta
│       │       │           ├── 00001074.meta
│       │       │           ├── 00001077.sst
│       │       │           ├── 00001078.sst
│       │       │           ├── 00001079.meta
│       │       │           ├── 00001080.meta
│       │       │           ├── 00001082.sst
│       │       │           ├── 00001084.sst
│       │       │           ├── 00001085.sst
│       │       │           ├── 00001086.sst
│       │       │           ├── 00001087.meta
│       │       │           ├── 00001088.meta
│       │       │           ├── 00001089.meta
│       │       │           ├── 00001090.meta
│       │       │           ├── 00001092.sst
│       │       │           ├── 00001094.sst
│       │       │           ├── 00001095.meta
│       │       │           ├── 00001096.meta
│       │       │           ├── 00001099.sst
│       │       │           ├── 00001100.sst
│       │       │           ├── 00001101.meta
│       │       │           ├── 00001102.meta
│       │       │           ├── 00001104.sst
│       │       │           ├── 00001106.sst
│       │       │           ├── 00001107.meta
│       │       │           ├── 00001108.meta
│       │       │           ├── 00001111.sst
│       │       │           ├── 00001112.sst
│       │       │           ├── 00001113.sst
│       │       │           ├── 00001114.sst
│       │       │           ├── 00001115.meta
│       │       │           ├── 00001116.meta
│       │       │           ├── 00001118.meta
│       │       │           ├── 00001119.meta
│       │       │           ├── 00001121.sst
│       │       │           ├── 00001122.sst
│       │       │           ├── 00001123.sst
│       │       │           ├── 00001124.sst
│       │       │           ├── 00001125.meta
│       │       │           ├── 00001126.meta
│       │       │           ├── 00001127.meta
│       │       │           ├── 00001128.meta
│       │       │           ├── 00001130.sst
│       │       │           ├── 00001132.sst
│       │       │           ├── 00001133.meta
│       │       │           ├── 00001134.meta
│       │       │           ├── 00001137.sst
│       │       │           ├── 00001138.sst
│       │       │           ├── 00001139.meta
│       │       │           ├── 00001140.meta
│       │       │           ├── 00001143.sst
│       │       │           ├── 00001144.sst
│       │       │           ├── 00001145.sst
│       │       │           ├── 00001146.sst
│       │       │           ├── 00001147.meta
│       │       │           ├── 00001148.meta
│       │       │           ├── 00001150.meta
│       │       │           ├── 00001151.meta
│       │       │           ├── 00001152.sst
│       │       │           ├── 00001154.sst
│       │       │           ├── 00001155.meta
│       │       │           ├── 00001156.meta
│       │       │           ├── 00001159.sst
│       │       │           ├── 00001160.sst
│       │       │           ├── 00001161.sst
│       │       │           ├── 00001162.sst
│       │       │           ├── 00001163.meta
│       │       │           ├── 00001164.meta
│       │       │           ├── 00001166.meta
│       │       │           ├── 00001167.meta
│       │       │           ├── 00001169.sst
│       │       │           ├── 00001170.sst
│       │       │           ├── 00001171.sst
│       │       │           ├── 00001172.sst
│       │       │           ├── 00001173.meta
│       │       │           ├── 00001174.meta
│       │       │           ├── 00001176.meta
│       │       │           ├── 00001177.meta
│       │       │           ├── 00001178.sst
│       │       │           ├── 00001180.sst
│       │       │           ├── 00001181.meta
│       │       │           ├── 00001182.meta
│       │       │           ├── 00001185.sst
│       │       │           ├── 00001186.sst
│       │       │           ├── 00001187.meta
│       │       │           ├── 00001188.meta
│       │       │           ├── 00001191.sst
│       │       │           ├── 00001192.sst
│       │       │           ├── 00001193.meta
│       │       │           ├── 00001194.meta
│       │       │           ├── 00001197.sst
│       │       │           ├── 00001198.sst
│       │       │           ├── 00001199.sst
│       │       │           ├── 00001200.sst
│       │       │           ├── 00001201.meta
│       │       │           ├── 00001202.meta
│       │       │           ├── 00001203.meta
│       │       │           ├── 00001205.meta
│       │       │           ├── 00001207.sst
│       │       │           ├── 00001208.sst
│       │       │           ├── 00001209.meta
│       │       │           ├── 00001210.meta
│       │       │           ├── 00001213.sst
│       │       │           ├── 00001214.sst
│       │       │           ├── 00001215.meta
│       │       │           ├── 00001216.meta
│       │       │           ├── 00001219.sst
│       │       │           ├── 00001220.sst
│       │       │           ├── 00001221.meta
│       │       │           ├── 00001222.meta
│       │       │           ├── 00001224.sst
│       │       │           ├── 00001226.sst
│       │       │           ├── 00001227.meta
│       │       │           ├── 00001228.meta
│       │       │           ├── 00001231.sst
│       │       │           ├── 00001232.sst
│       │       │           ├── 00001233.meta
│       │       │           ├── 00001235.meta
│       │       │           ├── 00001237.sst
│       │       │           ├── 00001238.sst
│       │       │           ├── 00001239.meta
│       │       │           ├── 00001240.meta
│       │       │           ├── 00001243.sst
│       │       │           ├── 00001244.sst
│       │       │           ├── 00001245.meta
│       │       │           ├── 00001246.meta
│       │       │           ├── 00001249.sst
│       │       │           ├── 00001250.sst
│       │       │           ├── 00001251.sst
│       │       │           ├── 00001252.sst
│       │       │           ├── 00001253.meta
│       │       │           ├── 00001254.meta
│       │       │           ├── 00001255.meta
│       │       │           ├── 00001257.meta
│       │       │           ├── 00001261.del
│       │       │           ├── 00001263.sst
│       │       │           ├── 00001264.sst
│       │       │           ├── 00001265.meta
│       │       │           ├── 00001266.meta
│       │       │           ├── 00001268.sst
│       │       │           ├── 00001270.sst
│       │       │           ├── 00001271.meta
│       │       │           ├── 00001272.meta
│       │       │           ├── 00001275.sst
│       │       │           ├── 00001276.sst
│       │       │           ├── 00001277.meta
│       │       │           ├── 00001278.meta
│       │       │           ├── 00001281.sst
│       │       │           ├── 00001282.sst
│       │       │           ├── 00001283.meta
│       │       │           ├── 00001284.meta
│       │       │           ├── 00001286.sst
│       │       │           ├── 00001288.sst
│       │       │           ├── 00001289.sst
│       │       │           ├── 00001290.sst
│       │       │           ├── 00001291.meta
│       │       │           ├── 00001292.meta
│       │       │           ├── 00001294.meta
│       │       │           ├── 00001295.meta
│       │       │           ├── 00001296.sst
│       │       │           ├── 00001298.sst
│       │       │           ├── 00001299.meta
│       │       │           ├── 00001300.meta
│       │       │           ├── 00001303.sst
│       │       │           ├── 00001304.sst
│       │       │           ├── 00001305.sst
│       │       │           ├── 00001306.sst
│       │       │           ├── 00001307.meta
│       │       │           ├── 00001308.meta
│       │       │           ├── 00001310.meta
│       │       │           ├── 00001311.meta
│       │       │           ├── 00001313.sst
│       │       │           ├── 00001314.sst
│       │       │           ├── 00001315.sst
│       │       │           ├── 00001316.sst
│       │       │           ├── 00001317.meta
│       │       │           ├── 00001319.meta
│       │       │           ├── 00001320.meta
│       │       │           ├── 00001321.meta
│       │       │           ├── 00001323.sst
│       │       │           ├── 00001324.sst
│       │       │           ├── 00001325.sst
│       │       │           ├── 00001326.sst
│       │       │           ├── 00001327.meta
│       │       │           ├── 00001328.meta
│       │       │           ├── 00001330.meta
│       │       │           ├── 00001331.meta
│       │       │           ├── 00001333.sst
│       │       │           ├── 00001334.sst
│       │       │           ├── 00001335.meta
│       │       │           ├── 00001336.meta
│       │       │           ├── 00001339.sst
│       │       │           ├── 00001340.sst
│       │       │           ├── 00001341.meta
│       │       │           ├── 00001342.meta
│       │       │           ├── 00001345.sst
│       │       │           ├── 00001346.sst
│       │       │           ├── 00001347.meta
│       │       │           ├── 00001348.meta
│       │       │           ├── 00001350.sst
│       │       │           ├── 00001352.sst
│       │       │           ├── 00001353.meta
│       │       │           ├── 00001354.meta
│       │       │           ├── 00001357.sst
│       │       │           ├── 00001358.sst
│       │       │           ├── 00001359.sst
│       │       │           ├── 00001360.sst
│       │       │           ├── 00001361.meta
│       │       │           ├── 00001362.meta
│       │       │           ├── 00001364.meta
│       │       │           ├── 00001365.meta
│       │       │           ├── 00001367.sst
│       │       │           ├── 00001368.sst
│       │       │           ├── 00001369.meta
│       │       │           ├── 00001370.meta
│       │       │           ├── 00001373.sst
│       │       │           ├── 00001374.sst
│       │       │           ├── 00001375.sst
│       │       │           ├── 00001376.sst
│       │       │           ├── 00001377.meta
│       │       │           ├── 00001378.meta
│       │       │           ├── 00001380.meta
│       │       │           ├── 00001381.meta
│       │       │           ├── 00001383.sst
│       │       │           ├── 00001384.sst
│       │       │           ├── 00001385.meta
│       │       │           ├── 00001386.meta
│       │       │           ├── 00001388.sst
│       │       │           ├── 00001390.sst
│       │       │           ├── 00001391.meta
│       │       │           ├── 00001392.meta
│       │       │           ├── 00001395.sst
│       │       │           ├── 00001396.sst
│       │       │           ├── 00001397.meta
│       │       │           ├── 00001398.meta
│       │       │           ├── 00001401.sst
│       │       │           ├── 00001402.sst
│       │       │           ├── 00001403.meta
│       │       │           ├── 00001404.meta
│       │       │           ├── 00001407.sst
│       │       │           ├── 00001408.sst
│       │       │           ├── 00001409.sst
│       │       │           ├── 00001410.sst
│       │       │           ├── 00001411.meta
│       │       │           ├── 00001413.meta
│       │       │           ├── 00001414.meta
│       │       │           ├── 00001415.meta
│       │       │           ├── 00001417.sst
│       │       │           ├── 00001418.sst
│       │       │           ├── 00001419.sst
│       │       │           ├── 00001420.sst
│       │       │           ├── 00001421.meta
│       │       │           ├── 00001423.meta
│       │       │           ├── 00001424.meta
│       │       │           ├── 00001425.meta
│       │       │           ├── 00001426.sst
│       │       │           ├── 00001428.sst
│       │       │           ├── 00001429.sst
│       │       │           ├── 00001430.sst
│       │       │           ├── 00001431.meta
│       │       │           ├── 00001433.meta
│       │       │           ├── 00001434.meta
│       │       │           ├── 00001435.meta
│       │       │           ├── 00001437.sst
│       │       │           ├── 00001438.sst
│       │       │           ├── 00001439.meta
│       │       │           ├── 00001441.meta
│       │       │           ├── 00001443.sst
│       │       │           ├── 00001444.sst
│       │       │           ├── 00001445.meta
│       │       │           ├── 00001446.meta
│       │       │           ├── 00001448.sst
│       │       │           ├── 00001450.sst
│       │       │           ├── 00001451.meta
│       │       │           ├── 00001453.meta
│       │       │           ├── 00001456.sst
│       │       │           ├── 00001457.meta
│       │       │           ├── 00001462.sst
│       │       │           ├── 00001463.meta
│       │       │           ├── 00001468.sst
│       │       │           ├── 00001469.meta
│       │       │           ├── 00001474.sst
│       │       │           ├── 00001475.sst
│       │       │           ├── 00001476.sst
│       │       │           ├── 00001477.meta
│       │       │           ├── 00001478.meta
│       │       │           ├── 00001480.meta
│       │       │           ├── 00001484.sst
│       │       │           ├── 00001485.sst
│       │       │           ├── 00001486.sst
│       │       │           ├── 00001487.meta
│       │       │           ├── 00001490.meta
│       │       │           ├── 00001491.meta
│       │       │           ├── 00001494.sst
│       │       │           ├── 00001495.sst
│       │       │           ├── 00001496.sst
│       │       │           ├── 00001497.meta
│       │       │           ├── 00001499.meta
│       │       │           ├── 00001501.meta
│       │       │           ├── 00001504.sst
│       │       │           ├── 00001505.sst
│       │       │           ├── 00001506.sst
│       │       │           ├── 00001507.meta
│       │       │           ├── 00001508.meta
│       │       │           ├── 00001509.meta
│       │       │           ├── 00001514.sst
│       │       │           ├── 00001515.meta
│       │       │           ├── 00001520.sst
│       │       │           ├── 00001521.meta
│       │       │           ├── 00001526.sst
│       │       │           ├── 00001527.meta
│       │       │           ├── 00001532.sst
│       │       │           ├── 00001533.sst
│       │       │           ├── 00001534.sst
│       │       │           ├── 00001535.meta
│       │       │           ├── 00001536.meta
│       │       │           ├── 00001537.meta
│       │       │           ├── 00001542.sst
│       │       │           ├── 00001543.meta
│       │       │           ├── 00001548.sst
│       │       │           ├── 00001549.sst
│       │       │           ├── 00001550.sst
│       │       │           ├── 00001551.meta
│       │       │           ├── 00001554.meta
│       │       │           ├── 00001555.meta
│       │       │           ├── 00001560.del
│       │       │           ├── 00001563.sst
│       │       │           ├── 00001564.meta
│       │       │           ├── 00001569.sst
│       │       │           ├── 00001570.sst
│       │       │           ├── 00001571.sst
│       │       │           ├── 00001572.meta
│       │       │           ├── 00001573.meta
│       │       │           ├── 00001575.meta
│       │       │           ├── 00001579.sst
│       │       │           ├── 00001580.sst
│       │       │           ├── 00001581.sst
│       │       │           ├── 00001582.meta
│       │       │           ├── 00001585.meta
│       │       │           ├── 00001586.meta
│       │       │           ├── 00001589.sst
│       │       │           ├── 00001590.sst
│       │       │           ├── 00001591.sst
│       │       │           ├── 00001592.meta
│       │       │           ├── 00001595.meta
│       │       │           ├── 00001596.meta
│       │       │           ├── 00001599.sst
│       │       │           ├── 00001600.meta
│       │       │           ├── 00001605.sst
│       │       │           ├── 00001606.sst
│       │       │           ├── 00001607.sst
│       │       │           ├── 00001608.meta
│       │       │           ├── 00001609.meta
│       │       │           ├── 00001612.meta
│       │       │           ├── 00001615.sst
│       │       │           ├── 00001616.sst
│       │       │           ├── 00001617.sst
│       │       │           ├── 00001618.meta
│       │       │           ├── 00001619.meta
│       │       │           ├── 00001622.meta
│       │       │           ├── 00001625.sst
│       │       │           ├── 00001626.meta
│       │       │           ├── 00001631.sst
│       │       │           ├── 00001632.meta
│       │       │           ├── 00001637.sst
│       │       │           ├── 00001638.sst
│       │       │           ├── 00001639.sst
│       │       │           ├── 00001640.meta
│       │       │           ├── 00001641.meta
│       │       │           ├── 00001643.meta
│       │       │           ├── 00001647.sst
│       │       │           ├── 00001648.sst
│       │       │           ├── 00001649.sst
│       │       │           ├── 00001650.meta
│       │       │           ├── 00001653.meta
│       │       │           ├── 00001654.meta
│       │       │           ├── 00001657.sst
│       │       │           ├── 00001658.meta
│       │       │           ├── 00001663.sst
│       │       │           ├── 00001664.meta
│       │       │           ├── 00001669.sst
│       │       │           ├── 00001670.sst
│       │       │           ├── 00001671.sst
│       │       │           ├── 00001672.meta
│       │       │           ├── 00001674.meta
│       │       │           ├── 00001676.meta
│       │       │           ├── 00001679.sst
│       │       │           ├── 00001680.sst
│       │       │           ├── 00001681.sst
│       │       │           ├── 00001682.meta
│       │       │           ├── 00001683.meta
│       │       │           ├── 00001686.meta
│       │       │           ├── 00001691.del
│       │       │           ├── 00001694.sst
│       │       │           ├── 00001695.sst
│       │       │           ├── 00001696.sst
│       │       │           ├── 00001697.meta
│       │       │           ├── 00001699.meta
│       │       │           ├── 00001701.meta
│       │       │           ├── 00001704.sst
│       │       │           ├── 00001705.sst
│       │       │           ├── 00001706.sst
│       │       │           ├── 00001707.meta
│       │       │           ├── 00001709.meta
│       │       │           ├── 00001711.meta
│       │       │           ├── 00001714.sst
│       │       │           ├── 00001715.sst
│       │       │           ├── 00001716.sst
│       │       │           ├── 00001717.meta
│       │       │           ├── 00001718.meta
│       │       │           ├── 00001720.meta
│       │       │           ├── 00001724.sst
│       │       │           ├── 00001725.sst
│       │       │           ├── 00001726.sst
│       │       │           ├── 00001727.meta
│       │       │           ├── 00001729.meta
│       │       │           ├── 00001731.meta
│       │       │           ├── 00001734.sst
│       │       │           ├── 00001735.meta
│       │       │           ├── 00001740.sst
│       │       │           ├── 00001741.sst
│       │       │           ├── 00001742.sst
│       │       │           ├── 00001743.meta
│       │       │           ├── 00001746.meta
│       │       │           ├── 00001747.meta
│       │       │           ├── 00001750.sst
│       │       │           ├── 00001751.sst
│       │       │           ├── 00001752.sst
│       │       │           ├── 00001753.meta
│       │       │           ├── 00001756.meta
│       │       │           ├── 00001757.meta
│       │       │           ├── 00001760.sst
│       │       │           ├── 00001761.meta
│       │       │           ├── 00001766.sst
│       │       │           ├── 00001767.meta
│       │       │           ├── 00001772.sst
│       │       │           ├── 00001773.meta
│       │       │           ├── 00001778.sst
│       │       │           ├── 00001779.sst
│       │       │           ├── 00001780.sst
│       │       │           ├── 00001781.meta
│       │       │           ├── 00001784.meta
│       │       │           ├── 00001785.meta
│       │       │           ├── 00001788.sst
│       │       │           ├── 00001789.meta
│       │       │           ├── 00001794.sst
│       │       │           ├── 00001795.sst
│       │       │           ├── 00001796.sst
│       │       │           ├── 00001797.meta
│       │       │           ├── 00001800.meta
│       │       │           ├── 00001801.meta
│       │       │           ├── 00001804.sst
│       │       │           ├── 00001805.meta
│       │       │           ├── 00001810.sst
│       │       │           ├── 00001811.meta
│       │       │           ├── 00001816.sst
│       │       │           ├── 00001817.meta
│       │       │           ├── 00001822.sst
│       │       │           ├── 00001823.sst
│       │       │           ├── 00001824.sst
│       │       │           ├── 00001825.meta
│       │       │           ├── 00001828.meta
│       │       │           ├── 00001829.meta
│       │       │           ├── 00001832.sst
│       │       │           ├── 00001833.meta
│       │       │           ├── 00001838.sst
│       │       │           ├── 00001839.meta
│       │       │           ├── 00001844.sst
│       │       │           ├── 00001845.sst
│       │       │           ├── 00001846.sst
│       │       │           ├── 00001847.meta
│       │       │           ├── 00001848.meta
│       │       │           ├── 00001849.meta
│       │       │           ├── 00001854.sst
│       │       │           ├── 00001855.meta
│       │       │           ├── 00001860.sst
│       │       │           ├── 00001861.meta
│       │       │           ├── 00001866.sst
│       │       │           ├── 00001867.sst
│       │       │           ├── 00001868.sst
│       │       │           ├── 00001869.meta
│       │       │           ├── 00001872.meta
│       │       │           ├── 00001873.meta
│       │       │           ├── 00001876.sst
│       │       │           ├── 00001877.sst
│       │       │           ├── 00001878.sst
│       │       │           ├── 00001879.meta
│       │       │           ├── 00001880.meta
│       │       │           ├── 00001881.meta
│       │       │           ├── 00001886.sst
│       │       │           ├── 00001887.meta
│       │       │           ├── 00001892.sst
│       │       │           ├── 00001893.sst
│       │       │           ├── 00001894.sst
│       │       │           ├── 00001895.meta
│       │       │           ├── 00001896.meta
│       │       │           ├── 00001899.meta
│       │       │           ├── 00001904.del
│       │       │           ├── 00001907.sst
│       │       │           ├── 00001908.meta
│       │       │           ├── 00001913.sst
│       │       │           ├── 00001914.sst
│       │       │           ├── 00001915.sst
│       │       │           ├── 00001916.meta
│       │       │           ├── 00001919.meta
│       │       │           ├── 00001920.meta
│       │       │           ├── 00001923.sst
│       │       │           ├── 00001924.sst
│       │       │           ├── 00001925.sst
│       │       │           ├── 00001926.meta
│       │       │           ├── 00001929.meta
│       │       │           ├── 00001930.meta
│       │       │           ├── 00001933.sst
│       │       │           ├── 00001934.sst
│       │       │           ├── 00001935.sst
│       │       │           ├── 00001936.meta
│       │       │           ├── 00001939.meta
│       │       │           ├── 00001940.meta
│       │       │           ├── 00001943.sst
│       │       │           ├── 00001944.sst
│       │       │           ├── 00001945.sst
│       │       │           ├── 00001946.meta
│       │       │           ├── 00001949.meta
│       │       │           ├── 00001950.meta
│       │       │           ├── 00001953.sst
│       │       │           ├── 00001954.sst
│       │       │           ├── 00001955.sst
│       │       │           ├── 00001956.meta
│       │       │           ├── 00001959.meta
│       │       │           ├── 00001960.meta
│       │       │           ├── 00001963.sst
│       │       │           ├── 00001964.sst
│       │       │           ├── 00001965.sst
│       │       │           ├── 00001966.meta
│       │       │           ├── 00001969.meta
│       │       │           ├── 00001970.meta
│       │       │           ├── 00001975.del
│       │       │           ├── 00001978.sst
│       │       │           ├── 00001979.sst
│       │       │           ├── 00001980.sst
│       │       │           ├── 00001981.meta
│       │       │           ├── 00001984.meta
│       │       │           ├── 00001985.meta
│       │       │           ├── 00001988.sst
│       │       │           ├── 00001989.sst
│       │       │           ├── 00001990.sst
│       │       │           ├── 00001991.meta
│       │       │           ├── 00001994.meta
│       │       │           ├── 00001995.meta
│       │       │           ├── 00001998.sst
│       │       │           ├── 00001999.sst
│       │       │           ├── 00002000.sst
│       │       │           ├── 00002001.meta
│       │       │           ├── 00002004.meta
│       │       │           ├── 00002005.meta
│       │       │           ├── 00002006.sst
│       │       │           ├── 00002007.sst
│       │       │           ├── 00002008.meta
│       │       │           ├── 00002009.del
│       │       │           ├── 00002010.sst
│       │       │           ├── 00002012.sst
│       │       │           ├── 00002013.sst
│       │       │           ├── 00002014.sst
│       │       │           ├── 00002015.meta
│       │       │           ├── 00002016.meta
│       │       │           ├── 00002018.meta
│       │       │           ├── 00002019.meta
│       │       │           ├── 00002021.sst
│       │       │           ├── 00002022.sst
│       │       │           ├── 00002023.sst
│       │       │           ├── 00002024.sst
│       │       │           ├── 00002025.meta
│       │       │           ├── 00002026.meta
│       │       │           ├── 00002028.meta
│       │       │           ├── 00002029.meta
│       │       │           ├── 00002030.sst
│       │       │           ├── 00002032.sst
│       │       │           ├── 00002033.meta
│       │       │           ├── 00002034.meta
│       │       │           ├── 00002037.sst
│       │       │           ├── 00002038.sst
│       │       │           ├── 00002039.sst
│       │       │           ├── 00002040.sst
│       │       │           ├── 00002041.meta
│       │       │           ├── 00002042.meta
│       │       │           ├── 00002044.meta
│       │       │           ├── 00002045.meta
│       │       │           ├── 00002046.sst
│       │       │           ├── 00002048.sst
│       │       │           ├── 00002049.meta
│       │       │           ├── 00002050.meta
│       │       │           ├── 00002056.sst
│       │       │           ├── 00002057.sst
│       │       │           ├── 00002058.sst
│       │       │           ├── 00002059.sst
│       │       │           ├── 00002060.meta
│       │       │           ├── 00002061.meta
│       │       │           ├── 00002063.meta
│       │       │           ├── 00002064.meta
│       │       │           ├── 00002066.sst
│       │       │           ├── 00002067.sst
│       │       │           ├── 00002068.sst
│       │       │           ├── 00002069.sst
│       │       │           ├── 00002070.meta
│       │       │           ├── 00002071.meta
│       │       │           ├── 00002073.meta
│       │       │           ├── 00002074.meta
│       │       │           ├── 00002076.sst
│       │       │           ├── 00002077.sst
│       │       │           ├── 00002078.sst
│       │       │           ├── 00002079.sst
│       │       │           ├── 00002080.meta
│       │       │           ├── 00002081.meta
│       │       │           ├── 00002083.meta
│       │       │           ├── 00002084.meta
│       │       │           ├── 00002085.sst
│       │       │           ├── 00002087.sst
│       │       │           ├── 00002088.sst
│       │       │           ├── 00002089.sst
│       │       │           ├── 00002090.meta
│       │       │           ├── 00002091.meta
│       │       │           ├── 00002093.meta
│       │       │           ├── 00002094.meta
│       │       │           ├── 00002096.sst
│       │       │           ├── 00002097.sst
│       │       │           ├── 00002098.sst
│       │       │           ├── 00002099.sst
│       │       │           ├── 00002100.meta
│       │       │           ├── 00002101.meta
│       │       │           ├── 00002103.meta
│       │       │           ├── 00002104.meta
│       │       │           ├── 00002106.sst
│       │       │           ├── 00002107.sst
│       │       │           ├── 00002108.sst
│       │       │           ├── 00002109.sst
│       │       │           ├── 00002110.meta
│       │       │           ├── 00002111.meta
│       │       │           ├── 00002113.meta
│       │       │           ├── 00002114.meta
│       │       │           ├── 00002115.sst
│       │       │           ├── 00002117.sst
│       │       │           ├── 00002118.meta
│       │       │           ├── 00002119.meta
│       │       │           ├── 00002122.sst
│       │       │           ├── 00002123.sst
│       │       │           ├── 00002124.meta
│       │       │           ├── 00002126.meta
│       │       │           ├── 00002128.sst
│       │       │           ├── 00002129.sst
│       │       │           ├── 00002130.sst
│       │       │           ├── 00002131.sst
│       │       │           ├── 00002132.meta
│       │       │           ├── 00002134.meta
│       │       │           ├── 00002135.meta
│       │       │           ├── 00002136.meta
│       │       │           ├── 00002137.sst
│       │       │           ├── 00002138.sst
│       │       │           ├── 00002139.sst
│       │       │           ├── 00002140.meta
│       │       │           ├── 00002141.del
│       │       │           ├── 00002142.sst
│       │       │           ├── 00002143.sst
│       │       │           ├── 00002144.sst
│       │       │           ├── 00002145.meta
│       │       │           ├── 00002146.meta
│       │       │           ├── 00002147.meta
│       │       │           ├── 00002148.sst
│       │       │           ├── 00002149.sst
│       │       │           ├── 00002150.sst
│       │       │           ├── 00002151.meta
│       │       │           ├── 00002152.meta
│       │       │           ├── 00002153.meta
│       │       │           ├── 00002154.sst
│       │       │           ├── 00002155.sst
│       │       │           ├── 00002156.sst
│       │       │           ├── 00002157.sst
│       │       │           ├── 00002158.sst
│       │       │           ├── 00002159.meta
│       │       │           ├── 00002160.meta
│       │       │           ├── 00002161.meta
│       │       │           ├── 00002162.meta
│       │       │           ├── 00002163.meta
│       │       │           ├── 00002164.sst
│       │       │           ├── 00002165.sst
│       │       │           ├── 00002166.sst
│       │       │           ├── 00002167.sst
│       │       │           ├── 00002168.sst
│       │       │           ├── 00002169.meta
│       │       │           ├── 00002170.meta
│       │       │           ├── 00002171.meta
│       │       │           ├── 00002172.meta
│       │       │           ├── 00002173.meta
│       │       │           ├── 00002174.sst
│       │       │           ├── 00002175.sst
│       │       │           ├── 00002176.sst
│       │       │           ├── 00002177.sst
│       │       │           ├── 00002178.sst
│       │       │           ├── 00002179.meta
│       │       │           ├── 00002180.meta
│       │       │           ├── 00002181.meta
│       │       │           ├── 00002182.meta
│       │       │           ├── 00002183.meta
│       │       │           ├── 00002184.sst
│       │       │           ├── 00002185.sst
│       │       │           ├── 00002186.sst
│       │       │           ├── 00002187.meta
│       │       │           ├── 00002188.meta
│       │       │           ├── 00002189.meta
│       │       │           ├── 00002190.sst
│       │       │           ├── 00002191.sst
│       │       │           ├── 00002192.sst
│       │       │           ├── 00002193.sst
│       │       │           ├── 00002194.sst
│       │       │           ├── 00002195.sst
│       │       │           ├── 00002196.sst
│       │       │           ├── 00002197.sst
│       │       │           ├── 00002198.meta
│       │       │           ├── 00002199.meta
│       │       │           ├── 00002200.meta
│       │       │           ├── 00002201.meta
│       │       │           ├── 00002202.meta
│       │       │           ├── CURRENT
│       │       │           └── LOG
│       │       ├── fallback-build-manifest.json
│       │       ├── lock
│       │       ├── logs/
│       │       │   └── next-development.log
│       │       ├── package.json
│       │       ├── prerender-manifest.json
│       │       ├── routes-manifest.json
│       │       ├── server/
│       │       │   ├── app/
│       │       │   │   ├── _not-found/
│       │       │   │   │   ├── page/
│       │       │   │   │   │   ├── app-paths-manifest.json
│       │       │   │   │   │   ├── build-manifest.json
│       │       │   │   │   │   ├── next-font-manifest.json
│       │       │   │   │   │   ├── react-loadable-manifest.json
│       │       │   │   │   │   └── server-reference-manifest.json
│       │       │   │   │   ├── page.js
│       │       │   │   │   ├── page.js.map
│       │       │   │   │   └── page_client-reference-manifest.js
│       │       │   │   ├── admin/
│       │       │   │   │   ├── (dashboard)/
│       │       │   │   │   │   ├── page/
│       │       │   │   │   │   │   ├── app-paths-manifest.json
│       │       │   │   │   │   │   ├── build-manifest.json
│       │       │   │   │   │   │   ├── next-font-manifest.json
│       │       │   │   │   │   │   ├── react-loadable-manifest.json
│       │       │   │   │   │   │   └── server-reference-manifest.json
│       │       │   │   │   │   ├── page.js
│       │       │   │   │   │   ├── page.js.map
│       │       │   │   │   │   └── page_client-reference-manifest.js
│       │       │   │   │   └── login/
│       │       │   │   │       ├── page/
│       │       │   │   │       │   ├── app-paths-manifest.json
│       │       │   │   │       │   ├── build-manifest.json
│       │       │   │   │       │   ├── next-font-manifest.json
│       │       │   │   │       │   ├── react-loadable-manifest.json
│       │       │   │   │       │   └── server-reference-manifest.json
│       │       │   │   │       ├── page.js
│       │       │   │   │       ├── page.js.map
│       │       │   │   │       └── page_client-reference-manifest.js
│       │       │   │   ├── coordinator/
│       │       │   │   │   ├── (dashboard)/
│       │       │   │   │   │   ├── page/
│       │       │   │   │   │   │   ├── app-paths-manifest.json
│       │       │   │   │   │   │   ├── build-manifest.json
│       │       │   │   │   │   │   ├── next-font-manifest.json
│       │       │   │   │   │   │   ├── react-loadable-manifest.json
│       │       │   │   │   │   │   └── server-reference-manifest.json
│       │       │   │   │   │   ├── page.js
│       │       │   │   │   │   ├── page.js.map
│       │       │   │   │   │   └── page_client-reference-manifest.js
│       │       │   │   │   └── login/
│       │       │   │   │       ├── page/
│       │       │   │   │       │   ├── app-paths-manifest.json
│       │       │   │   │       │   ├── build-manifest.json
│       │       │   │   │       │   ├── next-font-manifest.json
│       │       │   │   │       │   ├── react-loadable-manifest.json
│       │       │   │   │       │   └── server-reference-manifest.json
│       │       │   │   │       ├── page.js
│       │       │   │   │       ├── page.js.map
│       │       │   │   │       └── page_client-reference-manifest.js
│       │       │   │   ├── family/
│       │       │   │   │   └── (dashboard)/
│       │       │   │   │       ├── page/
│       │       │   │   │       │   ├── app-paths-manifest.json
│       │       │   │   │       │   ├── build-manifest.json
│       │       │   │   │       │   ├── next-font-manifest.json
│       │       │   │   │       │   ├── react-loadable-manifest.json
│       │       │   │   │       │   └── server-reference-manifest.json
│       │       │   │   │       ├── page.js
│       │       │   │   │       ├── page.js.map
│       │       │   │   │       └── page_client-reference-manifest.js
│       │       │   │   ├── page/
│       │       │   │   │   ├── app-paths-manifest.json
│       │       │   │   │   ├── build-manifest.json
│       │       │   │   │   ├── next-font-manifest.json
│       │       │   │   │   ├── react-loadable-manifest.json
│       │       │   │   │   └── server-reference-manifest.json
│       │       │   │   ├── page.js
│       │       │   │   ├── page.js.map
│       │       │   │   ├── page_client-reference-manifest.js
│       │       │   │   ├── school/
│       │       │   │   │   ├── page/
│       │       │   │   │   │   ├── app-paths-manifest.json
│       │       │   │   │   │   ├── build-manifest.json
│       │       │   │   │   │   ├── next-font-manifest.json
│       │       │   │   │   │   ├── react-loadable-manifest.json
│       │       │   │   │   │   └── server-reference-manifest.json
│       │       │   │   │   ├── page.js
│       │       │   │   │   ├── page.js.map
│       │       │   │   │   └── page_client-reference-manifest.js
│       │       │   │   └── teacher/
│       │       │   │       ├── (dashboard)/
│       │       │   │       │   ├── calendar/
│       │       │   │       │   │   ├── page/
│       │       │   │       │   │   │   ├── app-paths-manifest.json
│       │       │   │       │   │   │   ├── build-manifest.json
│       │       │   │       │   │   │   ├── next-font-manifest.json
│       │       │   │       │   │   │   ├── react-loadable-manifest.json
│       │       │   │       │   │   │   └── server-reference-manifest.json
│       │       │   │       │   │   ├── page.js
│       │       │   │       │   │   ├── page.js.map
│       │       │   │       │   │   └── page_client-reference-manifest.js
│       │       │   │       │   ├── classroom/
│       │       │   │       │   │   ├── [id]/
│       │       │   │       │   │   │   ├── page/
│       │       │   │       │   │   │   │   ├── app-paths-manifest.json
│       │       │   │       │   │   │   │   ├── build-manifest.json
│       │       │   │       │   │   │   │   ├── next-font-manifest.json
│       │       │   │       │   │   │   │   ├── react-loadable-manifest.json
│       │       │   │       │   │   │   │   └── server-reference-manifest.json
│       │       │   │       │   │   │   ├── page.js
│       │       │   │       │   │   │   ├── page.js.map
│       │       │   │       │   │   │   └── page_client-reference-manifest.js
│       │       │   │       │   │   ├── page/
│       │       │   │       │   │   │   ├── app-paths-manifest.json
│       │       │   │       │   │   │   ├── build-manifest.json
│       │       │   │       │   │   │   ├── next-font-manifest.json
│       │       │   │       │   │   │   ├── react-loadable-manifest.json
│       │       │   │       │   │   │   └── server-reference-manifest.json
│       │       │   │       │   │   ├── page.js
│       │       │   │       │   │   ├── page.js.map
│       │       │   │       │   │   └── page_client-reference-manifest.js
│       │       │   │       │   ├── gradebook/
│       │       │   │       │   │   ├── page/
│       │       │   │       │   │   │   ├── app-paths-manifest.json
│       │       │   │       │   │   │   ├── build-manifest.json
│       │       │   │       │   │   │   ├── next-font-manifest.json
│       │       │   │       │   │   │   ├── react-loadable-manifest.json
│       │       │   │       │   │   │   └── server-reference-manifest.json
│       │       │   │       │   │   ├── page.js
│       │       │   │       │   │   ├── page.js.map
│       │       │   │       │   │   └── page_client-reference-manifest.js
│       │       │   │       │   ├── page/
│       │       │   │       │   │   ├── app-paths-manifest.json
│       │       │   │       │   │   ├── build-manifest.json
│       │       │   │       │   │   ├── next-font-manifest.json
│       │       │   │       │   │   ├── react-loadable-manifest.json
│       │       │   │       │   │   └── server-reference-manifest.json
│       │       │   │       │   ├── page.js
│       │       │   │       │   ├── page.js.map
│       │       │   │       │   ├── page_client-reference-manifest.js
│       │       │   │       │   ├── settings/
│       │       │   │       │   │   ├── page/
│       │       │   │       │   │   │   ├── app-paths-manifest.json
│       │       │   │       │   │   │   ├── build-manifest.json
│       │       │   │       │   │   │   ├── next-font-manifest.json
│       │       │   │       │   │   │   ├── react-loadable-manifest.json
│       │       │   │       │   │   │   └── server-reference-manifest.json
│       │       │   │       │   │   ├── page.js
│       │       │   │       │   │   ├── page.js.map
│       │       │   │       │   │   └── page_client-reference-manifest.js
│       │       │   │       │   └── students/
│       │       │   │       │       ├── page/
│       │       │   │       │       │   ├── app-paths-manifest.json
│       │       │   │       │       │   ├── build-manifest.json
│       │       │   │       │       │   ├── next-font-manifest.json
│       │       │   │       │       │   ├── react-loadable-manifest.json
│       │       │   │       │       │   └── server-reference-manifest.json
│       │       │   │       │       ├── page.js
│       │       │   │       │       ├── page.js.map
│       │       │   │       │       └── page_client-reference-manifest.js
│       │       │   │       └── login/
│       │       │   │           ├── page/
│       │       │   │           │   ├── app-paths-manifest.json
│       │       │   │           │   ├── build-manifest.json
│       │       │   │           │   ├── next-font-manifest.json
│       │       │   │           │   ├── react-loadable-manifest.json
│       │       │   │           │   └── server-reference-manifest.json
│       │       │   │           ├── page.js
│       │       │   │           ├── page.js.map
│       │       │   │           └── page_client-reference-manifest.js
│       │       │   ├── app-paths-manifest.json
│       │       │   ├── chunks/
│       │       │   │   └── ssr/
│       │       │   │       ├── [externals]__e6a4d965._.js
│       │       │   │       ├── [externals]__e6a4d965._.js.map
│       │       │   │       ├── [externals]__e8a2741f._.js
│       │       │   │       ├── [externals]__e8a2741f._.js.map
│       │       │   │       ├── [externals]_next_dist_1aaf5479._.js
│       │       │   │       ├── [externals]_next_dist_1aaf5479._.js.map
│       │       │   │       ├── [externals]_next_dist_c80f7c8f._.js
│       │       │   │       ├── [externals]_next_dist_c80f7c8f._.js.map
│       │       │   │       ├── [externals]_next_dist_compiled_next-server_app-page-turbo_runtime_dev_062c5159.js
│       │       │   │       ├── [externals]_next_dist_compiled_next-server_app-page-turbo_runtime_dev_062c5159.js.map
│       │       │   │       ├── [externals]_next_dist_shared_lib_no-fallback-error_external_59b92b38.js
│       │       │   │       ├── [externals]_next_dist_shared_lib_no-fallback-error_external_59b92b38.js.map
│       │       │   │       ├── [root-of-the-server]__0b04d9a9._.js
│       │       │   │       ├── [root-of-the-server]__0b04d9a9._.js.map
│       │       │   │       ├── [root-of-the-server]__11aa4565._.js
│       │       │   │       ├── [root-of-the-server]__11aa4565._.js.map
│       │       │   │       ├── [root-of-the-server]__1fa9c471._.js
│       │       │   │       ├── [root-of-the-server]__1fa9c471._.js.map
│       │       │   │       ├── [root-of-the-server]__217c0691._.js
│       │       │   │       ├── [root-of-the-server]__217c0691._.js.map
│       │       │   │       ├── [root-of-the-server]__302ab278._.js
│       │       │   │       ├── [root-of-the-server]__302ab278._.js.map
│       │       │   │       ├── [root-of-the-server]__3b8dbf80._.js
│       │       │   │       ├── [root-of-the-server]__3b8dbf80._.js.map
│       │       │   │       ├── [root-of-the-server]__506c360a._.js
│       │       │   │       ├── [root-of-the-server]__506c360a._.js.map
│       │       │   │       ├── [root-of-the-server]__52e0150c._.js
│       │       │   │       ├── [root-of-the-server]__52e0150c._.js.map
│       │       │   │       ├── [root-of-the-server]__6b48513c._.js
│       │       │   │       ├── [root-of-the-server]__6b48513c._.js.map
│       │       │   │       ├── [root-of-the-server]__6cfa4342._.js
│       │       │   │       ├── [root-of-the-server]__6cfa4342._.js.map
│       │       │   │       ├── [root-of-the-server]__6f4e8a12._.js
│       │       │   │       ├── [root-of-the-server]__6f4e8a12._.js.map
│       │       │   │       ├── [root-of-the-server]__6fe618d5._.js
│       │       │   │       ├── [root-of-the-server]__6fe618d5._.js.map
│       │       │   │       ├── [root-of-the-server]__70a73b34._.js
│       │       │   │       ├── [root-of-the-server]__70a73b34._.js.map
│       │       │   │       ├── [root-of-the-server]__7d6fb295._.js
│       │       │   │       ├── [root-of-the-server]__7d6fb295._.js.map
│       │       │   │       ├── [root-of-the-server]__8a67bd54._.js
│       │       │   │       ├── [root-of-the-server]__8a67bd54._.js.map
│       │       │   │       ├── [root-of-the-server]__9825a47c._.js
│       │       │   │       ├── [root-of-the-server]__9825a47c._.js.map
│       │       │   │       ├── [root-of-the-server]__9e724485._.js
│       │       │   │       ├── [root-of-the-server]__9e724485._.js.map
│       │       │   │       ├── [root-of-the-server]__a2b86489._.js
│       │       │   │       ├── [root-of-the-server]__a2b86489._.js.map
│       │       │   │       ├── [root-of-the-server]__a8ab9a0d._.js
│       │       │   │       ├── [root-of-the-server]__a8ab9a0d._.js.map
│       │       │   │       ├── [root-of-the-server]__a9796167._.js
│       │       │   │       ├── [root-of-the-server]__a9796167._.js.map
│       │       │   │       ├── [root-of-the-server]__a9fea3fa._.js
│       │       │   │       ├── [root-of-the-server]__a9fea3fa._.js.map
│       │       │   │       ├── [root-of-the-server]__b8c238e5._.js
│       │       │   │       ├── [root-of-the-server]__b8c238e5._.js.map
│       │       │   │       ├── [root-of-the-server]__bfa97d5a._.js
│       │       │   │       ├── [root-of-the-server]__bfa97d5a._.js.map
│       │       │   │       ├── [root-of-the-server]__c35f02b3._.js
│       │       │   │       ├── [root-of-the-server]__c35f02b3._.js.map
│       │       │   │       ├── [root-of-the-server]__cabf7a06._.js
│       │       │   │       ├── [root-of-the-server]__cabf7a06._.js.map
│       │       │   │       ├── [root-of-the-server]__cbe2192b._.js
│       │       │   │       ├── [root-of-the-server]__cbe2192b._.js.map
│       │       │   │       ├── [root-of-the-server]__ccc98272._.js
│       │       │   │       ├── [root-of-the-server]__ccc98272._.js.map
│       │       │   │       ├── [root-of-the-server]__debbd339._.js
│       │       │   │       ├── [root-of-the-server]__debbd339._.js.map
│       │       │   │       ├── [root-of-the-server]__eb25bb04._.js
│       │       │   │       ├── [root-of-the-server]__eb25bb04._.js.map
│       │       │   │       ├── [root-of-the-server]__f4da0c14._.js
│       │       │   │       ├── [root-of-the-server]__f4da0c14._.js.map
│       │       │   │       ├── [root-of-the-server]__f501702e._.js
│       │       │   │       ├── [root-of-the-server]__f501702e._.js.map
│       │       │   │       ├── [root-of-the-server]__fdb90137._.js
│       │       │   │       ├── [root-of-the-server]__fdb90137._.js.map
│       │       │   │       ├── [turbopack]_runtime.js
│       │       │   │       ├── [turbopack]_runtime.js.map
│       │       │   │       ├── _0351d6b4._.js
│       │       │   │       ├── _0351d6b4._.js.map
│       │       │   │       ├── _33a76748._.js
│       │       │   │       ├── _33a76748._.js.map
│       │       │   │       ├── _42bb28b7._.js
│       │       │   │       ├── _42bb28b7._.js.map
│       │       │   │       ├── _8394b0ca._.js
│       │       │   │       ├── _8394b0ca._.js.map
│       │       │   │       ├── _9ba34f85._.js
│       │       │   │       ├── _9ba34f85._.js.map
│       │       │   │       ├── _9e97671a._.js
│       │       │   │       ├── _9e97671a._.js.map
│       │       │   │       ├── _a4ed477e._.js
│       │       │   │       ├── _a4ed477e._.js.map
│       │       │   │       ├── _b124e784._.js
│       │       │   │       ├── _b124e784._.js.map
│       │       │   │       ├── _c07a196b._.js
│       │       │   │       ├── _c07a196b._.js.map
│       │       │   │       ├── _d0643f21._.js
│       │       │   │       ├── _d0643f21._.js.map
│       │       │   │       ├── _fdf75915._.js
│       │       │   │       ├── _fdf75915._.js.map
│       │       │   │       ├── _next-internal_server_app__not-found_page_actions_554ec2bf.js
│       │       │   │       ├── _next-internal_server_app__not-found_page_actions_554ec2bf.js.map
│       │       │   │       ├── _next-internal_server_app_admin_(dashboard)_page_actions_9a7efebe.js
│       │       │   │       ├── _next-internal_server_app_admin_(dashboard)_page_actions_9a7efebe.js.map
│       │       │   │       ├── _next-internal_server_app_admin_login_page_actions_0700d525.js
│       │       │   │       ├── _next-internal_server_app_admin_login_page_actions_0700d525.js.map
│       │       │   │       ├── _next-internal_server_app_coordinator_(dashboard)_page_actions_9e567268.js
│       │       │   │       ├── _next-internal_server_app_coordinator_(dashboard)_page_actions_9e567268.js.map
│       │       │   │       ├── _next-internal_server_app_coordinator_login_page_actions_84d499c4.js
│       │       │   │       ├── _next-internal_server_app_coordinator_login_page_actions_84d499c4.js.map
│       │       │   │       ├── _next-internal_server_app_family_(dashboard)_page_actions_50e55597.js
│       │       │   │       ├── _next-internal_server_app_family_(dashboard)_page_actions_50e55597.js.map
│       │       │   │       ├── _next-internal_server_app_page_actions_39d4fc33.js
│       │       │   │       ├── _next-internal_server_app_page_actions_39d4fc33.js.map
│       │       │   │       ├── _next-internal_server_app_school_page_actions_c2352dc4.js
│       │       │   │       ├── _next-internal_server_app_school_page_actions_c2352dc4.js.map
│       │       │   │       ├── _next-internal_server_app_teacher_(dashboard)_calendar_page_actions_d4909969.js
│       │       │   │       ├── _next-internal_server_app_teacher_(dashboard)_calendar_page_actions_d4909969.js.map
│       │       │   │       ├── _next-internal_server_app_teacher_(dashboard)_classroom_page_actions_a1ffcd30.js
│       │       │   │       ├── _next-internal_server_app_teacher_(dashboard)_classroom_page_actions_a1ffcd30.js.map
│       │       │   │       ├── _next-internal_server_app_teacher_(dashboard)_gradebook_page_actions_8287029a.js
│       │       │   │       ├── _next-internal_server_app_teacher_(dashboard)_gradebook_page_actions_8287029a.js.map
│       │       │   │       ├── _next-internal_server_app_teacher_(dashboard)_page_actions_9608fff1.js
│       │       │   │       ├── _next-internal_server_app_teacher_(dashboard)_page_actions_9608fff1.js.map
│       │       │   │       ├── _next-internal_server_app_teacher_(dashboard)_settings_page_actions_da360a5e.js
│       │       │   │       ├── _next-internal_server_app_teacher_(dashboard)_settings_page_actions_da360a5e.js.map
│       │       │   │       ├── _next-internal_server_app_teacher_(dashboard)_students_page_actions_094e421d.js
│       │       │   │       ├── _next-internal_server_app_teacher_(dashboard)_students_page_actions_094e421d.js.map
│       │       │   │       ├── _next-internal_server_app_teacher_login_page_actions_e9a60efe.js
│       │       │   │       ├── _next-internal_server_app_teacher_login_page_actions_e9a60efe.js.map
│       │       │   │       ├── ce889_server_app_teacher_(dashboard)_classroom_[id]_page_actions_6b693a58.js
│       │       │   │       ├── ce889_server_app_teacher_(dashboard)_classroom_[id]_page_actions_6b693a58.js.map
│       │       │   │       ├── node_modules_1130b666._.js
│       │       │   │       ├── node_modules_1130b666._.js.map
│       │       │   │       ├── node_modules_17af7624._.js
│       │       │   │       ├── node_modules_17af7624._.js.map
│       │       │   │       ├── node_modules_186c80ea._.js
│       │       │   │       ├── node_modules_186c80ea._.js.map
│       │       │   │       ├── node_modules_2224f048._.js
│       │       │   │       ├── node_modules_2224f048._.js.map
│       │       │   │       ├── node_modules_2f1dbe09._.js
│       │       │   │       ├── node_modules_2f1dbe09._.js.map
│       │       │   │       ├── node_modules_332eaac6._.js
│       │       │   │       ├── node_modules_332eaac6._.js.map
│       │       │   │       ├── node_modules_349e45fc._.js
│       │       │   │       ├── node_modules_349e45fc._.js.map
│       │       │   │       ├── node_modules_358b225f._.js
│       │       │   │       ├── node_modules_358b225f._.js.map
│       │       │   │       ├── node_modules_38bd6811._.js
│       │       │   │       ├── node_modules_38bd6811._.js.map
│       │       │   │       ├── node_modules_4c90c24b._.js
│       │       │   │       ├── node_modules_4c90c24b._.js.map
│       │       │   │       ├── node_modules_75b9c21d._.js
│       │       │   │       ├── node_modules_75b9c21d._.js.map
│       │       │   │       ├── node_modules_77a84b5c._.js
│       │       │   │       ├── node_modules_77a84b5c._.js.map
│       │       │   │       ├── node_modules_91333dfc._.js
│       │       │   │       ├── node_modules_91333dfc._.js.map
│       │       │   │       ├── node_modules_b5564495._.js
│       │       │   │       ├── node_modules_b5564495._.js.map
│       │       │   │       ├── node_modules_c0181589._.js
│       │       │   │       ├── node_modules_c0181589._.js.map
│       │       │   │       ├── node_modules_c78a39d3._.js
│       │       │   │       ├── node_modules_c78a39d3._.js.map
│       │       │   │       ├── node_modules_d6989352._.js
│       │       │   │       ├── node_modules_d6989352._.js.map
│       │       │   │       ├── node_modules_e2d1c5df._.js
│       │       │   │       ├── node_modules_e2d1c5df._.js.map
│       │       │   │       ├── node_modules_e6e1d83d._.js
│       │       │   │       ├── node_modules_e6e1d83d._.js.map
│       │       │   │       ├── node_modules_e82fae7d._.js
│       │       │   │       ├── node_modules_e82fae7d._.js.map
│       │       │   │       ├── node_modules_ea2581df._.js
│       │       │   │       ├── node_modules_ea2581df._.js.map
│       │       │   │       ├── node_modules_eef41739._.js
│       │       │   │       ├── node_modules_eef41739._.js.map
│       │       │   │       ├── node_modules_f44ff1ae._.js
│       │       │   │       ├── node_modules_f44ff1ae._.js.map
│       │       │   │       ├── node_modules_lucide-react_dist_esm_4920f34a._.js
│       │       │   │       ├── node_modules_lucide-react_dist_esm_4920f34a._.js.map
│       │       │   │       ├── node_modules_lucide-react_dist_esm_49b08e96._.js
│       │       │   │       ├── node_modules_lucide-react_dist_esm_49b08e96._.js.map
│       │       │   │       ├── node_modules_lucide-react_dist_esm_4c67dd49._.js
│       │       │   │       ├── node_modules_lucide-react_dist_esm_4c67dd49._.js.map
│       │       │   │       ├── node_modules_lucide-react_dist_esm_77b87407._.js
│       │       │   │       ├── node_modules_lucide-react_dist_esm_77b87407._.js.map
│       │       │   │       ├── node_modules_lucide-react_dist_esm_bd54ca19._.js
│       │       │   │       ├── node_modules_lucide-react_dist_esm_bd54ca19._.js.map
│       │       │   │       ├── node_modules_lucide-react_dist_esm_c0302145._.js
│       │       │   │       ├── node_modules_lucide-react_dist_esm_c0302145._.js.map
│       │       │   │       ├── node_modules_lucide-react_dist_esm_icons_58e1ce70._.js
│       │       │   │       ├── node_modules_lucide-react_dist_esm_icons_58e1ce70._.js.map
│       │       │   │       ├── node_modules_lucide-react_dist_esm_icons_dc1cc74b._.js
│       │       │   │       ├── node_modules_lucide-react_dist_esm_icons_dc1cc74b._.js.map
│       │       │   │       ├── node_modules_next_dist_036ba195._.js
│       │       │   │       ├── node_modules_next_dist_036ba195._.js.map
│       │       │   │       ├── node_modules_next_dist_07392d1f._.js
│       │       │   │       ├── node_modules_next_dist_07392d1f._.js.map
│       │       │   │       ├── node_modules_next_dist_23630535._.js
│       │       │   │       ├── node_modules_next_dist_23630535._.js.map
│       │       │   │       ├── node_modules_next_dist_3e1f69b5._.js
│       │       │   │       ├── node_modules_next_dist_3e1f69b5._.js.map
│       │       │   │       ├── node_modules_next_dist_61b1b0e8._.js
│       │       │   │       ├── node_modules_next_dist_61b1b0e8._.js.map
│       │       │   │       ├── node_modules_next_dist_62fcbc21._.js
│       │       │   │       ├── node_modules_next_dist_62fcbc21._.js.map
│       │       │   │       ├── node_modules_next_dist_70a5dee1._.js
│       │       │   │       ├── node_modules_next_dist_70a5dee1._.js.map
│       │       │   │       ├── node_modules_next_dist_8a9f78a4._.js
│       │       │   │       ├── node_modules_next_dist_8a9f78a4._.js.map
│       │       │   │       ├── node_modules_next_dist_98b67088._.js
│       │       │   │       ├── node_modules_next_dist_98b67088._.js.map
│       │       │   │       ├── node_modules_next_dist_aab8bd93._.js
│       │       │   │       ├── node_modules_next_dist_aab8bd93._.js.map
│       │       │   │       ├── node_modules_next_dist_ac897b45._.js
│       │       │   │       ├── node_modules_next_dist_ac897b45._.js.map
│       │       │   │       ├── node_modules_next_dist_ad0cba46._.js
│       │       │   │       ├── node_modules_next_dist_ad0cba46._.js.map
│       │       │   │       ├── node_modules_next_dist_afb60855._.js
│       │       │   │       ├── node_modules_next_dist_afb60855._.js.map
│       │       │   │       ├── node_modules_next_dist_cd058593._.js
│       │       │   │       ├── node_modules_next_dist_cd058593._.js.map
│       │       │   │       ├── node_modules_next_dist_ce07a4ed._.js
│       │       │   │       ├── node_modules_next_dist_ce07a4ed._.js.map
│       │       │   │       ├── node_modules_next_dist_ce31440d._.js
│       │       │   │       ├── node_modules_next_dist_ce31440d._.js.map
│       │       │   │       ├── node_modules_next_dist_client_components_9774470f._.js
│       │       │   │       ├── node_modules_next_dist_client_components_9774470f._.js.map
│       │       │   │       ├── node_modules_next_dist_client_components_builtin_forbidden_45780354.js
│       │       │   │       ├── node_modules_next_dist_client_components_builtin_forbidden_45780354.js.map
│       │       │   │       ├── node_modules_next_dist_client_components_builtin_global-error_ece394eb.js
│       │       │   │       ├── node_modules_next_dist_client_components_builtin_global-error_ece394eb.js.map
│       │       │   │       ├── node_modules_next_dist_client_components_builtin_unauthorized_15817684.js
│       │       │   │       ├── node_modules_next_dist_client_components_builtin_unauthorized_15817684.js.map
│       │       │   │       ├── node_modules_next_dist_d6852a13._.js
│       │       │   │       ├── node_modules_next_dist_d6852a13._.js.map
│       │       │   │       ├── node_modules_next_dist_eadae177._.js
│       │       │   │       ├── node_modules_next_dist_eadae177._.js.map
│       │       │   │       ├── node_modules_next_f71b9665._.js
│       │       │   │       ├── node_modules_next_f71b9665._.js.map
│       │       │   │       ├── src_06852ff9._.js
│       │       │   │       ├── src_06852ff9._.js.map
│       │       │   │       ├── src_156c7cf4._.js
│       │       │   │       ├── src_156c7cf4._.js.map
│       │       │   │       ├── src_269b1e09._.js
│       │       │   │       ├── src_269b1e09._.js.map
│       │       │   │       ├── src_3374ae93._.js
│       │       │   │       ├── src_3374ae93._.js.map
│       │       │   │       ├── src_5011eb2e._.js
│       │       │   │       ├── src_5011eb2e._.js.map
│       │       │   │       ├── src_55df28a8._.js
│       │       │   │       ├── src_55df28a8._.js.map
│       │       │   │       ├── src_5d7a9a71._.js
│       │       │   │       ├── src_5d7a9a71._.js.map
│       │       │   │       ├── src_615c7daa._.js
│       │       │   │       ├── src_615c7daa._.js.map
│       │       │   │       ├── src_6604747c._.js
│       │       │   │       ├── src_6604747c._.js.map
│       │       │   │       ├── src_75cb71a4._.js
│       │       │   │       ├── src_75cb71a4._.js.map
│       │       │   │       ├── src_7a5b7c51._.js
│       │       │   │       ├── src_7a5b7c51._.js.map
│       │       │   │       ├── src_9b7f274c._.js
│       │       │   │       ├── src_9b7f274c._.js.map
│       │       │   │       ├── src_9c43797d._.js
│       │       │   │       ├── src_9c43797d._.js.map
│       │       │   │       ├── src_app_5b2047f8._.js
│       │       │   │       ├── src_app_5b2047f8._.js.map
│       │       │   │       ├── src_app_admin_(dashboard)_layout_tsx_30a89f06._.js
│       │       │   │       ├── src_app_admin_(dashboard)_layout_tsx_30a89f06._.js.map
│       │       │   │       ├── src_app_coordinator_(dashboard)_layout_tsx_3550ea49._.js
│       │       │   │       ├── src_app_coordinator_(dashboard)_layout_tsx_3550ea49._.js.map
│       │       │   │       ├── src_app_teacher_(dashboard)_layout_tsx_db965abc._.js
│       │       │   │       ├── src_app_teacher_(dashboard)_layout_tsx_db965abc._.js.map
│       │       │   │       ├── src_b1c6f5ce._.js
│       │       │   │       ├── src_b1c6f5ce._.js.map
│       │       │   │       ├── src_b2d11ef7._.js
│       │       │   │       ├── src_b2d11ef7._.js.map
│       │       │   │       ├── src_b4b27662._.js
│       │       │   │       ├── src_b4b27662._.js.map
│       │       │   │       ├── src_b8956acc._.js
│       │       │   │       ├── src_b8956acc._.js.map
│       │       │   │       ├── src_bf4e6b24._.js
│       │       │   │       ├── src_bf4e6b24._.js.map
│       │       │   │       ├── src_c1cc6754._.js
│       │       │   │       ├── src_c1cc6754._.js.map
│       │       │   │       ├── src_c80ab160._.js
│       │       │   │       ├── src_c80ab160._.js.map
│       │       │   │       ├── src_d9890597._.js
│       │       │   │       ├── src_d9890597._.js.map
│       │       │   │       ├── src_da6d2afd._.js
│       │       │   │       ├── src_da6d2afd._.js.map
│       │       │   │       ├── src_f0b28c7b._.js
│       │       │   │       └── src_f0b28c7b._.js.map
│       │       │   ├── interception-route-rewrite-manifest.js
│       │       │   ├── middleware-build-manifest.js
│       │       │   ├── middleware-manifest.json
│       │       │   ├── next-font-manifest.js
│       │       │   ├── next-font-manifest.json
│       │       │   ├── pages/
│       │       │   │   ├── _app/
│       │       │   │   │   ├── build-manifest.json
│       │       │   │   │   ├── client-build-manifest.json
│       │       │   │   │   ├── next-font-manifest.json
│       │       │   │   │   ├── pages-manifest.json
│       │       │   │   │   └── react-loadable-manifest.json
│       │       │   │   ├── _app.js
│       │       │   │   ├── _app.js.map
│       │       │   │   ├── _document/
│       │       │   │   │   ├── next-font-manifest.json
│       │       │   │   │   ├── pages-manifest.json
│       │       │   │   │   └── react-loadable-manifest.json
│       │       │   │   ├── _document.js
│       │       │   │   ├── _document.js.map
│       │       │   │   ├── _error/
│       │       │   │   │   ├── build-manifest.json
│       │       │   │   │   ├── client-build-manifest.json
│       │       │   │   │   ├── next-font-manifest.json
│       │       │   │   │   ├── pages-manifest.json
│       │       │   │   │   └── react-loadable-manifest.json
│       │       │   │   ├── _error.js
│       │       │   │   └── _error.js.map
│       │       │   ├── pages-manifest.json
│       │       │   ├── server-reference-manifest.js
│       │       │   └── server-reference-manifest.json
│       │       ├── static/
│       │       │   ├── chunks/
│       │       │   │   ├── [next]_entry_page-loader_ts_43b523b5._.js
│       │       │   │   ├── [next]_entry_page-loader_ts_43b523b5._.js.map
│       │       │   │   ├── [next]_entry_page-loader_ts_742e4b53._.js
│       │       │   │   ├── [next]_entry_page-loader_ts_742e4b53._.js.map
│       │       │   │   ├── [next]_internal_font_google_geist_a71539c9_module_css_bad6b30c._.single.css
│       │       │   │   ├── [next]_internal_font_google_geist_a71539c9_module_css_bad6b30c._.single.css.map
│       │       │   │   ├── [next]_internal_font_google_geist_mono_8d43a2aa_module_css_bad6b30c._.single.css
│       │       │   │   ├── [next]_internal_font_google_geist_mono_8d43a2aa_module_css_bad6b30c._.single.css.map
│       │       │   │   ├── [root-of-the-server]__092393de._.js
│       │       │   │   ├── [root-of-the-server]__092393de._.js.map
│       │       │   │   ├── [root-of-the-server]__0f0ba101._.css
│       │       │   │   ├── [root-of-the-server]__0f0ba101._.css.map
│       │       │   │   ├── [root-of-the-server]__45f039c3._.js
│       │       │   │   ├── [root-of-the-server]__45f039c3._.js.map
│       │       │   │   ├── [turbopack]_browser_dev_hmr-client_hmr-client_ts_956a0d3a._.js
│       │       │   │   ├── [turbopack]_browser_dev_hmr-client_hmr-client_ts_956a0d3a._.js.map
│       │       │   │   ├── [turbopack]_browser_dev_hmr-client_hmr-client_ts_c7192189._.js
│       │       │   │   ├── [turbopack]_browser_dev_hmr-client_hmr-client_ts_c8c997ce._.js
│       │       │   │   ├── [turbopack]_browser_dev_hmr-client_hmr-client_ts_c8c997ce._.js.map
│       │       │   │   ├── _23a915ee._.js.map
│       │       │   │   ├── _23f4debe._.js
│       │       │   │   ├── _23f4debe._.js.map
│       │       │   │   ├── _37b31971._.js
│       │       │   │   ├── _37b31971._.js.map
│       │       │   │   ├── _4d00fc3e._.js
│       │       │   │   ├── _4d00fc3e._.js.map
│       │       │   │   ├── _542f8f16._.js
│       │       │   │   ├── _542f8f16._.js.map
│       │       │   │   ├── _64606ed7._.js
│       │       │   │   ├── _64606ed7._.js.map
│       │       │   │   ├── _6a69e738._.js
│       │       │   │   ├── _6a69e738._.js.map
│       │       │   │   ├── _7435ca4a._.js
│       │       │   │   ├── _7435ca4a._.js.map
│       │       │   │   ├── _7518a36f._.js
│       │       │   │   ├── _7518a36f._.js.map
│       │       │   │   ├── _97513048._.js
│       │       │   │   ├── _97513048._.js.map
│       │       │   │   ├── _a0789292._.js
│       │       │   │   ├── _a0789292._.js.map
│       │       │   │   ├── _a0ff3932._.js
│       │       │   │   ├── _be76c076._.js
│       │       │   │   ├── _be76c076._.js.map
│       │       │   │   ├── _defec0ff._.js
│       │       │   │   ├── _defec0ff._.js.map
│       │       │   │   ├── _f09ab115._.js
│       │       │   │   ├── _f09ab115._.js.map
│       │       │   │   ├── _fc0e480f._.js
│       │       │   │   ├── _fc0e480f._.js.map
│       │       │   │   ├── node_modules_35b05d10._.js
│       │       │   │   ├── node_modules_35b05d10._.js.map
│       │       │   │   ├── node_modules_464da729._.js
│       │       │   │   ├── node_modules_464da729._.js.map
│       │       │   │   ├── node_modules_5259b9eb._.js
│       │       │   │   ├── node_modules_5259b9eb._.js.map
│       │       │   │   ├── node_modules_5a06b028._.js
│       │       │   │   ├── node_modules_5a06b028._.js.map
│       │       │   │   ├── node_modules_69597e49._.js
│       │       │   │   ├── node_modules_69597e49._.js.map
│       │       │   │   ├── node_modules_6bef134e._.js
│       │       │   │   ├── node_modules_6bef134e._.js.map
│       │       │   │   ├── node_modules_6ce401ca._.js
│       │       │   │   ├── node_modules_6ce401ca._.js.map
│       │       │   │   ├── node_modules_7f09fef0._.js
│       │       │   │   ├── node_modules_7f09fef0._.js.map
│       │       │   │   ├── node_modules_8606edaa._.js
│       │       │   │   ├── node_modules_8606edaa._.js.map
│       │       │   │   ├── node_modules_94fe9d36._.js
│       │       │   │   ├── node_modules_94fe9d36._.js.map
│       │       │   │   ├── node_modules_9e74d552._.js
│       │       │   │   ├── node_modules_9e74d552._.js.map
│       │       │   │   ├── node_modules_@swc_helpers_cjs_d80fb378._.js
│       │       │   │   ├── node_modules_@swc_helpers_cjs_d80fb378._.js.map
│       │       │   │   ├── node_modules_ae98eab2._.js
│       │       │   │   ├── node_modules_ae98eab2._.js.map
│       │       │   │   ├── node_modules_b96f036a._.js
│       │       │   │   ├── node_modules_b96f036a._.js.map
│       │       │   │   ├── node_modules_ee990058._.js
│       │       │   │   ├── node_modules_ee990058._.js.map
│       │       │   │   ├── node_modules_eefa97f2._.js
│       │       │   │   ├── node_modules_eefa97f2._.js.map
│       │       │   │   ├── node_modules_f9252411._.js
│       │       │   │   ├── node_modules_f9252411._.js.map
│       │       │   │   ├── node_modules_lucide-react_dist_esm_3a092766._.js
│       │       │   │   ├── node_modules_lucide-react_dist_esm_3a092766._.js.map
│       │       │   │   ├── node_modules_lucide-react_dist_esm_62e0f235._.js
│       │       │   │   ├── node_modules_lucide-react_dist_esm_62e0f235._.js.map
│       │       │   │   ├── node_modules_lucide-react_dist_esm_7b24e559._.js
│       │       │   │   ├── node_modules_lucide-react_dist_esm_7b24e559._.js.map
│       │       │   │   ├── node_modules_lucide-react_dist_esm_d977983f._.js
│       │       │   │   ├── node_modules_lucide-react_dist_esm_d977983f._.js.map
│       │       │   │   ├── node_modules_lucide-react_dist_esm_ed40c14a._.js
│       │       │   │   ├── node_modules_lucide-react_dist_esm_ed40c14a._.js.map
│       │       │   │   ├── node_modules_lucide-react_dist_esm_f3e637fa._.js
│       │       │   │   ├── node_modules_lucide-react_dist_esm_f3e637fa._.js.map
│       │       │   │   ├── node_modules_lucide-react_dist_esm_icons_d9ea2adb._.js
│       │       │   │   ├── node_modules_lucide-react_dist_esm_icons_d9ea2adb._.js.map
│       │       │   │   ├── node_modules_lucide-react_dist_esm_icons_e2cc76da._.js
│       │       │   │   ├── node_modules_lucide-react_dist_esm_icons_e2cc76da._.js.map
│       │       │   │   ├── node_modules_next_app_72f3d36f.js
│       │       │   │   ├── node_modules_next_app_72f3d36f.js.map
│       │       │   │   ├── node_modules_next_dist_02409dcd._.js
│       │       │   │   ├── node_modules_next_dist_02409dcd._.js.map
│       │       │   │   ├── node_modules_next_dist_be32b49c._.js
│       │       │   │   ├── node_modules_next_dist_be32b49c._.js.map
│       │       │   │   ├── node_modules_next_dist_build_polyfills_polyfill-nomodule.js
│       │       │   │   ├── node_modules_next_dist_build_polyfills_polyfill-nomodule.js.map
│       │       │   │   ├── node_modules_next_dist_client_17643121._.js
│       │       │   │   ├── node_modules_next_dist_client_17643121._.js.map
│       │       │   │   ├── node_modules_next_dist_client_5a8a528e._.js
│       │       │   │   ├── node_modules_next_dist_client_5a8a528e._.js.map
│       │       │   │   ├── node_modules_next_dist_client_components_builtin_global-error_1cf6b850.js
│       │       │   │   ├── node_modules_next_dist_compiled_9c6fb6f2._.js
│       │       │   │   ├── node_modules_next_dist_compiled_9c6fb6f2._.js.map
│       │       │   │   ├── node_modules_next_dist_compiled_a0e4c7b4._.js
│       │       │   │   ├── node_modules_next_dist_compiled_a0e4c7b4._.js.map
│       │       │   │   ├── node_modules_next_dist_compiled_next-devtools_index_1dd7fb59.js
│       │       │   │   ├── node_modules_next_dist_compiled_next-devtools_index_1dd7fb59.js.map
│       │       │   │   ├── node_modules_next_dist_compiled_react-dom_1e674e59._.js
│       │       │   │   ├── node_modules_next_dist_compiled_react-dom_1e674e59._.js.map
│       │       │   │   ├── node_modules_next_dist_compiled_react-server-dom-turbopack_9212ccad._.js
│       │       │   │   ├── node_modules_next_dist_compiled_react-server-dom-turbopack_9212ccad._.js.map
│       │       │   │   ├── node_modules_next_dist_e911413b._.js
│       │       │   │   ├── node_modules_next_dist_e911413b._.js.map
│       │       │   │   ├── node_modules_next_dist_f3530cac._.js
│       │       │   │   ├── node_modules_next_dist_f3530cac._.js.map
│       │       │   │   ├── node_modules_next_dist_fe4545e6._.js
│       │       │   │   ├── node_modules_next_dist_fe4545e6._.js.map
│       │       │   │   ├── node_modules_next_dist_shared_lib_2f2a332e._.js
│       │       │   │   ├── node_modules_next_dist_shared_lib_2f2a332e._.js.map
│       │       │   │   ├── node_modules_next_dist_shared_lib_e7a9eec2._.js
│       │       │   │   ├── node_modules_next_dist_shared_lib_e7a9eec2._.js.map
│       │       │   │   ├── node_modules_next_error_1cfbb379.js
│       │       │   │   ├── node_modules_next_error_1cfbb379.js.map
│       │       │   │   ├── node_modules_react-dom_4411d9bd._.js
│       │       │   │   ├── node_modules_react-dom_4411d9bd._.js.map
│       │       │   │   ├── pages/
│       │       │   │   │   ├── _app.js
│       │       │   │   │   └── _error.js
│       │       │   │   ├── pages__app_2da965e7._.js
│       │       │   │   ├── pages__app_5a74a036._.js.map
│       │       │   │   ├── pages__error_2da965e7._.js
│       │       │   │   ├── pages__error_7999fd7c._.js.map
│       │       │   │   ├── src_20d80ed9._.js
│       │       │   │   ├── src_20d80ed9._.js.map
│       │       │   │   ├── src_2eed63c3._.js
│       │       │   │   ├── src_2eed63c3._.js.map
│       │       │   │   ├── src_370db143._.js
│       │       │   │   ├── src_370db143._.js.map
│       │       │   │   ├── src_3771de11._.js
│       │       │   │   ├── src_3771de11._.js.map
│       │       │   │   ├── src_380951e3._.js
│       │       │   │   ├── src_380951e3._.js.map
│       │       │   │   ├── src_43944e68._.js
│       │       │   │   ├── src_43944e68._.js.map
│       │       │   │   ├── src_441309d5._.js
│       │       │   │   ├── src_441309d5._.js.map
│       │       │   │   ├── src_451e39a0._.js
│       │       │   │   ├── src_451e39a0._.js.map
│       │       │   │   ├── src_4862ece9._.js
│       │       │   │   ├── src_4862ece9._.js.map
│       │       │   │   ├── src_7284ba2f._.js
│       │       │   │   ├── src_7284ba2f._.js.map
│       │       │   │   ├── src_87ae5934._.js
│       │       │   │   ├── src_87ae5934._.js.map
│       │       │   │   ├── src_8c663a6a._.js
│       │       │   │   ├── src_8c663a6a._.js.map
│       │       │   │   ├── src_932fb265._.js
│       │       │   │   ├── src_932fb265._.js.map
│       │       │   │   ├── src_962158bb._.js
│       │       │   │   ├── src_962158bb._.js.map
│       │       │   │   ├── src_9e7d113e._.js
│       │       │   │   ├── src_9e7d113e._.js.map
│       │       │   │   ├── src_9f537415._.js
│       │       │   │   ├── src_9f537415._.js.map
│       │       │   │   ├── src_a5c5c626._.js
│       │       │   │   ├── src_a5c5c626._.js.map
│       │       │   │   ├── src_ac4f018e._.js
│       │       │   │   ├── src_ac4f018e._.js.map
│       │       │   │   ├── src_ae691107._.js
│       │       │   │   ├── src_ae691107._.js.map
│       │       │   │   ├── src_app_admin_(dashboard)_layout_tsx_47b43e25._.js
│       │       │   │   ├── src_app_admin_(dashboard)_page_tsx_c6577d09._.js
│       │       │   │   ├── src_app_admin_(dashboard)_page_tsx_c7becc97._.js
│       │       │   │   ├── src_app_admin_login_page_tsx_47b43e25._.js
│       │       │   │   ├── src_app_coordinator_(dashboard)_layout_tsx_47b43e25._.js
│       │       │   │   ├── src_app_coordinator_(dashboard)_page_tsx_c6577d09._.js
│       │       │   │   ├── src_app_coordinator_(dashboard)_page_tsx_eba46749._.js
│       │       │   │   ├── src_app_coordinator_login_page_tsx_47b43e25._.js
│       │       │   │   ├── src_app_family_(dashboard)_layout_tsx_47b43e25._.js
│       │       │   │   ├── src_app_family_(dashboard)_page_tsx_c6577d09._.js
│       │       │   │   ├── src_app_favicon_ico_mjs_81d86e48._.js
│       │       │   │   ├── src_app_globals_css_bad6b30c._.single.css
│       │       │   │   ├── src_app_globals_css_bad6b30c._.single.css.map
│       │       │   │   ├── src_app_layout_tsx_1cf6b850._.js
│       │       │   │   ├── src_app_page_tsx_47b43e25._.js
│       │       │   │   ├── src_app_school_page_tsx_47b43e25._.js
│       │       │   │   ├── src_app_teacher_(dashboard)_calendar_page_tsx_8889737c._.js
│       │       │   │   ├── src_app_teacher_(dashboard)_calendar_page_tsx_becd55f2._.js
│       │       │   │   ├── src_app_teacher_(dashboard)_classroom_[id]_page_tsx_8889737c._.js
│       │       │   │   ├── src_app_teacher_(dashboard)_classroom_[id]_page_tsx_becd55f2._.js
│       │       │   │   ├── src_app_teacher_(dashboard)_classroom_page_tsx_8889737c._.js
│       │       │   │   ├── src_app_teacher_(dashboard)_classroom_page_tsx_becd55f2._.js
│       │       │   │   ├── src_app_teacher_(dashboard)_gradebook_page_tsx_8889737c._.js
│       │       │   │   ├── src_app_teacher_(dashboard)_gradebook_page_tsx_becd55f2._.js
│       │       │   │   ├── src_app_teacher_(dashboard)_layout_tsx_47b43e25._.js
│       │       │   │   ├── src_app_teacher_(dashboard)_page_tsx_8889737c._.js
│       │       │   │   ├── src_app_teacher_(dashboard)_page_tsx_becd55f2._.js
│       │       │   │   ├── src_app_teacher_(dashboard)_settings_page_tsx_becd55f2._.js
│       │       │   │   ├── src_app_teacher_(dashboard)_students_page_tsx_8889737c._.js
│       │       │   │   ├── src_app_teacher_(dashboard)_students_page_tsx_becd55f2._.js
│       │       │   │   ├── src_app_teacher_login_page_tsx_47b43e25._.js
│       │       │   │   ├── src_c310d5fa._.js
│       │       │   │   ├── src_c310d5fa._.js.map
│       │       │   │   ├── src_c34e9b42._.js
│       │       │   │   ├── src_c34e9b42._.js.map
│       │       │   │   ├── src_c4e40280._.js
│       │       │   │   ├── src_c4e40280._.js.map
│       │       │   │   ├── src_cf7574ee._.js
│       │       │   │   ├── src_cf7574ee._.js.map
│       │       │   │   ├── src_ddac7b14._.js
│       │       │   │   ├── src_ddac7b14._.js.map
│       │       │   │   ├── src_f75a923e._.js
│       │       │   │   ├── src_f75a923e._.js.map
│       │       │   │   ├── turbopack-_23a915ee._.js
│       │       │   │   ├── turbopack-pages__app_5a74a036._.js
│       │       │   │   └── turbopack-pages__error_7999fd7c._.js
│       │       │   ├── development/
│       │       │   │   ├── _buildManifest.js
│       │       │   │   ├── _clientMiddlewareManifest.json
│       │       │   │   └── _ssgManifest.js
│       │       │   └── media/
│       │       │       ├── 4fa387ec64143e14-s.c1fdd6c2.woff2
│       │       │       ├── 7178b3e590c64307-s.b97b3418.woff2
│       │       │       ├── 797e433ab948586e-s.p.dbea232f.woff2
│       │       │       ├── 8a480f0b521d4e75-s.8e0177b5.woff2
│       │       │       ├── bbc41e54d2fcbd21-s.799d8ef8.woff2
│       │       │       ├── caa3a2e1cccd8315-s.p.853070df.woff2
│       │       │       └── favicon.0b3bf435.ico
│       │       ├── trace
│       │       └── types/
│       │           ├── cache-life.d.ts
│       │           ├── routes.d.ts
│       │           └── validator.ts
│       ├── next-env.d.ts
│       └── tsconfig.tsbuildinfo
├── backend/
│   ├── eslint.config.mjs
│   ├── nodemon.json
│   ├── package-lock.json
│   ├── package.json
│   ├── prisma/
│   │   ├── migrations/
│   │   │   ├── 20260113195923_init/
│   │   │   │   └── migration.sql
│   │   │   ├── 20260115061155_add_attendance_status/
│   │   │   │   └── migration.sql
│   │   │   ├── 20260115064811_add_avatar_color/
│   │   │   │   └── migration.sql
│   │   │   ├── 20260115090206_add_cascade_delete_students/
│   │   │   │   └── migration.sql
│   │   │   ├── 20260117080130_rename_behavior_to_feedback/
│   │   │   │   └── migration.sql
│   │   │   └── migration_lock.toml
│   │   ├── schema.prisma
│   │   └── seed.ts
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── attendanceController.ts
│   │   │   ├── authController.ts
│   │   │   ├── classController.ts
│   │   │   ├── dashboardController.ts
│   │   │   ├── exportController.ts
│   │   │   ├── familyController.ts
│   │   │   ├── feedbackController.ts
│   │   │   ├── studentController.ts
│   │   │   └── usersController.ts
│   │   ├── middleware/
│   │   │   └── auth.ts
│   │   ├── routes/
│   │   │   ├── attendanceRoutes.ts
│   │   │   ├── authRoutes.ts
│   │   │   ├── classRoutes.ts
│   │   │   ├── dashboardRoutes.ts
│   │   │   ├── exportRoutes.ts
│   │   │   ├── familyRoutes.ts
│   │   │   ├── feedbackRoutes.ts
│   │   │   ├── studentRoutes.ts
│   │   │   └── usersRoutes.ts
│   │   ├── scripts/
│   │   │   ├── debugScore.ts
│   │   │   └── test-attendance-endpoint.ts
│   │   ├── server.ts
│   │   └── utils/
│   │       ├── dateUtils.ts
│   │       └── prisma.ts
│   └── tsconfig.json
├── docker-compose.yml
├── docs/
│   └── security/
├── frontend/
│   ├── .gitignore
│   ├── README.md
│   ├── app/
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── error.tsx
│   │   ├── family/
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── page.tsx
│   │   └── providers.tsx
│   ├── components/
│   │   ├── AuthProvider.tsx
│   │   ├── Calendar.tsx
│   │   ├── EmojiPicker.tsx
│   │   ├── FeedbackEditorModal.tsx
│   │   ├── FeedbackModal.tsx
│   │   ├── ManageClassTeachersModal.tsx
│   │   ├── StudentCard.tsx
│   │   ├── StudentDetailModal.tsx
│   │   ├── StudentFormModal.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Input.tsx
│   │       └── Modal.tsx
│   ├── eslint.config.mjs
│   ├── hooks/
│   │   └── useDashboard.ts
│   ├── lib/
│   │   ├── api.ts
│   │   ├── authEvents.ts
│   │   ├── retry.ts
│   │   └── types.ts
│   ├── next.config.ts
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.mjs
│   ├── public/
│   │   ├── file.svg
│   │   ├── globe.svg
│   │   ├── next.svg
│   │   ├── vercel.svg
│   │   └── window.svg
│   ├── tsconfig.json
│   └── utils/
│       ├── animalAvatarMap.ts
│       ├── getAnimalAvatar.ts
│       └── getErrorMessage.ts
├── packages/
│   ├── shared/
│   └── ui/
├── scripts/
│   └── generate_tree.py
└── tree.md
```

Este arquivo é gerado automaticamente pelo script `scripts/generate_tree.py` e atualizado pelo workflow `.github/workflows/update-tree.yml`.

Para atualizar localmente:

```bash
python3 scripts/generate_tree.py
```
