
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import IconBookmark from '../assets/icon/Bookmark.svg'
import IconPokemon from '../assets/icon/Pokeball.svg'


const TheLayout = () => {
  const favorite = useSelector((state) => state.global.favorite);
  return (
    <div className='content'>
      <header>
        <nav class="navbar navbar-expand-lg navbar-custom d-none d-md-flex px-5">
          <a class="navbar-brand" href="/">
            <img src={IconPokemon} alt="IconPokemon" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
              </li>
              <li class="nav-item">
                {favorite && favorite.length > 0 ? <div className="total-fav">{favorite.length}</div> : ''}
                <a class="nav-link" href="/favorit">Favoritos</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
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
