import { NavLink } from 'react-router-dom';
import routes from '../../routes';

import Title from '../../components/Title';
import { ReactComponent as PageNotFoundImage } from '../../assets/images/404.svg';

import styles from './PageNotFound.module.scss';

// Компонент страницы 404
const PageNotFound = () => (
  <div className={styles.container}>
    <Title>Error 404, page not found</Title>

    <div className={styles.thumb}>
      <PageNotFoundImage
        title="Error 404"
        alt="Error 404"
        className={styles.image}
      />
    </div>

    <p className={styles.text}>
      The page you’re looking for was removed, renamed, or got lost in space.
    </p>

    <NavLink
      to={routes.home}
      className={styles.button}
      title="Return to Home"
      aria-label="Return to Home page"
    >
      Return to Home
    </NavLink>
  </div>
);

export default PageNotFound;
