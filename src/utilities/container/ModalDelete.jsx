const ModalDelete = ({ setShowDelete, setIsDelete }) => {

  return (
    <article
      className="w-8/12 sm:w-1/2 md:w-2/5 lg:w-1/4 h-1/3 mx-auto mt-auto lg:px-2 sm:px-2 flex flex-col justify-evenly items-center rounded-lg drop-shadow-lg font-default font-medium text-center bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
    >
      <div className="flex flex-col justify-center items-center">
        <i className="fa-solid fa-triangle-exclamation mb-4 text-5xl"></i>
        <h4 className="px-2">Are you sure you want to delete this user?</h4>
      </div>
      <div className="flex gap-6">
        <button
          onClick={() => setIsDelete(true)}
          className="bg-red-600 py-2 px-3 text-gray-200 dark:text-gray-300 font-medium drop-shadow-md rounded-md text-base hover:bg-red-700 dark:hover:bg-red-700"
        >
          Delete
        </button>
        <button
          onClick={() => setShowDelete(false)}
          className="bg-transparent py-2 px-3 text-gray-500 dark:text-gray-400 font-medium drop-shadow-md rounded-md text-base ring-1 ring-gray-300 dark:ring-gray-800 hover:bg-gray-200 hover:text-gray-600 dark:hover:bg-gray-800"
        >
          Cancel
        </button>
      </div>
    </article>
  );
};

export default ModalDelete;
