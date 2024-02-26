import "./UserCard.css";

export function UserCard({ name, mail, picture }) {
  return (
    <>
      <img className="Picture" src={picture} alt="Profile Picture" />
      <b className="Name">{name}</b>
      <i className="Mail">{mail}</i>
    </>
  );
}
