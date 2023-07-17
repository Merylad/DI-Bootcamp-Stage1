const UserFavoriteAnimals = (props)=>{
    const {favs} = props
    return (
    <ul>
        
            {favs.map(animal =>
             <li key = {animal}> {animal} </li> )}
        
    </ul>
    )
    
}

export default UserFavoriteAnimals