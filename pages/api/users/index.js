// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {getCollection, writeCollection} from "../../../dbTmp/dbHelpers"

// import { db } from "../../firebase"
// import {collection, getDocs } from 'firebase/firestore/lite';

// async function getUsers(database) {
//   const usersCol = collection(database, 'users');
//   const usersSnapshot = await getDocs(usersCol);
//   const usersArr = usersSnapshot.docs.map(doc => doc.data());
//   return usersArr;
// }

export default async function handler(req, res) {
  const users = await getCollection('users')
  switch (req.method) {
    case 'GET':
      res.send(users)
      break;
    case 'POST':
      const user = req.body
      user.id = users.length+1
      users.push(user)
      const resp = await writeCollection('users', users)
      res.status(202).json(resp)
      break;
    default:
      res.status(405).send("Cannot process request method")
      break;
  }

  res.status(200).json("test")
}
