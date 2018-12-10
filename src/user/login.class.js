class Login {
    constructor() {
        // modifier le titre HTML
        $(document).attr('title', 'Identification');
        // $ veut dire que c'est l'objet jquery, (doc) c'est le selecteur, ".attr" c'est une methode de cette objet
        $('#main-title').html('Identifiez-vous');
        // definition du listener sur le formulaire

        this.formListener();
        this.submitListener();
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
                if (login.val().length >= 5 && password.val().length >= 5) {
                    $('#btnLogin').removeAttr('disabled');

                } else {
                    $('#btnLogin').attr('disabled', 'disabled');
                }

            }
        )

    }

    submitListener() {
        $('#loginForm').on(
            'submit',
            function (event) {
                event.preventDefault(); // empeche action par defaut
                const user = new User();
                user.setUserName($('[name="loginField"]').val());
                user.setPassword($('[name="passwordField"]').val());
                if (user.authenticate()) {
                    console.log('Oki c\'est bon')
                } else {
                    $('[name="loginField"]').val('') ;
                    $('[name="passwordField"]').val('') ;
                    $('#btnLogin').attr('disabled', 'disabled');
                    console.log('non je te connais pas')
                    const toast = new Toast({'duration': 2, 
                    'message': 'on te connait pas'});
                    toast.ToastIt();

                }
            }
        )
    }


}