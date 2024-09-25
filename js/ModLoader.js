function loadJSFile(fileName) {
    var script = document.createElement('script');
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", fileName);

    document.body.appendChild(script);
}

let modFiles = [];

if (window.electronAPI?.getMods) {
    setTimeout(async () => {
        modFiles = await window.electronAPI.getMods();

        for (let i in modFiles) {
            loadJSFile("./mods/" + modFiles[i]);
        }
    });
}