const express = require('express');
const cors = require('cors');
const app = express();
const router = express.Router();
app.use(cors());
app.use(express.json());
const user = {
  id: 1,
  username: 'john',
  email: 'john@doe.com',
  name: 'John Doe',
  roles:'GOD',
};
router.get('/me', (req, res) => {
  return res.json({
    data: {
      user
    }
  });
});
router.post('/login', (req, res) => {
  const { email, password } = req.body;
    // query db.
  if (email === 'admin@admin.com' && password === '123456') {
    return res.json({
      data: {
        user,
        token: 'you_have_fucking__token'
      }
    });
  } else {
    return res.status(401).json({
      message: 'Invalid Password'
    });
  }
});
app.use('/api', router);
app.listen(12345, () => {
  console.log('Mock API start on port 12345');
});
