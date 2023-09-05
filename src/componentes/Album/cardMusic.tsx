import { SongType } from '../../types';
import { CheckboxWithImage } from './checkbox';

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
      <CheckboxWithImage trackId={ trackId } />
    </div>
  ));
}
