import { Modal, TouchableWithoutFeedback, View } from 'react-native'
import { PopupProps } from './types'
import { popupStyles } from './styles'
import React from 'react'

export const Popup = ({
  setVisibility,
  disableClose,
  children,
}: PopupProps) => {
  return (
    <Modal
      animationType="fade"
      transparent
      visible
      onRequestClose={() => setVisibility(false)}
    >
      <View style={popupStyles.modalOverlay} />
      <TouchableWithoutFeedback
        onPress={() => {
          if (disableClose) return
          setVisibility(false)
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
