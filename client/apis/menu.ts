import request from 'superagent'

const rootURL = new URL(`/api/v1`, document.baseURI)

import { MenuItem } from '../../models/menuItem.ts'

export async function getMenu(): Promise<MenuItem[]> {
  const response = await request.get(`${rootURL}/menu`)
  return response.body.menu as MenuItem[]
}
