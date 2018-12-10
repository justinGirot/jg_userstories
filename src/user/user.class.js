/**
 * @name User
 * @desc service de gestion des utilisateurs
 * @author Justin
 * @version 1.0
 */

 class User {

    constructor(){}
/**
 * defini le nom de l'utilisateur
 * @param {} userName 
 */
    setUserName(userName){
        this.userName = userName;
    }

/**
 * defini le password
 * @param {*} password 
 */
    setPassword(password){
        this.password=password;
    }

/**
 * pour verifier l'utilisateur
 * @return boolean
 */
authenticate(){
    if (this.password === 'admin' && this.userName==='admin'){
        this.group ='Adminstrateur';
        return true;
    } else {
        return false;
    }
}


 }