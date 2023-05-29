
import { Outlet } from "react-router-dom";
import IconBookmark from '../assets/icon/Bookmark.svg'
import IconPokemon from '../assets/icon/Pokeball.svg'


const TheLayout = () => {
  return (
    <div className='content'>
      <Outlet />
      <div className='nav-footer'>
        <a href='/'>
          <img src={IconPokemon} alt="IconPokemon" />
          <span>Home</span>
        </a>
        <a href='/favorit'>
          <img src={IconBookmark} alt="IconBookmark" />
          <span>Favoritos</span>
        </a>
      </div>
    </div>
  );
};

export default TheLayout;
