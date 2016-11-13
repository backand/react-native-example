import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

export const SCREEN = {
    HEIGHT: height,
    WIDTH: width
};

export const STATUSBAR_HIDDEN = true;
