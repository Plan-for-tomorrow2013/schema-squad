import { CartItem as CartItemType } from '../../models/cartItem.ts'
import { useRemoveFromCart } from '../hooks/useCart.ts'

interface Props {
  item: CartItemType
  imageUrl: string | undefined
}

///handle cart row items
function CartItem({ item, imageUrl }: Props) {
  const { mutate: removeFromCart } = useRemoveFromCart()
  return (
    <div className="cart-item">
      {imageUrl && (
        <img src={imageUrl} alt={item.name} className="cart-item__image" />
      )}
      <div className="cart-item__info">
        <p className="cart-item__name">{item.name}</p>
        {item.customisations && item.customisations.length > 0 && (
          <p className="cart-item__customisation">
            + {item.customisations.map((c) => c.name).join(', ')}
          </p>
        )}
        <p className="cart-item__quantity">Qty: {item.quantity}</p>
        <p className="cart-item__price">
          ${(item.price * item.quantity).toFixed(2)}
        </p>

        <button
          className="cart-item__delete-btn"
          onClick={() => removeFromCart(item.id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}
export default CartItem
