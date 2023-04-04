import AnchorLink from 'react-anchor-link-smooth-scroll';
import classes from './Link.module.css';

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, '');

  console.log('2', lowerCasePage);

  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      className={`${selectedPage === lowerCasePage ? classes.active : ''} ${
        classes.link
      }`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
