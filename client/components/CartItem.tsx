import { useState } from 'react'
import { CartItem as CartItemType } from '../../models/cartItem.ts'
import { useUpdateCartQuantity } from '../hooks/useCart.ts'

interface Props {
  item: CartItemType
  imageUrl: string | undefined
}

///handle cart row items
function CartItem({ item, imageUrl }: Props) {
  const { mutate: updateQuantity } = useUpdateCartQuantity()
  const [isEditing, setIsEditing] = useState(false)
  const [newQuantity, setNewQuantity] = useState(item.quantity)

  const handleUpdate = () => {
    if (isEditing) {
      updateQuantity({ id: item.id, quantity: newQuantity })
      setIsEditing(false)
    } else {
      setIsEditing(true)
    }
  }

  return (
    <div className="cart-item">
      {imageUrl && (
        <img src={imageUrl} alt={item.name} className="cart-item__image" />
      )}
      <div className="cart-item__info">
        <div className="cart-item__details">
          <p className="cart-item__name">{item.name}</p>
          {item.customisations && item.customisations.length > 0 && (
            <p className="cart-item__customisation">
              + {item.customisations.map((c) => c.name).join(', ')}
            </p>
          )}
        </div>

        {isEditing ? (
          <div className="cart-item__quantity-edit">
            <label htmlFor={`quantity-${item.id}`}>Qty: </label>
            <input
              id={`quantity-${item.id}`}
              type="number"
              min="0"
              value={newQuantity}
              onChange={(e) => setNewQuantity(Number(e.target.value))}
              className="cart-item__quantity-input"
            />
          </div>
        ) : (
          <p className="cart-item__quantity">Qty: {item.quantity}</p>
        )}

        <p className="cart-item__price">
          ${(item.price * item.quantity).toFixed(2)}
        </p>

        <div className="cart-item__actions">
          <button  onClick={handleUpdate}>
            {isEditing ? 'Save' : 'Update'}
          </button>
          {isEditing && (
            <button
             
              onClick={() => {
                setIsEditing(false)
                setNewQuantity(item.quantity)
              }}
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
export default CartItem
