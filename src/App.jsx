import './App.css'
import Header from './components/Header'
import Products from './components/Products'
import { products } from './mocks/productos.json'



function App() {


  return (
    <main>
      <Header/>
      <Products products={products} />
    </main>
  )
}

export default App
