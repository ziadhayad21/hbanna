"use client";

const data = [
  { category: "Dates", product: "Medjool", months: [0,0,0,0,0,0,0,1,1,1,1,1] },
  { category: "Citrus", product: "Navel Oranges", months: [1,1,1,1,0,0,0,0,0,0,1,1] },
  { category: "Citrus", product: "Valencia Oranges", months: [1,1,1,1,1,1,0,0,0,0,0,0] },
  { category: "Fresh Fruits", product: "Grapes", months: [0,0,0,0,1,1,1,0,0,0,0,0] },
  { category: "Fresh Fruits", product: "Pomegranates", months: [0,0,0,0,0,0,0,1,1,1,1,0] },
  { category: "Vegetables", product: "Peppers", months: [1,1,1,1,1,0,0,0,0,0,1,1] },
];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function SeasonalityCalendar() {
  return (
    <section id="seasonality" className="section-pad" style={{ background: "var(--cream)" }}>
      <div className="container">
        <span className="eyebrow reveal" style={{ color: "var(--orange)" }}>Availability</span>
        <h2 className="serif reveal" style={{ marginBottom: "48px" }}>Harvest & Export Calendar</h2>
        
        <div className="calendar-table-wrapper reveal">
          <table className="calendar-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Product</th>
                {months.map(m => <th key={m}>{m}</th>)}
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i}>
                  <td className="cal-cat">{row.category}</td>
                  <td className="cal-prod">{row.product}</td>
                  {row.months.map((active, j) => (
                    <td key={j} className="cal-cell">
                      {active ? <div className="cal-dot"></div> : null}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
