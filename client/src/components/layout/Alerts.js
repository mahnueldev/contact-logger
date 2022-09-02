import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
import styled from 'styled-components'
import { AiFillWarning} from 'react-icons/ai';

const AlertStyle = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-top: 5rem;
padding-top: 5rem;


.alert{
  padding: 0.7rem;
  margin: 1rem 0;
  opacity: 0.9;
  background: var(--red);
  color: #333;
}
.alert-danger {
  background: var(--red);
  color: #fff;
}
.alert-success {
  background: var(--green);
  color: #fff;
}
.alert-white {
  background: #fff;
  color: #333;
  border: #ccc solid 1px;
}
`

const Alerts = () => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map(alert => (
      <AlertStyle >
        <div key={alert.id} className={`alert alert-${alert.type}`}>
        <AiFillWarning className='iconStyles' style={{marginRight: '0.2rem'}}/> {alert.msg}
        </div>
      </AlertStyle>
    ))
  );
};

export default Alerts;
