import { css } from 'styled-components';
import * as Animation from './animation';

export const theme = {
  animation: {
    fadeOut: Animation.FadeOut,
    cellFadeOut: Animation.CellDisappear,
  },
  flex: css`
    display: flex;
    align-items: center;
  `,
  columnFlex: css`
    display: flex;
    justify-content: center;
    flex-flow: column;
    text-align: center;
  `,
  color: {
    white: '#ffffff',
    black: '#222222',
    primary_300: '#e6f4fd',
    primary_400: '#2b96ec',
    primary_500: '#2a94e9',
    green: '#147b5e',
    gray_50: '#f0f3f5',
    gray_100: '#f0f3f5',
    gray_300: '#dfe3e6',
    gray_500: '#acb5bd',
    gray_800: '#656d75',
  },
};
