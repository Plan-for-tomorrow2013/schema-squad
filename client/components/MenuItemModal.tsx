import { MenuItem } from '../../models/menuItem.ts'
import { useCustomMenu } from '../hooks/useCustomMenu.ts'

interface Props {
  item: MenuItem
  imageUrl: string | undefined
  onClose: () => void
}

function MenuItemModal({ item, imageUrl, onClose }: Props) {
  const { data } = useCustomMenu(item.id)

  const setSelectedItem = (item) => {}
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

        {data && data?.length > 0 && (
          <div className="menu-dropdown">
            {data.map((item) => (
              <div key={item.id} className="menu-dropdown__item">
                <button className="menu-dropdown__name">{item.name}</button>
                <span className="menu-dropdown__price">
                  ${item.extra_cost.toFixed(2)}
                </span>
                <button
                  className="menu-dropdown__cart-btn"
                  onClick={() => setSelectedItem(item)}
                >
                  +
                </button>
              </div>
            ))}
          </div>
        )}

        <p className="modal__price">${item.price.toFixed(2)}</p>
        <button className="modal__cart-btn">Add to Cart</button>
      </div>
    </div>
  )
}

export default MenuItemModal
