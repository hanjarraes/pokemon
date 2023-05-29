import Pikachu from '../../../assets/icon/Rectangle 11.svg'
import Like from '../../../assets/icon/Favorite.svg'
import { truncateText } from '../../service'


const Details = () => {
  const descData = "Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsunLoren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsunLoren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsunLoren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsunLoren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsunLoren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun Loren ipsun"

  return (
    <>
      <div className='content'>
        <div className='title'> <a href='/'>{"<"}</a> Pikachu</div>
        <hr />
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
          </div>
        </div>
        <div className='title'>Habilidades</div>
        <hr />
        <div className='ability'>
          <div className='item-ability'>
            <span>HP:</span>
            <div class="progress-bar">
              <div class="progress-bar-fill" style={{ width: 50 }}></div>
            </div>
          </div>
          <div className='item-ability'>
            <span>Attack:</span>
            <div class="progress-bar">
              <div class="progress-bar-fill" style={{ width: 50 }}></div>
            </div>
          </div>
          <div className='item-ability'>
            <span>Defense:</span>
            <div class="progress-bar">
              <div class="progress-bar-fill" style={{ width: 50 }}></div>
            </div>
          </div>
          <div className='item-ability'>
            <span>Special Attack:</span>
            <div class="progress-bar">
              <div class="progress-bar-fill" style={{ width: 50 }}></div>
            </div>
          </div>
          <div className='item-ability'>
            <span>hp:</span>
            <div class="progress-bar">
              <div class="progress-bar-fill" style={{ width: 50 }}></div>
            </div>
          </div>
          <div className='item-ability'>
            <span>hp:</span>
            <div class="progress-bar">
              <div class="progress-bar-fill" style={{ width: 50 }}></div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Details;