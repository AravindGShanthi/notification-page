import { NotificationCardStyled } from "./NotificationCardStyles";

const NotificationCard = ({ data }) => {
  console.log('Notification Card Component');

  const getDescriptions = (type) => {
    switch(type) {
      case 'post-reactions':
        return 'reacted to your recent post';
      case 'new-follower':
        return 'followed you';
      case 'new-group-member':
        return 'has joined your group';
      case 'direct-message':
        return 'sent you a private message';
      case 'post-picture-comment':
        return 'commented on your picture';
      case 'exit-group-member':
        return 'left the group';
      default:
        return '';
    }
  }

  const Content = ({type, data}) => {
    switch(type) {
      case 'post-reactions':
        return <span className="post-title">{data['post-title']}</span>;
      case 'new-group-member':
        return <span className="group-name">{data['group-name']}</span>;
      case 'exit-group-member':
        return <span className="group-name">{data['group-name']}</span>;
      default:
        return null
    }
  };

  return (
    <NotificationCardStyled read={data['read']}>
      <div className="user-pp">
        {/* User profile picture image */}
        <img src={`./img/${data['user-profile-pic-url']}`} alt={data['user-profile-pic-url']} />
      </div>
      <div className="noti-content-wrapper">
        <div className="noti-content">
          <div className="content">
            <span className="username">{data.user}</span>
            <span className="user-action">{getDescriptions(data.type)}</span>
            <Content type={data.type} data={data} />
            {
              !data['read'] && (
                <div className="read-status"></div>
              )
            }
          </div>
          <p className="timestamp">{`${data.timestamp} ago`}</p>
          {
            data['message'] && (
              <div className="message-wrapper">
                <p>{data['message']}</p>
              </div>
            )
          }
        </div>
        {
          data['post-picture-url'] && (
            <img src={`./img/${data['post-picture-url']}`} alt={data['post-picture-url']} className='post-image' />
          )
        }
      </div>
    </NotificationCardStyled>
  )
};

export default NotificationCard;