import styled from 'styled-components';

export const NotificationWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(210, 60%, 98%);

  .notification {
    width: 492px;
    border-radius: 8px;
    background-color: hsl(0, 0%, 100%);
    padding: 20px;

    .noti-heading {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 18px;

      .noti-count-section {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        h1 {
          font-size: 16px;
          margin-right: 8px;
          color: hsl(219, 85%, 26%);
        }

        div {
          height: 20px;
          width: 24px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: hsl(219, 85%, 26%);
          color: #fff;
          font-size: 10px;
          border-radius: 5px;
        }
      }

      .noti-mark-all-action {
        font-size: 12px;
        color: hsl(219, 14%, 63%);
      }

      .noti-mark-all-action:hover {
        color: hsl(219, 85%, 26%);
        cursor: pointer;
      }
    }
  }
`;