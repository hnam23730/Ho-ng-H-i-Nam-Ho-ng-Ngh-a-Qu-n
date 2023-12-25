import { Modal, StyleSheet, Text,TouchableOpacity, View } from 'react-native'
import React from 'react'
import { faL } from '@fortawesome/free-solid-svg-icons'

const Sysmodal = ({visible,onHide}) => {
  return (
    <Modal visible={visible} transparent={true}>
        <View style={{
            flex:1,
            backgroundColor:'rgba(00,00,00,.5)',
            justifyContent:'center',
            alignItems:'center',
            padding:20,
            
        }}>
            <View style={{
                    width:'100%',
                    backgroundColor:'black',
                    borderWidth:1,
                    borderColor:'white',
                    padding:20,
            }}>

                <View style={{
                    justifyContent:'center',
                    alignItems:'center',
                    marginBottom:20,
                }}>
                <Text style={{
                    fontSize:20,
                    color:'white',
                    
                }}>thông báo</Text>
                </View>

                <View style={{
                }}>
                <Text style={{
                    fontSize:10,
                    color:'white',
                    marginBottom:10,
                    
                }}>Thông tin chưa đúng </Text>
                </View>
                
                <View>
                    <TouchableOpacity style={{
                        backgroundColor:'black',
                        justifyContent:'center',
                        alignItems:'center',
                        borderWidth:1,
                        borderColor:'white',
                        
                    }} onPress={onHide}>
                         <Text style={{color:'white'}} >Đóng</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
  )
}

export default Sysmodal
