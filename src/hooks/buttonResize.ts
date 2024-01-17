import { useWindowSize } from 'usehooks-ts';

export const useButtonResize = () => {
  const { width } = useWindowSize();
  if (width < 360) {
    return 'xxs';
  }
  if (width < 420) {
    return 'xs';
  }
  if (width < 768) {
    return 'sm';
  }
  if (width < 1024) {
    return 'sm';
  }
  if (width > 1024) {
    return 'md';
  }
  return 'md';
};
export const useButtonResizeAlt = () => {
  const { width } = useWindowSize();
  if (width < 360) {
    return 'xxs';
  }
  if (width < 420) {
    return 'xs';
  }
  if (width < 768) {
    return 'sm';
  }
  if (width < 1400) {
    return 'sm';
  }
  if (width > 1400) {
    return 'md';
  }
  return 'md';
};