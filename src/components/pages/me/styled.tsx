import styled from 'styled-components'

export const AboutMePageWrap = styled.div`
  height: 100%;
`

export const TopCard = styled.div`
  background-color: ${(p) => p.theme.colors.card};

  .picture-main {
    position: relative;
    width: 100%;
    height: 250px;
  }

  .profile-img {
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .profile-header {
    display: flex;
    padding: 0 24px;
    transform: translateY(-64px);
  }

  .avatar-main {
    margin-right: 32px;
  }

  .info-main {
    display: flex;
    flex-direction: column;
  }

  .info-main-item {
    flex: 1;
  }

  .info-main-content {
    display: flex;
    flex-direction: column;
  }

  .info-item {
    flex: 1;
  }

  .info-name {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
  }

  .info-intro {
    display: flex;
    align-items: center;
  }

  .profile-header.mobile {
    flex-direction: column;
    align-items: center;

    .avatar-main {
      margin-right: 0;
    }

    .info-main {
      margin-top: 24px;
    }

    .info-main-content {
      gap: 4px;
    }

    .info-item {
      justify-content: center;
    }
  }
`

export const ContentWrap = styled.div`
  .title-main {
    color: ${(p) => p.theme.colors.text};
  }

  .about-content {
    padding: 0 16px;
    line-height: 1.6;
    font-size: 15px;
    color: ${(p) => p.theme.colors.text};
  }
`
