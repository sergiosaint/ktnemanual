import './MorseCodeModule.css';
import tableImg from './img/results.png';

function MorseCodeModule() {
    return (
        <div>
            <h3>Morse Code</h3>
            <div>The transcription of each word is provided, and sorted in dit-dah order, spaces ignored.<br />
              (e.g. IT .. - is sorted after V ...-, not before)</div>
            <table>
                <tbody>
                    <tr>
                        <td>... .... . .-.. .-..</td>
                        <td>shell</td>
                        <td>3.505 MHz</td>
                    </tr>
                    <tr>
                        <td>.... .- .-.. .-.. ...</td>
                        <td>halls</td>
                        <td>3.515 MHz</td>
                    </tr>
                    <tr>
                        <td>... .-.. .. -.-. -.-</td>
                        <td>slick</td>
                        <td>3.522 MHz</td>
                    </tr>
                    <tr>
                        <td>... - .. -. --.</td>
                        <td>sting</td>
                        <td>3.592 MHz</td>
                    </tr>
                    <tr>
                        <td>... - . .- -.-</td>
                        <td>steak</td>
                        <td>3.582 MHz</td>
                    </tr>
                    <tr>
                        <td>...- . -.-. - --- .-.</td>
                        <td>vector</td>
                        <td>3.595 MHz</td>
                    </tr>
                    <tr>
                        <td>... - .-. --- -... .</td>
                        <td>strobe</td>
                        <td>3.545 MHz</td>
                    </tr>
                    <tr>
                        <td>..-. .-.. .. -.-. -.-</td>
                        <td>flick</td>
                        <td>3.555 MHz</td>
                    </tr>
                    <tr>
                        <td>.-.. . .- -.- ...</td>
                        <td>leaks</td>
                        <td>3.542 MHz</td>
                    </tr>
                    <tr>
                        <td>-... .. ... - .-. ---</td>
                        <td>bistro</td>
                        <td>3.552 MHz</td>
                    </tr>
                    <tr>
                        <td>-... . .- - ...</td>
                        <td>beats</td>
                        <td>3.600 MHz</td>
                    </tr>
                    <tr>
                        <td>-... .-. .. -.-. -.-</td>
                        <td>brick</td>
                        <td>3.575 MHz</td>
                    </tr>
                    <tr>
                        <td>-... .-. . .- -.-</td>
                        <td>break</td>
                        <td>3.572 MHz</td>
                    </tr>
                    <tr>
                        <td>-... --- -- -... ...</td>
                        <td>bombs</td>
                        <td>3.565 MHz</td>
                    </tr>
                    <tr>
                        <td>- .-. .. -.-. -.-</td>
                        <td>trick</td>
                        <td>3.532 MHz</td>
                    </tr>
                    <tr>
                        <td>-... --- -..- . ...<br />
                        </td>
                        <td>boxes</td>
                        <td>3.535 MHz</td>
                    </tr>
                </tbody>
            </table>

            <img src={tableImg} width="100%" alt="" />
        </div>
    );
}

export default MorseCodeModule;
