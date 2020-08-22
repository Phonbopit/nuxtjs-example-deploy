const express = require('express')
const cors = require('cors')

const mockToken = '6cc344617d6cec1783366ca4ec49c8f01cad9dcb6a5148a4'
const mockUser = {
  id: 1,
  name: 'John Doe',
  email: 'john@doe.com',
}

const app = express()

app.use(cors())
app.use(express.json())

const router = express.Router()

router.get('/me', (req, res) => {
  //req.headers.authorization // Bearer <TOKEN>
  const headers = req.headers.authorization

  const token = headers && headers.split(' ')[1]

  if (token === mockToken) {
    return res.json({
      user: mockUser,
    })
  } else {
    return res.status(401).json({ message: 'Invalid token' })
  }
})

router.post('/login', (req, res) => {
  const { email, password } = req.body

  if (email === 'admin@admin.com' && password === '123456') {
    return res.json({
      user: mockUser,
      token: mockToken,
    })
  } else {
    return res.status(401).json({
      message: 'Invalid password',
    })
  }
})

app.use('/api', router)

app.listen(12345, () => {
  console.log('Running at port 12345')
})
