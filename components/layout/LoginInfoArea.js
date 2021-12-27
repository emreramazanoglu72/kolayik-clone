import React from "react";

const LoginInfoArea = () => {
  return (
    <div>
      <img
        src="https://kolayik.com/app/assets/images/kolay-mobile-app.png"
        class="contentImage"
      />
      <div className="title">Kolay İK yeni mobil uygulamasını deneyin!</div>
      <div className="text">
        Baştan sona yenilenen Kolay İK mobil uygulaması ile tüm işlemleri
        kolayca yapın.
      </div>
      <div className="buttons">
        <a
          href="https://apps.apple.com/tr/app/kolay/id1507156228"
          target="_blank"
        >
          <img
            src="https://kolayik.com/app/assets/images/app-store.svg"
            width="130"
            alt=""
          />
        </a>
        <a
          href="https://apps.apple.com/tr/app/kolay/id1507156228"
          target="_blank"
        >
          <img
            src="https://kolayik.com/app/assets/images/google-play.svg"
            width="130"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default LoginInfoArea;
