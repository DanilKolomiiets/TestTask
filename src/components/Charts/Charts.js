import React from 'react'
import {
    BarChart, Bar, XAxis, YAxis, Tooltip,
  } from 'recharts';

function Charts(tempData) {

  	return (
        <BarChart width={600} height={300} data={tempData.tempData} fill="#FFF">
            <XAxis dataKey="dt_txt" fill="#FFF"/>
            <YAxis />
            <Tooltip/>
            <Bar dataKey="main.temp" fill="#FFF" />
      </BarChart>
    );


}

export default Charts;
