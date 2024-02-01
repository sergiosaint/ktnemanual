import './WiresModule.css';

function WiresModule() {
    return (
        <div>
            <h3>Simple Wires</h3>
            <table className="table">
                <tbody>
                    <tr>
                        <th colSpan={2}>Cut <b>one</b> wire. Wires are numbered from top to bottom</th>
                    </tr>
                    <tr>
                        <td>
                            <h4>3 WIRES</h4>
                            <ul>
                                <li>0 <span className="red">red</span>: <b>2nd</b></li>
                                <li>&gt;1 <span className="blue">blue</span>: <b>2nd blue</b></li>
                                <li>otherwise <b>last</b></li>
                            </ul>
                        </td>
                        <td>
                            <h4>5 WIRES</h4>
                            <ul>
                                <li>last=black &amp; serial=odd: <b>4th</b></li>
                                <li>1 <span className="red">red</span> &amp; &gt;1 <span className="yellow">yellow</span>: <b>1st</b></li>
                                <li>0 black: <b>2nd</b></li>
                                <li>otherwise <b>1st</b></li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h4>4 WIRES</h4>
                            <ul>
                                <li>&gt;1 <span className="red">red </span>&amp; serial=odd: <b className="red">last red</b></li>
                                <li>0 <span className="red">red</span> &amp; last=<span className="yellow">yellow</span> <b>1st</b></li>
                                <li>1 <span className="blue">blue</span>: <b>1st</b></li>
                                <li>&gt;2 <span className="yellow">yellow</span>: <b>last</b></li>
                                <li>otherwise <b>2nd</b></li>
                            </ul>
                        </td>
                        <td>
                            <h4>6 WIRES</h4>
                            <ul>
                                <li>0 <span className="yellow">yellow</span> &amp; serial=odd <b>3rd</b></li>
                                <li>1 <span className="yellow">yellow</span> &amp;: &gt;1 white: <b>4th</b></li>
                                <li>0 <span className="red">red</span>: <b>last</b></li>
                                <li>otherwise <b>4th</b></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default WiresModule;
