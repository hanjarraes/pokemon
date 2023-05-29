import Pikachu from '../../assets/icon/Rectangle 11.svg'
import Like from '../../assets/icon/Favorite.svg'
import { truncateText } from '../service'


const Favorite = () => {
  const descData = "Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsunLoren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsunLoren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsunLoren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsunLoren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsunLoren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun"

  return (
    <>
      <div className='content'>
        <div className='title'>Favoritos</div>
        <div className="main-card">
          <div className="main-content">
            <img src={Pikachu} alt="iconPikachu" />
            <div className="vertical-line" />
            <div>
              <div className="main-title">Pikachu</div>
              <div className="main-desc">
                {truncateText(descData, 20)}
              </div>
            </div>
          </div>
          <div className='main-footer'>
            <img src={Like} alt="IconLike" />
            <a href='/'>
              Ver mais
            </a>
          </div>
        </div>
        <div className='total-fav'>Você tem 1 pokemon favorito</div>
      </div>
    </>
  );
};

export default Favorite;