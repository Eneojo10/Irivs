import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';
import Compo from './Compo';
import { IoMdArrowDropdown } from 'react-icons/io';
import axios from 'axios';

function Config() {
  const [cate_gory, setCategory] = useState([]);
  const [people, setPeople] = useState([]);
  const [category, setHomeStatus] = useState('');
  const [resident, setResident] = useState('');
  const [sender, setSender] = useState('');
  const [send, setSend] = useState('');
  

  const handleSave = async () => {
    let data = { category };

    try {
      const response = await axios
        .post('https://garen-server.onrender.com/residence', data)
        .then((res) => setSender(res.sender));
      alert('created');

      console.log(response.data);

      category('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleAdd = async () => {
    let data = { resident };

    try {
      const response = await axios
        .post('https://garen-server.onrender.com/status', data)
        .then((res) => setSend(res.send));
      alert('created');

      console.log(response);

      resident('');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect (() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(
          'https://garen-server.onrender.com/residence'
        );
        setCategory(response.data);

        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDetails();
  },[]);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const response = await axios.get(
          'https://garen-server.onrender.com/status'
        );
        setPeople(response.data);

        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAll();
  },[]);
  
  return (
    <div>
      <div className='view-all-reports d-flex'>
        <div className='users'>
          <Compo />
        </div>

        <div className='users_'>
          <Navigation />
          <br />

          <div
            className='viewreports_'
            style={{ width: '95%', margin: 'auto' }}
          >
            <h5>CONFIGURATION</h5>
            <br />

            <div className='resident-txt-field'>
              <div className='txt--inside d-flex justify-content-between'>
                <div className='cisearch-icon d-flex gap-1'>
                  <h4>Configuration and Setup</h4>
                </div>
                <div className='btn-group'>
                  <button
                    className='dropdown-btn btn-sm'
                    type='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    <IoMdArrowDropdown />
                  </button>
                </div>
              </div>

              <div className='config_border'>
                <div className='config__border'>
                  <br />
                  <br />

                  <div className='config_box'>
                    <div className='boxx_'>
                      <div className='box_1'>
                        <div className='box_1details'>
                          {cate_gory.map((categoryName, index) => (
                            <div className='box_line' key={index}>
                              <h6>{categoryName.category}</h6>
                            </div>
                          ))}
                        </div>
                      </div>

                      <form className='configform' onSubmit={handleSave}>
                        <input
                          type='text'
                          placeholder='Enter Residential Status'
                          value={category}
                          onChange={(e) => setHomeStatus(e.target.value)}
                        />

                        <button type='submit' className='config-button'>
                          Add
                        </button>
                      </form>
                    </div>
                    <br />
                    <br />
                    <div className='boxx_'>
                      <div className='box_1'>
                        <div className='box_1details'>
                          {people.map((residentName, index) => (
                            <div className='box_line' key={index}>
                              <h6>{residentName.resident}</h6>
                            </div>
                          ))}
                        </div>
                      </div>

                      <form className='configform' onSubmit={handleAdd}>
                        <input
                          type='text'
                          placeholder='Enter Home Status'
                          value={resident}
                          onChange={(e) => setResident(e.target.value)}
                        />

                        <button type='submit' className='config-button'>
                          Add
                        </button>
                      </form>
                    </div>
                    <br />
                    <br />
                    <div className='boxx_'>
                      <div className='box_1'>
                        <div className='box_1details'>
                          <div className='box_line'>
                            <h6>Nav Valley Estate</h6>
                          </div>
                        </div>
                      </div>

                      <form className='configform'>
                        <input type='text' />

                        <button className='config-button'>Add</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Config;
