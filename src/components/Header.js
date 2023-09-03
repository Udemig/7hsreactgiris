import "./Header.css";
import { Button } from "./Button";
/*
React Componenti Oluşturma Aşamaları

1-js fonksiyonu ya js classı olmalı
2-her component büyük harfle başlar
3-içerisinde mutlaka bir jsx kodu return eder
4-oluşturan her compoentn farklı sayfalarda kullanmka için export edilir


*/

const Header = () => {
  const categories = ["Ana Sayfa", "Hakkımızda", "İletişim", "Ürünler"];
  const currenUser = false;
  return (
    <header className="header">
      <div>Logo</div>
      <nav>
        {categories.map((category) => (
          <a href="">{category}</a>
        ))}
      </nav>
      <Button
        title={currenUser ? "Çıkış Yap" : "Giriş Yap"}
        btnColor={currenUser ? "red" : "green"}
      />
    </header>
  );
};

export default Header;
