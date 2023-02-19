export const DisplayControl = ({isCheked, setshowDone, cleanTask}) => {


  return (
    <div>
      <input
        type="checkbox"
        onChange={(e) => setshowDone(e.target.checked)}
        checked={isCheked}
      />
      Show Task Completed

      <button className="btn btn-primary" onClick={() => cleanTask()}>Clear</button>
    </div>
  );
};
