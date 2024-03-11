import { Modal, TouchableWithoutFeedback, View } from 'react-native'
import { PopupProps } from './types'
import { popupStyles } from './styles'
import React, { useState } from 'react'

export const Popup = ({ visible, children }: PopupProps) => {
  const [modalVisible, setModalVisible] = useState(visible)

  return (
    <Modal
      animationType="fade"
      transparent
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={popupStyles.modalOverlay} />
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(false)
        }}
      >
        <View style={popupStyles.popup}>
          <TouchableWithoutFeedback onPress={() => {}}>
            {children}
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}
