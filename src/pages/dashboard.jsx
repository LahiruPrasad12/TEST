import React, { useEffect, useState } from 'react';
import { List, Avatar, Spin, Input, Select, Button, message } from 'antd';
import axios from 'axios';

const { Option } = Select;

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userIdFilter, setUserIdFilter] = useState('');
  const [labelFilter, setLabelFilter] = useState('');
  const [selectedTime, setSelectedTime] = useState(null);  // Time selected by user
  const [countdown, setCountdown] = useState(null);  // Countdown timer value

  useEffect(() => {
    // Fetch data from the API
    axios.get('http://127.0.0.1:5000/get_predictions')
      .then((response) => {
        setData(response.data);
        setFilteredData(response.data); // Initialize filteredData with all data
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Apply filters whenever userIdFilter or labelFilter changes
    let filtered = data;

    if (userIdFilter) {
      filtered = filtered.filter(item => item.user_id.includes(userIdFilter));
    }

    if (labelFilter) {
      filtered = filtered.filter(item => item.label === labelFilter);
    }

    setFilteredData(filtered);
  }, [userIdFilter, labelFilter, data]);

  useEffect(() => {
    // Handle countdown timer logic
    if (countdown !== null && countdown > 0) {
      const interval = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);

      if (countdown === 1) {
        // Make API call to delete data
        axios.delete('http://127.0.0.1:5000/delete_all_data')
          .then(() => {
            message.success('Data deleted successfully');
            setData([]);  // Clear the data from the state
            setFilteredData([]);  // Clear the filtered data from the state
          })
          .catch(error => {
            console.error('Error deleting data:', error);
            message.error('Failed to delete data');
          });

        clearInterval(interval);
      }

      return () => clearInterval(interval);
    }
  }, [countdown]);

  const handleTimeChange = (value) => {
    const timeInSeconds = value * 3600;  // Convert hours to seconds
    setSelectedTime(value);
    setCountdown(timeInSeconds);
  };

  const formatCountdown = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}h ${minutes}m ${secs}s`;
  };

  if (loading) {
    return <Spin tip="Loading..." />;
  }

  return (
    <div style={styles.container}>
      {/* Filter Area */}
      <div style={styles.filterContainer}>
        <div style={styles.leftFilters}>
          <Input
            placeholder="Filter by User ID"
            value={userIdFilter}
            onChange={(e) => setUserIdFilter(e.target.value)}
            style={{ width: '200px', marginRight: '20px' }}
          />

          <Select
            placeholder="Filter by Label"
            value={labelFilter}
            onChange={(value) => setLabelFilter(value)}
            style={{ width: '200px' }}
          >
            <Option value="tempted">Tempted</Option>
            <Option value="mismatched">Mismatched</Option>
            <Option value="correct">Correct</Option>
          </Select>
        </div>

        {/* Timer Selector */}
        <Select
          placeholder="Select Time (Hours)"
          onChange={handleTimeChange}
          style={{ width: '200px', marginLeft: 'auto' }}
        >
          <Option value={1}>1 Hour</Option>
          <Option value={2}>2 Hours</Option>
          <Option value={3}>3 Hours</Option>
          {/* Add more options as needed */}
        </Select>

        {/* Display Countdown Timer */}
        {countdown !== null && (
          <div style={{ marginLeft: '20px' }}>
            Time Remaining: {formatCountdown(countdown)}
          </div>
        )}
      </div>

      {/* List View */}
      <List
        itemLayout="horizontal"
        dataSource={filteredData}
        renderItem={item => (
          <List.Item style={styles.listItem}>
            <List.Item.Meta
              avatar={<Avatar src="https://example.com/avatar.png" />}
              title={<a href="https://example.com">{item.user_id}</a>}
              description={`FP Firebase URL: ${item.fp_firebase_url}, Label: ${item.label}, Message: ${item.message}`}
            />
          </List.Item>
        )}
      />
    </div>
  );
}

// Styles
const styles = {
  container: {
    padding: '20px',
  },
  filterContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  // Small shadow for the filter area
    borderRadius: '8px',  // Rounded corners for a smoother look
    backgroundColor: '#fff'  // White background to make the shadow visible
  },
  leftFilters: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 'auto',
  },
  listItem: {
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',  // Small shadow for the list items
    borderRadius: '8px',  // Rounded corners for each list item
    marginBottom: '16px',  // Space between list items
    padding: '20px',  // Padding inside the list item
    backgroundColor: '#fff'  // White background to make the shadow visible
  }
};
