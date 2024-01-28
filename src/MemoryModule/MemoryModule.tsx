import './MemoryModule.css';

function MemoryModule() {
  return (
      <div>
          <h3>Memory</h3>
          <table>
              <thead>
                  <tr>
                      <td colSpan={5}>Make sure to write down the label of each phase, and position of phase 1 and 2.</td>
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
  );
}

export default MemoryModule;
