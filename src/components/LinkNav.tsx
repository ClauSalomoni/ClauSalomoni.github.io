interface LinkNavProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  isButton?: boolean;
}

export default function LinkNav({ href, children, onClick, isButton = false }: LinkNavProps) {
  const baseClasses = "hover:underline px-1 py-0.5 text-sm md:text-base text-gray-800 dark:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 rounded";

  if (isButton) {
    return (
      <button onClick={onClick} className={baseClasses}>
        {children}
      </button>
    );
  }

  return (
    <a href={href} className={baseClasses}>
      {children}
    </a>
  );
}