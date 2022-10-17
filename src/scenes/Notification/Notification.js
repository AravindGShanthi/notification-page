import { useState } from 'react';
import NotificationCard from './components/NotificationCard';
import { NotificationWrapper } from './NotificationStyles';
import SAMPLE_DATA from './SampleData.json';

const Notification = () => {
  const [data, setData] = useState(SAMPLE_DATA);
  const [notificationCount, setNotificationCount] = useState(SAMPLE_DATA.filter((d) => !d.read).length);


  const handleMarkAll = () => {
    const updatedData = data.map((d) => { d.read=true; return d });
    setData(updatedData);
    setNotificationCount(0);
  };

  return (
    <NotificationWrapper>
      <div className='notification'>
        <div className='noti-heading'>
          <div className='noti-count-section'> 
            <h1>Notifications</h1>
            {
              !!notificationCount && (
                <div>
                  <p>{notificationCount}</p>
                </div>
              )
            }
          </div>
          <p className='noti-mark-all-action' onClick={handleMarkAll}>Mark all as read</p>
        </div>
        <div>
          {
            data.map((notification) => {
              return (
                <NotificationCard key={notification._id} data={notification} />
              );
            })
          }
        </div>
      </div>
    </NotificationWrapper>
  );
};

export default Notification;