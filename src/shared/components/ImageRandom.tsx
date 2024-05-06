import { useState } from "react";
import { Button, Image } from "react-native";

const images = [
  require("../../assets/hero-images/1.jpg"),
  require("../../assets/hero-images/2.jpg"),
  require("../../assets/hero-images/3.jpg"),
  require("../../assets/hero-images/4.jpg"),
  require("../../assets/hero-images/5.jpg"),
  require("../../assets/hero-images/6.jpg"),
  require("../../assets/hero-images/7.jpg"),
  require("../../assets/hero-images/8.jpg"),
  require("../../assets/hero-images/9.jpg"),
  require("../../assets/hero-images/10.jpg"),
  
  require("../../assets/hero-images/11.jpg"),
  require("../../assets/hero-images/12.jpg"),
  require("../../assets/hero-images/13.jpg"),
  require("../../assets/hero-images/14.jpg"),
  require("../../assets/hero-images/15.jpg"),
  require("../../assets/hero-images/16.jpg"),
  require("../../assets/hero-images/17.jpg"),
  require("../../assets/hero-images/18.jpg"),
  require("../../assets/hero-images/19.jpg"),
  require("../../assets/hero-images/20.jpg"),
  
  require("../../assets/hero-images/21.jpg"),
  require("../../assets/hero-images/22.jpg"),
  require("../../assets/hero-images/23.jpg"),
  require("../../assets/hero-images/24.jpg"),
  require("../../assets/hero-images/25.jpg"),
  require("../../assets/hero-images/26.jpg"),
  require("../../assets/hero-images/27.jpg"),
  require("../../assets/hero-images/28.jpg"),
  require("../../assets/hero-images/29.jpg"),
  require("../../assets/hero-images/30.jpg"),


];
export const ImageRandom = () => {
  const getRandomImage = () => {
    // Genera un índice aleatorio basado en la longitud de la matriz de imágenes
    const randomIndex = Math.floor(Math.random() * images.length);
    // Retorna la imagen correspondiente al índice aleatorio generado
    return images[randomIndex];
  };
   // Estado para almacenar la imagen actual
   const [selectedImage, setSelectedImage] = useState(getRandomImage());

   // Función para cambiar la imagen al presionar el botón
   const handleChangeImage = () => {
     setSelectedImage(getRandomImage());
   };
  return (
    <>
       <Image 
        source={selectedImage} 
        className="w-full h-full object-contain" 
        // style={{ width: 200, height: 200 }} 
        />
      {/* Botón para cambiar la imagen */}
      {/* <Button title="Cambiar Imagen" onPress={handleChangeImage} /> */}
    </>
    
  );
};
