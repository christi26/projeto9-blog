export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 text-center">
      <p>© { new Date().getFullYear() } Blog da Chris. Todos os direitos reservados.</p>
    </footer>
  );
}