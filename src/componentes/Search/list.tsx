import { Link } from 'react-router-dom';
import { AlbumType } from '../../types';

type ListProps = {
  nameArtist: string;
  listAlbums: AlbumType[];
};

export function List({ nameArtist, listAlbums }: ListProps) {
  return (
    <div>
      <h3>{`Resultado de álbuns de: ${nameArtist}`}</h3>
      <ul>
        {
          listAlbums.map(({ collectionName, collectionId }) => (
            <Link
              to={ `/album/${collectionId}` }
              key={ collectionId }
              data-testid={ `link-to-album-${collectionId}` }
            >
              <li>{collectionName}</li>
            </Link>
          ))
        }
      </ul>
    </div>
  );
}
