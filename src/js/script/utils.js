function loadCSS(url) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    document.head.appendChild(link);
}

function loadScript(url) {
    var script = document.createElement('script');
    script.src = url;
    document.head.appendChild(script);
}

async function loadScriptAsync(url) {
    return new Promise((resolve, reject) => {
        var script = document.createElement('script');
        script.src = url;
        script.onload = () => resolve(url);
        script.onerror = () => reject(new Error(`Failed to load script ${url}`));
        document.head.appendChild(script);
    });
}

async function loadScriptsInOrder(scriptsSrcList) {
    try {
        for (const src of scriptsSrcList) {
            await loadScriptAsync(src);
        }

        console.debug(`Les ${scriptsSrcList.length} scripts sont chargés.`);
    } catch (error) {
        console.error(error, 'Erreur lors du chargement des scripts :', scriptsSrcList);
    }
}
