import googleSymbol from '../../../images/google-symbol.svg';

export default function Login() {
  return (
    <div className="login">
      <div className="login__body">
        <p className="login__title login__title--google">
          Вы можете авторизоваться с помощью Google Account:
        </p>
        <button className="login__google" onClick={() => {}}>
          <img
            src={googleSymbol}
            alt="Google Symbol"
            className="login__googleSymbol"
          />
          Google
        </button>
        <p className="login__title">
          Или зайти с помощью e-mail и пароля, предварительно
          зарегистрировавшись:
        </p>
        <div className="login__group">
          <label className="login__label" htmlFor="inputEmail">
            Электронная почта:
          </label>
          <input
            type="email"
            id="inputEmail"
            className="login__input"
            placeholder="your@email.com"
          />
        </div>

        <div className="login__group">
          <label className="login__label" htmlFor="inputPassword">
            Пароль:
          </label>
          <input
            type="password"
            id="inputPassword"
            className="login__input"
            placeholder="Пароль"
          />
        </div>
      </div>

      <div className="login__buttons">
        <button>Войти</button>
        <button>Регистрация</button>
      </div>
    </div>
  );
}
