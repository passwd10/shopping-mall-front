import request from 'supertest';
import User from '../../models/userSchema';

let server;

describe('/login', () => {
  beforeEach(() => { server = require('../../index'); });
  afterEach(async () => {
    await server.close();
    await User.remove({});
  });
  
  describe('Post /', () => {
    it('should return all ')
  })
})

// const app = express();

// app.get('/user', (req, res) => {
//   res.status(200).json({ name: 'ddd' });
// });

// describe('Get /users', () => {
//   it('responds with json', async () => {
//     const { body } = await request(app)
//       .get('/user')
//       .expect(200);

//     expect(body.name).toBe('ddd');
//   });
// });