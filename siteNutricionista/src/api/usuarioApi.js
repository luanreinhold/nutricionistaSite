import axios from 'axios'



export async function login(email, senha) {
    const r = await axios.post('http://localhost:5000/usuario/login', {
        email: email, 
        senha: senha
    })

    return r.data;
}

