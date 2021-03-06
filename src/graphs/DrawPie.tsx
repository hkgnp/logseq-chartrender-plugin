import React from 'react';
import { PieChart, Pie } from 'recharts';

const DrawPie = (props) => {
  const { chartObj, colour } = props;

  return (
    <PieChart width={500} height={450}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={chartObj}
        cx={220}
        cy={220}
        outerRadius={150}
        fill={colour}
        label
      />
    </PieChart>
  );
};

export default DrawPie;
