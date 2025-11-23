type HoneypotFieldProps = {
  label?: string;
};

export function HoneypotField({
  label = "Leave this field empty",
}: HoneypotFieldProps) {
  return (
    <label className="sr-only">
      {label}
      <input type="text" name="trailhead" tabIndex={-1} autoComplete="off" />
    </label>
  );
}

