import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
  apiKey: 'AIzaSyDHQHRFP3KWqp-XBMe3_UGiQ2rtnLOejdA',
  authDomain: 'greenratings-5c997.firebaseapp.com',
  databaseURL: 'https://greenratings-5c997.firebaseio.com',
  projectId: 'greenratings-5c997',
  storageBucket: 'greenratings-5c997.appspot.com',
  messagingSenderId: '153547194603'
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
  timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const ratingsCollection = db.collection('ratings')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
  db,
  auth,
  currentUser,
  ratingsCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}
