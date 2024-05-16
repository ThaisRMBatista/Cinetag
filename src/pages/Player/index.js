import Banner from 'components/Banner';
import styles from './Player.module.css'
import Titulo from 'components/Titulo';
import { useParams } from 'react-router-dom';
import videos from "json/db.json";
import NaoEncontrada from 'pages/NaoEncontrada';

function Player () {
    const params = useParams();
    const player = videos.find((video) => {
        return video.id === Number(params.id);
    })

    if(!player) {
      return <NaoEncontrada />
    }

    return (
      <>
        <Banner imagem="player" />
        <Titulo>
          <h1>Player</h1>
        </Titulo>
        <section className={styles.container}>
          <iframe
            width="100%"
            height="100%"
            src={player.link}
            title={player.titulo}
            frameBorder= '0'
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </section>
      </>
    );
}

export default Player;