function Loader() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="loader bg-white p-5 rounded-full flex space-x-3">
        <div className="w-5 h-5 bg-red-500 rounded-full animate-bounce"></div>
        <div className="w-5 h-5 bg-yellow-500 rounded-full animate-bounce"></div>
        <div className="w-5 h-5 bg-green-500 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
}

export default Loader;
