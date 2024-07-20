const allNotes = () => {
  return(
    <h1> All notes</h1>
  ) 
};

// https://javascript.info/import-export

const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];



const listItems = products.map((product) => (
  <li key={product.id}>{product.title}</li>
));
return <ul>{listItems}</ul>;   