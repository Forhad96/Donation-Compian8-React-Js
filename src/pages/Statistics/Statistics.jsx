


import { PieChart, Pie, ResponsiveContainer, Cell, Label } from 'recharts';

import { getToLs } from '../../utility/localStorage';



const Statistics = () => {
  const savedCards = getToLs()

  const selectedCards = savedCards.length;


  const percentage = ((selectedCards / 12) * 100).toFixed(2); 

  return (
    <div className='flex flex-col items-center justify-center h-[70vh]'>

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
            <Cell key="cell-0" fill="#00C49F" />
            <Cell key="cell-1" fill="#FF444A" />
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
      
      <div className='flex items-center justify-center gap-2 font-medium'>
        <p>
        Your Donation
      <progress className="ml-2 progress progress-success w-28" value={percentage} max="100"></progress>
        </p>
        <p>
        Total Donation
      <progress className="ml-2 progress progress-error w-28" value={100-percentage} max="100"></progress>
        </p>
      </div>
    </div>
  );
};

export default Statistics;