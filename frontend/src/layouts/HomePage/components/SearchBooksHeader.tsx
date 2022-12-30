export const SearchBooksHeader = () => {
  return (
    <div className="p-5 mb-4 bg-dark">
      <div
        className="container-fluid py-2 text-white 
                d-flex justify-content-center align-items-center"
      >
        <div>
          <h1 className="display-5 fw-bold">Welcome to Bookshelves.com</h1>
          <p className="m-7 fs-4">
            Bookmark and keep track your favorite books
          </p>
          <a
            type="button"
            className="btn main-color btn-lg text-white"
            href="#"
          >
            Search top books
          </a>
        </div>
      </div>
    </div>
  );
};
