function ModalNoScrollHelper(options) {
    var defaultOptions = {
        modalClass: 'modal-open',
        withInput: false
    };

    var merge = function(defaultOptions, options) {
        var newObj = {};
        for (var i in defaultOptions) {
            newObj[i] = defaultOptions[i];
        }
        for (var i in options) {
            newObj[i] = options[i];
        }
        return newObj;
    }
    this.options  = merge(defaultOptions, options);
    this.$body = document.querySelector("body");
    this.scrollTop = 0;
}

ModalNoScrollHelper.prototype.blockScroll = function() {
    var self = this;
    var $body = this.$body;
    self.scrollTop = this.getScrollTop();
    $body.classList.add(this.options.modalClass);
    if(!this.options.withInput){
        $body.style.top= -self.scrollTop;
    
    }
}

ModalNoScrollHelper.prototype.unBlockScroll = function() {
    var self = this;
    var $body = self.$body;
    $body.classList.remove(self.options.modalClass);
    this.setScrollTop(self.scrollTop);
    $body.style.top= 0;      
}

ModalNoScrollHelper.prototype.getScrollTop = function() {
    if (document.documentElement.scrollTop > 0) {
        this.scrollTopElem = document.documentElement;
        return document.documentElement.scrollTop;
    } else {
        this.scrollTopElem = document.body;
        return document.body.scrollTop;
    }
}

ModalNoScrollHelper.prototype.setScrollTop = function(top) {
    return this.scrollTopElem.scrollTop = top;
}

ModalNoScrollHelper.prototype.toggleBlock = function(isBlock) {
    isBlock ? this.blockScroll() : this.unBlockScroll();
}

module.exports = {
    ModalNoScrollHelper
}

