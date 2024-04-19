import React from "react";
import './Hero.css';
import LHomme_Qui_Répare_Les_Femmes from '../Assets/Book_keeper/LHomme_Qui_Répare_Les_Femmes.jpeg'
import secrets_no_more from '../Assets/Book_keeper/secrets_no_more.jpeg'
import The_First_Woman from '../Assets/Book_keeper/The_First_Woman.jpg'
import Links from '../Assets/Book_keeper/Links.jpg'
function Hero() {
    return (
      <div className="Hero">
        <div className="prote--display">
            <div className="contaier">
                <div className="image--rep">
                    <img src={LHomme_Qui_Répare_Les_Femmes} alt="" />
                </div>
                <div className="parag--rep">
                    <h4>L'Homme Qui Répare Les Femmes</h4>
                    <p>Non, la haine et la violence ne sont pas inscrites dans les gènes des peuples des Grands Lacs ! Mais que penser de ces images en provenance de l'Est du Congo, de cette guerre qui a pris un nouveau visage,...</p>
                </div>
            </div>
            <div className="contaier">
                <div className="image--rep">
                     <img src={secrets_no_more} alt="" /> 
                </div>
                <div className="parag--rep">
                    <h4>Secrets no more</h4>
                    <p>by Goretti Kyomuhendo  Marina, a Rwandan child and her family experience the horror of the war in the 1990s. Her parents are killed, and she is cared for in an orphanage, where an Italian priest favours her and tries to plan a better life for her. </p>
                </div>
            </div>
            <div className="contaier">
                <div className="image--rep">
                     <img src={The_First_Woman} alt="" /> 
                    <h4>The First Woman</h4>
                    <p>Jennifer Makumbi has written a sweeping tale of longing and rebellion, at once epic and deeply personal, steeped in an intoxicating mix of ancient Ugandan folklore and modern feminism, that will linger in the memory long after the final page.
                    </p>
                </div>
                <div className="parag--rep">
                    <p></p>
                </div>
            </div>
            <div className="contaier">
                <div className="image--rep">
                    <img src={Links} alt="" />
                </div>
                <div className="parag--rep">
                    <h4>Links</h4>
                    <p>From the internationally acclaimed author of North of Dawn , Links is a novel that will stand as a classic of modern world literature.</p>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Hero;