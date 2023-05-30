import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from 'react-infinite-scroll-component';
import Pikachu from '../../assets/icon/Rectangle 11.svg'

import Like from '../../assets/icon/Favorite.svg'
import Heart from '../../assets/icon/Heart.svg'
import Info from '../../assets/icon/Info.svg'
import { truncateText, getData, setBookMark } from '../service'

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorite = useSelector((state) => state.global.favorite);
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const descData = "Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsunLoren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsunLoren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsunLoren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsunLoren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsunLoren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun"

  useEffect(() => {
    getData({ setPokemonList, setIsLoading });
  }, []);


  return (
    <>
      <div className='title'>Destaque</div>
      <div className="main-card">
        <div className="main-content">
          <img src={Pikachu} alt="iconPikachu" />
          <div>
            <div className="main-title">Pikachu</div>
            <div className="main-desc">
              {truncateText(descData, 28)}
            </div>
          </div>
        </div>
        <div className='main-footer'>
          <img src={Like} alt="IconLike" />
          <div className='btn-detail'>
            Ver mais
          </div>
        </div>
      </div>

      <div className='title'>Pokemons</div>

      {isLoading ? <div>Loading...</div> :
        <>
          <InfiniteScroll
            dataLength={pokemonList.length}
            next={() => getData({ setPokemonList, setIsLoading })}
            hasMore
            loader={<h4>Loading...</h4>}
          >
            {pokemonList.map((pokemon, index) => {
              return (
                <div key={index} className='list-card'>
                  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={pokemon.name} />
                  <span>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</span>
                  <div className='list-info'>
                    {favorite?.length === 0 ? (
                      <img
                        src={Like}
                        alt='IconLike2'
                        onClick={() => setBookMark({ pokemon, index, dispatch, favorite })}
                      />
                    ) : favorite?.some((item) => item.number === index + 1) ? (
                      <img
                        src={Heart}
                        alt='IconLike2'
                        onClick={() => setBookMark({ pokemon, index, dispatch, favorite })}
                      />
                    ) : (
                      <img
                        src={Like}
                        alt='IconLike2'
                        onClick={() => setBookMark({ pokemon, index, dispatch, favorite })}
                      />
                    )}
                    <div
                      onClick={() => {
                        navigate(`/detail/${index + 1}`);
                        dispatch({ type: 'DATA_DETAIL', payload: index + 1 });
                      }}
                    >
                      <img src={Info} alt='iconInfo' />
                    </div>
                  </div>
                </div>
              )
            })}
          </InfiniteScroll>
        </>
      }
    </>
  );
};

export default Home;
