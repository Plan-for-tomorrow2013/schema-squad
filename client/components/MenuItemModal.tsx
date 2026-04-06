import { MenuItem } from '../../models/menuItem.ts'

interface Props {
  item: MenuItem
  imageUrl: string | undefined
  onClose: () => void
}

function MenuItemModal({ item, imageUrl, onClose }: Props) {
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
        {imageUrl && (
          <img src={imageUrl} alt={item.name} className="modal__image" />
        )}
        <h2 className="modal__name">{item.name}</h2>
        <p className="modal__description">{item.description}</p>
        <p className="modal__price">${item.price.toFixed(2)}</p>
        <button className="modal__cart-btn">Add to Cart</button>
      </div>
    </div>
  )
}

export default MenuItemModal
