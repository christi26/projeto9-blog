export default function AboutPage() {
    return (
    <section>
      <h2 className="text-4xl font-bold">Sobre mim:</h2>
      <p className="mt-3 text-white-600">
        Olá! Eu sou Chris. Uma breve descrição sobre mim e contatos.
      </p>

      <div className="mt-4">
        <h3 className="font-semibold">Contato:</h3>
        <ul className="mt-2">
          <li>Email: chris@exemplo.com</li>
          <li>Twitter: @chrisexemplo</li>
          <li>GitHub: github.com/chrisexemplo</li>
        </ul>
      </div>
      
    </section>

  );
}