import { Link } from "react-router"

const RegioesList = () => {
  const regioesitems=[
    {id:"varrain", title:"varrain", cover:"public/assets/imgs/rai.webp"},
    {id:"test1", title:"test1", cover:"public/assets/imgs/work.webp"},
    {id:"test2", title:"test2"},
    {id:"test3", title:"test3"},
    {id:"test4", title:"test4"},
  ]
  
  return (
    <div  className="grid grid-cols-1 place-items-center w-dvw mb-25">
      <ul className="grid grid-cols-4 gap-y-10 w-[90%]">
        {regioesitems.map((item) => (
          <li key={item.id}>
            <Link to={`/regioes/${item.id}`}><RegioesItem cover={item.cover}/></Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RegioesList

function RegioesItem(props) {
    return (
        <div className="w-[18rem] h-[13rem] object-cover">
            <img className="w-full h-full object-cover" src={props.cover} alt="" />
            <h1>{props.nome}</h1>
            <p>{props.descricao}</p>
        </div>
    )
}
