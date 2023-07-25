
const Informations = (props) =>{
    const form = props.form
    return(
        <section style = {{backgroundColor: 'lightblue'}}>
            <h1>Entered informations :</h1>
            <p><i>Your name :</i> {form.firstname} {form.lastname}</p>
            <p><i>Your age :</i> {form.age}</p>
            <p><i>Your gender :</i> {form.gender}</p>
            <p><i>Your destination :</i> {form.destination}</p>
            <p><i>Your dietary restrictions :</i></p>
            <p>**Nuts free : {form.nuts ? 'Yes' : 'No'}</p>
            <p>**Lactose free : {form.lactose ? 'Yes' : 'No'}</p>
            <p>**Vegan meal: {form.vegan ? 'Yes' : 'No'}</p>

        
        </section>
    )
}

export default Informations