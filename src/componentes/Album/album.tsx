import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AlbumType, SongType } from '../../types';
import getMusics from '../../services/musicsAPI';
import { MsgLoading } from '../msgloading/msgloading';
import { CardMusic } from './cardMusic';

export function Album() {
  const [songList, setSongList] = useState<[...SongType[]]>();
  const [albumInfo, setAlbumInfo] = useState<AlbumType>();
  const [isLoading, setIsloading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const apiCall = async () => {
      const [album, ...musics] = await getMusics(id);
      setSongList(musics);
      setAlbumInfo(album);
      setIsloading(false);
    };
    apiCall();
  }, []);

  if (isLoading) {
    return <MsgLoading />;
  }

  return (
    <div>
      <h3 data-testid="artist-name">{`artista: ${albumInfo?.artistName}`}</h3>
      <h4 data-testid="album-name">{`album: ${albumInfo?.collectionName}`}</h4>
      <CardMusic songs={ songList } />
    </div>
  );
}
