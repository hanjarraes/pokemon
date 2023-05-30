import React from 'react';
import Heart from '../../../assets/icon/Heart.svg'
import Like from '../../../assets/icon/Favorite.svg'
import { getDetail, truncateText } from '../../service'
import { useSelector, useDispatch } from "react-redux";

const Details = () => {
  const dispatch = useDispatch();
  const [pokemonDetail, setPokemonDetail] = React.useState([]);
  const detail = useSelector((state) => state.global.detail);
  const favorite = useSelector((state) => state.global.favorite);

  const descData = "Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsunLoren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsunLoren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsunLoren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsunLoren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsunLoren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun"

  React.useEffect(() => {
    getDetail({ setPokemonDetail, detail });
  }, [detail]);

  const ImgPokemon = pokemonDetail?.sprites?.front_default
  const NamePokemon = pokemonDetail?.species?.name

  const changeFavorit = () => {
    const existingIndex = favorite.findIndex((item) => item.number === detail);
    if (existingIndex !== -1) {
      const updatedFavorite = [...favorite];
      updatedFavorite.splice(existingIndex, 1);
      dispatch({ type: "FAVORITE", payload: updatedFavorite });
    } else {
      const newFavorite = [...favorite, { data: pokemonDetail, number: detail }];
      dispatch({ type: "FAVORITE", payload: newFavorite });
    }
  }

  return (
    <>
      <div className='container'>
        <div className='row d-md-flex d-none'>
          <div className='col-6'>
            <div>
              <div className='title'> <a href='/' className='d-block d-md-none'>{"<"}</a> {NamePokemon}</div>
              <hr />
              <div className="main-card">
                <div className="main-content">
                  <img src={ImgPokemon} alt="ImgPokemon" />
                  <div className="vertical-line" />
                  <div>
                    <div className="main-title">{NamePokemon}</div>
                    <div className="main-desc">
                      {truncateText(descData, 20)}
                    </div>
                  </div>
                </div>
                <div className='main-footer'>
                  {favorite?.some((item) => item.number === detail) ? (
                    <img
                      src={Heart}
                      alt='IconLike2'
                      onClick={() => changeFavorit()}
                    />
                  ) : (
                    <img
                      src={Like}
                      alt='IconLike2'
                      onClick={() => changeFavorit()}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div>
              <div className='title pt-1'>Habilidades</div>
              <hr />
              <div className='ability'>
                <div className='item-ability'>
                  <span>HP:</span>
                  <div class="progress-bar">
                    <div class="progress-bar-fill" style={{ width: "50%" }}></div>
                  </div>
                </div>
                <div className='item-ability'>
                  <span>Attack:</span>
                  <div class="progress-bar">
                    <div class="progress-bar-fill" style={{ width: "10%" }}></div>
                  </div>
                </div>
                <div className='item-ability'>
                  <span>Defense:</span>
                  <div class="progress-bar">
                    <div class="progress-bar-fill" style={{ width: "50%" }}></div>
                  </div>
                </div>
                <div className='item-ability'>
                  <span>Special Attack:</span>
                  <div class="progress-bar">
                    <div class="progress-bar-fill" style={{ width: "60%" }}></div>
                  </div>
                </div>
                <div className='item-ability'>
                  <span>hp:</span>
                  <div class="progress-bar">
                    <div class="progress-bar-fill" style={{ width: "90%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-6'></div>
        </div>
        <div className='d-md-none d-block'>
          <div className='title'> <a href='/' className='d-block d-md-none'>{"<"}</a> {NamePokemon}</div>
          <hr />
          <div className="main-card">
            <div className="main-content">
              <img src={ImgPokemon} alt="ImgPokemon" />
              <div className="vertical-line" />
              <div>
                <div className="main-title">{NamePokemon}</div>
                <div className="main-desc">
                  {truncateText(descData, 20)}
                </div>
              </div>
            </div>
            <div className='main-footer'>
              {favorite?.some((item) => item.number === detail) ? (
                <img
                  src={Heart}
                  alt='IconLike2'
                  onClick={() => changeFavorit()}
                />
              ) : (
                <img
                  src={Like}
                  alt='IconLike2'
                  onClick={() => changeFavorit()}
                />
              )}
            </div>
          </div>
        </div>
        <div className='d-md-none d-block'>
          <div className='title'>Habilidades</div>
          <hr />
          <div className='ability'>
            <div className='item-ability'>
              <span>HP:</span>
              <div class="progress-bar">
                <div class="progress-bar-fill" style={{ width: "50%" }}></div>
              </div>
            </div>
            <div className='item-ability'>
              <span>Attack:</span>
              <div class="progress-bar">
                <div class="progress-bar-fill" style={{ width: "10%" }}></div>
              </div>
            </div>
            <div className='item-ability'>
              <span>Defense:</span>
              <div class="progress-bar">
                <div class="progress-bar-fill" style={{ width: "50%" }}></div>
              </div>
            </div>
            <div className='item-ability'>
              <span>Special Attack:</span>
              <div class="progress-bar">
                <div class="progress-bar-fill" style={{ width: "60%" }}></div>
              </div>
            </div>
            <div className='item-ability'>
              <span>hp:</span>
              <div class="progress-bar">
                <div class="progress-bar-fill" style={{ width: "90%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
