import connection from './connection.ts'
import { CustomisationItem } from '../../models/customisationItem.ts'
import { CustomisationOrder } from '../../models/customisationOrder.ts'
import { MenuItem } from '../../models/menuItem.ts'
import { MenuOrder } from '../../models/menuOrder.ts'
import { TableOrder } from '../../models/tableOrder.ts'
import { Receipt } from '../../models/receipt.ts'

export async function getAllCustomisationItems(
  db = connection,
): Promise<CustomisationItem[]> {
  return db('custom_items').select()
}

export async function getCustomisationItem(
  menu_id: number,
): Promise<CustomisationItem[]> {
  const db = connection
  return db('custom_items').where('menu_item_id', menu_id).select()
}

export async function getAllCustomisationOrders(
  db = connection,
): Promise<CustomisationOrder[]> {
  return db('customisation_order').select()
}

export async function getAllMenuItems(db = connection): Promise<MenuItem[]> {
  return db('menu_items').select()
}

export async function getAllMenuOrders(db = connection): Promise<MenuOrder[]> {
  return db('menu_order').select()
}

export async function getAllTableOrders(
  db = connection,
): Promise<TableOrder[]> {
  return db('table_order').select()
}

export async function getAllReceipts(db = connection): Promise<Receipt[]> {
  return db('receipt').select()
}
