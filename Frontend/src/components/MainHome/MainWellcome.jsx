const Wellcome = ({user}) => {

  const primaryName = user.nome.split(' ')[0]

  return (
    <div className="flex h-[100%] flex-col items-center justify-center rounded-2xl bg-primary text-color-text">
      <h1 className="text-[3rem] font-bold">
        Seja bem-vindo{' '}
        <span className="font-normal text-secundary">{primaryName.toUpperCase()}</span>
      </h1>
      <p className="font-300 text-[1.5rem]">
        Encontre e reserve salas de reunião ou estudos de forma rápida e fácil.
      </p>
    </div>
  )
}

export default Wellcome
