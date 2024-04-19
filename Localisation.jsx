import React from 'react'
import './Localisation.css';
import The_Boy_Who_Tried_to_Silence_the_Sun from '../Assets/Book_keeper/The_Boy_Who_Tried_to_Silence_the_Sun.jpg'
import The_Heart_of_Darkness from '../Assets/Book_keeper/The_Heart_of_Darkness.jpg'
import Dust from '../Assets/Book_keeper/Dust.jpg'
import Unbowed from '../Assets/Book_keeper/Unbowed.jpeg'


const Localisation = () => {
  return (
    <div className="Localisation">
        <div className="prote--display">
            <div className="contaier">
                <div className="image--rep">
                    <img src={The_Boy_Who_Tried_to_Silence_the_Sun} alt="" />
                </div>
                <div className="parag--rep">
                    <h4>The Boy Who Harnessed the Wind</h4>
                    <p>William Kamkwamba was born in Malawi, a country where magic ruled and modern science was mystery. It was also a land withered by drought and hunger, and a place where hope and opportunity were hard to find.</p>
                </div>
            </div>
            <div className="contaier">
                <div className="image--rep">
                     <img src={The_Heart_of_Darkness} alt="" /> 
                </div>
                <div className="parag--rep">
                    <h4>The Heart of Darkness</h4>
                    <p>"Heart of Darkness, novella by Joseph Conrad that was first published in 1899 in Blackwood’s Edinburgh Magazine and then in Conrad’s Youth: and Two Other Stories (1902)"</p>
                </div>
            </div>
            <div className="contaier">
                <div className="image--rep">
                     <img src={Dust} alt="" /> 
                    <h4>   Dust</h4>
                    <p>"Juliette, now mayor of Silo 18, doesn’t trust Silo 1, especially its leader, Donald. But in the world of the Silos, there is no black and white―everything is shades of gray."</p>
                </div>
                <div className="parag--rep">
                    <p></p>
                </div>
            </div>
            <div className="contaier">
                <div className="image--rep">
                    <img src={Unbowed} alt="" />
                </div>
                <div className="parag--rep">
                    <h4>Unbowed</h4>
                    <p>Once upon a time, there lived a great man called Kintu, he used to move 
                        with his prize cow from Northern Africa to a land named Uganda. In 1750, 
                        Kintu Kidda unleashes a curse that will plague his family...</p>
                </div>
            </div>
        </div>
      </div>
  );
}

export default Localisation