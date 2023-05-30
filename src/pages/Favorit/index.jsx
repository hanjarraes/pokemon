import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Heart from '../../assets/icon/Heart.svg'
import { truncateText, removeData } from '../service'


const Favorite = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const descData = "Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsunLoren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsunLoren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsunLoren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsunLoren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsunLoren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun"
  const favorite = useSelector((state) => state.global.favorite);

  return (
    <>
      <div className='content'>
        <div className='title'>Favoritos</div>
        {favorite.map(data => {
          const NamePokemon = data.data.name
          return (
            <div className="main-card">
              <div className="main-content">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.number}.png`} alt="iconPikachu" />
                <div className="vertical-line" />
                <div>
                  <div className="main-title">{NamePokemon}</div>
                  <div className="main-desc">
                    {truncateText(descData, 20)}
                  </div>
                </div>
              </div>
              <div className='main-footer'>
                <img src={Heart} alt="IconLike" onClick={() => removeData({ number: data.number, dispatch, favorite })} />
                <div className="btn-detail" onClick={() => {
                  navigate(`/detail/${data.number}`);
                  dispatch({ type: 'DATA_DETAIL', payload: data.number });
                }}>
                  Ver mais
                </div>
              </div>
            </div>
          )
        })}

        <div className='total-fav'>Você tem {favorite ? favorite.length : 0} pokemon favorito</div>
      </div>
    </>
  );
};

export default Favorite;