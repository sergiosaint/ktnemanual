import './KeypadModule.css';
import Keypads from './img/keypad.png';
import copyright from './img/1-copyright.png';
import filledstar from './img/2-filledstar.png';
import hollowstar from './img/3-hollowstar.png';
import smileyface from './img/4-smileyface.png';
import doublek from './img/5-doublek.png';
import omega from './img/6-omega.png';
import squidknife from './img/7-squidknife.png';
import pumpkin from './img/8-pumpkin.png';
import hookn from './img/9-hookn.png';
import six from './img/11-six.png';
import squigglyn from './img/12-squigglyn.png';
import at from './img/13-at.png';
import ae from './img/14-ae.png';
import meltedthree from './img/15-meltedthree.png';
import euro from './img/16-euro.png';
import nwithhat from './img/18-nwithhat.png';
import dragon from './img/19-dragon.png';
import questionmark from './img/20-questionmark.png';
import paragraph from './img/21-paragraph.png';
import rightc from './img/22-rightc.png';
import leftc from './img/23-leftc.png';
import pitchfork from './img/24-pitchfork.png';
import cursive from './img/26-cursive.png';
import tracks from './img/27-tracks.png';
import balloon from './img/28-balloon.png';
import upsidedowny from './img/30-upsidedowny.png';
import bt from './img/31-bt.png';

function KeypadModule() {

  return (
    <div>
        <h3>Keypads</h3>
    <ul>
        <li>Only one column below has all four of the symbols from the keypad.</li>
        <li>Press the four buttons in the order their symbols appear from top to bottom within that column.</li>
    </ul>
    <br/><br/>
    <table className="keypad-table">
        <tbody>
            <tr>
                <td className="keypad-table-column"><img className="keypad-symbol-image" src={balloon} /></td>
                <td className="keypad-table-spacer"></td>
                <td className="keypad-table-column"><img className="keypad-symbol-image" src={euro} /></td>
                <td className="keypad-table-spacer"></td>
                <td className="keypad-table-column"><img className="keypad-symbol-image" src={copyright} /></td>
                <td className="keypad-table-spacer"></td>
                <td className="keypad-table-column"><img className="keypad-symbol-image" src={six} /></td>
                <td className="keypad-table-spacer"></td>
                <td className="keypad-table-column"><img className="keypad-symbol-image" src={pitchfork} /></td>
                <td className="keypad-table-spacer"></td>
                <td className="keypad-table-column"><img className="keypad-symbol-image" src={six} /></td>
            </tr>
            <tr>
                <td className="keypad-table-column"><img className="keypad-symbol-image" src={at} /></td>
                <td className="keypad-table-spacer"></td>
                <td className="keypad-table-column"><img className="keypad-symbol-image" src={balloon} /></td>
                <td className="keypad-table-spacer"></td>
                <td className="keypad-table-column"><img className="keypad-symbol-image" src={pumpkin} /></td>
                <td className="keypad-table-spacer"></td>
                <td className="keypad-table-column"><img className="keypad-symbol-image" src={paragraph} /></td>
                <td className="keypad-table-spacer"></td>
                <td className="keypad-table-column"><img className="keypad-symbol-image" src={smileyface} /></td>
                <td className="keypad-table-spacer"></td>
                <td className="keypad-table-column"><img className="keypad-symbol-image" src={euro} /></td>
            </tr>
            <tr>
                <td className="keypad-table-column"><img className="keypad-symbol-image" src={upsidedowny} /></td>
                <td className="keypad-table-spacer"></td>
                <td className="keypad-table-column"><img className="keypad-symbol-image" src={leftc} /></td>
                <td className="keypad-table-spacer"></td>
                <td className="keypad-table-column"><img className="keypad-symbol-image" src={cursive} /></td>
                <td className="keypad-table-spacer"></td>
                <td className="keypad-table-column"><img className="keypad-symbol-image" src={bt} /></td>
                <td className="keypad-table-spacer"></td>
                <td className="keypad-table-column"><img className="keypad-symbol-image" src={bt} /></td>
                <td className="keypad-table-spacer"></td>
                <td className="keypad-table-column"><img className="keypad-symbol-image" src={tracks} /></td>
            </tr>
            <tr>
                <td className="keypad-table-column"><img className="keypad-symbol-image" src={squigglyn} /></td>
                <td className="keypad-table-spacer"></td>
                <td className="keypad-table-column"><img className="keypad-symbol-image" src={cursive} /></td>
                <td className="keypad-table-spacer"></td>
                <td className="keypad-table-column"><img className="keypad-symbol-image" src={doublek} /></td>
                <td className="keypad-table-spacer"></td>
                <td className="keypad-table-column"><img className="keypad-symbol-image" src={squidknife} /></td>
                <td className="keypad-table-spacer"></td>
                <td className="keypad-table-column"><img className="keypad-symbol-image" src={rightc} /></td>
                <td className="keypad-table-spacer"></td>
                <td className="keypad-table-column"><img className="keypad-symbol-image" src={ae} /></td>
            </tr>
            <tr>
                <td className="keypad-table-column"><img className="keypad-symbol-image" src={squidknife} /></td>
                <td className="keypad-table-spacer"></td>
                <td className="keypad-table-column"><img className="keypad-symbol-image" src={hollowstar} /></td>
                <td className="keypad-table-spacer"></td>
                <td className="keypad-table-column"><img className="keypad-symbol-image" src={meltedthree} /></td>
                <td className="keypad-table-spacer"></td>
                <td className="keypad-table-column"><img className="keypad-symbol-image" src={doublek} /></td>
                <td className="keypad-table-spacer"></td>
                <td className="keypad-table-column"><img className="keypad-symbol-image" src={paragraph} /></td>
                <td className="keypad-table-spacer"></td>
                <td className="keypad-table-column"><img className="keypad-symbol-image" src={pitchfork} /></td>
            </tr>
            <tr>
                <td className="keypad-table-column"><img className="keypad-symbol-image" src={hookn} /></td>
                <td className="keypad-table-spacer"></td>
                <td className="keypad-table-column"><img className="keypad-symbol-image" src={hookn} /></td>
                <td className="keypad-table-spacer"></td>
                <td className="keypad-table-column"><img className="keypad-symbol-image" src={upsidedowny} /></td>
                <td className="keypad-table-spacer"></td>
                <td className="keypad-table-column"><img className="keypad-symbol-image" src={questionmark} /></td>
                <td className="keypad-table-spacer"></td>
                <td className="keypad-table-column"><img className="keypad-symbol-image" src={dragon} /></td>
                <td className="keypad-table-spacer"></td>
                <td className="keypad-table-column"><img className="keypad-symbol-image" src={nwithhat} /></td>
            </tr>
            <tr>
                <td className="keypad-table-column"><img className="keypad-symbol-image" src={leftc} /></td>
                <td className="keypad-table-spacer"></td>
                <td className="keypad-table-column"><img className="keypad-symbol-image" src={questionmark} /></td>
                <td className="keypad-table-spacer"></td>
                <td className="keypad-table-column"><img className="keypad-symbol-image" src={hollowstar} /></td>
                <td className="keypad-table-spacer"></td>
                <td className="keypad-table-column"><img className="keypad-symbol-image" src={smileyface} /></td>
                <td className="keypad-table-spacer"></td>
                <td className="keypad-table-column"><img className="keypad-symbol-image" src={filledstar} /></td>
                <td className="keypad-table-spacer"></td>
                <td className="keypad-table-column"><img className="keypad-symbol-image" src={omega} /></td>
            </tr>
        </tbody>
    </table>
</div>
  );
}

export default KeypadModule;
