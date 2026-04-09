import { Router } from 'express'

import * as db from '../db/index.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const customMenuItems = await db.getAllCustomisationItems()
    res.json({ menu: customMenuItems })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const customMenuItems = await db.getCustomisationItem(Number(id))
    res.json({ menu: customMenuItems })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
