import Jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../constants';

async function signJwt(payload: string | Buffer | object, signature = JWT_SECRET) {
  return Jwt.sign(payload, signature);
}

function verifyJwt(token: string, signature = JWT_SECRET) {
  try {
    const decoded = Jwt.verify(token, signature);
    return decoded;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export { signJwt, verifyJwt };
