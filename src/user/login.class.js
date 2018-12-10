class Login {
    constructor() {
        // modifier le titre HTML
        $(document).attr('title', 'Identification');
        // $ veut dire que c'est l'objet jquery, (doc) c'est le selecteur, ".attr" c'est une methode de cette objet
        $('#main-title').html('Identifiez-vous');
        // definition du listener sur le formulaire

        this.formListener();
    }

    /**
     * methode qui regarde ce que fait l'utilisateur
     * @param void
     * @return void
     */
    formListener() {
        $('#loginForm').on(
            'keyup',
            // callback : fonction appelée si l'évènment défini survient
            function (event) {
                const login = $('[name="loginField"]');
                const password = $('[name="passwordField"');
                if (login.val() !== '' && password.val() !== '') {
            $('#btnLogin').removeAttr('disabled');
        
        }else{
            $('#btnLogin').attr('disabled','disabled');
        }

    }
        )

}
}