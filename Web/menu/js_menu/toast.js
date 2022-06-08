const Toast = {
    init(){
        this.hideTimeout = null;
    },

    show(message, state){
        clearTimeout(this.hideTimeout);
        this.toast = document.createElement('div');
        this.toast.className = 'toast';
        document.body.appendChild(this.toast);
        this.toast.textContent = message;
        this.toast.className = 'toast toast--visible'
        if(state == "faux"){
            this.toast.className = 'toast toast--visible toast--faux'
        }
        this.hideTimeout = setTimeout(() => {
            this.toast.remove();
        }, 3000);
    }

};
