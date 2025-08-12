import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAxios from '../hook/use-axios'
import api from '../helper/axios-instance'
import Button from '../components/Button'
import Input from '../components/Input'

const Login = () => {
const navigate = useNavigate()
const [credenciais, setCredenciais] = useState({email: '', password: ''})

const [data, loading, error] = useAxios({
  axiosIntance: api,
  method: 'GET',
  url: 'pokemon'
})

console.log(data, loading, error)

  const authLogin = (e) => {
    e.preventDefault()

    if(credenciais.email === "teste@gmail.com" && credenciais.password === "123"){
      console.log("Login efetuado com sucesso!")
      navigate('/home', {replace: true})
    }
  }

  return (
    <div className="flex h-screen items-center justify-center bg-secundary text-color-text">
      <div className="flex w-lg flex-col rounded-lg bg-white p-[2rem] pt-[70px] shadow-md">
        <form className="flex flex-col gap-6" onSubmit={authLogin}>
          <div className="flex flex-col">
            <label className="text-4 font-[500]">E-mail</label>
            <div className="group flex items-center rounded-[8px] border-2 border-b-black bg-secundary focus-within:border-primary">
              <i className="fa-regular fa-envelope p-3"></i>
              <Input type="email" placeholder="digite seu E-mail" evento={(e) => setCredenciais({...credenciais, password: e.target.value}) }/>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-4 font-[500]">Senha</label>
            <div className="group flex items-center rounded-[8px] border-2 border-b-black bg-secundary focus-within:border-primary">
              <i className="fa-solid fa-lock p-3"></i>
              <Input type="password" placeholder="Digite sua senha" evento={(e) => setCredenciais({...credenciais, email: e.target.value}) } />
            </div>
            <a
              className="p-1 text-end font-[500] text-primary hover:underline"
              href="#"
            >
              Esqueceu sua senha?
            </a>
          </div>
          <Button content="Entrar" />
        </form>
        <div className="flex justify-center gap-2">
          <p>Não tem uma conta?</p>
          <a href="#" className="font-[500] text-primary hover:underline" onClick={() => navigate("/register")}>
            Cadastre-se
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login
