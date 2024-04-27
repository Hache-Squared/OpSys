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
        className="w-full h-[150px] object-contain" 
        // style={{ width: 200, height: 200 }} 
        />
      {/* Botón para cambiar la imagen */}
      {/* <Button title="Cambiar Imagen" onPress={handleChangeImage} /> */}
    </>
    
  );
};
