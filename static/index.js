import style from './index.scss';

class ModalNoScrollHelper {
    
    static defaultOptions = {
        modalClass: 'modal-open',
        withInput: false
    };

    defaults(options) {
        return {...ModalNoScrollHelper.defaultOptions, ...options};
    }

    constructor(options) {
        this.$body = document.querySelector("body");
        this.scrollTop = 0;
        this.options = this.defaults(options);
    }

    blockScroll() {
        let self = this;
        let $body = this.$body;
        self.scrollTop = this.getScrollTop();
        $body.classList.add(this.options.modalClass);
        if(!this.options.withInput){
            $body.style.top= -self.scrollTop;
        
        }
    }

    unBlockScroll() {
        let self = this;
        let $body = self.$body;
        $body.classList.remove(self.options.modalClass);
        this.setScrollTop(self.scrollTop);
        $body.style.top= 0;      
    }

    getScrollTop() {
        if (document.documentElement.scrollTop > 0) {
            this.scrollTopElem = document.documentElement;
            return document.documentElement.scrollTop;
        } else {
            this.scrollTopElem = document.body;
            return document.body.scrollTop;
        }
    }

    setScrollTop(top) {
        return this.scrollTopElem.scrollTop = top;
    }

    toggleBlock(isBlock) {
        isBlock ? this.blockScroll() : this.unBlockScroll();
    }
}


export default ModalNoScrollHelper;
