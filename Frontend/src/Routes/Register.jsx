import {  useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import { useNavigate } from 'react-router-dom'
import useAxios from '../hook/use-axios'
import api from '../helper/axios-instance'

const Register = () => {
  const [credenciais, setCredenciais] = useState({email: "", senha: "", nome: ""})
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()

  const {error, fetchData, response } = useAxios({
    axiosIntance: api,
    method: "POST",
    url: "usuarios",
  })

  const createAccount = (e) => {
    e.preventDefault()

    try {
      fetchData(credenciais)

      if(confirmPassword !== credenciais.senha) {
        alert("Senhas precisa ser iguais!")
        return
      }
      if(error.response?.data?.statusCode === 409) {
        alert("Email já cadastrado, tente com outro email!")
      }
      if(response) {
        console.log(response)
        navigate('/login')
      }

    } catch(error) {
      console.log("Erro ao criar conta: ", error)
    }
  }

  return (
    <div className="flex h-screen items-center justify-center bg-secundary text-color-text">
      <div className="flex  w-lg flex-col rounded-lg bg-white p-[2rem] pt-[70px] shadow-md">
        <form className="flex flex-col gap-2" onSubmit={createAccount}>
          <div className="flex flex-col">
            <label className="text-4 font-[500]">Nome Completo</label>
            <div className="group flex items-center rounded-[8px] border-2 border-b-black bg-secundary focus-within:border-primary">
              <i class="fa-solid fa-user p-3"></i>
              <Input type="text" placeholder="digite seu nome" evento={(e) =>setCredenciais({...credenciais ,nome:e.target.value}) } value={credenciais.nome} />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-4 font-[500]">E-mail</label>
            <div className="group flex items-center rounded-[8px] border-2 border-b-black bg-secundary focus-within:border-primary">
              <i className="fa-regular fa-envelope p-3"></i>
              <Input type="email" placeholder="Digite sua E-mail" evento={(e) =>setCredenciais({...credenciais , email:e.target.value}) } value={credenciais.email}/>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-4 font-[500]">Senha</label>
            <div className="group flex items-center rounded-[8px] border-2 border-b-black bg-secundary focus-within:border-primary">
              <i className="fa-solid fa-lock p-3"></i>
              <Input type="password" placeholder="Digite sua senha" evento={(e) =>setCredenciais({...credenciais , senha:e.target.value}) } value={credenciais.senha}/>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-4 font-[500]">Confirmar Senha</label>
            <div className="group flex items-center rounded-[8px] border-2 border-b-black bg-secundary focus-within:border-primary">
              <i className="fa-solid fa-lock p-3"></i>
              <Input type="password" placeholder="Confirme sua senha" evento={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
            </div>
          </div>
          <Button content="Cadastrar"/>
        </form>
        <div className="flex justify-center gap-2">
          <p>Já tem uma conta?</p>
          <a href="#" className="font-[500] text-primary hover:underline" onClick={() => navigate('/login')}>
            Entre
          </a>
        </div>
      </div>
    </div>
  )
}

export default Register
