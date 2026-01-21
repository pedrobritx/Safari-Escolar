import urllib.request
import urllib.parse
import urllib.error
import http.cookiejar
import json
import ssl

BASE_URL = "http://127.0.0.1:8000"
LOGIN_URL = f"{BASE_URL}/api/auth/login"
CLASSROOMS_URL = f"{BASE_URL}/api/classrooms/"
STUDENTS_URL = f"{BASE_URL}/api/students/"

USERNAME = "teacher1@safari.br"
PASSWORD = "Password!123"

def debug_api():
    # Setup cookie jar
    cj = http.cookiejar.CookieJar()
    opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cj))
    urllib.request.install_opener(opener)

    # 1. Get CSRF Token (hit root)
    print("Fetching root to seed CSRF...")
    try:
        opener.open(BASE_URL)
    except Exception as e:
        print(f"Error fetching root: {e}")

    csrftoken = None
    for cookie in cj:
        if cookie.name == 'csrftoken':
            csrftoken = cookie.value
            break
    
    print(f"CSRF Token: {csrftoken}")
    
    headers = {
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken if csrftoken else ""
    }

    # 2. Login
    print(f"Logging in as {USERNAME}...")
    login_data = json.dumps({"email": USERNAME, "password": PASSWORD}).encode('utf-8')
    req = urllib.request.Request(LOGIN_URL, data=login_data, headers=headers, method="POST")
    
    try:
        with opener.open(req) as response:
            print(f"Login Status: {response.status}")
            print(response.read().decode('utf-8'))
    except urllib.error.HTTPError as e:
        print(f"Login Failed: {e.code} {e.reason}")
        print(e.read().decode('utf-8'))
        return

    print("Login Successful.")
    
    # 3. Fetch Classrooms
    print(f"Fetching {CLASSROOMS_URL}...")
    req = urllib.request.Request(CLASSROOMS_URL) # Headers/Cookies handled by opener
    try:
        with opener.open(req) as response:
            print(f"Classrooms Status: {response.status}")
            data = json.loads(response.read().decode('utf-8'))
            print(f"Classrooms Data: {str(data)[:200]}...")
    except urllib.error.HTTPError as e:
        print(f"Classrooms Failed: {e.code} {e.reason}")
        print(e.read().decode('utf-8'))

    # 4. Fetch Students
    print(f"Fetching {STUDENTS_URL}...")
    req = urllib.request.Request(STUDENTS_URL)
    try:
        with opener.open(req) as response:
            print(f"Students Status: {response.status}")
            data = json.loads(response.read().decode('utf-8'))
            print(f"Students Data: {str(data)[:200]}...")
    except urllib.error.HTTPError as e:
        print(f"Students Failed: {e.code} {e.reason}")
        print(e.read().decode('utf-8'))

if __name__ == "__main__":
    debug_api()
