import { useState, useEffect } from 'react'
import { useMenu } from '../hooks/useMenu.ts'
import { MenuItem } from '../../models/menuItem.ts'
import MenuItemModal from './MenuItemModal.tsx'
import {useCart} from '../hooks/useCart.ts'
import CartModal from './CartModal.tsx'


const images = import.meta.glob('./images/*.png', { eager: true })
const imageMap: Record<string, string> = {}
for (const [path, img] of Object.entries(images)) {
  const filename = path.split('/').pop()!
  imageMap[filename] = (img as any).default
}

const imageList = Object.values(imageMap)

function getRandomIndex(current: number, total: number): number {
  if (total <= 1) return 0
  let next = Math.floor(Math.random() * total)
  while (next === current) next = Math.floor(Math.random() * total)
  return next
}

function App() {
  const { data } = useMenu()
  const { cart } = useCart() 
  const [currentIndex, setCurrentIndex] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)
  const [cartOpen, setCartOpen] =useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => getRandomIndex(prev, imageList.length))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const totalQuantity = cart.reduce((acc, item)=> acc + item.quantity,0)

  return (
    <>
      <div className="app">
        <h1>Welcome to Schema Squad</h1>
        <div className="slideshow">
          <img
            key={currentIndex}
            src={imageList[currentIndex]}
            alt="menu item"
            className="slide-in"
          />
        </div>
        <button
          className="view-menu-btn"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? 'Hide Menu ▲' : 'View Menu ▼'}
        </button>

        
        <button
          className="view-menu-btn"
          onClick={() => setCartOpen((prev) => !prev)}
        >
          {cartOpen ? 'Hide Cart ▲' : `View Cart (${totalQuantity})`}
        </button>

        {cartOpen && (
          <CartModal
            onClose={() => setCartOpen(false)}
            imageMap={imageMap}
          />
        )}


        {menuOpen && (
          <div className="menu-dropdown">
            {data &&
              data.map((item) => (
                <div key={item.id} className="menu-dropdown__item">
                  <button
                    className="menu-dropdown__name"
                    onClick={() => setSelectedItem(item)}
                  >
                    {item.name}
                  </button>
                  <span className="menu-dropdown__price">
                    ${item.price.toFixed(2)}
                  </span>
                  <button
                    className="menu-dropdown__cart-btn"
                    onClick={() => setSelectedItem(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        )}
        {selectedItem && (
          <MenuItemModal
            item={selectedItem}
            imageUrl={imageMap[selectedItem.image]}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </div>
    </>
  )
}

export default App
