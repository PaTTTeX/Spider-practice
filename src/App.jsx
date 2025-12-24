import './App.css'
import Header from './Header.jsx';

function IsloggedIn(props) {
  return (props.loggedIn ? <h2>Welcome back, {props.user}!</h2> : <h2>Please Log in</h2>)
}

function ButtonE(){
  const buttonHandle = (e) => e.target.textContent = "YahoooOuch"

  return <button onClick={buttonHandle}>Click me</button>
}

function List(props) {
  const items = props.items;
  const category = props.category;


  const showList = items.map(products => <li key={products.name}>
    Fruit: <b>{products.name}</b>
    Type: <b>{products.type}</b>
  </li>);

  return (
    <>
      <h2 className='text-3xl bg-white text-center text-black'>{category}</h2> <ol>{showList}</ol>
    </>)
}

const fruit = [
  { name: "apple", type: "fruit" },
  { name: "orange", type: "fruit" },
  { name: "banana", type: "fruit" }
];

const Spider = [
  { name: "Elizabeth", type: "fruit" },
  { name: "Goliath", type: "fruit" },
  { name: "banana", type: "fruit" }
];

function App() {
  return (
    <>
      <Header />
      <main className="main mx-10">
        <h1 className="text-3xl font-bold underline">
        </h1>
        <IsloggedIn loggedIn={false} user="Tomas" />
        <ul className='list-disc'>
          <button onClick={() => console.log("You clicked horray")}>Button</button>
          <List items={fruit} category="FRUITS" />
          <List items={Spider} category="SPIDERS" />
        </ul>
        <ButtonE />
      </main>
    </>
  )
}

export default App

