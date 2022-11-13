import Logo from '../../assets/images/logo-s.png';

const Header = () => {
  return (
    <header>
        <div className="container"></div>
      <h1 className="logo">
        <span>The F2E</span>
        <img src={Logo} alt='logo' />
      </h1>
    </header>
  );
};

export default Header;
