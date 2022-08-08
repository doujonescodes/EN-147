import React from 'react'
import { View } from 'react-native'
import { SocialIcon } from 'react-native-elements'


const SocialButtons = () => {
    return (
        <View style={{
            width: 300
        }}>
          <SocialIcon
            title='Sign In With Facebook'
            button
            type='facebook'
           />
          <SocialIcon
            title='Sign In With Apple'
            button
            type='apple'
           />
          <SocialIcon
            title='Sign In With Email'
            button
            type='email'
           />
        </View>
      );
}

export default SocialButtons
