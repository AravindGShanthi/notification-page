import styled from 'styled-components';

export const NotificationCardStyled = styled.div`
  margin-bottom: 6px;
  border-radius: 5px;
  background-color: ${props => props.read ? 'hsl(0, 0%, 100%)' : 'hsl(210, 60%, 98%)'};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  .user-pp {
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 60%;
      padding: 10px;
    }
  }

  .noti-content-wrapper {
    width: calc(100% - 50px);
    font-size: 12px;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    .post-image {
      width: 36px;
      margin: 0 15px;
      border: 3px solid hsl(0, 0%, 100%);
    }

    .post-image:hover {
      border: 3px solid hsl(205, 33%, 90%);
      border-radius: 5px;
      cursor: pointer;
    }

    .noti-content {
      .content {
        display: inline-block;
        width: auto;
        height: auto;

        .username {
          font-weight: 800;
          margin-right: 4px;
        }

        .username:hover {
          color: hsl(219, 85%, 26%);
          cursor: pointer;
        }

        .user-action {
          font-weight: 500;
          margin-right: 4px;
          color: hsl(219, 14%, 63%);
        }

        .post-title, .group-name {
          font-weight: 800;
          margin-right: 4px;
          color: hsl(219, 12%, 42%);
        }

        .post-title:hover, .group-name:hover {
          color: hsl(219, 85%, 26%);
          cursor: pointer;
        }

        .group-name {
          color: hsl(219, 85%, 26%);
        }

        .read-status {
          width: 5px;
          height: 5px;
          display: inline-block;
          background-color: hsl(1, 90%, 64%);
          border-radius: 50%;
          margin-bottom: 1.5px;
        }
      }
    }
  }

  .timestamp {
    font-weight: 500;
    font-size: 12px;
    color: hsl(219, 14%, 63%);
  }

  .message-wrapper {
    border-radius: 5px;
    border: 1px solid hsl(205, 33%, 90%);
    margin: 10px 15px 10px 0;
    background-color: hsl(0, 0%, 100%);

    p {
      padding: 14px;
      font-size: 12px;
      color: hsl(219, 14%, 63%);
    }
  }

  .message-wrapper:hover {
    background-color: hsl(205, 33%, 90%);
    cursor: pointer;
  }
`;
