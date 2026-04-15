import { CartItem } from '../../models/cartItem.ts'

interface Props {
  items: CartItem[]
  total: number
  onClose: () => void
}

function ReceiptModal({ items, total, onClose }: Props) {
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

        <h2 className="modal__name">Thank you for your payment!</h2>

        <div className="receipt__items">
          {items.map((item) => (
            <div key={item.id} className="receipt__item">
              <div className="receipt__item-info">
                <span className="receipt__item-name">{item.name}</span>
                <span className="receipt__item-qty"> x {item.quantity}</span>
              </div>
              <span className="receipt__item-price">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}
        </div>

        <div className="receipt__total">
          <span className="receipt__total-label">Total: </span>
          <span className="receipt__total-amount">${total.toFixed(2)}</span>
        </div>

        <button className="modal__cart-btn" onClick={onClose}>
          Back to Menu
        </button>
      </div>
    </div>
  )
}

export default ReceiptModal
