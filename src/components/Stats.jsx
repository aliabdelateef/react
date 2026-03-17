function Stats({ tasks }) {
const total = tasks.length;
const completed = tasks.filter(t => t.completed).length;
const pending = total - completed;
 const presentage = total === 0 ? 0 : Math.round((completed/total)*100)

  return (
    <div className="stats">
      <h3>إحصائيات المهام</h3>
      <div className="stats-grid">
        <span> الكل : {total}</span>
        <span> المكتمل : {completed}</span>
        <span> المعلق : {pending}</span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${presentage}%` }}
        ></div>
        <p>{presentage}% مكتمل</p>

        {
          presentage ===100 ? ( <p className="success">مبروك , انهيت كل المهام</p> )
          :(<p className="keep-going"> كمل , انت تقدر   </p>)
        }

{pending >5 && ( <p className="warning">عندك مهام كتير معلقة</p>)}

      </div>
    </div>
  );
}

export default Stats;