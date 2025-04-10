import React, { useState, ChangeEvent } from 'react';
import './MemoryModule.css';

function MemoryModule() {
  const initialInputs: string[][] = Array.from({ length: 4 }, () => ['', '']);
  const [inputValues, setInputValues] = useState<string[][]>(initialInputs);

  const handleInputChange = (rowIndex: number, colIndex: number) => (e: ChangeEvent<HTMLInputElement>) => {
    const newInputs = inputValues.map(row => [...row]); // clone each row to avoid mutation
    newInputs[rowIndex][colIndex] = e.target.value;
    setInputValues(newInputs);
  };

  const handleClear = () => {
    setInputValues(initialInputs);
  };

  return (
      <div>
        <h3>Memory</h3>
        {/* Center the original non-editable Memory table */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <table>
            <thead>
            <tr>
              <td colSpan={5}>
                Make sure to write down the label of each phase, and position of phase 1 and 2.
              </td>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th>DISPLAY</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
            </tr>
            <tr>
              <th>STAGE 1</th>
              <td>2nd POS</td>
              <td>2nd POS</td>
              <td>3rd POS</td>
              <td>4th POS</td>
            </tr>
            <tr>
              <th>STAGE 2</th>
              <td>"4"</td>
              <td><i>Stage 1 POS</i></td>
              <td>1st POS</td>
              <td><i>Stage 1 POS</i></td>
            </tr>
            <tr>
              <th>STAGE 3</th>
              <td><i>Stage 2 LABEL</i></td>
              <td><i>Stage 1 LABEL</i></td>
              <td>3rd POS</td>
              <td>"4"</td>
            </tr>
            <tr>
              <th>STAGE 4</th>
              <td><i>Stage 1 POS</i></td>
              <td>1st POS</td>
              <td><i>Stage 2 POS</i></td>
              <td><i>Stage 2 POS</i></td>
            </tr>
            <tr>
              <th>STAGE 5</th>
              <td><i>Stage 1 LABEL</i></td>
              <td><i>Stage 2 LABEL</i></td>
              <td><i>Stage 4 LABEL</i></td>
              <td><i>Stage 3 LABEL</i></td>
            </tr>
            </tbody>
          </table>
        </div>

        {/* Editable input table for user data */}
        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <table>
            <thead>
            <tr>
              <th>Position</th>
              <th>Value</th>
            </tr>
            </thead>
            <tbody>
            {inputValues.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cellValue, colIndex) => (
                      <td key={colIndex} style={{ textAlign: 'center' }}>
                        <input
                            type="text"
                            value={cellValue}
                            onChange={handleInputChange(rowIndex, colIndex)}
                            style={{ display: 'block', margin: '0 auto', textAlign: 'center' }}
                        />
                      </td>
                  ))}
                </tr>
            ))}
            </tbody>
          </table>
          <button style={{ marginTop: '10px' }} onClick={handleClear}>Clear</button>
        </div>
      </div>
  );
}

export default MemoryModule;