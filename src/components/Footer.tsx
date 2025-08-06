export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-950 py-6 mt-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto text-center text-sm text-gray-600 dark:text-gray-400 px-4">
        <p>© {new Date().getFullYear()} Claudia Salomoni. Todos os direitos reservados.</p>
        <p className="mt-2">
          Desenvolvido com ❤️ usando React, TypeScript e TailwindCSS.
        </p>
      </div>
    </footer>
  )
}