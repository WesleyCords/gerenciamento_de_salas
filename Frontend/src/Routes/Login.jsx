import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAxios from '../hook/use-axios'
import api from '../helper/axios-instance'

const Login = () => {
  const navigate = useNavigate()
  const [credenciais, setCredenciais] = useState({email: '', senha: ''})
  const [isView, setIsView] = useState(false)

  const { fetchData, loading, error, response, cancel } = useAxios(api)

  useEffect(() => {

    if(response && response?.token){
      const { token, data } = response
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(data.user))
      navigate('/home', {replace: true} )
  }
    return () => cancel()

  }, [response, navigate, cancel])

  const authLogin = async (e) => {
    e.preventDefault()
    
    try {
      await fetchData( 'POST', 'auth/login', credenciais)
    } catch (err) {
      console.log("Error ao fazer login: ", err)
    }
  }

  const renderErro = () => {
    if(error) {
      return <p className='text-red-400 font-light'>Erro ao tentar fazer login, tente novamente.</p>
    }
  }

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

  return (
    <div className="grid lg:grid-cols-[38%_62%] h-screen w-screen">
      <div className='bg-primary relative z-0 hidden md:block'>
        <span className='absolute -top-10 -left-20 bg-primary-light w-[50%] h-[40%] rounded-full opacity-40 z-[1]'></span>
        <span className='absolute bottom-10 right-10 bg-primary-light w-[30%] h-[25%] rounded-full z-10'></span>
        <div className='relative z-20 flex flex-col items-center p-5 text-center gap-6'>
          <h1 className='font-bold text-white text-4xl'>Segurança em Primeiro Lugar</h1>
          <p className='font-semibold text-white text-2xl'>Sua segurança é nossa prioridade. Utilizamos tecnologia avançada para proteger seus dados e garantir uma experiência tranquila.</p>
          <i className="fa-solid fa-users text-[9rem] text-white mt-5"></i>
        </div>
      </div>
      <div className='bg-secundary flex items-center justify-center'>
        <div className='bg-principal shadow py-7 rounded-2xl flex flex-col items-center gap-3 w-[95%] md:w-[50%]'>
          <h2 className='text-text font-bold text-3xl'>Bem-vindo de volta</h2>
          <p className='font-light mb-5'>Acesse sua conta para continuar</p>
          <form className='md:w-[85%]' onSubmit={authLogin}>
            <div className='mb-4'>
              <label htmlFor="email" className='text-text-secundary'>E-mail</label>
              <div className='py-1 px-4 group border-[1.5px] rounded border-black focus-within:border-primary'>
                <i className="fa-regular fa-envelope mr-3 text-primary-light"></i>
                <input className='outline-none p-2' type="email" required placeholder='Seu e-mail' onChange={(e) => setCredenciais({...credenciais, email: e.target.value})}/>
              </div>
            </div>
            <div className='mb-4'>
              <label htmlFor="email" className='text-text-secundary'>Senha</label>
              <div className='flex items-center gap-3 py-1 px-4 group border-[1.5px] rounded border-black focus-within:border-primary'>
                <i className="fa-solid fa-lock text-primary-light"></i>
                <input className='outline-none p-2 flex-1' type={isView ? 'text' : 'password'}  required placeholder='Seu senha' onChange={(e) => setCredenciais({...credenciais, senha: e.target.value})}/>
                {eyesIcon()}
              </div>
            </div>
            <button disabled={loading} className='bg-primary font-bold transition-all duration-150 text-white rounded hover:bg-primary-dark py-3 text-center w-full cursor-pointer mt-3 hover:-translate-y-1'>
              {!loading ? 'Entrar' : 'Entrando...'}
            </button>
          </form>
          <span onClick={() => alert('Funcionalidade disponível apenas mais tarde!')} className='cursor-pointer text-primary hover:underline text-[0.9rem]'>Esqueceu sua senha?</span>
          {renderErro()}
          <div className='border-t-[1.5px] border-gray-300 w-[85%] text-center'>
            <h3 className='my-3 '>
              Não tem uma conta?
              <span onClick={() => navigate('/register')} className='ml-2 hover:underline cursor-pointer font-semibold text-primary'>Cadastre-se</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
