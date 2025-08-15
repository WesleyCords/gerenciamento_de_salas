import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAxios from '../hook/use-axios'
import api from '../helper/axios-instance'
import Button from '../components/Button'
import Input from '../components/Input'

const Login = () => {
  const navigate = useNavigate()
  const [credenciais, setCredenciais] = useState({email: '', senha: ''})

  const { fetchData, loading, error, response } = useAxios({
    axiosIntance: api,
    method: 'POST',
    url: 'auth/login',
  })
  console.log(error)

  const authLogin = async (e) => {
    e.preventDefault()
    
    try {
      await fetchData(credenciais)
      console.log(response)
      const { token, data } = response
      if(token) {
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(data.user))
        navigate('/home', {replace: true})
      }

    } catch(err) {
      console.log("Erro ao fazer login: ", err)
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
              <Input type="email" placeholder="digite seu E-mail" evento={(e) => setCredenciais({...credenciais, email: e.target.value}) }/>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-4 font-[500]">Senha</label>
            <div className="group flex items-center rounded-[8px] border-2 border-b-black bg-secundary focus-within:border-primary">
              <i className="fa-solid fa-lock p-3"></i>
              <Input type="password" placeholder="Digite sua senha" evento={(e) => setCredenciais({...credenciais, senha: e.target.value}) } />
            </div>
            <a
              className="p-1 text-end font-[500] text-primary hover:underline"
              href="#"
            >
              Esqueceu sua senha?
            </a>
            {error && (
              <div className='text-red-500 text-[1rem] font-semibold text-center'>{error.response?.data?.message}</div>
            )}
          </div>
          <Button evento={() => authLogin} content={loading ? "Carregando..." : "Entrar"} />
        </form>
        <div className="flex justify-center gap-2">
          <p>Não tem uma conta?</p>
          <a href="#" className="font-[500] text-primary hover:underline" onClick={(e) => { e.preventDefault(); navigate("/register")}}>
            Cadastre-se
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login
