# Bypassing CORS Issues Locally

> ``📝`` Launch a local server to serve files in order to bypass [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) issues.

Using a local server like *Live Server* or *http-server* can help avoid CORS issues during local development.  
You can use one of the following tools:

## Method 1: *Live Server* Extension in Visual Studio Code
1. Open **Visual Studio Code**.
2. Install the *Live Server* extension.
3. Once the extension is installed (you may need to restart **Visual Studio Code**), right-click on the **index.html** file and select *Open with Live Server*.

## Method 2: Python (version 3.x)
```bash
python -m http.server
```
Then, open your browser and go to http://localhost:8000

## Method 3: Node.js (with *http-server*)
Install *http-server* if you haven't already:
```bash
npm install -g http-server
```
Then start the server:
```bash
http-server
```
Then, open your browser and go to the URL provided by *http-server* (default is http://localhost:8080).

## Method 4: Ruby (with *webrick*)
```bash
ruby -run -e httpd . -p 8000
```
Then, open your browser and go to http://localhost:8000.

Open the **index.html** page in your browser by navigating to the appropriate URL (e.g., http://localhost:8000/index.html).  
These steps should allow you to run the project locally without having to manually disable CORS.

## Method 5: Manually disable CORS

Manually disable CORS in a specific window to test and develop locally.  
Open a **PowerShell** command prompt and execute the command:
```PowerShell
Start-Process 'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe' -ArgumentList '--user-data-dir="C:\TempToDelete\chrome-dev-data"', '--disable-web-security', 'file:///D:/Dev/SousGitHub/KainForgeCalculator/index.html'
```
Replace:
- ***'file:///D:/Dev/SousGitHub/KainForgeCalculator/index.html'*** with the actual path to the **index.html** file in your local environment.
- ***"C:\TempToDelete\chrome-dev-data"*** with any name that will allow you to easily find and delete this temporary directory. You can also keep this path unchanged.
- the path to your **Chrome** installation or the browser you are using right after `Start-Process`.
