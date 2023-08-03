export default function Attendee(prop) {
  return(
    <>
    <div key={prop.attendee.id} className="attendee">
      <p>
        <img
          src={prop.attendee.avatar}
          alt={prop.attendee.firstName}
        />
        {"   "}
        <span>
          {" "}
          {prop.attendee.firstName} {prop.attendee.lastName}{" "}
        </span>
      </p>
      <p>
        <button
          className="clickable"
          onClick={() =>
            updateEventAttendance(
              event.id,
              prop.attendee.id
            )
          }
        >
          Attending:
        </button>
        <span>
          {prop.attendee.attendance ? "✅" : "❌"}
        </span>
      </p>

      <p>
        <span>Note:</span> {prop.attendee.note}
      </p>
    </div>
  </>
  )
}
