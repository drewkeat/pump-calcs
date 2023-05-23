// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {app, db} from "../../firebase"
import {collection, getDocs } from 'firebase/firestore/lite';

async function getUsers(db) {
  const usersCol = collection(db, 'users');
  const usersSnapshot = await getDocs(usersCol);
  const usersArr = usersSnapshot.docs.map(doc => doc.data());
  return usersArr;
}

export default async function handler(req, res) {
  const users = await getUsers(db)

  res.status(200).json(users)
}
