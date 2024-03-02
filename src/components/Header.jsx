import logoImg from "../assets/logo.jpg";
import Button from "./UI/button";

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="logo" />
        <h1>ReactFood</h1>
      </div>
      <nav id="button">
        <Button textOnly>Cart(0)</Button>
      </nav>
    </header>
  );
}
