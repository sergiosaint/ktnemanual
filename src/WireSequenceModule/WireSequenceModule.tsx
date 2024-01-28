import './WireSequenceModule.css';

function WireSequenceModule() {
    return (
        <div>
            <h3>Wire Sequences</h3>
            <table>
                <tbody>
                    <tr>
                        <td colSpan={6}>Whether or not to cut a wire depends on the <i>cumulative</i> number of occurrences of               <b>each                 color</b> in <i>that module</i></td>
                    </tr>
                    <tr className="head">
                        <th colSpan={2}>RED</th>
                        <th colSpan={2}>BLUE</th>
                        <th colSpan={2}>BLACK</th>
                    </tr>
                    <tr>
                        <th className="red">1</th>
                        <td className="red">C</td>
                        <th className="blue">1</th>
                        <td className="blue">B</td>
                        <th>1</th>
                        <td>any</td>
                    </tr>
                    <tr>
                        <th className="red">2</th>
                        <td className="red">B</td>
                        <th className="blue">2</th>
                        <td className="blue">AC</td>
                        <th>2</th>
                        <td>AC</td>
                    </tr>
                    <tr>
                        <th className="red">3</th>
                        <td className="red">A</td>
                        <th className="blue">3</th>
                        <td className="blue">B</td>
                        <th>3</th>
                        <td>B</td>
                    </tr>
                    <tr>
                        <th className="red">4</th>
                        <td className="red">AC</td>
                        <th className="blue">4</th>
                        <td className="blue">A</td>
                        <th>4</th>
                        <td>AC</td>
                    </tr>
                    <tr>
                        <th className="red">5</th>
                        <td className="red">B</td>
                        <th className="blue">5</th>
                        <td className="blue">B</td>
                        <th>5</th>
                        <td>B</td>
                    </tr>
                    <tr>
                        <th className="red">6</th>
                        <td className="red">AC</td>
                        <th className="blue">6</th>
                        <td className="blue">BC</td>
                        <th>6</th>
                        <td>BC</td>
                    </tr>
                    <tr>
                        <th className="red">7</th>
                        <td className="red">any</td>
                        <th className="blue">7</th>
                        <td className="blue">C</td>
                        <th>7</th>
                        <td>AB</td>
                    </tr>
                    <tr>
                        <th className="red">8</th>
                        <td className="red">AB</td>
                        <th className="blue">8</th>
                        <td className="blue">AC</td>
                        <th>8</th>
                        <td>C</td>
                    </tr>
                    <tr>
                        <th className="red">9</th>
                        <td className="red">B</td>
                        <th className="blue">9</th>
                        <td className="blue">A</td>
                        <th>9</th>
                        <td>C</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default WireSequenceModule;
