if (typeof Error === 'undefined') {
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
}

setTimeout(() => {
    let path = "bdd/search/pages.js";
    if (location.href.includes("learn") && location.href.endsWith("index.html")) {
        path = "../../bdd/search/pages.js";
    }
    if (location.href.includes("chapters")) {
        path = "../../../bdd/search/pages.js";
    }
    const request = new BDDRequest(path);
    request.onload = () => {
        document.querySelector("#search").addEventListener("keypress", (e) => {
            const founded = [];
            if (e.key === "Enter") {
                for (const filename in request.data) {
                    if (Object.hasOwnProperty.call(request.data, filename)) {
                        const element = request.data[filename];
                        const searchList = document.querySelector("#search").value.split(" ");
                        let haveAll = true;
                        searchList.forEach((searchTerm) => {
                            if (!element.includes(searchTerm)) {
                                haveAll = false;
                            } else {
                                // console.log(element);
                            }
                        });
                        if (haveAll) {
                            founded.push(filename);
                        }
                    }
                }
                console.log(founded);
                let links = "<h3>Results:</h3>";
                founded.forEach((link) => {
                    let path = link;
                    if (location.href.includes("learn") && location.href.endsWith("index.html")) {
                        path = "../../"+link;
                    }
                    if (location.href.includes("chapters")) {
                        path = "../../../"+link;
                    }
                    links += `<a href='${path}'>${link}</a><br />`;
                });
                if (founded.length === 0) {
                    links += "No result here...";
                }
                Swal.fire({
                    title: "Search result",
                    html: links,
                    icon: "info"
                });
            }
        })
    }
    request.onerror = () => {
        const error = new Error(2);
        error.showCuteMessage();
    }
    request.buildAndSend();
}, 1000);