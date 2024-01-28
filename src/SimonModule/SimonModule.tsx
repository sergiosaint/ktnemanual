import './SimonModule.css';
import simonImg from './img/simon.png';

function SimonModule() {
    return (
        <div>
            <h3>Simon Says</h3>
            <img src={simonImg} width="100%" alt="" />
        </div>
    );
}

export default SimonModule;
