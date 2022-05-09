import styled from 'styled-components'

export const BannerWrap = styled.div`
  position: relative;
  height: 520px;
  display: flex;
  justify-content: center;
`

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 1980px;

  object-fit: cover;
  object-position: center;
  overflow: hidden;
  user-select: none;
`
export const TextWrap = styled.div`
  .banner-title {
    position: absolute;
    top: 150px;
    left: 50%;
    transform: translateX(-50%);
    text-transform: uppercase;
    font-family: 'Anton', Arial, sans-serif;
    user-select: none;
    letter-spacing: -0.05rem;
    font-size: 52px;
    transition: color 0.5s ease-in;

    .particle {
      opacity: 0;
      position: absolute;
      background-color: rgba(204, 42, 93, 1);
      animation: hearts 3s ease-in infinite;

      &:before,
      &:after {
        position: absolute;
        content: '';
        border-radius: 50%;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(204, 42, 93, 1);
      }

      &:before {
        transform: translateX(-50%);
      }

      &:after {
        transform: translateY(-50%);
      }
    }
  }

  @keyframes hearts {
    0% {
      opacity: 0;
      transform: translate(0, 0%) rotate(45deg);
    }
    20% {
      //show and hint at moving
      opacity: 0.8;
      transform: translate(0, -20%) rotate(45deg);
    }
    100% {
      opacity: 0;
      transform: translate(0, -1000%) rotate(45deg); //Big hearts move faster
    }
  }
`
