import "../UserProfileFunction/UserProfileFunction.css"
 export function UserProfileFunction({name, age, hobby}) {
    return(
        <div>  
               <div className="cardF">
                  <h2>Name: {name}</h2>
                  <p>Age: {age}</p>
                  <p>Hobby: {hobby}</p>
            </div>
       
        </div>
    )
}