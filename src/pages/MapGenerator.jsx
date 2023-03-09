import NavBar from '../components/NavBar/NavBar.jsx'
import ImageGenerator from '../components/generator/imageGenerator/imageGenerator.js'

let images = <ImageGenerator />

const MapGenerator = () => {

    return (
        <div className="App">
            <NavBar />
            {images}
        </div>
    )
}

export default MapGenerator;