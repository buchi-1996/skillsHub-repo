class ToggleMobileNav {
    constructor (index){
        this.nav = document.querySelector('.nav');
        this.toggleOpen = document.querySelector('.toggle-open');
        this.toggleClose = document.querySelector('.toggle-close');
        this.toggleOpen.addEventListener('click', this.show );
        this.toggleClose.addEventListener('click', this.close );
        
        this.clickOutside = document.querySelector('.click-outside');
        this.userDropdown = document.querySelector('.user-tab')
        this.userIcon = document.querySelector('.user-icon')
        this.userIcon.addEventListener('click', this.hideUserDropdown );
        this.clickOutside.addEventListener('click', this.clickOut);
        this.tabButtons = document.querySelectorAll('.buttons p');
        this.tabPanes = document.querySelectorAll('.panel .tab-pane');
        this.panel = document.querySelector('.panel');
        document.addEventListener('DOMContentLoaded', this.switchPanes(0, 'border-b-4'))
    
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


hideUserDropdown = (item) => {
    console.log(item.target)
    if(item.target){
        this.userDropdown.classList.toggle('hidden');
        this.clickOutside.classList.toggle('hidden')
    }
}

clickOut = (item) => {
    if(item){
        this.userDropdown.classList.add('hidden')
        item.target.classList.add('hidden')
    }
}

switchPanes = (num, border) => {
    this.tabPanes.forEach((x, index) => {
        if(index !== num){
            x.style.display = 'none';
        }else{ x.style.display = 'block'}
    }) 

    this.tabButtons.forEach((button) => {
        button.classList.remove(border);
    })
    this.tabButtons[num].classList.add(border)
}

}

// call instance
const app = new ToggleMobileNav();

document.querySelectorAll('.buttons p').forEach((button, index) => {
    const app = new ToggleMobileNav();
    button.addEventListener('click', () => {
        app.switchPanes(index, 'border-b-4')
    })
})

