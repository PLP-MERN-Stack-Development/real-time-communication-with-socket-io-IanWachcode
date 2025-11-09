import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
         Socket.io Chat App
      </h1>
      <p className="text-gray-700 mb-6">
        Your real-time chat is running successfully with Tailwind CSS!
      </p>
      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
        Get Started
      </button>
    </div>
  );
};

export default App;
