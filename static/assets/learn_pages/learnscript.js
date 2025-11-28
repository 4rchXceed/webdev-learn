const BDD_PATH = "../../../bdd";
const phpcgiserver = "https://4rchXceed.github.io/php-cgi-server/";
const courseName = document.querySelector('meta[name="programming_course"]').content;
const chapter = parseInt(document.querySelector('meta[name="chapter"]').content);
const isHtml = document.querySelector('meta[name="outype"]').content === "html";
const main = document.querySelector("main");
const loader = document.querySelector(".loader");
const blocksCodes = [];

class Error {
    errList = {
        1: "A generic error has been throwed",
        2: "A request error has been throwed (Do you downloaded the entire project?)",
        3: "A downloaded data conversion throwed an error (WebDevLearn corrupted?)"
    }
    constructor(errCode) {
        this.error = this.errList[errCode];
        this.errCode = errCode;
    }
    getMessage() {
        return `Error code: ${this.errCode}, Message: ${this.error}`;
    }
    showCuteMessage() {
        const errMessage = this.getMessage();
        Swal.fire({
            title: 'Error!',
            html: `An error occurred. Details: <pre>${errMessage}</pre>`,
            icon: 'error',
            confirmButtonText: 'Ok'
        });
    }
}

class LearnApp {
    constructor(bddPath) {
        this.bddPath = `${bddPath}/courses/${courseName}/`;
    }
    runRequest(action, callback) {
        const request = new BDDRequest(action);
        request.onload = () => {
            callback(request.data);
        }
        request.onerror = () => {
            const error = new Error(2);
            error.showCuteMessage();
        }
        request.buildAndSend();
    }
    initApp() {
        this.getRepo();
    }
    getRepo() {
        this.runRequest(this.bddPath + "repo.js", (response) => {
            const current_chapter_infos = response[chapter - 1];
            this.chapter_description = current_chapter_infos["description"];
            this.chapter_name = current_chapter_infos["name"];
            this.getchapterData(current_chapter_infos["utilfile"]);
        });
    }
    getchapterData(utilsfile) {
        this.runRequest(this.bddPath + utilsfile, (response) => {
            this.chapter_data = response;
            loader.remove();
            new TextElement(this.chapter_name, "h1").build(main);
            new TextElement(this.chapter_description, "blockquote").build(main);
            this.chapter_data.forEach(element => {
                const currentSection = this.createSection(element["title"]);
                new TextElement(element["title"], "h3").build(currentSection);
                new TextElement(element["pretext"], "p").build(currentSection);
                element["codes"].forEach(data => {
                    const blockCode = new BlockCode(data, currentSection);
                    blocksCodes.push(blockCode);
                });
            });
        });
    }
    createSection(name = null) {
        const element = document.createElement("section");
        if (name) {
            const comment = document.createComment("Section: " + name);
            main.appendChild(comment);
        }
        main.appendChild(element);
        return element;
    }
}

class BlockCode {
    constructor(data, parent) {
        const mainDiv = this.createDiv(this.title, this.parent);
        mainDiv.classList.add("code_block");
        this.outputNumber = document.querySelectorAll(".code_block").length - 1;
        this.mainDiv = mainDiv;
        this.parent = parent;
        this.title = data["title"];
        const request = new BDDRequest(BDD_PATH + "/courses/" + courseName + "/" + data["codefile"]);
        request.onload = () => {
            this.code = request.data;
            this.buildHTML();
        }
        request.onerror = () => {
            const error = new Error(2);
            error.showCuteMessage();
        }
        request.buildAndSend();
    }

    buildHTML() {
        const mainDiv = this.mainDiv;
        new TextElement(this.title, "h4").build(mainDiv);
        this.input = new TextElement(this.code, "textarea");
        this.input.build(mainDiv);
        this.input.element.autocomplete = "off";
        this.input.element.autocorrect = "off";
        this.input.element.autocapitalize = "off";
        this.input.element.spellcheck = "false";
        this.input.element.textContent = this.code;
        if (courseName === "php") {
            if (!isHtml) {
                this.output = new TextElement("", "pre");
                this.output.build(mainDiv);
            } else {
                this.output = new TextElement("", "iframe");
                this.output.build(mainDiv);
            }
        } else if (courseName === "python") {
            this.output = new TextElement("", "div");
            this.output.build(mainDiv);
            this.output.element.id = "pyOut";
        }
        mainDiv.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="32" id="runCode" height="32" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" /></svg>`;
        mainDiv.querySelector("#runCode").addEventListener("click", () => {
            this.handleCode();
        });
    }

    createDiv(name = null, parent = main) {
        const element = document.createElement("div");
        if (name) {
            const comment = document.createComment("Block of code: " + name);
            parent.appendChild(comment);
        }
        parent.appendChild(element);
        return element;
    }

    handleCode() {
        if (courseName == "php") {
            php.output = this.outputNumber;
            php.runPhp(document.querySelectorAll("textarea")[this.outputNumber].value, isHtml);
        } else if (courseName == "python") {
            python.runPython(document.querySelectorAll(".code_block > textarea")[this.outputNumber].value, this.outputNumber);
        }
    }
}

class TextElement {
    constructor(text, type) {
        this.text = text;
        this.type = type;
    }
    build(parent) {
        this.element = document.createElement(this.type);
        this.element.innerText = this.text;
        parent.appendChild(this.element);
    }
}

let php = null;
let python = null;
if (courseName == "php") {
    php = new phpController();
} else if (courseName == "python") {
    python = new PythonController();
}


const app = new LearnApp(BDD_PATH);
if (isHtml) {
    const iframe_htmlinit = document.createElement("iframe");
    iframe_htmlinit.src = phpcgiserver + "index.html";
    iframe_htmlinit.style.display = "none";
    document.body.appendChild(iframe_htmlinit);
}
app.initApp();