export default function Register() {
  return (
    <div className="register">
      <div className="register__body">
        <p className="register__title register__title--google">Регистрация</p>

        <div className="register__group">
          <label className="register__label" htmlFor="inputName">
            Имя:
          </label>
          <input
            type="text"
            id="inputName"
            className="register__input"
            placeholder="Имя"
          />
        </div>

        <div className="register__group">
          <label className="register__label" htmlFor="inputEmail">
            Электронная почта:
          </label>
          <input
            type="email"
            id="inputEmail"
            className="register__input"
            placeholder="your@email.com"
          />
        </div>

        <div className="register__group">
          <label className="register__label" htmlFor="inputPassword">
            Пароль:
          </label>
          <input
            type="password"
            id="inputPassword"
            className="register__input"
            placeholder="Пароль"
          />
        </div>

        <div className="register__group">
          <label className="register__label" htmlFor="inputConfirm">
            Подтверждение пароля:
          </label>
          <input
            type="password"
            id="inputConfirm"
            className="register__input"
            placeholder="Подтвердите пароль"
          />
        </div>
      </div>

      <div className="register__buttons">
        <button>Войти</button>
        <button>Регистрация</button>
      </div>
    </div>
  );
}
