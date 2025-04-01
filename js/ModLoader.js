function loadJSFile(fileName) {
    var script = document.createElement('script');
    script.setAttribute("src", fileName);
    script.setAttribute("type", "text/javascript");
    script.defer = true;

    document.head.appendChild(script);
}

let modFiles = [];

if (window.electronAPI?.getMods) {
    setTimeout(async () => {
        modFiles = await window.electronAPI.getMods();
        const path = await electronAPI.getSavesPath();

        for (let i in modFiles) {
            loadJSFile(path + "/mods/" + modFiles[i]);
        }
    });
}

let modFuncs = [];