import { useState } from 'react';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import { MsgLoading } from '../msgloading/msgloading';
import { AlbumType } from '../../types';
import { List } from './list';

export function Search() {
  const [userArtist, setUserArtist] = useState('');
  const [buttonSearch, setButtonSearch] = useState(false);
  const [nameArtist, setNameArtist] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const [albums, setAlbums] = useState<AlbumType[]>([]);

  const regex = /.{2,}/;

  const handleChangeButton = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setUserArtist(inputValue);
    setNameArtist(inputValue);
    setButtonSearch(regex.test(inputValue));
  };

  const searchAlbums = async () => {
    setIsloading(true);
    const albuns = await searchAlbumsAPI(userArtist);
    setUserArtist('');
    setIsloading(false);
    setAlbums(albuns);
  };

  if (isLoading) {
    return <MsgLoading />;
  }

  return (
    <>
      <form onSubmit={ (e) => e.preventDefault() }>
        <input
          type="text"
          value={ userArtist }
          onChange={ handleChangeButton }
          data-testid="search-artist-input"
        />
        <button
          disabled={ !buttonSearch }
          data-testid="search-artist-button"
          onClick={ searchAlbums }
        >
          Pesquisar
        </button>
      </form>
      {
        albums.length
          ? <List listAlbums={ albums } nameArtist={ nameArtist } />
          : <h1>Nenhum álbum foi encontrado</h1>
      }
    </>
  );
}
