import { useParams } from "react-router-dom";

import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

function TrainerDetails() {
    const trainers = [
        {
          id: 1,
          name: "Sasha du Bourg Palette",
          bio: "jveux tous les attraper",
        },
        {
          id: 2,
          name: "Dwayne Johnson",
          bio: "jveux tous les soulever",
        },
        {
          id: 3,
          name: "Affida Turner",
          bio: "ERREUR 404, CETTE PERSONNE N'EXISTE PAS !!!",
        },
      ];

      const {trainerId} = useParams()
      const trainerFound = trainers.find((trainer) => {
        return trainer.id == trainerId
      })

      return(
        <>
            <Header />
            <h3>{trainerFound.name}</h3>
            <p>{trainerFound.bio}</p>
            <Footer />
        </>
      )
}

export default TrainerDetails