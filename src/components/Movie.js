export default function Movie(props) {
  //   const { id, l, q, rank, s } = props;

  return (
    <div className="card movie">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src="../Images/1.jpg" />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          The Movie Database (TMDB)
          <i className="material-icons right">more_vert</i>
        </span>
        <p>{}</p>
      </div>
    </div>
  );
}
