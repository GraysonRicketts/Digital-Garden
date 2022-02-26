import { getAuth, } from "firebase-admin/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Res } from "~/util";



interface LoginRes {
    bearerToken: string;
}
export async function login(email: string, password: string): Promise<Res<LoginRes>> {
    const auth = getAuth();
    const userCred = await signInWithEmailAndPassword(auth, email, password)

    return { error: { code: 500, message: 'TODO'}}
}