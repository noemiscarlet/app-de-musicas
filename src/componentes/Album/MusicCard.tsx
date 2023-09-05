import { SongType } from '../../types';
import { MusicCard } from './checkbox';

type CardMusicProps = {
  songs: SongType[] | undefined;
};

export function CardMusic({ songs }: CardMusicProps) {
  return songs && songs.map(({ previewUrl, trackName, trackId }) => (
    <div key={ previewUrl }>
      <p>{trackName}</p>
      <audio
        data-testid="audio-component"
        src={ previewUrl }
        controls
      >
        <track kind="captions" />
        O seu navegador não suporta o elemento
        {' '}
        <code>audio</code>
        .
      </audio>
      <MusicCard trackId={ trackId } data-testid={ `checkbox-music-${trackId}` } />
    </div>
  ));
}
