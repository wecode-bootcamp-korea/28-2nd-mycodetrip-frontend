import { keyframes } from 'styled-components';

const FadeOut = keyframes`
  99% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    z-index: -1;
  }
`;

const CellDisappear = keyframes`
  0%{ 
    transform: scale()(1);
    opacity: 1;
  }
  50% {
    transform: translate3d(10px , 10px, 1px) scale(1.1);
    opacity: .5;
  }
  70%{ 
    transform: translate3d(10px, 10px ,0px) scale(1);

  }
  100% {
    transform: translate3d(0,0,0) scale(0);
    opacity: 0
  }
`;

export { FadeOut, CellDisappear };
