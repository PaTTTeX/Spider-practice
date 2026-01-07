import './App.css'
import Header from './Header.jsx';
import SpiderImage from './assets/images/spider-logo.png'

function IsloggedIn(props) {
  return (props.loggedIn ? <h2>Welcome back, {props.user}!</h2> : <h2>Please Log in</h2>)
}

function ButtonE() {
  const buttonHandle = (e) => e.target.textContent = "YahoooOuch"

  return <button onClick={buttonHandle}>Click me</button>
}

function List(props) {
  const items = props.items;
  const category = props.category;


  const showList = items.map(products =>
    <li className='border p-5 w-1/2' key={products.id}>
      <div className='text-center'>
        <ul>
          Fruit: <b>{products.name}</b>
        </ul>
        <ul>
          Type: <b>{products.type}</b>
        </ul>
      </div>
      <img className='w-[50%] h-auto flex m-auto my-3' src={SpiderImage} />
    </li>);

  return (
    <>
      <h2 className='text-3xl bg-white text-center text-black'>{category}</h2>
      <ol className='flex'>{showList}</ol>
    </>)
}

const fruit = [
  { id: 1, name: "Apple", type: "Fruit", image: {SpiderImage} },
  { id: 2, name: "Orange", type: "Fruit", image: "apple" },
  { id: 3, name: "Banana", type: "Fruit", image: "apple" }
];

const pets = [
  { name: "Cheese" },
  { name: "Pepe" },
]

function App() {
  return (
    <>
      <Header />
      <main className="main mx-10">
        <h3 className='flex text-center justify-between'>{pets.map(e => <ul className='bg-white text-black w-[50%]' key={e.name}>{e.name}</ul>)}</h3>
        <h1 className="text-3xl font-bold underline">
        </h1>
        <IsloggedIn loggedIn={false} user="Tomas" />
        <ul className='list-disc'>
          <button onClick={() => console.log("You clicked horray")}>Button</button>
          <List items={fruit} category="FRUITS" />
        </ul>
        <ButtonE />
      </main>
    </>
  )
}

export default App

