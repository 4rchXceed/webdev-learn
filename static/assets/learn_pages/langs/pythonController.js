class PythonController {
    runPython(code, outElementNumber)  {
        code = `print('_______code #${outElementNumber+1} ________');`+code;
        const scriptTag = document.createElement("script");
        scriptTag.type = "py";
        scriptTag.setAttribute("terminal", "");
        scriptTag.textContent = code;

        if (document.querySelector("py-terminal") !== null) {
            document.querySelectorAll("#pyOut")[outElementNumber].appendChild(document.querySelector("py-terminal"));
        }
        setTimeout(() => {
            document.querySelectorAll("#pyOut")[outElementNumber].appendChild(scriptTag);
        }, 500);
    }
}
