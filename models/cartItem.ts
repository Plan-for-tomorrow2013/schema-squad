import { MenuItem } from './menuItem'
import { CustomisationItem } from './customisationItem'

export interface CartItem extends MenuItem {
  quantity: number
  customisations?: Pick<CustomisationItem, 'name' | 'extra_cost'>[]
}
