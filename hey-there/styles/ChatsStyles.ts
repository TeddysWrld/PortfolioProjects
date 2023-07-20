import styled from 'styled-components/native';
import { hexColours } from '../constants';

export const Container = styled.View`
    flex: 1;
    padding-left: 5px;
    padding-right: 5px;
    align-items: center;
    background-color: #ffffff;

`;

export const Card = styled.TouchableOpacity`
    width: 100%;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const UserImgWrapper = styled.View`
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const UserImg = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const TextSection = styled.View`
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  padding-left: 0;
  margin-left: 10px;
  width: 300px;
  border-bottom-width: 1px;
  border-bottom-color: #cccccc;
`;

export const UserInfoText = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const UserName = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

export const PostTime = styled.Text`
  font-size: 12px;
  color: #666;
`;

export const MessageText = styled.Text`
  font-size: 14px;
  color: #333333;
`;

//Header Style
export const HeadContainer = styled.View`
    position: 'absolute';
    left: 0;
    right: 0;
    top: 0;
    background: #ffffff;
    z-index: 1000;
    elevation: 1000;
    height: 150px;
`;

export const HeaderText = styled.Text`
    color: ${hexColours.Purple};
    font-weight: bold;
    font-size: 35px;
    padding-top: 35px;
    padding-left: 12px;
`;

export const SearchBarInput = styled.TextInput`
    height: 40px;
    border-width: 1.5px;
    padding-left: 20px;
    margin: 10px;
    border-color: #000000;
    background-color: #ffffff;
    border-radius: 6px
`;