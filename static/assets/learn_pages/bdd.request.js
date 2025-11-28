let lock = false;

class BDDRequest {
    constructor(url) {
        this.url = url;
        this.data = null;
    }

    onload() {
        // Just an empty method waiting to be set
    }

    onerror() {
        // Just an empty method waiting to be set
    }

    onload_priv() {
        this.data = window["bddcontent"];
        lock = false;
        this.onload();
    }
    onerror() {
        console.error('Error loading script:', this.url);
        lock = false; // Release the lock on error
    }
    buildAndSend() {
        if (lock) {
            setTimeout(() => this.buildAndSend(), 10);
            return;
        }
        lock = true;
        const scriptElement = document.createElement("script");
        scriptElement.onload = () => this.onload_priv();
        scriptElement.onerror = () => this.onerror();
        scriptElement.src = this.url;
        try {            
            document.body.appendChild(scriptElement);
        } catch (e) {
            this.onerror();
        }
    }
}
