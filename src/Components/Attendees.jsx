import Attendee from "./Attendee";
export default function Attendees(prop) {
  console.log(prop)
  return (
    <div className="attendees">
      {prop.attendees.map((attendee, index) => (
        <Attendee attendee={attendee} />
      ))}
    </div>
  );
}
