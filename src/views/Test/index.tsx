import { Text, View } from "react-native"
import { ButtonStyled } from "../../shared/components/ButtonStyled"
import { Scanner } from "../../shared/components/Scanner"
import { CameraComponent } from "../../shared/components/CameraComponent"
import { useState } from "react"
import { ImagePainted } from "../../shared/components/ImagePainted"

export const  Test = () => {
    const [image, setImage] = useState<any>(null)
    return(
        <View style={{flex:1}}>
            <CameraComponent
            setImage={(image) => {
                console.log({image});
                setImage(image.uri)
            }}
            closeCamara={() => {

            }}
            />


            
        </View>
    )
}