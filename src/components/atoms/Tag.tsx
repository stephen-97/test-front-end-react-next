interface BadgeProps {
  label: string;
}

export default function Tag({ label }: BadgeProps) {
  return (
    <span className="inline-block rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
      {label}
    </span>
  );
}
