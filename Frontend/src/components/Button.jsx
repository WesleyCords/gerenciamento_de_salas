const Button = ({ type, content, evento }) => {
  return (
    <button
      className="mx-auto my-3 cursor-pointer rounded-md bg-primary px-4 py-2 text-2xl font-[500] text-white hover:bg-primary-light"
      onClick={evento}
      type={type}
    >
      {content}
    </button>
  )
}

export default Button
