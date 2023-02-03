import React, { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';
import {
  Text,
  TextInput,
  TouchableHighlight,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import Constants from '../../common/Constants';
import Languages from '../../common/Languages';
import Colors from '../../theme/colors';
import Styles from './Styles';


function CustomizeCartModel(props) {
  const [isEnglishSelected, setisEnglishSelected] = useState(true);
  const [bottomSpace, setBottomSpace] = useState(props.bottomSpace);
  const [textValue, setTextValue] = useState(
    props.note ? props.note : '',
  );

  const setModelVisible = () => {
    props.onModalClose();
  };

  const onDoneClicked = () => {
    props.onEditDetails(props.index, textValue);
    let temp = [...props.data];
    temp[props.index].note = textValue;
    props.setData(temp);
    props.onModalClose();
  };
 
  const onChangeText = (val) => {
    if (val.length <= 200) {
      setTextValue(val);
    }
  };

  return (
    
    <TouchableWithoutFeedback
      onPress={() => {
        setModelVisible();
      }}>
        {/* <View style={[Styles.pop_screen,{paddingBottom:props.keyboardVisible?(props.bottomSpace - 300):0}]}></View> */}
      <View style={[Styles.pop_screen]}>
        <View style={Styles.modelPopupOuter}>
          <View style={Styles.modelPopupInner}>
            <View style={Styles.sheetTypeIcon} />
            <Text style={Styles.pop_text}>{Languages.CustomizeYourOrder}</Text>
          </View>
          <View style={Styles.divider} />
          <View>
            <TextInput
              style={Styles.messageBox}
              placeholder={Languages.PleaseTypeHere}
              placeholderTextColor={Colors.SecondaryText}
              numberOfLines={6}
              multiline={true}
              value={textValue}
              onChangeText={onChangeText}
            />
          </View>
          <View style={{ marginBottom: 5 }}>
            <View style={Styles.divider} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 8,
              }}>
              <Text
                style={{
                  color: Colors.SecondaryText,
                  fontSize: Constants.ResponsiveSize.f14,
                }}>
                {' '}
                {textValue.length}/200{' '}
              </Text>
              <TouchableHighlight
                style={Styles.doneButton} underlayColor="none"
                onPress={() => onDoneClicked()}>
                <Text style={Styles.doneButtonText}>{Languages.done}</Text>
              </TouchableHighlight>
            </View>
            <View style={Styles.divider} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default CustomizeCartModel;
