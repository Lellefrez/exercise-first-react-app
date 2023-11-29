const Immagine = ({ src, alt, didascalia }) => {
  return (
    <figure>
      <img src={src} alt={alt} />
      <p>{didascalia}</p>
    </figure>
  );
};

export default Immagine;
