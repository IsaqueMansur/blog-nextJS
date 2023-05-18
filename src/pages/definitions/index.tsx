import { Container, MusicView } from './style';

export default function Definitions() {
  return (
    <Container>
      <h2>Nossa sinfonia</h2>
      <MusicView>
        <img
          src="https://i.ibb.co/Yt9jz61/pngtree-music-note-staves-png-image-5998981.png"
          alt="music"
        />
      </MusicView>
      <h4 style={{ marginBottom: '30px' }}>Clique e ouça</h4>
      <a
        href="https://www.youtube.com/watch?v=nGGxZe3I2DE&ab_channel=ManevaVEVO"
        target="_blank"
        rel="noreferrer"
      >
        Música que eu usaria pra me expressar
      </a>
      <a
        href="https://www.youtube.com/watch?v=OMOGaugKpzs&ab_channel=ThePoliceVEVO"
        target="_blank"
        rel="noreferrer"
      >
        Música que provavelmente vou continuar ouvindo e vai doer se você partir
      </a>
      <a
        href="https://www.youtube.com/watch?v=OKTRc7x-zCM&ab_channel=rnt123"
        target="_blank"
        rel="noreferrer"
      >
        Música que ouço pra pensar em você e você não sabe
      </a>
      <a
        href="https://www.youtube.com/watch?v=M4ZoCHID9GI&ab_channel=TheWeekndVEVO"
        target="_blank"
        rel="noreferrer"
      >
        Música que não posso falar nada sobre
      </a>
      <a
        href="https://www.youtube.com/watch?v=Qj-qS4aV0UY&ab_channel=Thiaguinho"
        target="_blank"
        rel="noreferrer"
      >
        Música que encaixa muito na situação e tu ama
      </a>
    </Container>
  );
}
