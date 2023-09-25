


import { PieChart, Pie, ResponsiveContainer, Cell, Label } from 'recharts';

import { getToLs } from '../../utility/localStorage';

const Statistics = () => {
  const savedCards = getToLs()

  const selectedCards = savedCards.length;


  const percentage = ((selectedCards / 12) * 100).toFixed(2); 

  return (
    <div>
        hy
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={[{value: selectedCards }, { value: 12 - selectedCards }]}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            labelLine={false} // Remove the label line
          >
            <Cell key="cell-0" fill="#0088FE" />
            <Cell key="cell-1" fill="#FFBB28" />
            {/* Display the percentage as a label */}
            <Label
              value={`${percentage}%`}
              position="center"
              fill="white"
              fontSize={24}
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;