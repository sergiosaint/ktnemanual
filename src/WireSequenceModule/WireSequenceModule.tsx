import { useState } from 'react';
import './WireSequenceModule.css';

function WireSequenceModule() {

    const [viewedRedWires, setViewedRedWires] = useState([false, false, false, false, false, false, false, false, false]);
    const [viewedBlueWires, setViewedBlueWires] = useState([false, false, false, false, false, false, false, false, false]);
    const [viewedBlackWires, setViewedBlackWires] = useState([false, false, false, false, false, false, false, false, false]);

    function toggleViewed(colorIndex: number, rowIndex: number): void {
        switch (colorIndex) {
            case 0:
                viewedRedWires[rowIndex] = !viewedRedWires[rowIndex];
                setViewedRedWires([...viewedRedWires]);
                break;
            case 1:
                viewedBlueWires[rowIndex] = !viewedBlueWires[rowIndex];
                setViewedBlueWires([...viewedBlueWires]);
                break;
            case 2:
                viewedBlackWires[rowIndex] = !viewedBlackWires[rowIndex];
                setViewedBlackWires([...viewedBlackWires]);
                break;
            default:
                return;
        }
    }

    function reset() {
        setViewedRedWires([false, false, false, false, false, false, false, false, false]);
        setViewedBlueWires([false, false, false, false, false, false, false, false, false]);
        setViewedBlackWires([false, false, false, false, false, false, false, false, false]);
    }

    function isViewed(colorIndex: number, rowIndex: number): boolean {
        switch (colorIndex) {
            case 0:
                return viewedRedWires[rowIndex];
            case 1:
                return viewedBlueWires[rowIndex];
            case 2:
                return viewedBlackWires[rowIndex];
            default:
                return false;
        }
    }


    return (
        <div className="wireSequenceModule">
            <h3>Wire Sequences</h3>
            <p>Whether or not to cut a wire depends on the <i>cumulative</i> number of occurrences of <b>each color</b> in <i>that module</i></p>
            <table className="table">
                <tbody>
                    <tr>
                        <th colSpan={2}>RED</th>
                        <th colSpan={2}>BLUE</th>
                        <th colSpan={2}>BLACK</th>
                    </tr>
                    <tr>
                        <th className={isViewed(0, 0) ? "viewed" : ""} onClick={() => toggleViewed(0, 0)} >1</th>
                        <td className={isViewed(0, 0) ? "viewed" : ""} onClick={() => toggleViewed(0, 0)} >C</td>
                        <th className={isViewed(1, 0) ? "viewed" : ""} onClick={() => toggleViewed(1, 0)} >1</th>
                        <td className={isViewed(1, 0) ? "viewed" : ""} onClick={() => toggleViewed(1, 0)} >B</td>
                        <th className={isViewed(2, 0) ? "viewed" : ""} onClick={() => toggleViewed(2, 0)} >1</th>
                        <td className={isViewed(2, 0) ? "viewed" : ""} onClick={() => toggleViewed(2, 0)} >any</td>
                    </tr>
                    <tr>
                        <th className={isViewed(0, 1) ? "viewed" : ""} onClick={() => toggleViewed(0, 1)} >2</th>
                        <td className={isViewed(0, 1) ? "viewed" : ""} onClick={() => toggleViewed(0, 1)} >B</td>
                        <th className={isViewed(1, 1) ? "viewed" : ""} onClick={() => toggleViewed(1, 1)} >2</th>
                        <td className={isViewed(1, 1) ? "viewed" : ""} onClick={() => toggleViewed(1, 1)} >AC</td>
                        <th className={isViewed(2, 1) ? "viewed" : ""} onClick={() => toggleViewed(2, 1)} >2</th>
                        <td className={isViewed(2, 1) ? "viewed" : ""} onClick={() => toggleViewed(2, 1)} >AC</td>
                    </tr>
                    <tr>
                        <th className={isViewed(0, 2) ? "viewed" : ""} onClick={() => toggleViewed(0, 2)} >3</th>
                        <td className={isViewed(0, 2) ? "viewed" : ""} onClick={() => toggleViewed(0, 2)} >A</td>
                        <th className={isViewed(1, 2) ? "viewed" : ""} onClick={() => toggleViewed(1, 2)} >3</th>
                        <td className={isViewed(1, 2) ? "viewed" : ""} onClick={() => toggleViewed(1, 2)} >B</td>
                        <th className={isViewed(2, 2) ? "viewed" : ""} onClick={() => toggleViewed(2, 2)} >3</th>
                        <td className={isViewed(2, 2) ? "viewed" : ""} onClick={() => toggleViewed(2, 2)} >B</td>
                    </tr>
                    <tr>
                        <th className={isViewed(0, 3) ? "viewed" : ""} onClick={() => toggleViewed(0, 3)} >4</th>
                        <td className={isViewed(0, 3) ? "viewed" : ""} onClick={() => toggleViewed(0, 3)} >AC</td>
                        <th className={isViewed(1, 3) ? "viewed" : ""} onClick={() => toggleViewed(1, 3)} >4</th>
                        <td className={isViewed(1, 3) ? "viewed" : ""} onClick={() => toggleViewed(1, 3)} >A</td>
                        <th className={isViewed(2, 3) ? "viewed" : ""} onClick={() => toggleViewed(2, 3)} >4</th>
                        <td className={isViewed(2, 3) ? "viewed" : ""} onClick={() => toggleViewed(2, 3)} >AC</td>
                    </tr>
                    <tr>
                        <th className={isViewed(0, 4) ? "viewed" : ""} onClick={() => toggleViewed(0, 4)} >5</th>
                        <td className={isViewed(0, 4) ? "viewed" : ""} onClick={() => toggleViewed(0, 4)} >B</td>
                        <th className={isViewed(1, 4) ? "viewed" : ""} onClick={() => toggleViewed(1, 4)} >5</th>
                        <td className={isViewed(1, 4) ? "viewed" : ""} onClick={() => toggleViewed(1, 4)} >B</td>
                        <th className={isViewed(2, 4) ? "viewed" : ""} onClick={() => toggleViewed(2, 4)} >5</th>
                        <td className={isViewed(2, 4) ? "viewed" : ""} onClick={() => toggleViewed(2, 4)} >B</td>
                    </tr>
                    <tr>
                        <th className={isViewed(0, 5) ? "viewed" : ""} onClick={() => toggleViewed(0, 5)} >6</th>
                        <td className={isViewed(0, 5) ? "viewed" : ""} onClick={() => toggleViewed(0, 5)} >AC</td>
                        <th className={isViewed(1, 5) ? "viewed" : ""} onClick={() => toggleViewed(1, 5)} >6</th>
                        <td className={isViewed(1, 5) ? "viewed" : ""} onClick={() => toggleViewed(1, 5)} >BC</td>
                        <th className={isViewed(2, 5) ? "viewed" : ""} onClick={() => toggleViewed(2, 5)} >6</th>
                        <td className={isViewed(2, 5) ? "viewed" : ""} onClick={() => toggleViewed(2, 5)} >BC</td>
                    </tr>
                    <tr>
                        <th className={isViewed(0, 6) ? "viewed" : ""} onClick={() => toggleViewed(0, 6)} >7</th>
                        <td className={isViewed(0, 6) ? "viewed" : ""} onClick={() => toggleViewed(0, 6)} >any</td>
                        <th className={isViewed(1, 6) ? "viewed" : ""} onClick={() => toggleViewed(1, 6)} >7</th>
                        <td className={isViewed(1, 6) ? "viewed" : ""} onClick={() => toggleViewed(1, 6)} >C</td>
                        <th className={isViewed(2, 6) ? "viewed" : ""} onClick={() => toggleViewed(2, 6)} >7</th>
                        <td className={isViewed(2, 6) ? "viewed" : ""} onClick={() => toggleViewed(2, 6)} >AB</td>
                    </tr>
                    <tr>
                        <th className={isViewed(0, 7) ? "viewed" : ""} onClick={() => toggleViewed(0, 7)} >8</th>
                        <td className={isViewed(0, 7) ? "viewed" : ""} onClick={() => toggleViewed(0, 7)} >AB</td>
                        <th className={isViewed(1, 7) ? "viewed" : ""} onClick={() => toggleViewed(1, 7)} >8</th>
                        <td className={isViewed(1, 7) ? "viewed" : ""} onClick={() => toggleViewed(1, 7)} >AC</td>
                        <th className={isViewed(2, 7) ? "viewed" : ""} onClick={() => toggleViewed(2, 7)} >8</th>
                        <td className={isViewed(2, 7) ? "viewed" : ""} onClick={() => toggleViewed(2, 7)} >C</td>
                    </tr>
                    <tr>
                        <th className={isViewed(0, 8) ? "viewed" : ""} onClick={() => toggleViewed(0, 8)} >9</th>
                        <td className={isViewed(0, 8) ? "viewed" : ""} onClick={() => toggleViewed(0, 8)} >B</td>
                        <th className={isViewed(1, 8) ? "viewed" : ""} onClick={() => toggleViewed(1, 8)} >9</th>
                        <td className={isViewed(1, 8) ? "viewed" : ""} onClick={() => toggleViewed(1, 8)} >A</td>
                        <th className={isViewed(2, 8) ? "viewed" : ""} onClick={() => toggleViewed(2, 8)} >9</th>
                        <td className={isViewed(2, 8) ? "viewed" : ""} onClick={() => toggleViewed(2, 8)} >C</td>
                    </tr>
                </tbody>
            </table>

            <h3 onClick={() => reset()} className="reset">RESET</h3>
        </div> 
    );
}

export default WireSequenceModule;
