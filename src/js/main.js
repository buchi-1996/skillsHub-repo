class ToggleMobileNav {
    constructor (){
        this.nav = document.querySelector('.nav');
        this.toggleOpen = document.querySelector('.toggle-open');
        this.toggleClose = document.querySelector('.toggle-close');
        this.toggleOpen.addEventListener('click', this.show )
        this.toggleClose.addEventListener('click', this.close )
    }

    show = (item) => {
        if(item.target){
            this.nav.classList.remove('hidden');
        }
    }

    close = (item) => {
        if(item.target){
            this.nav.classList.add('hidden');
        }
    }
}

const app = new ToggleMobileNav();