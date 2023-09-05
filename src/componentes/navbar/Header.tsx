import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getUser } from '../../services/userAPI';
import { MsgLoading } from '../msgloading/msgloading';
import { UserType } from '../../types';

export function Header() {
  const [username, setUsername] = useState<UserType>();
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const apiCall = async () => {
      const user = await getUser();
      setUsername(user);
      setIsloading(false);
    };
    apiCall();
  }, []);

  if (isLoading) {
    return <MsgLoading />;
  }
  return (
    <header data-testid="header-component">
      <NavLink data-testid="link-to-search" to="/search">Pesquisa</NavLink>
      <NavLink data-testid="link-to-favorites" to="/favorites">Favoritas</NavLink>
      <NavLink data-testid="link-to-profile" to="/profile">perfil</NavLink>
      <p data-testid="header-user-name">{username?.name}</p>
    </header>
  );
}
