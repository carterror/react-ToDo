export const DisplayControl = ({isCheked, setshowDone, cleanTask}) => {


  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
      <div className="form-check form-switch py-2">
        <input
          id="defaultCheck1"
          className="form-check-input"
          type="checkbox"
          onChange={(e) => setshowDone(e.target.checked)}
          checked={isCheked}
        />
        <label className="form-check-label" htmlFor="defaultCheck1">
          Task Completed
        </label>
      </div>

      <button className="btn btn-danger" onClick={() => cleanTask()}>
        Clear
      </button>
    </div>
  );
};
