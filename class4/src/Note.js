export const Note = ({contenido, fecha}) => {
    return  (<li>
              <p> {contenido}</p>
              <small>
                <time>{fecha}</time>
              </small>
            </li>);
  }
  