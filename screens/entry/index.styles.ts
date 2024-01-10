import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { View } from 'react-native';
import { spacingPx } from '@/theme/spacing';

export const EntryWrap = styled(View)`
	align-items: center;
	display: flex;
	flex: 1;
	justify-content: center;
	margin: 0 auto;
	padding: 0 ${spacingPx.default}px;
	width: 100%;
`;
