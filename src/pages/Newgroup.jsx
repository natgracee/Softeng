import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Newgroup = () => {
  const [groupName, setGroupName] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [inviteLink, setInviteLink] = useState('');
  const navigate = useNavigate();

//   DATA GROUP
  const handleCreateGroup = () => {
    const newGroup = {
      name: groupName,
      profilePic: profilePic,
      inviteLink: inviteLink,
      isNew: true,
    };

    navigate('/main', { state: { newGroup } });
    alert('Group Created!');
  };

  return (
    <section className='page-container'>
        <div className='bg-green-100 p-6 rounded-lg flex-col justify-center items-center'>
      <h2 className="text-2xl font-bold mb-4">Create New Group</h2>
      <div className="mb-4">
        <label className="block mb-3 text-sm font-medium text-gray-700">Group Name</label>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg"
          placeholder="Enter group name"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-3 text-sm font-medium text-gray-700">Group Profile Picture (Optional)</label>
        <input
          type="file"
          accept="image/*"
          className="w-full p-3 border border-gray-300 rounded-lg"
          onChange={(e) => setProfilePic(e.target.files[0])}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-3 text-sm font-medium text-gray-700">Invite Link</label>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg"
          placeholder="Enter invite link"
          value={inviteLink}
          onChange={(e) => setInviteLink(e.target.value)}
        />
      </div>

      <button
        onClick={handleCreateGroup}
        className="w-full green-button py-2 rounded-lg mt-4"
      >
        Create Group
      </button>
    </div>
    </section>
  );
};

