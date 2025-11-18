import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>
      <p>Welcome to the Inventory Management System.</p>

      <div style={{ marginTop: "30px" }}>
        <h2>Navigation</h2>
        <ul style={{ listStyle: "none", padding: 0, fontSize: "18px" }}>
          <li style={{ marginBottom: "10px" }}>
            <Link to="/products">📦 Products</Link>
          </li>

          <li style={{ marginBottom: "10px" }}>
            <Link to="/warehouses">🏭 Warehouses</Link>
          </li>

          <li style={{ marginBottom: "10px" }}>
            <Link to="/transactions">💸 Transactions</Link>
          </li>

          <li style={{ marginBottom: "10px" }}>
            <Link to="/reports">📊 Reports</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;