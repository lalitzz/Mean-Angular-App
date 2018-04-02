
export class CredentialService {
    name = 'Lalit'
    email = 'lalit@gmail.com'
    password = '1234'

    validateUser(email: string, password: string): Promise<object> {
        console.log('In cred', email, password);
        console.log('Pro1 In cred', this.email, this.password)
        var promise = new Promise((resolve, reject) => {
            console.log('Pro In cred', this.email, this.password)
            if(this.email === email && this.password === password) {
                resolve({status: 200, data: 'success'});
            }else{
                reject({status: 404, data: 'error'});
            }
        });
        return promise;
    }
}