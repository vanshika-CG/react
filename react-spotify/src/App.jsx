import './App.css'

function App() {

  return (
    <>
      <div className='page1'>
        <div className='sidebar'>
          <div className='logo'><img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Spotify%20logo.png?raw=true' alt='logo' className='logo1'></img></div>
          <div className='home'>
            <img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Home.png?raw=true' alt='home' className='home1'></img>
            <div className='text'>Home</div>
          </div>

          <div className='home'>
            <img src='https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/Search.png' alt='search' className='home1'></img>
            <div className='text'>Search</div>
          </div>

          <div className='home'>
            <img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Your%20library.png?raw=true' alt='search' className='home1'></img>
            <div className='text'>Your Library</div>
          </div>

          <div className='section'>
            <img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Create.png?raw=true' alt='search' className='home1'></img>
            <div className='text'>Create Playlist</div>
          </div>
          <div className='home'>
            <img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/your%20episodes.png?raw=true' alt='search' className='home1'></img>
            <div className='text'>Your Episodes</div>
          </div>
          <div className='fav'>
            <p className='font'>FAV</p>
            <p className='font'>Daily Mix1</p>
            <p className='font'>Discover Weekly</p>
            <p className='font'>Malayalam</p>
            <p className='font'>Dance/Electronic Mix</p>
            <p className='font'>EDM/Popular</p>
          </div>

          <div className='inst'>
            <img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/grommet-icons_install-option.png?raw=true' alt='search' className='home1'></img>
            <div className='text'>Install App</div>
          </div>
        </div>
        <div className='main'>
          <div className='header'>
            <div><img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/top%20arrow%20navigation.png?raw=true' alt='img' className='icon'></img></div>
            <div><img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/User.png?raw=true' className='user'></img></div>
          </div>
          <h2 className='good'>Good morning</h2>
          <div className='boxes1'>
            <div className='box'>
              <div><img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Liked.png?raw=true' className='like'></img></div>
              <div className='txt'>Liked songs</div>
            </div>
            <div className='box'><div><img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image4.png?raw=true' className='like'></img></div>
              <div className='txt'>Neffex Playlist</div>
            </div>
            <div className='box'><div><img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image3.png?raw=true' className='like'></img></div>
              <div className='txt'>K/DA</div>
            </div>
            <div className='box'><div><img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image1.png?raw=true' className='like'></img></div>
              <div className='txt'>Liked songs</div>
            </div>

          </div>
          <div className='box1'><img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image2.png?raw=true' className='like'></img>
            <div className='txt'>Dance/Electronic Mix</div>
          </div>
          <h2 className='show'>Shows You might like</h2>
          <div className='boxes'>
            <div className='box2'><img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image9.png?raw=true' className='pic'></img><p className='xyz'>Weekly motivation</p></div>
            <div className='box2'><img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image8.png?raw=true' className='pic'></img><p className='xyz'>Self meditation </p></div>
            <div className='box2'><img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image7.png?raw=true' className='pic'></img><p className='xyz'>Word beyond act..</p></div>
            <div className='box2'><img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image6.png?raw=true' className='pic'></img><p className='xyz'>The Alexa Show</p></div>
            <div className='box2'><img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image5.png?raw=true' className='pic'></img><p className='xyz'>The stories of Ma..</p></div>
            <div className='box2'><img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image10.png?raw=true' className='pic'></img><p className='xyz'>Motivation Daily ba..</p></div>

          </div>
        </div>
      </div>
      <div className='footer'>
        <div><img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image11.png?raw=true' className='last' /></div>
      </div>

    </>
  )
}

export default App
