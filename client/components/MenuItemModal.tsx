import { useState } from 'react'
import { MenuItem } from '../../models/menuItem.ts'
import { CustomisationItem } from '../../models/customisationItem.ts'
import { useAddtoCart } from '../hooks/useCart.ts'
import { useCustomMenu } from '../hooks/useCustomMenu.ts'

interface Props {
  item: MenuItem
  imageUrl: string | undefined
  onClose: () => void
  onAddSuccess: (name: string) => void
}

function MenuItemModal({ item, imageUrl, onClose, onAddSuccess }: Props) {
  const { data } = useCustomMenu(item.id)
  const { mutate: addToCart } = useAddtoCart()
  const [selectedCustomisations, setSelectedCustomisations] = useState<
    CustomisationItem[]
  >([])

  const extrasTotal = selectedCustomisations.reduce(
    (sum, c) => sum + c.extra_cost,
    0,
  )
  const totalPrice = item.price + extrasTotal

  const handleAddToCart = () => {
    addToCart({
      ...item,
      price: totalPrice,
      customisations: selectedCustomisations.map(({ name, extra_cost }) => ({
        name,
        extra_cost,
      })),
    })
    onAddSuccess(item.name)
    onClose()
  }

  const handleSelectCustomisation = (option: CustomisationItem) => {
    setSelectedCustomisations((prev) =>
      prev.some((c) => c.id === option.id)
        ? prev.filter((c) => c.id !== option.id)
        : [...prev, option],
    )
  }

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
            {data.map((option) => (
              <div key={option.id} className="menu-dropdown__item">
                <button className="menu-dropdown__name">{option.name}</button>
                <span className="menu-dropdown__price">
                  +${option.extra_cost.toFixed(2)}
                </span>
                <button
                  className={`menu-dropdown__cart-btn${selectedCustomisations.some((c) => c.id === option.id) ? ' selected' : ''}`}
                  onClick={() => handleSelectCustomisation(option)}
                >
                  {selectedCustomisations.some((c) => c.id === option.id)
                    ? '✓'
                    : '+'}
                </button>
              </div>
            ))}
          </div>
        )}

        <p className="modal__price">${totalPrice.toFixed(2)}</p>
        <button className="modal__cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default MenuItemModal
