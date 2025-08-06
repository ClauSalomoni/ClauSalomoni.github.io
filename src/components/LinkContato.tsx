interface LinkContatoProps {
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  colorClass?: string;
}

export default function LinkContato({ href, children, icon, colorClass = "text-indigo-500" }: LinkContatoProps) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-2 hover:underline ${colorClass}`}
      >
        {icon}
        {children}
      </a>
    </li>
  );
}