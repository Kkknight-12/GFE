import { useState } from "react";
/*
 * The user enters the number of rows and columns in a form.
 * When the form is submitted, a table with the respective
 * number of rows and columns will be generated.
 *
 * The table contains rows x columns cells, each containing \a number
 * sequence from 1 to (rows x columns).
 *  */

// not able to understand
// not able to come up with logic

const GenerateTable = () => {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);

  Array.from(
    { length: rows },
    (
      _,
      i // 1st iteration: i = 0
    ) => console.log("i ", i)
  );
  return (
    <div>
      <div>
        <label>Rows</label>
        <input type="number" onChange={(e) => setRows(e.target.value)} />
      </div>
      <div>
        <label>Columns</label>
        <input type="number" onChange={(e) => setColumns(e.target.value)} />
      </div>

      <table>
        <tbody>
          {Array.from({ length: rows }, (_, row) => (
            <tr key={row}>
              {Array.from({ length: columns }, (_, column) => {
                // console.log("j * rows + i + 1 ", j * rows + i + 1);
                // console.log("j ", j);
                // console.log("rows ", rows);
                return <td key={column}>{column * rows + row + 1}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/*
*  {Array.from({ length: rows }, (_, i) => (
            <tr key={i}>
              {Array.from({ length: columns }, (_, j) => (
                <td key={j}>{i * columns + j + 1}</td>
              ))}
            </tr>
          ))}
*  */

export default GenerateTable;