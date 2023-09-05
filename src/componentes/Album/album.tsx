import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AlbumType, SongType } from '../../types';
import getMusics from '../../services/musicsAPI';

export function Album() {
  const [songList, setSongList] = useState<[AlbumType, ...SongType[]]>();
  const [id, setId] = useState<string | undefined>('');

  const params = useParams();

  useEffect(() => {
    getMusics(id);
  }, []);

  return (
    <h1>aaaaaaa</h1>
  );
}
