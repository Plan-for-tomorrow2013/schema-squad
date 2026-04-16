import { useCart, useClearCart } from '../hooks/useCart.ts'
import CartItem from './CartItem.tsx'

interface Props {
  onClose: () => void
  imageMap: Record<string, string>
  onCheckout: () => void
}

function CartModal({ onClose, imageMap, onCheckout }: Props) {
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
        <button className="modal__close" onClick={onClose}>
          ✕
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
              <button onClick={() => clearCart()}>Clear Cart</button>

              <button
                onClick={() => {
                  onCheckout()
                }}
              >
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
