export default function StudentLogCard({ studId, location, time }) {
  return (
    <div className="flex justify-between border p-1 rounded-sm">
      <p className="font-medium">{studId}</p>
      <div className="flex gap-2">
        <p>{location}</p>
      </div>
      <p>{time}</p>
    </div>
  );
}
