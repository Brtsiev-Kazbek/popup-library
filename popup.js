class Popup {
    constructor(element, style='popup') {
        this.element = element;
        this.element.classList.add(style);
        this.animations = {
            glide: 'popup--glide',
            flash: 'popup--flash',
            turn: 'popup--turn'
        };
    }

    show(name) {
        this.element.classList.add(this.animations[name]);
    }

    hide(name) {
        this.element.classList.remove(this.animations[name]);
    }

    timeShow(name, time) {
        this.element.classList.add(this.animations[name]);
        setTimeout(() => {
            this.element.classList.remove(this.animations[name]);
        }, time * 1000);
    }

    createAnimation(animationName, animationStyle) {
        this.animations[animationName] = animationStyle;
    }
}