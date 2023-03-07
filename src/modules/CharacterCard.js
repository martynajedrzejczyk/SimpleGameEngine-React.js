import './CharacterCard.css'

export default function CharacterCard(props) {

    

    return (
        <div className='card'>
            <div className="name">
            <p>{props.character.name}</p>
            <p className='secondName'>{props.character.nick}</p>
            </div>
            <img src={"./postacie/" + props.character.img} alt="Tu powinien byc obrazek" />
        </div>
    )
}