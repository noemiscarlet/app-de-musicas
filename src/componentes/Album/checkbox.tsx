import React, { useState } from 'react';
import checkedImage from '../../images/checked_heart.png';
import uncheckedImage from '../../images/empty_heart.png';

type TrackType = {
  trackId: number
};

export function CheckboxWithImage({ trackId }: TrackType) {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label data-testid={ `checkbox-music-${trackId}` }>
      <input
        onChange={ toggleCheckbox }
        type="checkbox"
        alt="favorite"
      />
      <img
        src={ isChecked ? checkedImage : uncheckedImage }
        alt={ isChecked ? 'favorite' : '' }
      />
    </label>
  );
}
