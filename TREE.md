.
├── .gitignore
├── .vscode
│   └── settings.json
├── ARCH.md
├── CREDENTIALS.md
├── LICENSE.md
├── PLAN.md
├── README.md
├── REQUIREMENTS.md
├── TASKS.md
├── TREE.md
├── TUTORIAL.md
├── apps
│   ├── api
│   │   ├── accounts
│   │   │   ├── __init__.py
│   │   │   ├── admin.py
│   │   │   ├── apps.py
│   │   │   ├── migrations
│   │   │   │   ├── 0001_initial.py
│   │   │   │   └── __init__.py
│   │   │   ├── models.py
│   │   │   ├── tests.py
│   │   │   ├── urls.py
│   │   │   └── views.py
│   │   ├── attendance
│   │   │   ├── __init__.py
│   │   │   ├── admin.py
│   │   │   ├── apps.py
│   │   │   ├── migrations
│   │   │   │   └── __init__.py
│   │   │   ├── models.py
│   │   │   ├── tests.py
│   │   │   └── views.py
│   │   ├── audit
│   │   │   ├── __init__.py
│   │   │   ├── admin.py
│   │   │   ├── apps.py
│   │   │   ├── migrations
│   │   │   │   └── __init__.py
│   │   │   ├── models.py
│   │   │   ├── tests.py
│   │   │   └── views.py
│   │   ├── classrooms
│   │   │   ├── __init__.py
│   │   │   ├── admin.py
│   │   │   ├── apps.py
│   │   │   ├── migrations
│   │   │   │   ├── 0001_initial.py
│   │   │   │   └── __init__.py
│   │   │   ├── models.py
│   │   │   ├── serializers.py
│   │   │   ├── tests.py
│   │   │   ├── urls.py
│   │   │   └── views.py
│   │   ├── config
│   │   │   ├── __init__.py
│   │   │   ├── asgi.py
│   │   │   ├── settings.py
│   │   │   ├── urls.py
│   │   │   └── wsgi.py
│   │   ├── core
│   │   │   ├── __init__.py
│   │   │   ├── admin.py
│   │   │   ├── apps.py
│   │   │   ├── management
│   │   │   │   ├── __init__.py
│   │   │   │   └── commands
│   │   │   │       ├── __init__.py
│   │   │   │       └── seed_data.py
│   │   │   ├── migrations
│   │   │   │   └── __init__.py
│   │   │   ├── models.py
│   │   │   ├── tests.py
│   │   │   └── views.py
│   │   ├── db.sqlite3
│   │   ├── feedback
│   │   │   ├── __init__.py
│   │   │   ├── admin.py
│   │   │   ├── apps.py
│   │   │   ├── migrations
│   │   │   │   └── __init__.py
│   │   │   ├── models.py
│   │   │   ├── tests.py
│   │   │   └── views.py
│   │   ├── grades
│   │   │   ├── __init__.py
│   │   │   ├── admin.py
│   │   │   ├── apps.py
│   │   │   ├── migrations
│   │   │   │   ├── 0001_initial.py
│   │   │   │   └── __init__.py
│   │   │   ├── models.py
│   │   │   ├── serializers.py
│   │   │   ├── tests.py
│   │   │   ├── urls.py
│   │   │   └── views.py
│   │   ├── manage.py
│   │   ├── messaging
│   │   │   ├── __init__.py
│   │   │   ├── admin.py
│   │   │   ├── apps.py
│   │   │   ├── migrations
│   │   │   │   └── __init__.py
│   │   │   ├── models.py
│   │   │   ├── tests.py
│   │   │   └── views.py
│   │   ├── posts
│   │   │   ├── __init__.py
│   │   │   ├── admin.py
│   │   │   ├── apps.py
│   │   │   ├── migrations
│   │   │   │   └── __init__.py
│   │   │   ├── models.py
│   │   │   ├── tests.py
│   │   │   └── views.py
│   │   ├── requirements.txt
│   │   ├── schools
│   │   │   ├── __init__.py
│   │   │   ├── admin.py
│   │   │   ├── apps.py
│   │   │   ├── migrations
│   │   │   │   └── __init__.py
│   │   │   ├── models.py
│   │   │   ├── tests.py
│   │   │   └── views.py
│   │   ├── students
│   │   │   ├── __init__.py
│   │   │   ├── admin.py
│   │   │   ├── apps.py
│   │   │   ├── migrations
│   │   │   │   ├── 0001_initial.py
│   │   │   │   ├── 0002_change_animal_id_to_emoji.py
│   │   │   │   └── __init__.py
│   │   │   ├── models.py
│   │   │   ├── serializers.py
│   │   │   ├── tests.py
│   │   │   ├── urls.py
│   │   │   └── views.py
│   │   └── venv
│   │       ├── bin
│   │       │   ├── Activate.ps1
│   │       │   ├── activate
│   │       │   ├── activate.csh
│   │       │   ├── activate.fish
│   │       │   ├── django-admin
│   │       │   ├── pip
│   │       │   ├── pip3
│   │       │   ├── pip3.12
│   │       │   ├── python
│   │       │   ├── python3
│   │       │   ├── python3.12
│   │       │   └── sqlformat
│   │       ├── include
│   │       │   └── python3.12
│   │       ├── lib
│   │       │   └── python3.12
│   │       │       └── site-packages
│   │       │           ├── asgiref
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
│   │       │           ├── asgiref-3.11.0.dist-info
│   │       │           │   ├── INSTALLER
│   │       │           │   ├── METADATA
│   │       │           │   ├── RECORD
│   │       │           │   ├── REQUESTED
│   │       │           │   ├── WHEEL
│   │       │           │   ├── licenses
│   │       │           │   │   └── LICENSE
│   │       │           │   └── top_level.txt
│   │       │           ├── corsheaders
│   │       │           │   ├── __init__.py
│   │       │           │   ├── apps.py
│   │       │           │   ├── checks.py
│   │       │           │   ├── conf.py
│   │       │           │   ├── defaults.py
│   │       │           │   ├── middleware.py
│   │       │           │   ├── py.typed
│   │       │           │   └── signals.py
│   │       │           ├── django
│   │       │           │   ├── __init__.py
│   │       │           │   ├── __main__.py
│   │       │           │   ├── apps
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── config.py
│   │       │           │   │   └── registry.py
│   │       │           │   ├── conf
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── app_template
│   │       │           │   │   │   ├── __init__.py-tpl
│   │       │           │   │   │   ├── admin.py-tpl
│   │       │           │   │   │   ├── apps.py-tpl
│   │       │           │   │   │   ├── migrations
│   │       │           │   │   │   │   └── __init__.py-tpl
│   │       │           │   │   │   ├── models.py-tpl
│   │       │           │   │   │   ├── tests.py-tpl
│   │       │           │   │   │   └── views.py-tpl
│   │       │           │   │   ├── global_settings.py
│   │       │           │   │   ├── locale
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── af
│   │       │           │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── ar
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── ar_DZ
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── ast
│   │       │           │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── az
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── be
│   │       │           │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── bg
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── bn
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── br
│   │       │           │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── bs
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── ca
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── ckb
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── cs
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── cy
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── da
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── de
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── de_CH
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── dsb
│   │       │           │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── el
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── en
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── en_AU
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── en_CA
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── en_GB
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── en_IE
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── eo
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── es
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── es_AR
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── es_CO
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── es_MX
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── es_NI
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── es_PR
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── es_VE
│   │       │           │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── et
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── eu
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── fa
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── fi
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── fr
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── fr_BE
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── fr_CA
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── fr_CH
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── fy
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── ga
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── gd
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── gl
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── he
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── hi
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── hr
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── hsb
│   │       │           │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── ht
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── hu
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── hy
│   │       │           │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── ia
│   │       │           │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── id
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── ig
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── io
│   │       │           │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── is
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── it
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── ja
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── ka
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── kab
│   │       │           │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── kk
│   │       │           │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── km
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── kn
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── ko
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── ky
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── lb
│   │       │           │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── lt
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── lv
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── mk
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── ml
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── mn
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── mr
│   │       │           │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── ms
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── my
│   │       │           │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── nb
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── ne
│   │       │           │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── nl
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── nn
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── os
│   │       │           │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── pa
│   │       │           │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── pl
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── pt
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── pt_BR
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── ro
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── ru
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── sk
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── sl
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── sq
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── sr
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── sr_Latn
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── sv
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── sw
│   │       │           │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── ta
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── te
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── tg
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── th
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── tk
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── tr
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── tt
│   │       │           │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── udm
│   │       │           │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── ug
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── uk
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── ur
│   │       │           │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │       ├── django.mo
│   │       │           │   │   │   │       └── django.po
│   │       │           │   │   │   ├── uz
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── vi
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   ├── zh_Hans
│   │       │           │   │   │   │   ├── LC_MESSAGES
│   │       │           │   │   │   │   │   ├── django.mo
│   │       │           │   │   │   │   │   └── django.po
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── formats.py
│   │       │           │   │   │   └── zh_Hant
│   │       │           │   │   │       ├── LC_MESSAGES
│   │       │           │   │   │       │   ├── django.mo
│   │       │           │   │   │       │   └── django.po
│   │       │           │   │   │       ├── __init__.py
│   │       │           │   │   │       └── formats.py
│   │       │           │   │   ├── project_template
│   │       │           │   │   │   ├── manage.py-tpl
│   │       │           │   │   │   └── project_name
│   │       │           │   │   │       ├── __init__.py-tpl
│   │       │           │   │   │       ├── asgi.py-tpl
│   │       │           │   │   │       ├── settings.py-tpl
│   │       │           │   │   │       ├── urls.py-tpl
│   │       │           │   │   │       └── wsgi.py-tpl
│   │       │           │   │   └── urls
│   │       │           │   │       ├── __init__.py
│   │       │           │   │       ├── i18n.py
│   │       │           │   │       └── static.py
│   │       │           │   ├── contrib
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── admin
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── actions.py
│   │       │           │   │   │   ├── apps.py
│   │       │           │   │   │   ├── checks.py
│   │       │           │   │   │   ├── decorators.py
│   │       │           │   │   │   ├── exceptions.py
│   │       │           │   │   │   ├── filters.py
│   │       │           │   │   │   ├── forms.py
│   │       │           │   │   │   ├── helpers.py
│   │       │           │   │   │   ├── locale
│   │       │           │   │   │   │   ├── af
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── am
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ar
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── ar_DZ
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── ast
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── az
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── be
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── bg
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── bn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── br
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── bs
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── ca
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── ckb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── cs
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── cy
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── da
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── de
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── dsb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── el
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── en
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── en_AU
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── en_GB
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── eo
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── es
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── es_AR
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── es_CO
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── es_MX
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── es_VE
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── et
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── eu
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── fa
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── fi
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── fr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── fy
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── ga
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── gd
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── gl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── he
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── hi
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── hr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── hsb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── hu
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── hy
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── ia
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── id
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── io
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── is
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── it
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── ja
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── ka
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── kab
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── kk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── km
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── kn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── ko
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── ky
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── lb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── lt
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── lv
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── mk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── ml
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── mn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── mr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── ms
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── my
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── nb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── ne
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── nl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── nn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── os
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── pa
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── pl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── pt
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── pt_BR
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── ro
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── ru
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── sk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── sl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── sq
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── sr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── sr_Latn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── sv
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── sw
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── ta
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── te
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── tg
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── th
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── tk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── tt
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── udm
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── ug
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── uk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── ur
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── uz
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── vi
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   ├── zh_Hans
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       ├── django.po
│   │       │           │   │   │   │   │       ├── djangojs.mo
│   │       │           │   │   │   │   │       └── djangojs.po
│   │       │           │   │   │   │   └── zh_Hant
│   │       │           │   │   │   │       └── LC_MESSAGES
│   │       │           │   │   │   │           ├── django.mo
│   │       │           │   │   │   │           ├── django.po
│   │       │           │   │   │   │           ├── djangojs.mo
│   │       │           │   │   │   │           └── djangojs.po
│   │       │           │   │   │   ├── migrations
│   │       │           │   │   │   │   ├── 0001_initial.py
│   │       │           │   │   │   │   ├── 0002_logentry_remove_auto_add.py
│   │       │           │   │   │   │   ├── 0003_logentry_add_action_flag_choices.py
│   │       │           │   │   │   │   └── __init__.py
│   │       │           │   │   │   ├── models.py
│   │       │           │   │   │   ├── options.py
│   │       │           │   │   │   ├── sites.py
│   │       │           │   │   │   ├── static
│   │       │           │   │   │   │   └── admin
│   │       │           │   │   │   │       ├── css
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
│   │       │           │   │   │   │       │   ├── vendor
│   │       │           │   │   │   │       │   │   └── select2
│   │       │           │   │   │   │       │   │       ├── LICENSE-SELECT2.md
│   │       │           │   │   │   │       │   │       ├── select2.css
│   │       │           │   │   │   │       │   │       └── select2.min.css
│   │       │           │   │   │   │       │   └── widgets.css
│   │       │           │   │   │   │       ├── img
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
│   │       │           │   │   │   │       └── js
│   │       │           │   │   │   │           ├── SelectBox.js
│   │       │           │   │   │   │           ├── SelectFilter2.js
│   │       │           │   │   │   │           ├── actions.js
│   │       │           │   │   │   │           ├── admin
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
│   │       │           │   │   │   │           └── vendor
│   │       │           │   │   │   │               ├── jquery
│   │       │           │   │   │   │               │   ├── LICENSE.txt
│   │       │           │   │   │   │               │   ├── jquery.js
│   │       │           │   │   │   │               │   └── jquery.min.js
│   │       │           │   │   │   │               ├── select2
│   │       │           │   │   │   │               │   ├── LICENSE.md
│   │       │           │   │   │   │               │   ├── i18n
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
│   │       │           │   │   │   │               └── xregexp
│   │       │           │   │   │   │                   ├── LICENSE.txt
│   │       │           │   │   │   │                   ├── xregexp.js
│   │       │           │   │   │   │                   └── xregexp.min.js
│   │       │           │   │   │   ├── templates
│   │       │           │   │   │   │   ├── admin
│   │       │           │   │   │   │   │   ├── 404.html
│   │       │           │   │   │   │   │   ├── 500.html
│   │       │           │   │   │   │   │   ├── actions.html
│   │       │           │   │   │   │   │   ├── app_index.html
│   │       │           │   │   │   │   │   ├── app_list.html
│   │       │           │   │   │   │   │   ├── auth
│   │       │           │   │   │   │   │   │   └── user
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
│   │       │           │   │   │   │   │   ├── edit_inline
│   │       │           │   │   │   │   │   │   ├── stacked.html
│   │       │           │   │   │   │   │   │   └── tabular.html
│   │       │           │   │   │   │   │   ├── filter.html
│   │       │           │   │   │   │   │   ├── includes
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
│   │       │           │   │   │   │   │   └── widgets
│   │       │           │   │   │   │   │       ├── clearable_file_input.html
│   │       │           │   │   │   │   │       ├── date.html
│   │       │           │   │   │   │   │       ├── foreign_key_raw_id.html
│   │       │           │   │   │   │   │       ├── many_to_many_raw_id.html
│   │       │           │   │   │   │   │       ├── radio.html
│   │       │           │   │   │   │   │       ├── related_widget_wrapper.html
│   │       │           │   │   │   │   │       ├── split_datetime.html
│   │       │           │   │   │   │   │       ├── time.html
│   │       │           │   │   │   │   │       └── url.html
│   │       │           │   │   │   │   └── registration
│   │       │           │   │   │   │       ├── logged_out.html
│   │       │           │   │   │   │       ├── password_change_done.html
│   │       │           │   │   │   │       ├── password_change_form.html
│   │       │           │   │   │   │       ├── password_reset_complete.html
│   │       │           │   │   │   │       ├── password_reset_confirm.html
│   │       │           │   │   │   │       ├── password_reset_done.html
│   │       │           │   │   │   │       ├── password_reset_email.html
│   │       │           │   │   │   │       └── password_reset_form.html
│   │       │           │   │   │   ├── templatetags
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── admin_list.py
│   │       │           │   │   │   │   ├── admin_modify.py
│   │       │           │   │   │   │   ├── admin_urls.py
│   │       │           │   │   │   │   ├── base.py
│   │       │           │   │   │   │   └── log.py
│   │       │           │   │   │   ├── tests.py
│   │       │           │   │   │   ├── utils.py
│   │       │           │   │   │   ├── views
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── autocomplete.py
│   │       │           │   │   │   │   ├── decorators.py
│   │       │           │   │   │   │   └── main.py
│   │       │           │   │   │   └── widgets.py
│   │       │           │   │   ├── admindocs
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── apps.py
│   │       │           │   │   │   ├── locale
│   │       │           │   │   │   │   ├── af
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ar
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ar_DZ
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ast
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── az
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── be
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bg
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── br
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bs
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ca
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ckb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── cs
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── cy
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── da
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── de
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── dsb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── el
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en_AU
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en_GB
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── eo
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_AR
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_CO
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_MX
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_VE
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── et
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── eu
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fa
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fi
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fy
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ga
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── gd
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── gl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── he
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hi
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hsb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hu
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ia
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── id
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── io
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── is
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── it
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ja
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ka
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kab
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── km
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ko
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ky
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lt
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lv
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ml
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ms
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── my
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ne
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── os
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pa
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pt
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pt_BR
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ro
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ru
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sq
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sr_Latn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sv
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sw
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ta
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── te
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tg
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── th
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tt
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── udm
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ug
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── uk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ur
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── vi
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── zh_Hans
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   └── zh_Hant
│   │       │           │   │   │   │       └── LC_MESSAGES
│   │       │           │   │   │   │           ├── django.mo
│   │       │           │   │   │   │           └── django.po
│   │       │           │   │   │   ├── middleware.py
│   │       │           │   │   │   ├── templates
│   │       │           │   │   │   │   └── admin_doc
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
│   │       │           │   │   ├── auth
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
│   │       │           │   │   │   ├── handlers
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── modwsgi.py
│   │       │           │   │   │   ├── hashers.py
│   │       │           │   │   │   ├── locale
│   │       │           │   │   │   │   ├── af
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ar
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ar_DZ
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ast
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── az
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── be
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bg
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── br
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bs
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ca
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ckb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── cs
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── cy
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── da
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── de
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── dsb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── el
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en_AU
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en_GB
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── eo
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_AR
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_CO
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_MX
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_VE
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── et
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── eu
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fa
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fi
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fy
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ga
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── gd
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── gl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── he
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hi
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hsb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hu
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hy
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ia
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── id
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── io
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── is
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── it
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ja
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ka
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kab
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── km
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ko
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ky
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lt
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lv
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ml
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ms
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── my
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ne
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── os
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pa
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pt
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pt_BR
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ro
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ru
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sq
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sr_Latn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sv
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sw
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ta
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── te
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tg
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── th
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tt
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── udm
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ug
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── uk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ur
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── uz
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── vi
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── zh_Hans
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   └── zh_Hant
│   │       │           │   │   │   │       └── LC_MESSAGES
│   │       │           │   │   │   │           ├── django.mo
│   │       │           │   │   │   │           └── django.po
│   │       │           │   │   │   ├── management
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── commands
│   │       │           │   │   │   │       ├── __init__.py
│   │       │           │   │   │   │       ├── changepassword.py
│   │       │           │   │   │   │       └── createsuperuser.py
│   │       │           │   │   │   ├── middleware.py
│   │       │           │   │   │   ├── migrations
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
│   │       │           │   │   │   ├── templates
│   │       │           │   │   │   │   ├── auth
│   │       │           │   │   │   │   │   └── widgets
│   │       │           │   │   │   │   │       └── read_only_password_hash.html
│   │       │           │   │   │   │   └── registration
│   │       │           │   │   │   │       └── password_reset_subject.txt
│   │       │           │   │   │   ├── templatetags
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── auth.py
│   │       │           │   │   │   ├── tokens.py
│   │       │           │   │   │   ├── urls.py
│   │       │           │   │   │   ├── validators.py
│   │       │           │   │   │   └── views.py
│   │       │           │   │   ├── contenttypes
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── admin.py
│   │       │           │   │   │   ├── apps.py
│   │       │           │   │   │   ├── checks.py
│   │       │           │   │   │   ├── fields.py
│   │       │           │   │   │   ├── forms.py
│   │       │           │   │   │   ├── locale
│   │       │           │   │   │   │   ├── af
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ar
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ar_DZ
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ast
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── az
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── be
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bg
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── br
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bs
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ca
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ckb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── cs
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── cy
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── da
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── de
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── dsb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── el
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en_AU
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en_GB
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── eo
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_AR
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_CO
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_MX
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_VE
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── et
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── eu
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fa
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fi
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fy
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ga
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── gd
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── gl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── he
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hi
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hsb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hu
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hy
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ia
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── id
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── io
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── is
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── it
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ja
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ka
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── km
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ko
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ky
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lt
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lv
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ml
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ms
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── my
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ne
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── os
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pa
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pt
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pt_BR
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ro
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ru
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sq
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sr_Latn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sv
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sw
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ta
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── te
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tg
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── th
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tt
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── udm
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ug
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── uk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ur
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── vi
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── zh_Hans
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   └── zh_Hant
│   │       │           │   │   │   │       └── LC_MESSAGES
│   │       │           │   │   │   │           ├── django.mo
│   │       │           │   │   │   │           └── django.po
│   │       │           │   │   │   ├── management
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── commands
│   │       │           │   │   │   │       ├── __init__.py
│   │       │           │   │   │   │       └── remove_stale_contenttypes.py
│   │       │           │   │   │   ├── migrations
│   │       │           │   │   │   │   ├── 0001_initial.py
│   │       │           │   │   │   │   ├── 0002_remove_content_type_name.py
│   │       │           │   │   │   │   └── __init__.py
│   │       │           │   │   │   ├── models.py
│   │       │           │   │   │   ├── prefetch.py
│   │       │           │   │   │   └── views.py
│   │       │           │   │   ├── flatpages
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── admin.py
│   │       │           │   │   │   ├── apps.py
│   │       │           │   │   │   ├── forms.py
│   │       │           │   │   │   ├── locale
│   │       │           │   │   │   │   ├── af
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ar
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ar_DZ
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ast
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── az
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── be
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bg
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── br
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bs
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ca
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ckb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── cs
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── cy
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── da
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── de
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── dsb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── el
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en_AU
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en_GB
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── eo
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_AR
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_CO
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_MX
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_VE
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── et
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── eu
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fa
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fi
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fy
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ga
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── gd
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── gl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── he
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hi
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hsb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hu
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hy
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ia
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── id
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── io
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── is
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── it
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ja
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ka
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── km
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ko
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ky
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lt
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lv
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ml
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ms
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── my
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ne
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── os
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pa
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pt
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pt_BR
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ro
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ru
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sq
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sr_Latn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sv
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sw
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ta
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── te
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tg
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── th
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tt
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── udm
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ug
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── uk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ur
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── vi
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── zh_Hans
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   └── zh_Hant
│   │       │           │   │   │   │       └── LC_MESSAGES
│   │       │           │   │   │   │           ├── django.mo
│   │       │           │   │   │   │           └── django.po
│   │       │           │   │   │   ├── middleware.py
│   │       │           │   │   │   ├── migrations
│   │       │           │   │   │   │   ├── 0001_initial.py
│   │       │           │   │   │   │   └── __init__.py
│   │       │           │   │   │   ├── models.py
│   │       │           │   │   │   ├── sitemaps.py
│   │       │           │   │   │   ├── templatetags
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── flatpages.py
│   │       │           │   │   │   ├── urls.py
│   │       │           │   │   │   └── views.py
│   │       │           │   │   ├── gis
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── admin
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── options.py
│   │       │           │   │   │   ├── apps.py
│   │       │           │   │   │   ├── db
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── backends
│   │       │           │   │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   │   ├── base
│   │       │           │   │   │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   │   │   ├── adapter.py
│   │       │           │   │   │   │   │   │   ├── features.py
│   │       │           │   │   │   │   │   │   ├── models.py
│   │       │           │   │   │   │   │   │   └── operations.py
│   │       │           │   │   │   │   │   ├── mysql
│   │       │           │   │   │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   │   │   ├── base.py
│   │       │           │   │   │   │   │   │   ├── features.py
│   │       │           │   │   │   │   │   │   ├── introspection.py
│   │       │           │   │   │   │   │   │   ├── operations.py
│   │       │           │   │   │   │   │   │   └── schema.py
│   │       │           │   │   │   │   │   ├── oracle
│   │       │           │   │   │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   │   │   ├── adapter.py
│   │       │           │   │   │   │   │   │   ├── base.py
│   │       │           │   │   │   │   │   │   ├── features.py
│   │       │           │   │   │   │   │   │   ├── introspection.py
│   │       │           │   │   │   │   │   │   ├── models.py
│   │       │           │   │   │   │   │   │   ├── operations.py
│   │       │           │   │   │   │   │   │   └── schema.py
│   │       │           │   │   │   │   │   ├── postgis
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
│   │       │           │   │   │   │   │   ├── spatialite
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
│   │       │           │   │   │   │   └── models
│   │       │           │   │   │   │       ├── __init__.py
│   │       │           │   │   │   │       ├── aggregates.py
│   │       │           │   │   │   │       ├── fields.py
│   │       │           │   │   │   │       ├── functions.py
│   │       │           │   │   │   │       ├── lookups.py
│   │       │           │   │   │   │       ├── proxy.py
│   │       │           │   │   │   │       └── sql
│   │       │           │   │   │   │           ├── __init__.py
│   │       │           │   │   │   │           └── conversion.py
│   │       │           │   │   │   ├── feeds.py
│   │       │           │   │   │   ├── forms
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── fields.py
│   │       │           │   │   │   │   └── widgets.py
│   │       │           │   │   │   ├── gdal
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
│   │       │           │   │   │   │   ├── prototypes
│   │       │           │   │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   │   ├── ds.py
│   │       │           │   │   │   │   │   ├── errcheck.py
│   │       │           │   │   │   │   │   ├── generation.py
│   │       │           │   │   │   │   │   ├── geom.py
│   │       │           │   │   │   │   │   ├── raster.py
│   │       │           │   │   │   │   │   └── srs.py
│   │       │           │   │   │   │   ├── raster
│   │       │           │   │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   │   ├── band.py
│   │       │           │   │   │   │   │   ├── base.py
│   │       │           │   │   │   │   │   ├── const.py
│   │       │           │   │   │   │   │   └── source.py
│   │       │           │   │   │   │   └── srs.py
│   │       │           │   │   │   ├── geoip2.py
│   │       │           │   │   │   ├── geometry.py
│   │       │           │   │   │   ├── geos
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
│   │       │           │   │   │   │   └── prototypes
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
│   │       │           │   │   │   ├── locale
│   │       │           │   │   │   │   ├── af
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ar
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ar_DZ
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ast
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── az
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── be
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bg
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── br
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bs
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ca
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ckb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── cs
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── cy
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── da
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── de
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── dsb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── el
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en_AU
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en_GB
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── eo
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_AR
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_CO
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_MX
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_VE
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── et
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── eu
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fa
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fi
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fy
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ga
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── gd
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── gl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── he
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hi
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hsb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hu
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hy
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ia
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── id
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── io
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── is
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── it
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ja
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ka
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── km
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ko
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ky
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lt
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lv
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ml
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ms
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── my
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ne
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── os
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pa
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pt
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pt_BR
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ro
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ru
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sq
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sr_Latn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sv
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sw
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ta
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── te
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tg
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── th
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tt
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── udm
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ug
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── uk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ur
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── vi
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── zh_Hans
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   └── zh_Hant
│   │       │           │   │   │   │       └── LC_MESSAGES
│   │       │           │   │   │   │           ├── django.mo
│   │       │           │   │   │   │           └── django.po
│   │       │           │   │   │   ├── management
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── commands
│   │       │           │   │   │   │       ├── __init__.py
│   │       │           │   │   │   │       ├── inspectdb.py
│   │       │           │   │   │   │       └── ogrinspect.py
│   │       │           │   │   │   ├── measure.py
│   │       │           │   │   │   ├── ptr.py
│   │       │           │   │   │   ├── serializers
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── geojson.py
│   │       │           │   │   │   ├── shortcuts.py
│   │       │           │   │   │   ├── sitemaps
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── kml.py
│   │       │           │   │   │   │   └── views.py
│   │       │           │   │   │   ├── static
│   │       │           │   │   │   │   └── gis
│   │       │           │   │   │   │       ├── css
│   │       │           │   │   │   │       │   └── ol3.css
│   │       │           │   │   │   │       ├── img
│   │       │           │   │   │   │       │   ├── draw_line_off.svg
│   │       │           │   │   │   │       │   ├── draw_line_on.svg
│   │       │           │   │   │   │       │   ├── draw_point_off.svg
│   │       │           │   │   │   │       │   ├── draw_point_on.svg
│   │       │           │   │   │   │       │   ├── draw_polygon_off.svg
│   │       │           │   │   │   │       │   └── draw_polygon_on.svg
│   │       │           │   │   │   │       └── js
│   │       │           │   │   │   │           └── OLMapWidget.js
│   │       │           │   │   │   ├── templates
│   │       │           │   │   │   │   └── gis
│   │       │           │   │   │   │       ├── kml
│   │       │           │   │   │   │       │   ├── base.kml
│   │       │           │   │   │   │       │   └── placemarks.kml
│   │       │           │   │   │   │       └── openlayers.html
│   │       │           │   │   │   ├── utils
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── layermapping.py
│   │       │           │   │   │   │   ├── ogrinfo.py
│   │       │           │   │   │   │   ├── ogrinspect.py
│   │       │           │   │   │   │   └── srs.py
│   │       │           │   │   │   └── views.py
│   │       │           │   │   ├── humanize
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── apps.py
│   │       │           │   │   │   ├── locale
│   │       │           │   │   │   │   ├── af
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ar
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ar_DZ
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ast
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── az
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── be
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bg
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── br
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bs
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ca
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ckb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── cs
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── cy
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── da
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── de
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── dsb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── el
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en_AU
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en_GB
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── eo
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_AR
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_CO
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_MX
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_VE
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── et
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── eu
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fa
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fi
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fy
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ga
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── gd
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── gl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── he
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hi
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hsb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hu
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hy
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ia
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── id
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── io
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── is
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── it
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ja
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ka
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── km
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ko
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ky
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lt
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lv
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ml
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ms
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── my
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ne
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── os
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pa
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pt
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pt_BR
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ro
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ru
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sq
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sr_Latn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sv
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sw
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ta
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── te
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tg
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── th
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tt
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── udm
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ug
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── uk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ur
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── uz
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── vi
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── zh_Hans
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   └── zh_Hant
│   │       │           │   │   │   │       └── LC_MESSAGES
│   │       │           │   │   │   │           ├── django.mo
│   │       │           │   │   │   │           └── django.po
│   │       │           │   │   │   └── templatetags
│   │       │           │   │   │       ├── __init__.py
│   │       │           │   │   │       └── humanize.py
│   │       │           │   │   ├── messages
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── api.py
│   │       │           │   │   │   ├── apps.py
│   │       │           │   │   │   ├── constants.py
│   │       │           │   │   │   ├── context_processors.py
│   │       │           │   │   │   ├── middleware.py
│   │       │           │   │   │   ├── storage
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── base.py
│   │       │           │   │   │   │   ├── cookie.py
│   │       │           │   │   │   │   ├── fallback.py
│   │       │           │   │   │   │   └── session.py
│   │       │           │   │   │   ├── test.py
│   │       │           │   │   │   ├── utils.py
│   │       │           │   │   │   └── views.py
│   │       │           │   │   ├── postgres
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── aggregates
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── general.py
│   │       │           │   │   │   │   ├── mixins.py
│   │       │           │   │   │   │   └── statistics.py
│   │       │           │   │   │   ├── apps.py
│   │       │           │   │   │   ├── constraints.py
│   │       │           │   │   │   ├── expressions.py
│   │       │           │   │   │   ├── fields
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── array.py
│   │       │           │   │   │   │   ├── citext.py
│   │       │           │   │   │   │   ├── hstore.py
│   │       │           │   │   │   │   ├── jsonb.py
│   │       │           │   │   │   │   ├── ranges.py
│   │       │           │   │   │   │   └── utils.py
│   │       │           │   │   │   ├── forms
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── array.py
│   │       │           │   │   │   │   ├── hstore.py
│   │       │           │   │   │   │   └── ranges.py
│   │       │           │   │   │   ├── functions.py
│   │       │           │   │   │   ├── indexes.py
│   │       │           │   │   │   ├── jinja2
│   │       │           │   │   │   │   └── postgres
│   │       │           │   │   │   │       └── widgets
│   │       │           │   │   │   │           └── split_array.html
│   │       │           │   │   │   ├── locale
│   │       │           │   │   │   │   ├── af
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ar
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ar_DZ
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── az
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── be
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bg
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ca
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ckb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── cs
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── da
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── de
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── dsb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── el
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en_AU
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── eo
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_AR
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_CO
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_MX
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── et
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── eu
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fa
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fi
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ga
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── gd
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── gl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── he
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hsb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hu
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hy
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ia
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── id
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── is
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── it
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ja
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ka
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ko
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ky
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lt
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lv
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ml
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ms
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ne
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pt
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pt_BR
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ro
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ru
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sq
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sr_Latn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sv
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tg
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ug
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── uk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── uz
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── zh_Hans
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   └── zh_Hant
│   │       │           │   │   │   │       └── LC_MESSAGES
│   │       │           │   │   │   │           ├── django.mo
│   │       │           │   │   │   │           └── django.po
│   │       │           │   │   │   ├── lookups.py
│   │       │           │   │   │   ├── operations.py
│   │       │           │   │   │   ├── search.py
│   │       │           │   │   │   ├── serializers.py
│   │       │           │   │   │   ├── signals.py
│   │       │           │   │   │   ├── templates
│   │       │           │   │   │   │   └── postgres
│   │       │           │   │   │   │       └── widgets
│   │       │           │   │   │   │           └── split_array.html
│   │       │           │   │   │   ├── utils.py
│   │       │           │   │   │   └── validators.py
│   │       │           │   │   ├── redirects
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── admin.py
│   │       │           │   │   │   ├── apps.py
│   │       │           │   │   │   ├── locale
│   │       │           │   │   │   │   ├── af
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ar
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ar_DZ
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ast
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── az
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── be
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bg
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── br
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bs
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ca
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ckb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── cs
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── cy
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── da
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── de
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── dsb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── el
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en_AU
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en_GB
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── eo
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_AR
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_CO
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_MX
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_VE
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── et
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── eu
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fa
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fi
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fy
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ga
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── gd
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── gl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── he
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hi
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hsb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hu
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hy
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ia
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── id
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── io
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── is
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── it
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ja
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ka
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kab
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── km
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ko
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ky
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lt
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lv
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ml
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ms
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── my
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ne
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── os
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pa
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pt
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pt_BR
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ro
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ru
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sq
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sr_Latn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sv
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sw
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ta
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── te
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tg
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── th
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tt
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── udm
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ug
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── uk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ur
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── uz
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── vi
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── zh_Hans
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   └── zh_Hant
│   │       │           │   │   │   │       └── LC_MESSAGES
│   │       │           │   │   │   │           ├── django.mo
│   │       │           │   │   │   │           └── django.po
│   │       │           │   │   │   ├── middleware.py
│   │       │           │   │   │   ├── migrations
│   │       │           │   │   │   │   ├── 0001_initial.py
│   │       │           │   │   │   │   ├── 0002_alter_redirect_new_path_help_text.py
│   │       │           │   │   │   │   └── __init__.py
│   │       │           │   │   │   └── models.py
│   │       │           │   │   ├── sessions
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── apps.py
│   │       │           │   │   │   ├── backends
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── base.py
│   │       │           │   │   │   │   ├── cache.py
│   │       │           │   │   │   │   ├── cached_db.py
│   │       │           │   │   │   │   ├── db.py
│   │       │           │   │   │   │   ├── file.py
│   │       │           │   │   │   │   └── signed_cookies.py
│   │       │           │   │   │   ├── base_session.py
│   │       │           │   │   │   ├── exceptions.py
│   │       │           │   │   │   ├── locale
│   │       │           │   │   │   │   ├── af
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ar
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ar_DZ
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ast
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── az
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── be
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bg
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── br
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bs
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ca
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ckb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── cs
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── cy
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── da
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── de
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── dsb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── el
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en_AU
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en_GB
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── eo
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_AR
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_CO
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_MX
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_VE
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── et
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── eu
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fa
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fi
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fy
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ga
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── gd
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── gl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── he
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hi
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hsb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hu
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hy
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ia
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── id
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── io
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── is
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── it
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ja
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ka
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kab
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── km
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ko
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ky
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lt
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lv
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ml
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ms
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── my
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ne
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── os
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pa
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pt
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pt_BR
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ro
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ru
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sq
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sr_Latn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sv
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sw
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ta
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── te
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tg
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── th
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tt
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── udm
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ug
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── uk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ur
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── uz
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── vi
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── zh_Hans
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   └── zh_Hant
│   │       │           │   │   │   │       └── LC_MESSAGES
│   │       │           │   │   │   │           ├── django.mo
│   │       │           │   │   │   │           └── django.po
│   │       │           │   │   │   ├── management
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── commands
│   │       │           │   │   │   │       ├── __init__.py
│   │       │           │   │   │   │       └── clearsessions.py
│   │       │           │   │   │   ├── middleware.py
│   │       │           │   │   │   ├── migrations
│   │       │           │   │   │   │   ├── 0001_initial.py
│   │       │           │   │   │   │   └── __init__.py
│   │       │           │   │   │   ├── models.py
│   │       │           │   │   │   └── serializers.py
│   │       │           │   │   ├── sitemaps
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── apps.py
│   │       │           │   │   │   ├── templates
│   │       │           │   │   │   │   ├── sitemap.xml
│   │       │           │   │   │   │   └── sitemap_index.xml
│   │       │           │   │   │   └── views.py
│   │       │           │   │   ├── sites
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── admin.py
│   │       │           │   │   │   ├── apps.py
│   │       │           │   │   │   ├── checks.py
│   │       │           │   │   │   ├── locale
│   │       │           │   │   │   │   ├── af
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ar
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ar_DZ
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ast
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── az
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── be
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bg
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── br
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── bs
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ca
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ckb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── cs
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── cy
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── da
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── de
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── dsb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── el
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en_AU
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── en_GB
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── eo
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_AR
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_CO
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_MX
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── es_VE
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── et
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── eu
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fa
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fi
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── fy
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ga
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── gd
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── gl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── he
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hi
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hsb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hu
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── hy
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ia
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── id
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── io
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── is
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── it
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ja
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ka
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kab
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── km
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── kn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ko
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ky
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lt
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── lv
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ml
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── mr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ms
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── my
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nb
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ne
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── nn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── os
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pa
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pt
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── pt_BR
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ro
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ru
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sl
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sq
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sr_Latn
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sv
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── sw
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ta
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── te
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tg
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── th
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tr
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── tt
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── udm
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ug
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── uk
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── ur
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── uz
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── vi
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   ├── zh_Hans
│   │       │           │   │   │   │   │   └── LC_MESSAGES
│   │       │           │   │   │   │   │       ├── django.mo
│   │       │           │   │   │   │   │       └── django.po
│   │       │           │   │   │   │   └── zh_Hant
│   │       │           │   │   │   │       └── LC_MESSAGES
│   │       │           │   │   │   │           ├── django.mo
│   │       │           │   │   │   │           └── django.po
│   │       │           │   │   │   ├── management.py
│   │       │           │   │   │   ├── managers.py
│   │       │           │   │   │   ├── middleware.py
│   │       │           │   │   │   ├── migrations
│   │       │           │   │   │   │   ├── 0001_initial.py
│   │       │           │   │   │   │   ├── 0002_alter_domain_unique.py
│   │       │           │   │   │   │   └── __init__.py
│   │       │           │   │   │   ├── models.py
│   │       │           │   │   │   ├── requests.py
│   │       │           │   │   │   └── shortcuts.py
│   │       │           │   │   ├── staticfiles
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── apps.py
│   │       │           │   │   │   ├── checks.py
│   │       │           │   │   │   ├── finders.py
│   │       │           │   │   │   ├── handlers.py
│   │       │           │   │   │   ├── management
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── commands
│   │       │           │   │   │   │       ├── __init__.py
│   │       │           │   │   │   │       ├── collectstatic.py
│   │       │           │   │   │   │       ├── findstatic.py
│   │       │           │   │   │   │       └── runserver.py
│   │       │           │   │   │   ├── storage.py
│   │       │           │   │   │   ├── testing.py
│   │       │           │   │   │   ├── urls.py
│   │       │           │   │   │   ├── utils.py
│   │       │           │   │   │   └── views.py
│   │       │           │   │   └── syndication
│   │       │           │   │       ├── __init__.py
│   │       │           │   │       ├── apps.py
│   │       │           │   │       └── views.py
│   │       │           │   ├── core
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── asgi.py
│   │       │           │   │   ├── cache
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── backends
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── base.py
│   │       │           │   │   │   │   ├── db.py
│   │       │           │   │   │   │   ├── dummy.py
│   │       │           │   │   │   │   ├── filebased.py
│   │       │           │   │   │   │   ├── locmem.py
│   │       │           │   │   │   │   ├── memcached.py
│   │       │           │   │   │   │   └── redis.py
│   │       │           │   │   │   └── utils.py
│   │       │           │   │   ├── checks
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── async_checks.py
│   │       │           │   │   │   ├── caches.py
│   │       │           │   │   │   ├── commands.py
│   │       │           │   │   │   ├── compatibility
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── django_4_0.py
│   │       │           │   │   │   ├── database.py
│   │       │           │   │   │   ├── files.py
│   │       │           │   │   │   ├── messages.py
│   │       │           │   │   │   ├── model_checks.py
│   │       │           │   │   │   ├── registry.py
│   │       │           │   │   │   ├── security
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── base.py
│   │       │           │   │   │   │   ├── csrf.py
│   │       │           │   │   │   │   └── sessions.py
│   │       │           │   │   │   ├── templates.py
│   │       │           │   │   │   ├── translation.py
│   │       │           │   │   │   └── urls.py
│   │       │           │   │   ├── exceptions.py
│   │       │           │   │   ├── files
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── base.py
│   │       │           │   │   │   ├── images.py
│   │       │           │   │   │   ├── locks.py
│   │       │           │   │   │   ├── move.py
│   │       │           │   │   │   ├── storage
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
│   │       │           │   │   ├── handlers
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── asgi.py
│   │       │           │   │   │   ├── base.py
│   │       │           │   │   │   ├── exception.py
│   │       │           │   │   │   └── wsgi.py
│   │       │           │   │   ├── mail
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── backends
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── base.py
│   │       │           │   │   │   │   ├── console.py
│   │       │           │   │   │   │   ├── dummy.py
│   │       │           │   │   │   │   ├── filebased.py
│   │       │           │   │   │   │   ├── locmem.py
│   │       │           │   │   │   │   └── smtp.py
│   │       │           │   │   │   ├── message.py
│   │       │           │   │   │   └── utils.py
│   │       │           │   │   ├── management
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── base.py
│   │       │           │   │   │   ├── color.py
│   │       │           │   │   │   ├── commands
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
│   │       │           │   │   ├── serializers
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── base.py
│   │       │           │   │   │   ├── json.py
│   │       │           │   │   │   ├── jsonl.py
│   │       │           │   │   │   ├── python.py
│   │       │           │   │   │   ├── pyyaml.py
│   │       │           │   │   │   └── xml_serializer.py
│   │       │           │   │   ├── servers
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   └── basehttp.py
│   │       │           │   │   ├── signals.py
│   │       │           │   │   ├── signing.py
│   │       │           │   │   ├── validators.py
│   │       │           │   │   └── wsgi.py
│   │       │           │   ├── db
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── backends
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── base
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
│   │       │           │   │   │   ├── dummy
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── base.py
│   │       │           │   │   │   │   └── features.py
│   │       │           │   │   │   ├── mysql
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
│   │       │           │   │   │   ├── oracle
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
│   │       │           │   │   │   ├── postgresql
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
│   │       │           │   │   │   ├── sqlite3
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
│   │       │           │   │   ├── migrations
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── autodetector.py
│   │       │           │   │   │   ├── exceptions.py
│   │       │           │   │   │   ├── executor.py
│   │       │           │   │   │   ├── graph.py
│   │       │           │   │   │   ├── loader.py
│   │       │           │   │   │   ├── migration.py
│   │       │           │   │   │   ├── operations
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
│   │       │           │   │   ├── models
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── aggregates.py
│   │       │           │   │   │   ├── base.py
│   │       │           │   │   │   ├── constants.py
│   │       │           │   │   │   ├── constraints.py
│   │       │           │   │   │   ├── deletion.py
│   │       │           │   │   │   ├── enums.py
│   │       │           │   │   │   ├── expressions.py
│   │       │           │   │   │   ├── fields
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
│   │       │           │   │   │   ├── functions
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
│   │       │           │   │   │   ├── sql
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
│   │       │           │   ├── dispatch
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── dispatcher.py
│   │       │           │   │   └── license.txt
│   │       │           │   ├── forms
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── boundfield.py
│   │       │           │   │   ├── fields.py
│   │       │           │   │   ├── forms.py
│   │       │           │   │   ├── formsets.py
│   │       │           │   │   ├── jinja2
│   │       │           │   │   │   └── django
│   │       │           │   │   │       └── forms
│   │       │           │   │   │           ├── attrs.html
│   │       │           │   │   │           ├── div.html
│   │       │           │   │   │           ├── errors
│   │       │           │   │   │           │   ├── dict
│   │       │           │   │   │           │   │   ├── default.html
│   │       │           │   │   │           │   │   ├── text.txt
│   │       │           │   │   │           │   │   └── ul.html
│   │       │           │   │   │           │   └── list
│   │       │           │   │   │           │       ├── default.html
│   │       │           │   │   │           │       ├── text.txt
│   │       │           │   │   │           │       └── ul.html
│   │       │           │   │   │           ├── field.html
│   │       │           │   │   │           ├── formsets
│   │       │           │   │   │           │   ├── div.html
│   │       │           │   │   │           │   ├── p.html
│   │       │           │   │   │           │   ├── table.html
│   │       │           │   │   │           │   └── ul.html
│   │       │           │   │   │           ├── label.html
│   │       │           │   │   │           ├── p.html
│   │       │           │   │   │           ├── table.html
│   │       │           │   │   │           ├── ul.html
│   │       │           │   │   │           └── widgets
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
│   │       │           │   │   ├── templates
│   │       │           │   │   │   └── django
│   │       │           │   │   │       └── forms
│   │       │           │   │   │           ├── attrs.html
│   │       │           │   │   │           ├── div.html
│   │       │           │   │   │           ├── errors
│   │       │           │   │   │           │   ├── dict
│   │       │           │   │   │           │   │   ├── default.html
│   │       │           │   │   │           │   │   ├── text.txt
│   │       │           │   │   │           │   │   └── ul.html
│   │       │           │   │   │           │   └── list
│   │       │           │   │   │           │       ├── default.html
│   │       │           │   │   │           │       ├── text.txt
│   │       │           │   │   │           │       └── ul.html
│   │       │           │   │   │           ├── field.html
│   │       │           │   │   │           ├── formsets
│   │       │           │   │   │           │   ├── div.html
│   │       │           │   │   │           │   ├── p.html
│   │       │           │   │   │           │   ├── table.html
│   │       │           │   │   │           │   └── ul.html
│   │       │           │   │   │           ├── label.html
│   │       │           │   │   │           ├── p.html
│   │       │           │   │   │           ├── table.html
│   │       │           │   │   │           ├── ul.html
│   │       │           │   │   │           └── widgets
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
│   │       │           │   ├── http
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── cookie.py
│   │       │           │   │   ├── multipartparser.py
│   │       │           │   │   ├── request.py
│   │       │           │   │   └── response.py
│   │       │           │   ├── middleware
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
│   │       │           │   ├── tasks
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── backends
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── base.py
│   │       │           │   │   │   ├── dummy.py
│   │       │           │   │   │   └── immediate.py
│   │       │           │   │   ├── base.py
│   │       │           │   │   ├── checks.py
│   │       │           │   │   ├── exceptions.py
│   │       │           │   │   └── signals.py
│   │       │           │   ├── template
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── autoreload.py
│   │       │           │   │   ├── backends
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
│   │       │           │   │   ├── loaders
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── app_directories.py
│   │       │           │   │   │   ├── base.py
│   │       │           │   │   │   ├── cached.py
│   │       │           │   │   │   ├── filesystem.py
│   │       │           │   │   │   └── locmem.py
│   │       │           │   │   ├── response.py
│   │       │           │   │   ├── smartif.py
│   │       │           │   │   └── utils.py
│   │       │           │   ├── templatetags
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── cache.py
│   │       │           │   │   ├── i18n.py
│   │       │           │   │   ├── l10n.py
│   │       │           │   │   ├── static.py
│   │       │           │   │   └── tz.py
│   │       │           │   ├── test
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── client.py
│   │       │           │   │   ├── html.py
│   │       │           │   │   ├── runner.py
│   │       │           │   │   ├── selenium.py
│   │       │           │   │   ├── signals.py
│   │       │           │   │   ├── testcases.py
│   │       │           │   │   └── utils.py
│   │       │           │   ├── urls
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── base.py
│   │       │           │   │   ├── conf.py
│   │       │           │   │   ├── converters.py
│   │       │           │   │   ├── exceptions.py
│   │       │           │   │   ├── resolvers.py
│   │       │           │   │   └── utils.py
│   │       │           │   ├── utils
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
│   │       │           │   │   ├── translation
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── reloader.py
│   │       │           │   │   │   ├── template.py
│   │       │           │   │   │   ├── trans_null.py
│   │       │           │   │   │   └── trans_real.py
│   │       │           │   │   ├── tree.py
│   │       │           │   │   ├── version.py
│   │       │           │   │   └── xmlutils.py
│   │       │           │   └── views
│   │       │           │       ├── __init__.py
│   │       │           │       ├── csrf.py
│   │       │           │       ├── debug.py
│   │       │           │       ├── decorators
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
│   │       │           │       ├── generic
│   │       │           │       │   ├── __init__.py
│   │       │           │       │   ├── base.py
│   │       │           │       │   ├── dates.py
│   │       │           │       │   ├── detail.py
│   │       │           │       │   ├── edit.py
│   │       │           │       │   └── list.py
│   │       │           │       ├── i18n.py
│   │       │           │       ├── static.py
│   │       │           │       └── templates
│   │       │           │           ├── csrf_403.html
│   │       │           │           ├── default_urlconf.html
│   │       │           │           ├── directory_index.html
│   │       │           │           ├── i18n_catalog.js
│   │       │           │           ├── technical_404.html
│   │       │           │           ├── technical_500.html
│   │       │           │           └── technical_500.txt
│   │       │           ├── django-6.0.1.dist-info
│   │       │           │   ├── INSTALLER
│   │       │           │   ├── METADATA
│   │       │           │   ├── RECORD
│   │       │           │   ├── REQUESTED
│   │       │           │   ├── WHEEL
│   │       │           │   ├── entry_points.txt
│   │       │           │   ├── licenses
│   │       │           │   │   ├── LICENSE
│   │       │           │   │   └── LICENSE.python
│   │       │           │   └── top_level.txt
│   │       │           ├── django_cors_headers-4.9.0.dist-info
│   │       │           │   ├── INSTALLER
│   │       │           │   ├── METADATA
│   │       │           │   ├── RECORD
│   │       │           │   ├── REQUESTED
│   │       │           │   ├── WHEEL
│   │       │           │   ├── licenses
│   │       │           │   │   └── LICENSE
│   │       │           │   └── top_level.txt
│   │       │           ├── djangorestframework-3.16.1.dist-info
│   │       │           │   ├── INSTALLER
│   │       │           │   ├── METADATA
│   │       │           │   ├── RECORD
│   │       │           │   ├── REQUESTED
│   │       │           │   ├── WHEEL
│   │       │           │   ├── licenses
│   │       │           │   │   └── LICENSE.md
│   │       │           │   └── top_level.txt
│   │       │           ├── pip
│   │       │           │   ├── __init__.py
│   │       │           │   ├── __main__.py
│   │       │           │   ├── __pip-runner__.py
│   │       │           │   ├── _internal
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── build_env.py
│   │       │           │   │   ├── cache.py
│   │       │           │   │   ├── cli
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
│   │       │           │   │   ├── commands
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
│   │       │           │   │   ├── distributions
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── base.py
│   │       │           │   │   │   ├── installed.py
│   │       │           │   │   │   ├── sdist.py
│   │       │           │   │   │   └── wheel.py
│   │       │           │   │   ├── exceptions.py
│   │       │           │   │   ├── index
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── collector.py
│   │       │           │   │   │   ├── package_finder.py
│   │       │           │   │   │   └── sources.py
│   │       │           │   │   ├── locations
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── _distutils.py
│   │       │           │   │   │   ├── _sysconfig.py
│   │       │           │   │   │   └── base.py
│   │       │           │   │   ├── main.py
│   │       │           │   │   ├── metadata
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── _json.py
│   │       │           │   │   │   ├── base.py
│   │       │           │   │   │   ├── importlib
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── _compat.py
│   │       │           │   │   │   │   ├── _dists.py
│   │       │           │   │   │   │   └── _envs.py
│   │       │           │   │   │   └── pkg_resources.py
│   │       │           │   │   ├── models
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
│   │       │           │   │   ├── network
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── auth.py
│   │       │           │   │   │   ├── cache.py
│   │       │           │   │   │   ├── download.py
│   │       │           │   │   │   ├── lazy_wheel.py
│   │       │           │   │   │   ├── session.py
│   │       │           │   │   │   ├── utils.py
│   │       │           │   │   │   └── xmlrpc.py
│   │       │           │   │   ├── operations
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── build
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
│   │       │           │   │   │   ├── install
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── editable_legacy.py
│   │       │           │   │   │   │   └── wheel.py
│   │       │           │   │   │   └── prepare.py
│   │       │           │   │   ├── pyproject.py
│   │       │           │   │   ├── req
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── constructors.py
│   │       │           │   │   │   ├── req_file.py
│   │       │           │   │   │   ├── req_install.py
│   │       │           │   │   │   ├── req_set.py
│   │       │           │   │   │   └── req_uninstall.py
│   │       │           │   │   ├── resolution
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── base.py
│   │       │           │   │   │   ├── legacy
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── resolver.py
│   │       │           │   │   │   └── resolvelib
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
│   │       │           │   │   ├── utils
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
│   │       │           │   │   ├── vcs
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── bazaar.py
│   │       │           │   │   │   ├── git.py
│   │       │           │   │   │   ├── mercurial.py
│   │       │           │   │   │   ├── subversion.py
│   │       │           │   │   │   └── versioncontrol.py
│   │       │           │   │   └── wheel_builder.py
│   │       │           │   ├── _vendor
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── cachecontrol
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── _cmd.py
│   │       │           │   │   │   ├── adapter.py
│   │       │           │   │   │   ├── cache.py
│   │       │           │   │   │   ├── caches
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── file_cache.py
│   │       │           │   │   │   │   └── redis_cache.py
│   │       │           │   │   │   ├── controller.py
│   │       │           │   │   │   ├── filewrapper.py
│   │       │           │   │   │   ├── heuristics.py
│   │       │           │   │   │   ├── py.typed
│   │       │           │   │   │   ├── serialize.py
│   │       │           │   │   │   └── wrapper.py
│   │       │           │   │   ├── certifi
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── __main__.py
│   │       │           │   │   │   ├── cacert.pem
│   │       │           │   │   │   ├── core.py
│   │       │           │   │   │   └── py.typed
│   │       │           │   │   ├── distlib
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
│   │       │           │   │   ├── distro
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── __main__.py
│   │       │           │   │   │   ├── distro.py
│   │       │           │   │   │   └── py.typed
│   │       │           │   │   ├── idna
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── codec.py
│   │       │           │   │   │   ├── compat.py
│   │       │           │   │   │   ├── core.py
│   │       │           │   │   │   ├── idnadata.py
│   │       │           │   │   │   ├── intranges.py
│   │       │           │   │   │   ├── package_data.py
│   │       │           │   │   │   ├── py.typed
│   │       │           │   │   │   └── uts46data.py
│   │       │           │   │   ├── msgpack
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── exceptions.py
│   │       │           │   │   │   ├── ext.py
│   │       │           │   │   │   └── fallback.py
│   │       │           │   │   ├── packaging
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
│   │       │           │   │   ├── pkg_resources
│   │       │           │   │   │   └── __init__.py
│   │       │           │   │   ├── platformdirs
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── __main__.py
│   │       │           │   │   │   ├── android.py
│   │       │           │   │   │   ├── api.py
│   │       │           │   │   │   ├── macos.py
│   │       │           │   │   │   ├── py.typed
│   │       │           │   │   │   ├── unix.py
│   │       │           │   │   │   ├── version.py
│   │       │           │   │   │   └── windows.py
│   │       │           │   │   ├── pygments
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── __main__.py
│   │       │           │   │   │   ├── cmdline.py
│   │       │           │   │   │   ├── console.py
│   │       │           │   │   │   ├── filter.py
│   │       │           │   │   │   ├── filters
│   │       │           │   │   │   │   └── __init__.py
│   │       │           │   │   │   ├── formatter.py
│   │       │           │   │   │   ├── formatters
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
│   │       │           │   │   │   ├── lexers
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── _mapping.py
│   │       │           │   │   │   │   └── python.py
│   │       │           │   │   │   ├── modeline.py
│   │       │           │   │   │   ├── plugin.py
│   │       │           │   │   │   ├── regexopt.py
│   │       │           │   │   │   ├── scanner.py
│   │       │           │   │   │   ├── sphinxext.py
│   │       │           │   │   │   ├── style.py
│   │       │           │   │   │   ├── styles
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── _mapping.py
│   │       │           │   │   │   ├── token.py
│   │       │           │   │   │   ├── unistring.py
│   │       │           │   │   │   └── util.py
│   │       │           │   │   ├── pyproject_hooks
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── _compat.py
│   │       │           │   │   │   ├── _impl.py
│   │       │           │   │   │   └── _in_process
│   │       │           │   │   │       ├── __init__.py
│   │       │           │   │   │       └── _in_process.py
│   │       │           │   │   ├── requests
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
│   │       │           │   │   ├── resolvelib
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── compat
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   └── collections_abc.py
│   │       │           │   │   │   ├── providers.py
│   │       │           │   │   │   ├── py.typed
│   │       │           │   │   │   ├── reporters.py
│   │       │           │   │   │   ├── resolvers.py
│   │       │           │   │   │   └── structs.py
│   │       │           │   │   ├── rich
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
│   │       │           │   │   ├── tomli
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── _parser.py
│   │       │           │   │   │   ├── _re.py
│   │       │           │   │   │   ├── _types.py
│   │       │           │   │   │   └── py.typed
│   │       │           │   │   ├── truststore
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── _api.py
│   │       │           │   │   │   ├── _macos.py
│   │       │           │   │   │   ├── _openssl.py
│   │       │           │   │   │   ├── _ssl_constants.py
│   │       │           │   │   │   ├── _windows.py
│   │       │           │   │   │   └── py.typed
│   │       │           │   │   ├── typing_extensions.py
│   │       │           │   │   ├── urllib3
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   ├── _collections.py
│   │       │           │   │   │   ├── _version.py
│   │       │           │   │   │   ├── connection.py
│   │       │           │   │   │   ├── connectionpool.py
│   │       │           │   │   │   ├── contrib
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── _appengine_environ.py
│   │       │           │   │   │   │   ├── _securetransport
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
│   │       │           │   │   │   ├── packages
│   │       │           │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   ├── backports
│   │       │           │   │   │   │   │   ├── __init__.py
│   │       │           │   │   │   │   │   ├── makefile.py
│   │       │           │   │   │   │   │   └── weakref_finalize.py
│   │       │           │   │   │   │   └── six.py
│   │       │           │   │   │   ├── poolmanager.py
│   │       │           │   │   │   ├── request.py
│   │       │           │   │   │   ├── response.py
│   │       │           │   │   │   └── util
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
│   │       │           ├── pip-24.3.1.dist-info
│   │       │           │   ├── AUTHORS.txt
│   │       │           │   ├── INSTALLER
│   │       │           │   ├── LICENSE.txt
│   │       │           │   ├── METADATA
│   │       │           │   ├── RECORD
│   │       │           │   ├── REQUESTED
│   │       │           │   ├── WHEEL
│   │       │           │   ├── entry_points.txt
│   │       │           │   └── top_level.txt
│   │       │           ├── psycopg2
│   │       │           │   ├── .dylibs
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
│   │       │           ├── psycopg2_binary-2.9.11.dist-info
│   │       │           │   ├── INSTALLER
│   │       │           │   ├── METADATA
│   │       │           │   ├── RECORD
│   │       │           │   ├── REQUESTED
│   │       │           │   ├── WHEEL
│   │       │           │   ├── licenses
│   │       │           │   │   └── LICENSE
│   │       │           │   └── top_level.txt
│   │       │           ├── rest_framework
│   │       │           │   ├── __init__.py
│   │       │           │   ├── apps.py
│   │       │           │   ├── authentication.py
│   │       │           │   ├── authtoken
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── admin.py
│   │       │           │   │   ├── apps.py
│   │       │           │   │   ├── management
│   │       │           │   │   │   ├── __init__.py
│   │       │           │   │   │   └── commands
│   │       │           │   │   │       ├── __init__.py
│   │       │           │   │   │       └── drf_create_token.py
│   │       │           │   │   ├── migrations
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
│   │       │           │   ├── locale
│   │       │           │   │   ├── ach
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── ar
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── az
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── be
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── bg
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── ca
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── ca_ES
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── cs
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── da
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── de
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── el
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── el_GR
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── en
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── en_AU
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── en_CA
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── en_US
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── es
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── et
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── fa
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── fa_IR
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── fi
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── fr
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── fr_CA
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── gl
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── gl_ES
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── he_IL
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── hu
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── hy
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── id
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── it
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── ja
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── kk
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── ko_KR
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── lt
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── lv
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── mk
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── nb
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── ne_NP
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── nl
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── nn
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── no
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── pl
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── pt
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── pt_BR
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── pt_PT
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── ro
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── ru
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── ru_RU
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── sk
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── sl
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── sv
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── th
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── tr
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── tr_TR
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── uk
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── vi
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── zh_CN
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── zh_Hans
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   ├── zh_Hant
│   │       │           │   │   │   └── LC_MESSAGES
│   │       │           │   │   │       └── django.mo
│   │       │           │   │   └── zh_TW
│   │       │           │   │       └── LC_MESSAGES
│   │       │           │   │           └── django.mo
│   │       │           │   ├── management
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   └── commands
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
│   │       │           │   ├── schemas
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── coreapi.py
│   │       │           │   │   ├── generators.py
│   │       │           │   │   ├── inspectors.py
│   │       │           │   │   ├── openapi.py
│   │       │           │   │   ├── utils.py
│   │       │           │   │   └── views.py
│   │       │           │   ├── serializers.py
│   │       │           │   ├── settings.py
│   │       │           │   ├── static
│   │       │           │   │   └── rest_framework
│   │       │           │   │       ├── css
│   │       │           │   │       │   ├── bootstrap-theme.min.css
│   │       │           │   │       │   ├── bootstrap-theme.min.css.map
│   │       │           │   │       │   ├── bootstrap-tweaks.css
│   │       │           │   │       │   ├── bootstrap.min.css
│   │       │           │   │       │   ├── bootstrap.min.css.map
│   │       │           │   │       │   ├── default.css
│   │       │           │   │       │   ├── font-awesome-4.0.3.css
│   │       │           │   │       │   └── prettify.css
│   │       │           │   │       ├── docs
│   │       │           │   │       │   ├── css
│   │       │           │   │       │   │   ├── base.css
│   │       │           │   │       │   │   ├── highlight.css
│   │       │           │   │       │   │   └── jquery.json-view.min.css
│   │       │           │   │       │   ├── img
│   │       │           │   │       │   │   ├── favicon.ico
│   │       │           │   │       │   │   └── grid.png
│   │       │           │   │       │   └── js
│   │       │           │   │       │       ├── api.js
│   │       │           │   │       │       ├── highlight.pack.js
│   │       │           │   │       │       └── jquery.json-view.min.js
│   │       │           │   │       ├── fonts
│   │       │           │   │       │   ├── fontawesome-webfont.eot
│   │       │           │   │       │   ├── fontawesome-webfont.svg
│   │       │           │   │       │   ├── fontawesome-webfont.ttf
│   │       │           │   │       │   ├── fontawesome-webfont.woff
│   │       │           │   │       │   ├── glyphicons-halflings-regular.eot
│   │       │           │   │       │   ├── glyphicons-halflings-regular.svg
│   │       │           │   │       │   ├── glyphicons-halflings-regular.ttf
│   │       │           │   │       │   ├── glyphicons-halflings-regular.woff
│   │       │           │   │       │   └── glyphicons-halflings-regular.woff2
│   │       │           │   │       ├── img
│   │       │           │   │       │   ├── glyphicons-halflings-white.png
│   │       │           │   │       │   ├── glyphicons-halflings.png
│   │       │           │   │       │   └── grid.png
│   │       │           │   │       └── js
│   │       │           │   │           ├── ajax-form.js
│   │       │           │   │           ├── bootstrap.min.js
│   │       │           │   │           ├── coreapi-0.1.1.js
│   │       │           │   │           ├── csrf.js
│   │       │           │   │           ├── default.js
│   │       │           │   │           ├── jquery-3.7.1.min.js
│   │       │           │   │           ├── load-ajax-form.js
│   │       │           │   │           └── prettify-min.js
│   │       │           │   ├── status.py
│   │       │           │   ├── templates
│   │       │           │   │   └── rest_framework
│   │       │           │   │       ├── admin
│   │       │           │   │       │   ├── detail.html
│   │       │           │   │       │   ├── dict_value.html
│   │       │           │   │       │   ├── list.html
│   │       │           │   │       │   ├── list_value.html
│   │       │           │   │       │   └── simple_list_value.html
│   │       │           │   │       ├── admin.html
│   │       │           │   │       ├── api.html
│   │       │           │   │       ├── base.html
│   │       │           │   │       ├── docs
│   │       │           │   │       │   ├── auth
│   │       │           │   │       │   │   ├── basic.html
│   │       │           │   │       │   │   ├── session.html
│   │       │           │   │       │   │   └── token.html
│   │       │           │   │       │   ├── document.html
│   │       │           │   │       │   ├── error.html
│   │       │           │   │       │   ├── index.html
│   │       │           │   │       │   ├── interact.html
│   │       │           │   │       │   ├── langs
│   │       │           │   │       │   │   ├── javascript-intro.html
│   │       │           │   │       │   │   ├── javascript.html
│   │       │           │   │       │   │   ├── python-intro.html
│   │       │           │   │       │   │   ├── python.html
│   │       │           │   │       │   │   ├── shell-intro.html
│   │       │           │   │       │   │   └── shell.html
│   │       │           │   │       │   ├── link.html
│   │       │           │   │       │   └── sidebar.html
│   │       │           │   │       ├── filters
│   │       │           │   │       │   ├── base.html
│   │       │           │   │       │   ├── ordering.html
│   │       │           │   │       │   └── search.html
│   │       │           │   │       ├── horizontal
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
│   │       │           │   │       ├── inline
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
│   │       │           │   │       ├── pagination
│   │       │           │   │       │   ├── numbers.html
│   │       │           │   │       │   └── previous_and_next.html
│   │       │           │   │       ├── raw_data_form.html
│   │       │           │   │       ├── schema.js
│   │       │           │   │       └── vertical
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
│   │       │           │   ├── templatetags
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   └── rest_framework.py
│   │       │           │   ├── test.py
│   │       │           │   ├── throttling.py
│   │       │           │   ├── urlpatterns.py
│   │       │           │   ├── urls.py
│   │       │           │   ├── utils
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
│   │       │           ├── sqlparse
│   │       │           │   ├── __init__.py
│   │       │           │   ├── __main__.py
│   │       │           │   ├── cli.py
│   │       │           │   ├── engine
│   │       │           │   │   ├── __init__.py
│   │       │           │   │   ├── filter_stack.py
│   │       │           │   │   ├── grouping.py
│   │       │           │   │   └── statement_splitter.py
│   │       │           │   ├── exceptions.py
│   │       │           │   ├── filters
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
│   │       │           └── sqlparse-0.5.5.dist-info
│   │       │               ├── INSTALLER
│   │       │               ├── METADATA
│   │       │               ├── RECORD
│   │       │               ├── REQUESTED
│   │       │               ├── WHEEL
│   │       │               ├── entry_points.txt
│   │       │               └── licenses
│   │       │                   ├── AUTHORS
│   │       │                   └── LICENSE
│   │       └── pyvenv.cfg
│   └── web
│       ├── .gitignore
│       ├── .next
│       │   └── dev
│       │       ├── build
│       │       │   ├── chunks
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
│       │       ├── cache
│       │       │   ├── .rscinfo
│       │       │   ├── next-devtools-config.json
│       │       │   └── turbopack
│       │       │       └── v16.1.0-canary.22-66-gf01cf07ab
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
│       │       │           ├── 00000168.sst
│       │       │           ├── 00000169.sst
│       │       │           ├── 00000170.meta
│       │       │           ├── 00000172.sst
│       │       │           ├── 00000173.sst
│       │       │           ├── 00000174.sst
│       │       │           ├── 00000175.meta
│       │       │           ├── 00000176.meta
│       │       │           ├── 00000177.meta
│       │       │           ├── 00000178.sst
│       │       │           ├── 00000179.sst
│       │       │           ├── 00000180.sst
│       │       │           ├── 00000181.meta
│       │       │           ├── 00000182.meta
│       │       │           ├── 00000183.meta
│       │       │           ├── 00000184.sst
│       │       │           ├── 00000185.sst
│       │       │           ├── 00000186.sst
│       │       │           ├── 00000187.meta
│       │       │           ├── 00000188.meta
│       │       │           ├── 00000189.meta
│       │       │           ├── 00000190.sst
│       │       │           ├── 00000191.sst
│       │       │           ├── 00000192.sst
│       │       │           ├── 00000193.sst
│       │       │           ├── 00000194.sst
│       │       │           ├── 00000195.meta
│       │       │           ├── 00000196.meta
│       │       │           ├── 00000197.meta
│       │       │           ├── 00000198.meta
│       │       │           ├── 00000199.meta
│       │       │           ├── 00000200.sst
│       │       │           ├── 00000201.sst
│       │       │           ├── 00000202.sst
│       │       │           ├── 00000203.meta
│       │       │           ├── 00000204.meta
│       │       │           ├── 00000205.meta
│       │       │           ├── 00000206.sst
│       │       │           ├── 00000207.sst
│       │       │           ├── 00000208.sst
│       │       │           ├── 00000209.sst
│       │       │           ├── 00000210.sst
│       │       │           ├── 00000211.meta
│       │       │           ├── 00000212.meta
│       │       │           ├── 00000213.meta
│       │       │           ├── 00000214.meta
│       │       │           ├── 00000215.meta
│       │       │           ├── 00000216.sst
│       │       │           ├── 00000217.sst
│       │       │           ├── 00000218.sst
│       │       │           ├── 00000219.meta
│       │       │           ├── 00000220.meta
│       │       │           ├── 00000221.meta
│       │       │           ├── 00000222.sst
│       │       │           ├── 00000223.sst
│       │       │           ├── 00000224.sst
│       │       │           ├── 00000225.meta
│       │       │           ├── 00000226.meta
│       │       │           ├── 00000227.meta
│       │       │           ├── 00000228.sst
│       │       │           ├── 00000229.sst
│       │       │           ├── 00000230.sst
│       │       │           ├── 00000231.sst
│       │       │           ├── 00000232.sst
│       │       │           ├── 00000233.meta
│       │       │           ├── 00000234.meta
│       │       │           ├── 00000235.meta
│       │       │           ├── 00000236.meta
│       │       │           ├── 00000237.meta
│       │       │           ├── 00000238.sst
│       │       │           ├── 00000239.sst
│       │       │           ├── 00000240.sst
│       │       │           ├── 00000241.meta
│       │       │           ├── 00000242.meta
│       │       │           ├── 00000243.meta
│       │       │           ├── 00000244.sst
│       │       │           ├── 00000245.sst
│       │       │           ├── 00000246.sst
│       │       │           ├── 00000247.sst
│       │       │           ├── 00000248.sst
│       │       │           ├── 00000249.meta
│       │       │           ├── 00000250.meta
│       │       │           ├── 00000251.meta
│       │       │           ├── 00000252.meta
│       │       │           ├── 00000253.meta
│       │       │           ├── 00000254.sst
│       │       │           ├── 00000255.sst
│       │       │           ├── 00000256.sst
│       │       │           ├── 00000257.meta
│       │       │           ├── 00000258.meta
│       │       │           ├── 00000259.meta
│       │       │           ├── 00000260.sst
│       │       │           ├── 00000261.sst
│       │       │           ├── 00000262.sst
│       │       │           ├── 00000263.meta
│       │       │           ├── 00000264.meta
│       │       │           ├── 00000265.meta
│       │       │           ├── 00000266.sst
│       │       │           ├── 00000267.sst
│       │       │           ├── 00000268.sst
│       │       │           ├── 00000269.meta
│       │       │           ├── 00000270.meta
│       │       │           ├── 00000271.meta
│       │       │           ├── 00000272.sst
│       │       │           ├── 00000273.sst
│       │       │           ├── 00000274.sst
│       │       │           ├── 00000275.meta
│       │       │           ├── 00000276.meta
│       │       │           ├── 00000277.meta
│       │       │           ├── 00000278.sst
│       │       │           ├── 00000279.sst
│       │       │           ├── 00000280.sst
│       │       │           ├── 00000281.meta
│       │       │           ├── 00000282.meta
│       │       │           ├── 00000283.meta
│       │       │           ├── 00000284.sst
│       │       │           ├── 00000285.sst
│       │       │           ├── 00000286.sst
│       │       │           ├── 00000287.meta
│       │       │           ├── 00000288.meta
│       │       │           ├── 00000289.meta
│       │       │           ├── 00000290.sst
│       │       │           ├── 00000291.sst
│       │       │           ├── 00000292.sst
│       │       │           ├── 00000293.meta
│       │       │           ├── 00000294.meta
│       │       │           ├── 00000295.meta
│       │       │           ├── 00000296.sst
│       │       │           ├── 00000297.sst
│       │       │           ├── 00000298.sst
│       │       │           ├── 00000299.sst
│       │       │           ├── 00000300.sst
│       │       │           ├── 00000301.meta
│       │       │           ├── 00000302.meta
│       │       │           ├── 00000303.meta
│       │       │           ├── 00000304.meta
│       │       │           ├── 00000305.meta
│       │       │           ├── 00000306.sst
│       │       │           ├── 00000307.sst
│       │       │           ├── 00000308.sst
│       │       │           ├── 00000309.meta
│       │       │           ├── 00000310.meta
│       │       │           ├── 00000311.meta
│       │       │           ├── 00000312.sst
│       │       │           ├── 00000313.sst
│       │       │           ├── 00000314.sst
│       │       │           ├── 00000315.meta
│       │       │           ├── 00000316.meta
│       │       │           ├── 00000317.meta
│       │       │           ├── 00000318.sst
│       │       │           ├── 00000319.sst
│       │       │           ├── 00000320.sst
│       │       │           ├── 00000321.meta
│       │       │           ├── 00000322.meta
│       │       │           ├── 00000323.meta
│       │       │           ├── 00000324.sst
│       │       │           ├── 00000325.sst
│       │       │           ├── 00000326.sst
│       │       │           ├── 00000327.meta
│       │       │           ├── 00000328.meta
│       │       │           ├── 00000329.meta
│       │       │           ├── 00000330.sst
│       │       │           ├── 00000331.sst
│       │       │           ├── 00000332.sst
│       │       │           ├── 00000333.sst
│       │       │           ├── 00000334.sst
│       │       │           ├── 00000335.meta
│       │       │           ├── 00000336.meta
│       │       │           ├── 00000337.meta
│       │       │           ├── 00000338.meta
│       │       │           ├── 00000339.meta
│       │       │           ├── CURRENT
│       │       │           └── LOG
│       │       ├── fallback-build-manifest.json
│       │       ├── logs
│       │       │   └── next-development.log
│       │       ├── package.json
│       │       ├── prerender-manifest.json
│       │       ├── routes-manifest.json
│       │       ├── server
│       │       │   ├── app
│       │       │   │   ├── _not-found
│       │       │   │   │   ├── page
│       │       │   │   │   │   ├── app-paths-manifest.json
│       │       │   │   │   │   ├── build-manifest.json
│       │       │   │   │   │   ├── next-font-manifest.json
│       │       │   │   │   │   ├── react-loadable-manifest.json
│       │       │   │   │   │   └── server-reference-manifest.json
│       │       │   │   │   ├── page.js
│       │       │   │   │   ├── page.js.map
│       │       │   │   │   └── page_client-reference-manifest.js
│       │       │   │   ├── page
│       │       │   │   │   ├── app-paths-manifest.json
│       │       │   │   │   ├── build-manifest.json
│       │       │   │   │   ├── next-font-manifest.json
│       │       │   │   │   ├── react-loadable-manifest.json
│       │       │   │   │   └── server-reference-manifest.json
│       │       │   │   ├── page.js
│       │       │   │   ├── page.js.map
│       │       │   │   ├── page_client-reference-manifest.js
│       │       │   │   └── teacher
│       │       │   │       └── (dashboard)
│       │       │   │           ├── classroom
│       │       │   │           │   ├── [id]
│       │       │   │           │   │   ├── page
│       │       │   │           │   │   │   ├── app-paths-manifest.json
│       │       │   │           │   │   │   ├── build-manifest.json
│       │       │   │           │   │   │   ├── next-font-manifest.json
│       │       │   │           │   │   │   ├── react-loadable-manifest.json
│       │       │   │           │   │   │   └── server-reference-manifest.json
│       │       │   │           │   │   ├── page.js
│       │       │   │           │   │   ├── page.js.map
│       │       │   │           │   │   └── page_client-reference-manifest.js
│       │       │   │           │   ├── page
│       │       │   │           │   │   ├── app-paths-manifest.json
│       │       │   │           │   │   ├── build-manifest.json
│       │       │   │           │   │   ├── next-font-manifest.json
│       │       │   │           │   │   ├── react-loadable-manifest.json
│       │       │   │           │   │   └── server-reference-manifest.json
│       │       │   │           │   ├── page.js
│       │       │   │           │   ├── page.js.map
│       │       │   │           │   └── page_client-reference-manifest.js
│       │       │   │           ├── page
│       │       │   │           │   ├── app-paths-manifest.json
│       │       │   │           │   ├── build-manifest.json
│       │       │   │           │   ├── next-font-manifest.json
│       │       │   │           │   ├── react-loadable-manifest.json
│       │       │   │           │   └── server-reference-manifest.json
│       │       │   │           ├── page.js
│       │       │   │           ├── page.js.map
│       │       │   │           ├── page_client-reference-manifest.js
│       │       │   │           └── students
│       │       │   │               ├── page
│       │       │   │               │   ├── app-paths-manifest.json
│       │       │   │               │   ├── build-manifest.json
│       │       │   │               │   ├── next-font-manifest.json
│       │       │   │               │   ├── react-loadable-manifest.json
│       │       │   │               │   └── server-reference-manifest.json
│       │       │   │               ├── page.js
│       │       │   │               ├── page.js.map
│       │       │   │               └── page_client-reference-manifest.js
│       │       │   ├── app-paths-manifest.json
│       │       │   ├── chunks
│       │       │   │   └── ssr
│       │       │   │       ├── [externals]__e8a2741f._.js
│       │       │   │       ├── [externals]__e8a2741f._.js.map
│       │       │   │       ├── [externals]_next_dist_1aaf5479._.js
│       │       │   │       ├── [externals]_next_dist_1aaf5479._.js.map
│       │       │   │       ├── [externals]_next_dist_c80f7c8f._.js
│       │       │   │       ├── [externals]_next_dist_c80f7c8f._.js.map
│       │       │   │       ├── [externals]_next_dist_compiled_next-server_app-page-turbo_runtime_dev_062c5159.js
│       │       │   │       ├── [externals]_next_dist_compiled_next-server_app-page-turbo_runtime_dev_062c5159.js.map
│       │       │   │       ├── [root-of-the-server]__0b04d9a9._.js
│       │       │   │       ├── [root-of-the-server]__0b04d9a9._.js.map
│       │       │   │       ├── [root-of-the-server]__11aa4565._.js
│       │       │   │       ├── [root-of-the-server]__11aa4565._.js.map
│       │       │   │       ├── [root-of-the-server]__3b8dbf80._.js
│       │       │   │       ├── [root-of-the-server]__3b8dbf80._.js.map
│       │       │   │       ├── [root-of-the-server]__6b48513c._.js
│       │       │   │       ├── [root-of-the-server]__6b48513c._.js.map
│       │       │   │       ├── [root-of-the-server]__6f4e8a12._.js
│       │       │   │       ├── [root-of-the-server]__6f4e8a12._.js.map
│       │       │   │       ├── [root-of-the-server]__7d6fb295._.js
│       │       │   │       ├── [root-of-the-server]__7d6fb295._.js.map
│       │       │   │       ├── [root-of-the-server]__a8ab9a0d._.js
│       │       │   │       ├── [root-of-the-server]__a8ab9a0d._.js.map
│       │       │   │       ├── [root-of-the-server]__a9fea3fa._.js
│       │       │   │       ├── [root-of-the-server]__a9fea3fa._.js.map
│       │       │   │       ├── [root-of-the-server]__cabf7a06._.js
│       │       │   │       ├── [root-of-the-server]__cabf7a06._.js.map
│       │       │   │       ├── [root-of-the-server]__ccc98272._.js
│       │       │   │       ├── [root-of-the-server]__ccc98272._.js.map
│       │       │   │       ├── [root-of-the-server]__f4da0c14._.js
│       │       │   │       ├── [root-of-the-server]__f4da0c14._.js.map
│       │       │   │       ├── [turbopack]_runtime.js
│       │       │   │       ├── [turbopack]_runtime.js.map
│       │       │   │       ├── _42bb28b7._.js
│       │       │   │       ├── _42bb28b7._.js.map
│       │       │   │       ├── _next-internal_server_app__not-found_page_actions_554ec2bf.js
│       │       │   │       ├── _next-internal_server_app__not-found_page_actions_554ec2bf.js.map
│       │       │   │       ├── _next-internal_server_app_page_actions_39d4fc33.js
│       │       │   │       ├── _next-internal_server_app_page_actions_39d4fc33.js.map
│       │       │   │       ├── _next-internal_server_app_teacher_(dashboard)_classroom_page_actions_a1ffcd30.js
│       │       │   │       ├── _next-internal_server_app_teacher_(dashboard)_classroom_page_actions_a1ffcd30.js.map
│       │       │   │       ├── _next-internal_server_app_teacher_(dashboard)_page_actions_9608fff1.js
│       │       │   │       ├── _next-internal_server_app_teacher_(dashboard)_page_actions_9608fff1.js.map
│       │       │   │       ├── _next-internal_server_app_teacher_(dashboard)_students_page_actions_094e421d.js
│       │       │   │       ├── _next-internal_server_app_teacher_(dashboard)_students_page_actions_094e421d.js.map
│       │       │   │       ├── ce889_server_app_teacher_(dashboard)_classroom_[id]_page_actions_6b693a58.js
│       │       │   │       ├── ce889_server_app_teacher_(dashboard)_classroom_[id]_page_actions_6b693a58.js.map
│       │       │   │       ├── node_modules_91333dfc._.js
│       │       │   │       ├── node_modules_91333dfc._.js.map
│       │       │   │       ├── node_modules_c78a39d3._.js
│       │       │   │       ├── node_modules_c78a39d3._.js.map
│       │       │   │       ├── node_modules_e2d1c5df._.js
│       │       │   │       ├── node_modules_e2d1c5df._.js.map
│       │       │   │       ├── node_modules_e82fae7d._.js
│       │       │   │       ├── node_modules_e82fae7d._.js.map
│       │       │   │       ├── node_modules_eef41739._.js
│       │       │   │       ├── node_modules_eef41739._.js.map
│       │       │   │       ├── node_modules_lucide-react_dist_esm_49b08e96._.js
│       │       │   │       ├── node_modules_lucide-react_dist_esm_49b08e96._.js.map
│       │       │   │       ├── node_modules_lucide-react_dist_esm_c0302145._.js
│       │       │   │       ├── node_modules_lucide-react_dist_esm_c0302145._.js.map
│       │       │   │       ├── node_modules_next_dist_3e1f69b5._.js
│       │       │   │       ├── node_modules_next_dist_3e1f69b5._.js.map
│       │       │   │       ├── node_modules_next_dist_62fcbc21._.js
│       │       │   │       ├── node_modules_next_dist_62fcbc21._.js.map
│       │       │   │       ├── node_modules_next_dist_98b67088._.js
│       │       │   │       ├── node_modules_next_dist_98b67088._.js.map
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
│       │       │   │       ├── node_modules_next_dist_client_components_9774470f._.js
│       │       │   │       ├── node_modules_next_dist_client_components_9774470f._.js.map
│       │       │   │       ├── node_modules_next_dist_client_components_builtin_forbidden_45780354.js
│       │       │   │       ├── node_modules_next_dist_client_components_builtin_forbidden_45780354.js.map
│       │       │   │       ├── node_modules_next_dist_client_components_builtin_global-error_ece394eb.js
│       │       │   │       ├── node_modules_next_dist_client_components_builtin_global-error_ece394eb.js.map
│       │       │   │       ├── node_modules_next_dist_client_components_builtin_unauthorized_15817684.js
│       │       │   │       ├── node_modules_next_dist_client_components_builtin_unauthorized_15817684.js.map
│       │       │   │       ├── src_156c7cf4._.js
│       │       │   │       ├── src_156c7cf4._.js.map
│       │       │   │       ├── src_269b1e09._.js
│       │       │   │       ├── src_269b1e09._.js.map
│       │       │   │       ├── src_3374ae93._.js
│       │       │   │       ├── src_3374ae93._.js.map
│       │       │   │       ├── src_5011eb2e._.js
│       │       │   │       ├── src_5011eb2e._.js.map
│       │       │   │       ├── src_6604747c._.js
│       │       │   │       ├── src_6604747c._.js.map
│       │       │   │       ├── src_app_5b2047f8._.js
│       │       │   │       ├── src_app_5b2047f8._.js.map
│       │       │   │       ├── src_b1c6f5ce._.js
│       │       │   │       ├── src_b1c6f5ce._.js.map
│       │       │   │       ├── src_d9890597._.js
│       │       │   │       └── src_d9890597._.js.map
│       │       │   ├── interception-route-rewrite-manifest.js
│       │       │   ├── middleware-build-manifest.js
│       │       │   ├── middleware-manifest.json
│       │       │   ├── next-font-manifest.js
│       │       │   ├── next-font-manifest.json
│       │       │   ├── pages-manifest.json
│       │       │   ├── server-reference-manifest.js
│       │       │   └── server-reference-manifest.json
│       │       ├── static
│       │       │   ├── chunks
│       │       │   │   ├── [next]_internal_font_google_geist_a71539c9_module_css_bad6b30c._.single.css
│       │       │   │   ├── [next]_internal_font_google_geist_a71539c9_module_css_bad6b30c._.single.css.map
│       │       │   │   ├── [next]_internal_font_google_geist_mono_8d43a2aa_module_css_bad6b30c._.single.css
│       │       │   │   ├── [next]_internal_font_google_geist_mono_8d43a2aa_module_css_bad6b30c._.single.css.map
│       │       │   │   ├── [root-of-the-server]__0f0ba101._.css
│       │       │   │   ├── [root-of-the-server]__0f0ba101._.css.map
│       │       │   │   ├── [turbopack]_browser_dev_hmr-client_hmr-client_ts_956a0d3a._.js
│       │       │   │   ├── [turbopack]_browser_dev_hmr-client_hmr-client_ts_956a0d3a._.js.map
│       │       │   │   ├── [turbopack]_browser_dev_hmr-client_hmr-client_ts_c7192189._.js
│       │       │   │   ├── [turbopack]_browser_dev_hmr-client_hmr-client_ts_c8c997ce._.js
│       │       │   │   ├── [turbopack]_browser_dev_hmr-client_hmr-client_ts_c8c997ce._.js.map
│       │       │   │   ├── _23a915ee._.js.map
│       │       │   │   ├── _64606ed7._.js
│       │       │   │   ├── _64606ed7._.js.map
│       │       │   │   ├── _a0ff3932._.js
│       │       │   │   ├── _defec0ff._.js
│       │       │   │   ├── _defec0ff._.js.map
│       │       │   │   ├── node_modules_@swc_helpers_cjs_d80fb378._.js
│       │       │   │   ├── node_modules_@swc_helpers_cjs_d80fb378._.js.map
│       │       │   │   ├── node_modules_ae98eab2._.js
│       │       │   │   ├── node_modules_ae98eab2._.js.map
│       │       │   │   ├── node_modules_lucide-react_dist_esm_3a092766._.js
│       │       │   │   ├── node_modules_lucide-react_dist_esm_3a092766._.js.map
│       │       │   │   ├── node_modules_lucide-react_dist_esm_ed40c14a._.js
│       │       │   │   ├── node_modules_lucide-react_dist_esm_ed40c14a._.js.map
│       │       │   │   ├── node_modules_next_dist_02409dcd._.js
│       │       │   │   ├── node_modules_next_dist_02409dcd._.js.map
│       │       │   │   ├── node_modules_next_dist_be32b49c._.js
│       │       │   │   ├── node_modules_next_dist_be32b49c._.js.map
│       │       │   │   ├── node_modules_next_dist_build_polyfills_polyfill-nomodule.js
│       │       │   │   ├── node_modules_next_dist_build_polyfills_polyfill-nomodule.js.map
│       │       │   │   ├── node_modules_next_dist_client_17643121._.js
│       │       │   │   ├── node_modules_next_dist_client_17643121._.js.map
│       │       │   │   ├── node_modules_next_dist_client_components_builtin_global-error_1cf6b850.js
│       │       │   │   ├── node_modules_next_dist_compiled_a0e4c7b4._.js
│       │       │   │   ├── node_modules_next_dist_compiled_a0e4c7b4._.js.map
│       │       │   │   ├── node_modules_next_dist_compiled_next-devtools_index_1dd7fb59.js
│       │       │   │   ├── node_modules_next_dist_compiled_next-devtools_index_1dd7fb59.js.map
│       │       │   │   ├── node_modules_next_dist_compiled_react-dom_1e674e59._.js
│       │       │   │   ├── node_modules_next_dist_compiled_react-dom_1e674e59._.js.map
│       │       │   │   ├── node_modules_next_dist_compiled_react-server-dom-turbopack_9212ccad._.js
│       │       │   │   ├── node_modules_next_dist_compiled_react-server-dom-turbopack_9212ccad._.js.map
│       │       │   │   ├── node_modules_next_dist_f3530cac._.js
│       │       │   │   ├── node_modules_next_dist_f3530cac._.js.map
│       │       │   │   ├── src_3771de11._.js
│       │       │   │   ├── src_3771de11._.js.map
│       │       │   │   ├── src_4862ece9._.js
│       │       │   │   ├── src_4862ece9._.js.map
│       │       │   │   ├── src_87ae5934._.js
│       │       │   │   ├── src_87ae5934._.js.map
│       │       │   │   ├── src_932fb265._.js
│       │       │   │   ├── src_932fb265._.js.map
│       │       │   │   ├── src_app_favicon_ico_mjs_81d86e48._.js
│       │       │   │   ├── src_app_globals_css_bad6b30c._.single.css
│       │       │   │   ├── src_app_globals_css_bad6b30c._.single.css.map
│       │       │   │   ├── src_app_layout_tsx_1cf6b850._.js
│       │       │   │   ├── src_app_page_tsx_47b43e25._.js
│       │       │   │   ├── src_app_teacher_(dashboard)_classroom_[id]_page_tsx_8889737c._.js
│       │       │   │   ├── src_app_teacher_(dashboard)_classroom_page_tsx_8889737c._.js
│       │       │   │   ├── src_app_teacher_(dashboard)_layout_tsx_47b43e25._.js
│       │       │   │   ├── src_app_teacher_(dashboard)_page_tsx_8889737c._.js
│       │       │   │   ├── src_app_teacher_(dashboard)_students_page_tsx_8889737c._.js
│       │       │   │   ├── src_c310d5fa._.js
│       │       │   │   ├── src_c310d5fa._.js.map
│       │       │   │   ├── src_c34e9b42._.js
│       │       │   │   ├── src_c34e9b42._.js.map
│       │       │   │   ├── src_c4e40280._.js
│       │       │   │   ├── src_c4e40280._.js.map
│       │       │   │   └── turbopack-_23a915ee._.js
│       │       │   ├── development
│       │       │   │   ├── _buildManifest.js
│       │       │   │   ├── _clientMiddlewareManifest.json
│       │       │   │   └── _ssgManifest.js
│       │       │   └── media
│       │       │       ├── 4fa387ec64143e14-s.c1fdd6c2.woff2
│       │       │       ├── 7178b3e590c64307-s.b97b3418.woff2
│       │       │       ├── 797e433ab948586e-s.p.dbea232f.woff2
│       │       │       ├── 8a480f0b521d4e75-s.8e0177b5.woff2
│       │       │       ├── bbc41e54d2fcbd21-s.799d8ef8.woff2
│       │       │       ├── caa3a2e1cccd8315-s.p.853070df.woff2
│       │       │       └── favicon.0b3bf435.ico
│       │       ├── trace
│       │       └── types
│       │           ├── cache-life.d.ts
│       │           ├── routes.d.ts
│       │           └── validator.ts
│       ├── README.md
│       ├── eslint.config.mjs
│       ├── next-env.d.ts
│       ├── next.config.ts
│       ├── package-lock.json
│       ├── package.json
│       ├── postcss.config.mjs
│       ├── public
│       │   ├── file.svg
│       │   ├── globe.svg
│       │   ├── next.svg
│       │   ├── vercel.svg
│       │   └── window.svg
│       ├── src
│       │   ├── app
│       │   │   ├── favicon.ico
│       │   │   ├── globals.css
│       │   │   ├── layout.tsx
│       │   │   ├── page.tsx
│       │   │   ├── parents
│       │   │   │   └── page.tsx
│       │   │   ├── school
│       │   │   │   └── page.tsx
│       │   │   └── teacher
│       │   │       ├── (dashboard)
│       │   │       │   ├── calendar
│       │   │       │   │   └── page.tsx
│       │   │       │   ├── classroom
│       │   │       │   │   ├── [id]
│       │   │       │   │   │   └── page.tsx
│       │   │       │   │   └── page.tsx
│       │   │       │   ├── feedback
│       │   │       │   │   └── page.tsx
│       │   │       │   ├── gradebook
│       │   │       │   │   └── page.tsx
│       │   │       │   ├── layout.tsx
│       │   │       │   ├── page.tsx
│       │   │       │   └── students
│       │   │       │       ├── [id]
│       │   │       │       │   └── page.tsx
│       │   │       │       └── page.tsx
│       │   │       └── login
│       │   │           └── page.tsx
│       │   ├── components
│       │   │   ├── APIStatus.tsx
│       │   │   ├── role-switcher.tsx
│       │   │   └── ui
│       │   │       ├── back-button.tsx
│       │   │       ├── button.tsx
│       │   │       ├── card.tsx
│       │   │       ├── dialog.tsx
│       │   │       ├── glass-panel.tsx
│       │   │       ├── input.tsx
│       │   │       ├── label.tsx
│       │   │       ├── metric-card.tsx
│       │   │       └── textarea.tsx
│       │   ├── features
│       │   │   ├── gradebook
│       │   │   │   ├── components
│       │   │   │   │   ├── create-assessment-modal.tsx
│       │   │   │   │   └── gradebook-grid.tsx
│       │   │   │   └── types
│       │   │   │       └── index.ts
│       │   │   └── teacher
│       │   │       ├── components
│       │   │       │   ├── attendance-chip.tsx
│       │   │       │   ├── bottom-nav.tsx
│       │   │       │   ├── create-classroom-modal.tsx
│       │   │       │   ├── dashboard-stat-card.tsx
│       │   │       │   ├── feedback-bottom-bar.tsx
│       │   │       │   ├── feedback-modal.tsx
│       │   │       │   ├── feedback-template-manager.tsx
│       │   │       │   ├── student-detail-modal.tsx
│       │   │       │   ├── student-feedback-modal.tsx
│       │   │       │   ├── student-form-modal.tsx
│       │   │       │   └── student-tile.tsx
│       │   │       ├── constants.ts
│       │   │       └── types
│       │   │           ├── feedback-types.ts
│       │   │           └── index.ts
│       │   └── lib
│       │       └── utils.ts
│       ├── tsconfig.json
│       └── tsconfig.tsbuildinfo
├── docs
│   ├── CONSTRAINTS.md
│   ├── DATA.md
│   ├── GLOSSARY.md
│   ├── SPEC.md
│   ├── UI.md
│   ├── adr
│   │   └── 0000-log.md
│   ├── api
│   │   └── index.md
│   └── security
├── infra
│   ├── compose
│   │   └── docker-compose.yml
│   └── docker
│       ├── api.Dockerfile
│       └── web.Dockerfile
├── packages
│   ├── shared
│   └── ui
└── scripts
    ├── generate_tree.py
    └── update_docs_map.py
