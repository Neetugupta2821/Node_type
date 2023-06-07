import { useState } from 'react';
import './FirstForm.css';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDVqih0NdOWjU5Xj7ADOhjHg46lfSROuqQ",
    authDomain: "hse-observation--form.firebaseapp.com",
    databaseURL: "https://hse-observation--form-default-rtdb.firebaseio.com",
    projectId: "hse-observation--form",
    storageBucket: "hse-observation--form.appspot.com",
    messagingSenderId: "450584974430",
    appId: "1:450584974430:web:c04ab2b089c6ca740dd0cf"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();

const FirstForm = () => {
  const [project, setProject] = useState('');
  const [proDetail, setDetail] = useState('');
  const [location,setlocation]=useState('');
  const [Date,setDate]=useState('');

  const push = (e) => {
    e.preventDefault();
    set(ref(database, 'user'), {
      project: project,
      projectDetails:proDetail,
      location:location,
      Date:Date
    })
      .then(() => {
        console.log('Data successfully saved!');
      })
      .catch((error) => {
        console.error('Error saving data:', error);
      });
  };

  return (
    <>
      <form onSubmit={push}>
        <div className='form_container'>
          <h3>HSE Observation Form</h3>
          <textarea
          
            className='text_item'
            name='project'
            placeholder='project'
            rows='3'
            cols='50'
            onChange={(e) => setProject(e.target.value)}
            value={project}
          ></textarea>
          <br />
          <textarea
            className='text_item'
            name='project details'
            placeholder='project details'
            rows='3'
            cols='50'
            onChange={(e) => setDetail(e.target.value)}
            value={proDetail}
          ></textarea>
          <br />
          <textarea
            className='text_item'
            name='Location'
            placeholder='location'
            rows='3'
            cols='50'
            onChange={(e) => setlocation(e.target.value)}
            value={location}
          ></textarea>
          <br />
          <p className='Data'>Data</p>
          <textarea
            className='text_item'
            name='Date'
            placeholder='Date'
            rows='3'
            cols='50'
            onChange={(e) => setDate(e.target.value)}
            value={Date}
          ></textarea>
          <br />
          <input className='submit-type' type='submit' value='Submit' />
        </div>
      </form>
    </>
  );
};

export default FirstForm;
