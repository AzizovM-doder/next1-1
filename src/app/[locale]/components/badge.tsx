 
const Badge = ({text} : {text : string}) => {
  return (
    <div className="text-xs py-1 rounded-full font-semibold px-3 bg-[#AFD9FE] uppercase text-[#1F4D6B]">
        {text}
    </div>
  )
}

export default Badge