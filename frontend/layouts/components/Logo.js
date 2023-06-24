import ImageFallback from "@components/ImageFallback";
import config from "@config/config.json";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

const Logo = ({ src }) => {
  // destructuring items from config object
  const { logo, logo_white, logo_width, logo_height, logo_text, title } =
    config.site;
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const redirectToPage = () => {
    if (document.cookie.includes("clave")) {
      // Redirige a la página si existe la cookie
      window.location.href = "/index1";
    } else {
      // Redirige a otra página si no existe la cookie
      window.location.href = "/";
    }
  };

  return (
    <Link href="/" className="navbar-brand" onClick={redirectToPage} >
      {src || logo ? (
        <ImageFallback
          width={logo_width.replace("px", "") * 2}
          height={logo_height.replace("px", "") * 2}
          src={
            mounted && (theme === "dark" || resolvedTheme === "dark")
              ? logo_white
              : logo_white
          }
          alt={title}
          priority
          style={{
            height: logo_height.replace("px", "") + "px",
            width: logo_width.replace("px", "") + "px",
          }}
          className={"m-auto"}
        />
      ) : logo_text ? (
        logo_text
      ) : (
        title
      )}
    </Link>
  );
};

export default Logo;

