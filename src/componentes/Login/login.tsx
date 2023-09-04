import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../services/userAPI';
import { MsgLoading } from '../msgloading/msgloading';

export function Login() {
  const [userName, setUserName] = useState('');
  const [buttonName, setButtonName] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  const regex = /^[A-Za-z]{3,}$/;
  const navigate = useNavigate();

  const handleChangeButton = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setUserName(inputValue);
    setButtonName(regex.test(inputValue));
  };

  const callCreateUser = async () => {
    setIsloading(true);
    await createUser({ name: userName });
    navigate('/search');
  };

  if (isLoading) {
    return <MsgLoading />;
  }

  return (
    <div>
      <label htmlFor="userName">Insira seu nome</label>
      <input
        type="text"
        value={ userName }
        id="userName"
        onChange={ handleChangeButton }
        data-testid="login-name-input"
      />
      <button
        onClick={ () => callCreateUser() }
        data-testid="login-submit-button"
        disabled={ !buttonName }
      >
        Entrar
      </button>
    </div>
  );
}
