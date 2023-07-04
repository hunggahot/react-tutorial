import { useState } from 'react'

const orders = [100, 200, 300]

function App() {

  const [counter, setCounter] = useState(() => {
    const total = orders.reduce((total, cur) => total + cur)

    console.log(total)
    return total
  })

  const handleIncrease = () => {
    setCounter(prevState => prevState + 1)
  }

  const [info, setInfo] = useState({
    name: 'Lam Quoc Hung',
    age: 22,
    address: 'HCM, VN'
  })

  const handleUpdate = () => {
    setInfo({
      ...info,
      bio: 'Yeu mau hong ^^'
    })
  }

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default App;
