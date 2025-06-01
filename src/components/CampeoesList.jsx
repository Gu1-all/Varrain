import { Link } from "react-router"

const CampeoesList = () => {
  const regioesitems=[
    {id:"varrain", title:"varrain", cover:"/assets/imgs/rai.webp"},
    {id:"test1", title:"test1", cover:"/assets/imgs/work.webp"},
    {id:"test2", title:"test2"},
    {id:"test3", title:"test3"},
    {id:"test4", title:"test4"},
    {id:"test5", title:"test5"},
  ]
  
  return (
    <div  className="grid grid-cols-1 place-items-center gap-15 mb-25">
      <ul className="grid grid-cols-5 gap-y-5 justify-items-center w-[90%] max-sm:grid-cols-1">
        {regioesitems.map((item) => (
          <li key={item.id}>
            <Link to={`/campeoes/${item.id}`}><CampeoesItem cover={item.cover} /></Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CampeoesList

function CampeoesItem(props) {
    return (
        <div className="w-[14rem] h-[25rem] object-cover">
            <img className="w-full h-full object-cover" src={props.cover} alt="" />
            <h1>{props.nome}</h1>
            <p>{props.descricao}</p>
        </div>
    )
}
