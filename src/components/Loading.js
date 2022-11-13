import TANK_RIGHT from '../assets/images/tank-right.gif';
import TextByText from './common/TextByText';

function Loading() {
  const LOADING_TEXT = 'Loading...';
  const time = 300;

  return (
    <div id="loading">
      <p>
        <TextByText defaultText={LOADING_TEXT} time={time} />
      </p>
      <img src={TANK_RIGHT} alt="tank" />
    </div>
  );
}

export default Loading;
