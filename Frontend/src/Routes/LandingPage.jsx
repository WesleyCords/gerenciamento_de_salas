import { useNavigate } from "react-router-dom"
import { Github, CodeXml } from 'lucide-react'

const LandingPage = () => {
    const navigate = useNavigate()
    return (
        <div className="bg-[#ffffff] h-screen w-screen flex items-center justify-center tracking-wider relative">
            <span className="lg:block hidden h-[40%] w-[20%] rounded-full bg-primary absolute opacity-30 top-0 -left-30"></span>
            <span className="lg:block hidden h-[20%] w-[10%] rounded-full bg-primary absolute opacity-30 top-10 left-[60%]"></span>
            <span className="lg:block hidden h-[30%] w-[15%] rounded-full bg-primary absolute opacity-25 bottom-10 left-[70%]"></span>
            <div className="flex flex-col space-y-1 items-center text-center">
                <div className="flex gap-10 items-center">
                    <Github size={60} className="text-primary"/>
                    <CodeXml size={60} className="text-primary"/>
                </div>
                <h1 className="font-bold text-[3.5rem] text-gray-800">Projeto Bootcamp</h1>
                <div className="w-[15%] bg-primary h-1 rounded">
                </div>
                <h4 className="text-color-text font-semibold text-[1.7rem]">Gerenciamento de salas</h4>
                <button onClick={() => navigate('/register')} className="bg-primary hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_4px_6px_rgba(0,100,0,0.1)] hover:shadow-primary hover:bg-primary-light py-4 px-6 rounded-4xl cursor-pointer hover font-bold text-white mt-6">
                    Iniciar a aplicação
                </button>
            </div>
        </div>
    )
}

export default LandingPage