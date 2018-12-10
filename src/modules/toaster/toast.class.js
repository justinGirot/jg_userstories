/**
 * @name Toast
 * @desc affiche un toast
 * @author Justin
 * @version 1.0
 */



class Toast {
    constructor(params) {
        if(!params.hasOwnProperty('background')){

        
        this.backgroundClass = 'danger';
        
    }else {
        this.backgroundClass = params.background;
    }
    if(!params.hasOwnProperty('duration')){

        
        this.duration = 1.5;
    }else{
        this.duration = params.duration
    }
    if(!params.hasOwnProperty('message')){
        this.message = 'bonjour';
    } else {
        this.message = params.message;
    }

    }


    setBackground(cssClass) {
        this.backgroundClass = cssClass;
    }

    setDuration(duration) {
        this.duration = duration;
    }


    ToastIt() {
        //creation en memoire d'une div
        const toaster = $('<div>');
        toaster
            .addClass('toast')
            .addClass(this.backgroundClass)
            .html(this.message);
        //ajoute le toaster au decument lui même

        toaster.appendTo($('body'))
        setTimeout(
            function () {
                //ici quand on arrive au bout de l'intervalle de temps
                toaster.remove();
            },
            this.duration * 1000
        );

    }


}