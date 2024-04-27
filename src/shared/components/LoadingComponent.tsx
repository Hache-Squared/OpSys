import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { AppTheme } from '../../config/AppTheme'

export const LoadingComponent = () => {
  return (
    <>
      <ActivityIndicator size={'small'} color={AppTheme.secondary} />
    </>
  )
}