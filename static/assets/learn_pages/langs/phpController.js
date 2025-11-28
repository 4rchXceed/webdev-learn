const IFRAME_PATH = "https://4rchXceed.github.io/php-cgi-server/iframed.html";

class phpController {
    constructor() {
        this.lock = false;
        this.output = null;
        if (location.origin == "file://" || location.origin == "null") {
            this.init("https://cdn.jsdelivr.net/npm/php-wasm/PhpWeb.mjs");
        } else {
            this.init("../../../../static/lib/php-wasm/PhpWeb.mjs");
        }
    }
    async init(url) {
        const { PhpWeb } = await import(url);
        this.PhpWeb = PhpWeb;
    }

    runPhp(code, runHTML = false) {
        this.php = new this.PhpWeb;
        if (!runHTML) {

            this.php.addEventListener('output', (event) => {
                if (this.output != null) {
                    const output = event.detail.join("\\n").replace("\\n", "\\n> ");
                    document.querySelectorAll("pre")[this.output].textContent += output;
                }
            });

            this.php.addEventListener('error', (event) => {
                if (this.output != null) {
                    const output = event.detail.join("\\n").replace("\\n", "\\n> ");
                    document.querySelectorAll("pre")[this.output].textContent += output;
                }
            });
            if (this.lock) {
                Swal.fire({
                    title: 'Error!',
                    html: `Another php instance is running`,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
                return;
            }
            this.lock = true;
            this.php.run(code).then(retVal => {
                this.lock = false;
            });
        } else {
            const div = document.createElement("div");
            div.classList.add("loader");
            document.querySelectorAll("iframe")[this.output].parentNode.appendChild(div);
            document.querySelectorAll("iframe")[this.output].src = IFRAME_PATH + "?code=" + encodeURIComponent(code);
            setTimeout(() => {
                document.querySelectorAll("iframe")[this.output].parentNode.lastChild.remove();
                document.querySelectorAll("iframe")[this.output].style.display = "block";
            }, 2100);
        }
    }
}