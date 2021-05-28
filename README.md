# COMPONENTS FOR FREE

Do u need simple components for the ui? Save time and use this package, that will be have more components for the ui in the uncoming versions.
All the components are styled using the package **styled-components**

**dependencies:**
`styled-components`


**Instalation with node:**
`$ npm install components-for-free`

**Components:**
- Buttons: 
	- BasicButton: Simple button with pre determinated styles, that u can customize with props: color, backgroundColor, borderColor, width, fontSize, borderRadius.
	**Example**:

    ```

    import BasicButton from 'components-for-free/Buttons/BasicButton';
    
    function App() {
      return (
        <div className="App">
          <BasicButton
            color="white"
            backgroundColor='#185adb'
            borderColor='white'
            width="150px"
            fontSize="2em"
            borderRadius
          >
            Hi</BasicButton>
        </div>
      );
    }
    
    export default App;

    ```

<a href='https://postimages.org/' target='_blank'><img src='https://i.postimg.cc/QtCMqRNK/Basic-Button.png' border='0' alt='Basic-Button'/></a>