import { useRouter } from 'next/router';

const Breadcrumbs = () => {
  const router = useRouter();
  const { pathname } = router;
  const pathSegments = pathname.split('/').filter(segment => segment !== '');

  const navigateToPath = (path) => {
    router.push(path);
  };

  return (
    <nav>
      <ul className="breadcrumbs">
        <li>
          <a onClick={() => navigateToPath('/')}>Home</a>
          <span className="separator"> &gt; </span>
        </li>
        {pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isActive = index === pathSegments.length - 1;
          return (
            <li key={index} className={isActive ? 'active' : ''}>
              {!isActive && (
                <>
                  <a onClick={() => navigateToPath(path)}>{segment}</a>
                  <span className="separator"> &gt; </span>
                </>
              )}
              {isActive && <span>{segment}</span>}
            </li>
          );
        })}
      </ul>

      <style jsx>{`
        .separator {
          font-size: 1rem ; /* Ajusta el tamaño del símbolo ">" según tus necesidades */
          /* Otros estilos de diseño para el símbolo ">" */
          color:    #2EA684; /* Verde turquesa */
        }
      `}</style>
    </nav>
  );
};

export default Breadcrumbs;
