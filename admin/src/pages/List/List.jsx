import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './List.css';

const List = ({ url }) => {
  const [list, setList] = useState([]);
  const [stats, setStats] = useState({
    totalItems: 0,
    totalValue: 0,
    categories: new Set()
  });

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
        calculateStats(response.data.data);
      } else {
        toast.error("Error");
      }
    } catch (error) {
      toast.error("Failed to fetch food list");
    }
  };

  const calculateStats = (data) => {
    const stats = data.reduce((acc, item) => ({
      totalItems: acc.totalItems + 1,
      totalValue: acc.totalValue + parseFloat(item.price),
      categories: acc.categories.add(item.category)
    }), {
      totalItems: 0,
      totalValue: 0,
      categories: new Set()
    });
    setStats(stats);
  };

  const removeFood = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
      if (response.data.success) {
        await fetchList();
        toast.success(response.data.message);
      } else {
        toast.error("Error");
      }
    } catch (error) {
      toast.error("Failed to remove food item");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="dashboard-container">
      {/* Dashboard Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-utensils"></i>
          </div>
          <div className="stat-content">
            <p className="stat-label">Total Items</p>
            <h3 className="stat-value">{stats.totalItems}</h3>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-dollar-sign"></i>
          </div>
          <div className="stat-content">
            <p className="stat-label">Total Value</p>
            <h3 className="stat-value">${stats.totalValue.toFixed(2)}</h3>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-boxes"></i>
          </div>
          <div className="stat-content">
            <p className="stat-label">Categories</p>
            <h3 className="stat-value">{stats.categories.size}</h3>
          </div>
        </div>
      </div>

      {/* Food List Table */}
      <div className="food-list-card">
        <h2 className="card-title">All Food Items</h2>
        <div className="table-container">
          <table className="food-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {list.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img 
                      src={`${url}/images/${item.image}`} 
                      alt={item.name}
                      className="food-image" 
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>
                    <span className="category-tag">
                      {item.category}
                    </span>
                  </td>
                  <td>${item.price}</td>
                  <td>
                    <button
                      onClick={() => removeFood(item._id)}
                      className="delete-btn"
                    >
                      ×
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default List;