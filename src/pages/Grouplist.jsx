import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

export const Grouplist = () => {
  const [groups, setGroups] = useState([
    { name: 'Group 1', members: ['Alice', 'Bob'], isNew: true },
    { name: 'Group 2', members: ['Charlie'], isNew: false },
  ]);

  return (
    <section className="page-container px-4 py-8">
      {/* Title Section */}
      <div className="text-tpmb-8">
        <h1 className="text-3xl font-semibold text-gray-900">Grouplist</h1>
      </div>

      {/* Group List Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-sm space-y-4 max-h-[32rem] overflow-y-auto w-full">
        {groups.map((group, index) => (
          <div
            key={index}
            className="flex items-center bg-white p-5 rounded-lg shadow border w-full"
          >
            {/* Profile picture */}
            <div className="w-16 h-16 bg-gray-300 rounded-full flex-shrink-0 mr-5"></div>

            {/* Text area */}
            <div className="flex-1 min-w-0 text-left">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-900">
                  {group.name}
                </h2>
                {group.isNew && (
                  <span className="text-xs text-white bg-green-500 px-2 py-0.5 rounded">
                    New!
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600">
                {group.members.join(', ')}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Add Group Button */}
      <Link to="/newgroup">
        <button
          className="fixed bottom-8 right-8 green-button p-4 rounded-full shadow-lg flex items-center justify-center"
          aria-label="Add new group"
        >
          <MdAdd size={30} />
        </button>
      </Link>
    </section>
  );
};
