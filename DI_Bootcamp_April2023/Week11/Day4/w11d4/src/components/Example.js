import data from './data.json'

const Example = () =>{
    const medias = data.SocialMedias
    const skills = data.Skills
    const experiences = data.Experiences
    return(
        <>
        <h1>Example 1</h1>
            {medias.map(link =>{
                return(
                    <ul>
                        <li>{link}</li>
                    </ul>
                )
            })}

        <h1>Example 2</h1>
        {skills.map(obj =>{
           return(
                <>
                <h3>{obj.Area}</h3>
                {obj.SkillSet.map(language=>{
                    return(
                        <ul>
                            <li>{language.Name}</li>
                        </ul>
                    )
                })}
                </>
           )
        })}

        <h1>Example3</h1>
        {experiences.map((obj, idx)=>{
            return(
                
                <div key = {idx}>
                    
                    <img src= {obj.logo} alt= 'img' />
                    <p>{obj.companyName}</p>
                    {obj.roles.map(role=>{
                        return(
                            <>
                                <p><strong>{role.title}</strong> </p>
                                <p>{role.startDate} {role.location} </p>
                                <p>{role.description} </p>
                            </>
                        )
                    })}

                    
                </div>
            )
        })}


        </>
    )
}
export default Example