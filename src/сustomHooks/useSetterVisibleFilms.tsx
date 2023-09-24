import { useMediaQuery } from '@react-hook/media-query';
import { useState, useEffect } from 'react';

export default function useSetterVisibleFilms() {
  const [baseLimit, setBaseLimit] = useState(12);
  const [addedLimit, setAddedLimit] = useState(3);
  const [cntAddedContent, setCntAddedContent] = useState(0);
  const [cntVisibleFilms, setCntVisibleFilms] = useState<any>(null);

  const toTwoColumn = useMediaQuery('only screen and (max-width: 1095px)');
  const toOneColumn = useMediaQuery('only screen and (max-width: 683px)');

  const onClickToAddContent = () => { setCntAddedContent(cntAddedContent + 1); };
  const onClickToReset = () => { setCntAddedContent(0); };

  useEffect(() => {
    if (toTwoColumn) {
      setBaseLimit(8);
      setAddedLimit(2);
    } else if (toOneColumn) {
      setBaseLimit(5);
      setAddedLimit(2);
    } else {
      setBaseLimit(12);
      setAddedLimit(3);
    }
  }, [toTwoColumn, toOneColumn]);

  useEffect(() => {
    setCntVisibleFilms(baseLimit + addedLimit * cntAddedContent);
  }, [baseLimit, addedLimit, cntAddedContent]);

  return { onClickToAddContent, cntVisibleFilms, onClickToReset };
}
