import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth()

const createAccount = async function(name, email,password){
    try {
        const userCredential = await createUserWithEmailAndPassword(auth,email,password) 
        console.log(userCredential.user.uid)
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
    }

}
signUpWithEmail('Kamil','kamil@test.com','test123')
