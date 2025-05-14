import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Grouplist = () => {
  const [groups, setgroups] = useState([
    { name: 'Group 1', isNew: true },
    { name: 'Group 2', isNew: false },
  ]);

  return (
    <section className='page-container'>
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm space-y-2 max-h-80 overflow-y-auto">
        {groups.map((group, index) => (
            <div key={index} className="flex justify-between items-center bg-white p-3 rounded-md shadow border">
            <span>{group.name}</span>
            {group.isNew && (
                <span className=" text-primary-foreground text-xs w-7 h-1 flex items-center justify-center">
                New!
                </span>
            )}
            </div>
        ))}
        <Link to="/newgroup">
            <button className="green-button py-2 px-6 rounded-lg mt-4 w-full">
            Create New Group
            </button>
        </Link>
        </div>
    </section>
    
  );
};
