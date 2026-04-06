import { Router } from 'express'

import * as db from '../db/index.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const menuItems = await db.getAllMenuItems()
    res.json({ menu: menuItems })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
