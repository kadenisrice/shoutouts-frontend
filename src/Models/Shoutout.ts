export default interface Shoutout {
  _id?: string;
  to: string;
  from: string;
  text: string;
  photoURL?: string; // profile image of sender
  shoutoutImg?: string; // personal file upload
}
