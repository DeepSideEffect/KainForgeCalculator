# Contourner les problèmes de CORS en local

> ``📝`` Lancez un serveur local pour servir les fichiers afin de contourner les problèmes de [CORS](https://fr.wikipedia.org/wiki/Cross-origin_resource_sharing).

Utiliser un serveur local comme *Live Server* ou *http-server* peut aider à éviter les problèmes de CORS lors du développement local.  
Vous pouvez utiliser l'un des outils suivants :

## Méthode 1 : Extension *Live Server* sous Visual Studio Code
1. Ouvrir **Visual Studio Code**.
2. Installer l'extension *Live Server*.
3. Une fois l'extension installée (peut-être relancer **Visual Studio Code**), faire clique-droit sur le fichier **index.html** puis choisir *Open with Live Server*.

## Méthode 2 : Python (version 3.x)
```bash
python -m http.server
```
Ensuite, ouvrez votre navigateur et accédez à http://localhost:8000.

## Méthode 3 : Node.js (avec *http-server*)
Installez *http-server* si ce n'est pas déjà fait :
```bash
npm install -g http-server
```
Puis lancez le serveur :
```bash
http-server
```
Ensuite, ouvrez votre navigateur et accédez à l'URL fournie par *http-server* (par défaut http://localhost:8080).

## Méthode 4 : Ruby (avec *webrick*)
```bash
ruby -run -e httpd . -p 8000
```
Ensuite, ouvrez votre navigateur et accédez à http://localhost:8000.

Ouvrez la page **index.html** dans votre navigateur en accédant à l'URL appropriée (par exemple, http://localhost:8000/index.html).  
Ces étapes devraient vous permettre de lancer le projet localement sans avoir à désactiver CORS manuellement.

## Méthode 5 : Désactiver CORS manuellement

Désactiver CORS manuellement dans une fenêtre précise pour tester et développer en local.  
Lancez une invite de commande **PowerShell** et exécuter la commande :
```PowerShell
Start-Process 'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe' -ArgumentList '--user-data-dir="C:\TempToDelete\chrome-dev-data"', '--disable-web-security', 'file:///D:/Dev/SousGitHub/KainForgeCalculator/index.html'
```
En remplaçant :
- ***'file:///D:/Dev/SousGitHub/KainForgeCalculator/index.html'*** par le véritable chemin du fichier **index.html** dans votre environnement local.
- ***"C:\TempToDelete\chrome-dev-data"*** par n'importe quel nom qui vous permettra de retrouver facilement ce répertoire temporaire afin de le supprimer. Vous pouvez aussi garder ce chemin inchangé.
- le chemin de votre installation de **Chrome** ou du navigateur que vous utilisez juste après `Start-Process`.
