import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Zafar Imam</span>
        <span className="footer-comment">{'/* built with React + a lot of coffee */'}</span>
      </div>
    </footer>
  )
}

export default Footer
