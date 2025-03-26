import family from "./familytree";


function Child() {
  return (
    <div className="child">
      {family.children.map((child, index) => (
        <div key={index}>
          <h2>{child.name}</h2>
          <p>{child.age}</p>
          <div>
            </div>{child.grandchildren.map((grandchild, index) => (
            <div className="grandchild">
             <h4>{grandchild.name}</h4>
             <p>{grandchild.hobby}</p>
            
             </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Child;
