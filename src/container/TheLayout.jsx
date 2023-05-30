
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import IconBookmark from '../assets/icon/Bookmark.svg'
import IconPokemon from '../assets/icon/Pokeball.svg'


const TheLayout = () => {
  const favorite = useSelector((state) => state.global.favorite);
  return (
    <div className='content'>
      <Outlet />
      <div className='nav-footer'>
        <a href='/'>
          <img src={IconPokemon} alt="IconPokemon" />
          <span>Home</span>
        </a>
        <a href='/favorit'>
          {favorite && favorite.length > 0 ? <div className="total-fav">{favorite.length}</div> : ''}
          <img src={IconBookmark} alt="IconBookmark" />
          <span>Favoritos</span>
        </a>
      </div>
    </div>
  );
};

export default TheLayout;
