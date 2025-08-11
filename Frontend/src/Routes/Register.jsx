import {  useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()

  const createAccount = (e) => {
    e.preventDefault()
    if(email === "teste@gmail.com"){
      return alert("Email já está em uso!")
    }
    if(password !== confirmPassword){
      return alert("Senhas não coincidem!")
    }
    console.log("Usuário criado com sucesso!")
    setConfirmPassword('')
    setEmail('')
    setName('')
    setPassword('')
    navigate('/login')
  }

  return (
    <div className="flex h-screen items-center justify-center bg-secundary text-color-text">
      <div className="flex  w-lg flex-col rounded-lg bg-white p-[2rem] pt-[70px] shadow-md">
        <form className="flex flex-col gap-2" onSubmit={createAccount}>
          <div className="flex flex-col">
            <label className="text-4 font-[500]">Nome Completo</label>
            <div className="group flex items-center rounded-[8px] border-2 border-b-black bg-secundary focus-within:border-primary">
              <i class="fa-solid fa-user p-3"></i>
              <Input type="text" placeholder="digite seu nome" evento={(e) => setName(e.target.value)} value={name} />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-4 font-[500]">E-mail</label>
            <div className="group flex items-center rounded-[8px] border-2 border-b-black bg-secundary focus-within:border-primary">
              <i className="fa-regular fa-envelope p-3"></i>
              <Input type="email" placeholder="Digite sua E-mail" evento={(e) => setEmail(e.target.value)} value={email}/>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-4 font-[500]">Senha</label>
            <div className="group flex items-center rounded-[8px] border-2 border-b-black bg-secundary focus-within:border-primary">
              <i className="fa-solid fa-lock p-3"></i>
              <Input type="password" placeholder="Digite sua senha" evento={(e) => setPassword(e.target.value)} value={password}/>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-4 font-[500]">Confirmar Senha</label>
            <div className="group flex items-center rounded-[8px] border-2 border-b-black bg-secundary focus-within:border-primary">
              <i className="fa-solid fa-lock p-3"></i>
              <Input type="password" placeholder="Confirme sua senha" evento={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
            </div>
          </div>
          <Button content="Cadastrar" />
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
