import { useCart, useClearCart } from '../hooks/useCart.ts'
import CartItem from './CartItem.tsx'

interface Props {
  onClose: () => void
  imageMap: Record<string, string>
}

function CartModal({ onClose, imageMap }: Props) {
  const { cart } = useCart()
  const { mutate: clearCart } = useClearCart()

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  )

  return (
    <div
      className="modal-overlay"
      role="button"
      tabIndex={0}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClose()}
    >
      <div className="modal" role="dialog" aria-modal="true">
        <button onClick={onClose}>
          x
        </button>
        <h2>Your Order</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="modal">
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  imageUrl={imageMap[item.image]}
                />
              ))}
            </div>

            <div>
              <p>
                Total: <span>${totalAmount.toFixed(2)}</span>
              </p>
              <button
                onClick={() => clearCart()}
              >
                Clear Cart
              </button>

              <button onClick={() => {
                alert('Order Placed!')
                clearCart()
                onClose()
              }}>
                Checkout
              </button>


            </div>
          </>
        )}
      </div>
    </div>
  )
}
export default CartModal
