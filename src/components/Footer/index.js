import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <a href="https://facebook.com">
          <img src="/img/fb.png" alt="Facebook" />
        </a>
        <a href="https://x.com">
          <img src="/img/tw.png" alt="Twitter" />
        </a>
        <a href="https://instagram.com">
          <img src="/img/ig.png" alt="Instagram" />
        </a>
      </div>
      <img src="/img/logo.png" alt="Organo Logo" />
      <p>Desenvolvido por Vinicius + Alura</p>
    </footer>
  );
};
