import {  useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAxios from '../hook/use-axios'
import api from '../helper/axios-instance'

const Register = () => {
  const [credenciais, setCredenciais] = useState({email: "", senha: "", nome: ""})
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isView, setIsView] = useState(false)
  const [passwordConflit, setPasswordConflit] = useState(false)
  const navigate = useNavigate()

  const {error, fetchData, response, cancel, loading } = useAxios(api)

  useEffect(() => {
      if(response) {
        const { token, data } = response
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(data.newUser))
        navigate('/home', {replace: true} )
      }
    return () => cancel() 
  }, [response, navigate, cancel])

  useEffect(() => {
    if (confirmPassword) {
      setPasswordConflit(credenciais.senha !== confirmPassword);
    } else {
      setPasswordConflit(false);
    }
  }, [credenciais.senha, confirmPassword]);

  const eyesIcon = () => {
      return <i onClick={viewPassword} className={`fa-regular text-primary-light cursor-pointer ${isView ? 'fa-eye-slash' : 'fa-eye'}`}></i>
  }

  const viewPassword = () => {
    if(isView) {
      setIsView(false)
    } else {
      setIsView(true)
    }
  }

  const createAccount = (e) => {
    e.preventDefault()
    try{
      if(confirmPassword !== credenciais.senha) {
        return setPasswordConflit(true)
      }
      setPasswordConflit(false)
      fetchData('POST', 'usuarios', credenciais)
    } catch(err) {
      console.log("Deu erro :", err)
    }
  }

  const renderErro = () => {
    if(error) {
      return <p className="text-red-500 text-sm mt-2 font-semibold">{error}</p>
    }
    return null
  }

  return (
    <div className="grid lg:grid-cols-[38%_62%] h-screen w-screen">
      <div className='bg-primary relative z-0 hidden md:block'>
        <span className='absolute -top-10 -left-20 bg-primary-light w-[50%] h-[40%] rounded-full opacity-40 z-[1]'></span>
        <span className='absolute bottom-10 right-10 bg-primary-light w-[30%] h-[25%] rounded-full z-10'></span>
        <div className='relative z-20 flex flex-col items-center p-5 text-center gap-6'>
          <i className="fa-solid fa-globe text-[9rem] text-white my-5"></i>
          <h1 className='font-bold text-white text-4xl'>Segurança em Primeiro Lugar</h1>
          <p className='font-semibold text-white text-2xl'>Protegemos seus dados com criptografia avançada e as melhores práticas de segurança do mercado. Sua privacidade é nossa prioridade.</p>
        </div>
      </div>
      <div className='bg-secundary flex items-center justify-center'>
        <div className='bg-principal shadow py-4 rounded-2xl flex flex-col items-center gap-3 w-[95%] md:w-[60%]'>
          <h2 className='text-text font-bold text-3xl'>Crie uma conta</h2>
          <p className='font-light mb-3'>Insira seus dados para começar</p>
          <form className='md:w-[85%] space-y-3' onSubmit={createAccount}>
            <div >
              <label htmlFor="nome" className='text-text-secundary'>Nome</label>
              <div className='py-1 px-4 group border-[1.5px] rounded border-black focus-within:border-primary'>
                <i className="fa-regular fa-user mr-3 text-primary-light"></i>
                <input id='nome' className='outline-none p-2' type="text" required placeholder='Seu nome completo' onChange={(e) => setCredenciais({...credenciais, nome: e.target.value})}/>
              </div>
            </div>
            <div >
              <label htmlFor="email" className='text-text-secundary'>E-mail</label>
              <div className='py-1 px-4 group border-[1.5px] rounded border-black focus-within:border-primary'>
                <i className="fa-regular fa-envelope mr-3 text-primary-light"></i>
                <input id='email' className='outline-none p-2' type="email" required placeholder='Seu e-mail' onChange={(e) => setCredenciais({...credenciais, email: e.target.value})}/>
              </div>
            </div>
            <div >
              <label htmlFor="password" className='text-text-secundary'>Senha</label>
              <div className={`flex items-center gap-3 py-1 px-4 group border-[1.5px] rounded ${passwordConflit ? 'border-red-600 bg-red-100' : 'border-black'} focus-within:border-primary`}>
                <i className="fa-solid fa-lock text-primary-light"></i>
                <input id='password' className='outline-none p-2 flex-1' type={!isView ? 'password' : 'text'} required placeholder='Sua senha' onChange={(e) => setCredenciais({...credenciais, senha: e.target.value})}/>
                {eyesIcon()}
              </div>
            </div>
            <div >
              <label htmlFor="password2" className='text-text-secundary'>Confirme sua senha</label>
              <div className={`flex items-center gap-3 py-1 px-4 group border-[1.5px] rounded ${passwordConflit ? 'border-red-600 bg-red-100' : 'border-black'} focus-within:border-primary`}>
                <i className="fa-solid fa-lock text-primary-light"></i>
                <input id='password2' className='outline-none p-2 flex-1' type={!isView ? 'password' : 'text'} required placeholder='Comfirme sua senha' onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
                {eyesIcon()}
              </div>
            </div>
            {passwordConflit && <p className='text-red-400 text-sm text-center font-semibold'>As senhas não conferem.</p>}
            <button disabled={loading} className='bg-primary font-bold transition-all duration-150 text-white rounded hover:bg-primary-dark py-3 text-center w-full cursor-pointer mt-3 hover:-translate-y-1'>
              {!loading ? 'Criar Conta' : 'Criando...'}
            </button>
          </form>
          {renderErro()}
          <div className='border-t-[1.5px] border-gray-300 w-[85%] text-center'>
            <h3 className='my-2 '>
              Já tem uma conta?
              <span onClick={() => navigate('/login')} className='ml-2 hover:underline cursor-pointer font-semibold text-primary'>Faça o login</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
