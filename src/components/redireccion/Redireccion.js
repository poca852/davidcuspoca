import React, {useEffect} from 'react';
import { H1, RedirectMain } from './Redireccion.elements';
import { useLocation } from 'react-router-dom';

const Redireccion = (props) => {

  const { pathname } = useLocation();
  useEffect(() => {
    window.location.replace('https://github.com/poca852')
  }, [pathname])

  return (
    <>
      <RedirectMain>
        <H1>Redireccionando</H1>
      </RedirectMain>
    </>
  )
}

export default Redireccion