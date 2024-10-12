

export default function AddressSection({ title, children }) {
  return (
    <div className="flex flex-col gap-2">
      <h1>{title}</h1>
      <div className="flex flex-col gap-2">
        {children}
      </div>
    </div>
  );
}
