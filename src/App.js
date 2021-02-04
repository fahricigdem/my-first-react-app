
const ereignis = "Schritt;"
const tag = <b>dritte {ereignis}</b>

var langeText = [<p>Tests</p>] ;
for (var i=1; i<6 ;i++){
  langeText.push(<p>{i} : test test test</p>) 
}


function App() {
  return (
    <div>
     <h1>erste {ereignis}</h1>
     <h2>zweite Schritt</h2>
     {tag}
     <hr></hr>
     {langeText}
    </div>
  );
}

export default App;
