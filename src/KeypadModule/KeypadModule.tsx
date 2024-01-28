import './KeypadModule.css';
import Keypads from './img/keypad.png';

function KeypadModule() {

  return (
      <div>
          <h3>Keypads</h3>
              1) Find column with all 4 symbols on keypad<br/>
              2) Push from top to bottom of column<br/>
                  Highlighted symbols are unique <img src={Keypads} width="100%" alt="glyphs" />
      </div>
  );
}

export default KeypadModule;
