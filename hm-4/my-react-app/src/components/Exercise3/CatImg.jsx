import "../Exercise3/CatImg.css"
function CatImg({imgs}){
    return(
        <div className="cats">
            {console.log(imgs)}
     {console.log(imgs)}
      {imgs.map((img, index) => (
        <div key={index}>
            <img src={img.url} alt="Picture of a cat" />
        </div>
      ))}
        </div>
    )
}

export default CatImg