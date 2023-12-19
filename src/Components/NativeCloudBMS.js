import React from 'react';
import { Table } from 'react-bootstrap';
import './NativeCloudBMS.css';
 
const data = [
  { name: 'KeyConversion_SC_SI_UC_SI', equipment: 'VAV', spaceTemp: '---', activeSetPoint: '---', variance: '---', heatCoolMode: '---' },
  { name: 'Symbio 400-500 - BB222100778', equipment: 'VAV', spaceTemp: '71.0 F', activeSetPoint: '71.0 F', variance: '0.0', heatCoolMode: 'Auto' },
  { name: 'Symbio 400-500 - BC2231300158', equipment: 'VAV', spaceTemp: '71.0 F', activeSetPoint: '71.0 F', variance: '0.0', heatCoolMode: 'Auto' },
  { name: 'VAV-05', equipment: 'VAV', spaceTemp: '71.0 F', activeSetPoint: '71.0 F', variance: '0.0', heatCoolMode: 'Auto' },
  { name: 'VAV-07', equipment: 'VAV', spaceTemp: '71.0 F', activeSetPoint: '71.0 F', variance: '0.0', heatCoolMode: 'Auto' },
];
 
function NativeCloudBMS() {
  return (
    <div>
      <h1>Equipment resources</h1>
      <Table  cellspacing="0" cellpadding="0" >
        <thead className="table-Style">
          <tr>
            <th className="th-Style">Name</th>
            <th className="th-Style">Equipment Type</th>
            <th className="th-Style">Space temperature Active</th>
            <th className="th-Style">Active SetPoint</th>
            <th className="th-Style">Variance</th>
            <th className="th-Style">Heat/Cool Mode</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'table-even' : 'table-Row'}>
<td className="table-dataStyle "> {item.name}</td>
<td className="td-Style">{item.equipment}</td>
              <td className="td-Style">{item.spaceTemp}</td>
              <td className="td-Style">{item.activeSetPoint}</td>
              <td className="td-Style">{item.variance}</td>
              <td className="td-Style">{item.heatCoolMode}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
 
export default NativeCloudBMS;