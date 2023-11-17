import { Link } from "react-router-dom";

function TeamList() {

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
          bio: "je veux décéder",
        },
      ];

    return(
        <>
            <h2>Les entraineurs : </h2>
            {trainers.map((trainer) => {
                return(
                    <Link to={`/trainers/${trainer.id}/details`}>
                        <article>
                            <p>{trainer.name}</p>
                        </article>
                    </Link>
                )
            })}
        </>
    )
}

export default TeamList