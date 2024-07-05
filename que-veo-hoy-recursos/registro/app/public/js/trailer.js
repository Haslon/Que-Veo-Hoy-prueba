document.addEventListener("DOMContentLoaded", function() {
  const trailersContainer = document.getElementById('trailers');

  const trailersData = [
    {
      title: "El reino del planeta de los simios",
      description: "«El Reino del Planeta de los Simios» nos sumerge en un futuro distópico donde los simios inteligentes liderados por César luchan por sobrevivir en un mundo hostil dominado por los humanos.",
      videoUrl: "https://youtu.be/DDWWwEiWHJw",
      thumbnail: "https://i.ytimg.com/vi/DDWWwEiWHJw/hq720.jpg?sqp=-...AFwAcABBg==&rs=AOn4CLAikEKpNKRZJdDcWCzcAZeq4urd7A"
    },
    {
      title: "La monja",
      description: "Cuando una joven monja se suicida en una abadía de clausura en Rumanía, un sacerdote experto en posesiones demoniacas y una novicia a punto de tomar sus votos, son enviados por el Vaticano para investigar. Juntos descubren el profano secreto de la orden.",
      videoUrl: "https://youtu.be/AKpPeLAMY9I",
      thumbnail: "https://i.ytimg.com/vi/AKpPeLAMY9I/hq720.jpg?sqp=-...AFwAcABBg==&rs=AOn4CLARd82x7R1n6hnBaING_7j3TKJ76Q"
    },
    {
      title: "El silencio",
      description: "Sergio lleva sin hablar desde que asesinó a sus padres hace seis años. Ahora, una psiquiatra pone en marcha una retorcida investigación para intentar descubrir qué pasó.",
      videoUrl: "https://youtu.be/CRyN--J6LuQ",
      thumbnail: "https://i.ytimg.com/vi/23yoak9RGEE/hq720.jpg?sqp=-...AFwAcABBg==&rs=AOn4CLAcaYLFVQuLoZr5wrCZ9mCu2BpfIQ"
    },
    {
      title: "Inception",
      description: "Inception es un thriller de ciencia ficción que explora el concepto de robar información a través del arte del sueño. Dirigida por Christopher Nolan, la película sigue a un ladrón hábil que roba secretos corporativos valiosos mediante el uso de tecnología que le permite entrar en los sueños de otras personas.",
      videoUrl: "https://youtu.be/8hP9D6kZseM",
      thumbnail: "https://i.ytimg.com/vi/8hP9D6kZseM/hq720.jpg?sqp=-...AFwAcABBg==&rs=AOn4CLBKZ0UyyGRH8x_TeRb3HQZUwLKMQ"
    }
    
  ];

  trailersData.forEach(trailer => {
    const trailerItem = document.createElement('div');
    trailerItem.classList.add('trailer');

    const thumbnail = document.createElement('img');
    thumbnail.src = trailer.thumbnail;
    thumbnail.alt = `${trailer.title} thumbnail`;
    thumbnail.addEventListener('click', () => {
      window.open(trailer.videoUrl, '_blank');
    });

    const trailerContent = document.createElement('div');
    trailerContent.classList.add('trailer-content');

    const title = document.createElement('h2');
    title.textContent = trailer.title;

    const description = document.createElement('p');
    description.textContent = trailer.description;

    trailerContent.appendChild(title);
    trailerContent.appendChild(description);

    trailerItem.appendChild(thumbnail);
    trailerItem.appendChild(trailerContent);

    trailersContainer.appendChild(trailerItem);
  });
});
