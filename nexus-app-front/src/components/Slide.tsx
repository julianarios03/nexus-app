import '../assets/styles/Slide.css'

const Slide = () => {
  return (
    <div id="slide">
       <div className="item" style={{backgroundImage: 'url(./assets/img/jujursu.jpg)'}}>
        <div className="content">
          <div className="name">JUJUTSU <br /> KAISEN</div>
          <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
          <button className="watch"><i className="fa-solid fa-play" style={{ color: '#ffffff' }}></i>Watch Now</button>
          <button className="trailer"><i className="fa-solid fa-play" style={{ color: '#ffffff' }}></i>Trailer</button>
        </div>
      </div>
      <div className="item" style={{backgroundImage: 'url(./assets/img/demon.jpg)'}}>
        <div className="content">
          <div className="name">DEMON <br /> SLAYER</div>
          <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
          <button className="watch"><i className="fa-solid fa-play" style={{ color: '#ffffff' }}></i>WATCH NOW</button>
        </div>
      </div>
      <div className="item" style={{ backgroundImage: 'url(./assets/img/myHeroWallpaper.png)'}}>
        <div className="content">
          <div className="name">MY HERO <br /> ACADEMIA</div>
          <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
          <button className="watch"><i className="fa-solid fa-play" style={{ color: '#ffffff' }}></i>WATCH NOW</button>
        </div>
      </div>
      <div className="item" style={{backgroundImage: 'url(./assets/img/titansWallpaper.jpg)'}}>
        <div className="content">
          <div className="name">ATTACK OF <br /> TITAN</div>
          <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
          <button className="watch"><i className="fa-solid fa-play" style={{ color: '#ffffff' }}></i>WATCH NOW</button>
        </div>
      </div>
      <div className="item" style={{backgroundImage: 'url(./assets/img/onePiece.jpg)'}}>
        <div className="content">
          <div className="name">ONE <br /> PIECE</div>
          <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
          <button className="watch"><i className="fa-solid fa-play" style={{ color: '#ffffff' }}></i>WATCH NOW</button>
        </div>
      </div>
    </div>
  )
}

export default Slide