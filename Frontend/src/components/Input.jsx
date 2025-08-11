const Input = ({ type, placeholder, evento, value }) => {
  return (
    <input
      className="w-[100%] rounded-sm border-0 p-2 pl-0.5 outline-0"
      type={type}
      name={type}
      id={type}
      placeholder={placeholder}
      onChange={evento}
      value={value}
    />
  )
}

export default Input
