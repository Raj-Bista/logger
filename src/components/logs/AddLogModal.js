import React, {useState} from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';




const AddLogModal = () => {
const [message, setMessage] = useState('');
const [attention, setAttention] = useState(false);
const [tech, setTech] = useState('');

const onSubmit = ()=> {
  if(message === '' || tech ==='') {
    M.toast({html: 'Please enter message and tech'}) 
  } else {
        console.log(message, tech, attention)
      }
  }
  


return (
<div id='add-log-modal' className="modal"
  style={modalStyle}>
    <div className="modal-content">
      <h4>Enter log message</h4>
      <div className="row">
        <div className="input-field">
          <input type="text"
          name='message'
          value={message}
          onChange={e=> setMessage(e.target.value)}
          />
          <label htmlFor='message' className="active">
            Log Message
          </label>
        </div>
      </div>
      <div className="row">
        <div className="input-field">
          <select name="tech" value={tech}
          className="browser-default"
          onCange={e=> setTech(e.target.value)}>
            <option value=''disabled>
              select technician
            </option>
            <option value="john doe">John doe</option>
            <option value="mon doe">mon doe</option>
            <option value="tin doe">tin doe</option>
          </select>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="input-field">
        <p>
          <label>
            <input type="checkbox"
            className="filled-in"
            checked={attention}
            value={attention}
            onChange={e=> setAttention(!attention)}
            />
            <span>Needs Attention</span>
          </label>
        </p>
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

const modalStyle = {
  width: '75%',
  height: '75%'
}

export default AddLogModal;
