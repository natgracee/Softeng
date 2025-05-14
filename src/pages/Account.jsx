export const Account = () => {
  return (
    <section className="page-container">
      <h2 className="text-2xl font-bold mb-4">Account Settings</h2>

      <div className="account-item bg-gray-200 p-4 rounded-lg mb-4">
        <h3 className="font-semibold">Username</h3>
        <p className="text-sm">Username: JohnDoe</p>
      </div>

      <div className="account-item bg-gray-200 p-4 rounded-lg mb-4">
        <h3 className="font-semibold">Email</h3>
        <p className="text-sm">Email: johndoe@example.com</p>
      </div>

    </section>
  );
};
