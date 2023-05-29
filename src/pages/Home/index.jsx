
import Pikachu from '../../assets/icon/Rectangle 11.svg'
import Pikachu2 from '../../assets/icon/Rectangle 14.svg'
import Like from '../../assets/icon/Favorite.svg'
import Heart from '../../assets/icon/Heart.svg'
import Info from '../../assets/icon/Info.svg'
import { truncateText } from '../service'

const Home = () => {
  const descData = "Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsunLoren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsunLoren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsunLoren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsunLoren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsunLoren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun"

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
          <a href='/'>
            Ver mais
          </a>
        </div>
      </div>

      <div className='title'>Pokemons</div>
      <div className='list-pokemon'>
        <div className='list-card'>
          <img src={Pikachu2} alt="iconPikachu2" />
          <span>Pokemon</span>
          <div className='list-info'>
            <img src={Heart} alt="IconLike2" />
            <a href='/detail/1'> <img src={Info} alt="iconInfo" /></a>
          </div>
        </div>
        <div className='list-card'>
          <img src={Pikachu2} alt="iconPikachu2" />
          <span>Pokemon</span>
          <div className='list-info'>
            <img src={Heart} alt="IconLike2" />
            <a href='/detail/1'> <img src={Info} alt="iconInfo" /></a>
          </div>
        </div>
        <div className='list-card'>
          <img src={Pikachu2} alt="iconPikachu2" />
          <span>Pokemon</span>
          <div className='list-info'>
            <img src={Heart} alt="IconLike2" />
            <a href='/detail/1'> <img src={Info} alt="iconInfo" /></a>
          </div>
        </div>
        <div className='list-card'>
          <img src={Pikachu2} alt="iconPikachu2" />
          <span>Pokemon</span>
          <div className='list-info'>
            <img src={Heart} alt="IconLike2" />
            <a href='/detail/1'> <img src={Info} alt="iconInfo" /></a>
          </div>
        </div>
        <div className='list-card'>
          <img src={Pikachu2} alt="iconPikachu2" />
          <span>Pokemon</span>
          <div className='list-info'>
            <img src={Heart} alt="IconLike2" />
            <a href='/detail/1'> <img src={Info} alt="iconInfo" /></a>
          </div>
        </div>
        <div className='list-card'>
          <img src={Pikachu2} alt="iconPikachu2" />
          <span>Pokemon</span>
          <div className='list-info'>
            <img src={Heart} alt="IconLike2" />
            <a href='/detail/1'> <img src={Info} alt="iconInfo" /></a>
          </div>
        </div>
        <div className='list-card'>
          <img src={Pikachu2} alt="iconPikachu2" />
          <span>Pokemon</span>
          <div className='list-info'>
            <img src={Heart} alt="IconLike2" />
            <a href='/detail/1'> <img src={Info} alt="iconInfo" /></a>
          </div>
        </div>
        <div className='list-card'>
          <img src={Pikachu2} alt="iconPikachu2" />
          <span>Pokemon</span>
          <div className='list-info'>
            <img src={Heart} alt="IconLike2" />
            <a href='/detail/1'> <img src={Info} alt="iconInfo" /></a>
          </div>
        </div>
        <div className='list-card'>
          <img src={Pikachu2} alt="iconPikachu2" />
          <span>Pokemon</span>
          <div className='list-info'>
            <img src={Heart} alt="IconLike2" />
            <a href='/detail/1'> <img src={Info} alt="iconInfo" /></a>
          </div>
        </div>
        <div className='list-card'>
          <img src={Pikachu2} alt="iconPikachu2" />
          <span>Pokemon</span>
          <div className='list-info'>
            <img src={Heart} alt="IconLike2" />
            <a href='/detail/1'> <img src={Info} alt="iconInfo" /></a>
          </div>
        </div>
        <div className='list-card'>
          <img src={Pikachu2} alt="iconPikachu2" />
          <span>Pokemon</span>
          <div className='list-info'>
            <img src={Heart} alt="IconLike2" />
            <a href='/detail/1'> <img src={Info} alt="iconInfo" /></a>
          </div>
        </div>
        <div className='list-card'>
          <img src={Pikachu2} alt="iconPikachu2" />
          <span>Pokemon</span>
          <div className='list-info'>
            <img src={Heart} alt="IconLike2" />
            <a href='/detail/1'> <img src={Info} alt="iconInfo" /></a>
          </div>
        </div>
        <div className='list-card'>
          <img src={Pikachu2} alt="iconPikachu2" />
          <span>Pokemon</span>
          <div className='list-info'>
            <img src={Heart} alt="IconLike2" />
            <a href='/detail/1'> <img src={Info} alt="iconInfo" /></a>
          </div>
        </div>
        <div className='list-card'>
          <img src={Pikachu2} alt="iconPikachu2" />
          <span>Pokemon</span>
          <div className='list-info'>
            <img src={Heart} alt="IconLike2" />
            <a href='/detail/1'> <img src={Info} alt="iconInfo" /></a>
          </div>
        </div>
        <div className='list-card'>
          <img src={Pikachu2} alt="iconPikachu2" />
          <span>Pokemon</span>
          <div className='list-info'>
            <img src={Heart} alt="IconLike2" />
            <a href='/detail/1'> <img src={Info} alt="iconInfo" /></a>
          </div>
        </div>
        <div className='list-card'>
          <img src={Pikachu2} alt="iconPikachu2" />
          <span>Pokemon</span>
          <div className='list-info'>
            <img src={Heart} alt="IconLike2" />
            <a href='/detail/1'> <img src={Info} alt="iconInfo" /></a>
          </div>
        </div>
        <div className='list-card'>
          <img src={Pikachu2} alt="iconPikachu2" />
          <span>Pokemon</span>
          <div className='list-info'>
            <img src={Heart} alt="IconLike2" />
            <a href='/detail/1'> <img src={Info} alt="iconInfo" /></a>
          </div>
        </div>
        <div className='list-card'>
          <img src={Pikachu2} alt="iconPikachu2" />
          <span>Pokemon</span>
          <div className='list-info'>
            <img src={Heart} alt="IconLike2" />
            <a href='/detail/1'> <img src={Info} alt="iconInfo" /></a>
          </div>
        </div>
        <div className='list-card'>
          <img src={Pikachu2} alt="iconPikachu2" />
          <span>Pokemon</span>
          <div className='list-info'>
            <img src={Heart} alt="IconLike2" />
            <a href='/detail/1'> <img src={Info} alt="iconInfo" /></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
