import { View } from "react-native";
import Markdown from "react-native-markdown-display";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Inter_900Black } from "@expo-google-fonts/inter";
import { StatusBar } from "expo-status-bar";

const copy = `
# 🥋 Clases de Karate Online

¡Bienvenido a nuestras clases de **karate online**! Aprende desde cero o mejora tus habilidades con nuestros cursos.

## 🚀 Beneficios de Entrenar con Nosotros
- 🏆 **Mejora tu condición física**
- 🧘 **Aumenta tu concentración y disciplina**
- 🥊 **Aprende técnicas de defensa personal**
- ⏳ **Entrena a tu propio ritmo**

## 📚 Contenido del Curso
1. **Fundamentos del Karate**
   - Historia y filosofía  
   - Posturas y movimientos básicos  

2. **Técnicas Avanzadas**
   - Patadas y golpes  
   - Bloqueos y defensas  

3. **Combate y Estrategia**
   - Aplicación en situaciones reales  
   - Desarrollo de reflejos y rapidez  

## 🏅 Inscríbete Ahora
Haz clic en el botón de abajo para registrarte:

[👉 Registrarme Ahora](https://tucurso.com/karate)

---

### ✉️ Contacto
Si tienes dudas, escríbenos a **contacto@karateonline.com**  
Síguenos en [Instagram](https://instagram.com/karateonline) 🥋🔥

## 🚀 Beneficios de Entrenar con Nosotros
- 🏆 **Mejora tu condición física**
- 🧘 **Aumenta tu concentración y disciplina**
- 🥊 **Aprende técnicas de defensa personal**
- ⏳ **Entrena a tu propio ritmo**

## 📚 Contenido del Curso
1. **Fundamentos del Karate**
   - Historia y filosofía  
   - Posturas y movimientos básicos  

2. **Técnicas Avanzadas**
   - Patadas y golpes  
   - Bloqueos y defensas  

3. **Combate y Estrategia**
   - Aplicación en situaciones reales  
   - Desarrollo de reflejos y rapidez  

## 🏅 Inscríbete Ahora
Haz clic en el botón de abajo para registrarte:

[👉 Registrarme Ahora](https://tucurso.com/karate)

---

### ✉️ Contacto
Si tienes dudas, escríbenos a **contacto@karateonline.com**  
Síguenos en [Instagram](https://instagram.com/karateonline) 🥋🔥

`;

const editor = () => {
  return (
    <View style={styles.content}>
      <StatusBar style={"light"} />
      <SafeAreaView>
        <ScrollView
          style={markdownStyles}
          contentInsetAdjustmentBehavior="automatic"
        >
          <Markdown>{copy}</Markdown>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const markdownStyles = StyleSheet.create({
  heading1: {
    fontFamily: "Inter_700Black",
    color: "#212020",
    marginBottom: 10,
  },
});

const styles = StyleSheet.create({
  content: {
    padding: 10,
    flex: 1,
    backgroundColor: "white",
  },
});

export default editor;
