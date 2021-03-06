import React, {useState} from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = () => {
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');


const onSubmit = ()=> {
  if(firstName === '' || lastName ==='') {
    M.toast({html: 'Please enter first and last name'}) 
  } else {
        console.log(firstName, lastName)
        // clear fields
        setFirstName('');
        setLastName('');
        
      }
  }
  
return (
<div id='add-tech-list-modal' 
className="modal">
    <div className="modal-content">
      <h4>Add Tech</h4>
      <div className="row">
        <div className="input-field">
          <input type="text"
          name='firstname'
          value={firstName}
          onChange={e=> setFirstName(e.target.value)}
          />
          <label htmlFor='firstname' className="active">
            Firsttname
          </label>
        </div>

        <div className="row">
        <div className="input-field">
          <input type="text"
          name='lastname'
          value={lastName}
          onChange={e=> setLastName(e.target.value)}
          />
          <label htmlFor='firstname' className="active">
            Lastname
          </label>
        </div>
        </div>
      </div>
      <div className="modal-footer">
        <a href="#!"
        onClick={onSubmit}
        className="modal-close waves-effect blue btn-flat">
          Enter
        </a>
      </div>
    </div>
    </div>
)

}

 

export default AddTechModal;
