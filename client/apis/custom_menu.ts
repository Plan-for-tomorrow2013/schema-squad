import request from 'superagent'

const rootURL = new URL(`/api/v1`, document.baseURI)

import { CustomisationItem } from '../../models/customisationItem.ts'

export async function getAllCustomisationMenu(): Promise<CustomisationItem[]> {
  const response = await request.get(`${rootURL}/customMenu`)
  return response.body.menu as CustomisationItem[]
}

export async function getCustomisationMenu(
  menu_id: number,
): Promise<CustomisationItem[]> {
  const response = await request.get(`${rootURL}/customMenu/${menu_id}`)
  return response.body.menu as CustomisationItem[]
}
