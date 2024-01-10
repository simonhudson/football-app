import styled from 'styled-components';
import { View, Image } from 'react-native';

export const Banner = styled(View)`
	align-items: center;
	display: flex;
	flex-direction: row;
	gap: 20px;
`;

export const BannerImage = styled(Image)`
	height: 80px;
	width: 80px;
`;
