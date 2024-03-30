import { useTranslation } from "react-i18next";
import "./styles/Footer.scss";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="top grid grid-col-1 md:grid-cols-3">
            <nav className="p-12">
              <h3 className="mb-6 font-bold">{t("footer.solutions")}</h3>
              <a
                href="https://www.instagram.com/cucas.peru/"
                className="link leading-normal my-3"
              >
                {t("footer.indepenendent")}
              </a>
              <a
                href="https://www.instagram.com/cucas.peru/"
                className="link leading-normal my-3"
              >
                {t("footer.agencies")}
              </a>
            </nav>
            <nav className="p-12">
              <h3 className="mb-6 font-bold">{t("footer.services")}</h3>
              <a
                href="https://www.instagram.com/cucas.peru/"
                className="link leading-normal my-3"
              >
                {t("footer.particulars")}
              </a>
              <a
                href="https://www.instagram.com/cucas.peru/"
                className="link leading-normal my-3"
              >
                {t("footer.promotions")}
              </a>
            </nav>
            <nav className="p-12">
              <h3 className="mb-6 font-bold">{t("footer.about")}</h3>
              <a
                href="https://www.instagram.com/cucas.peru/"
                className="link leading-normal my-3"
              >
                {t("footer.aboutUs")}
              </a>
              <a
                href="https://www.instagram.com/cucas.peru/"
                className="link leading-normal my-3"
              >
                {t("footer.contact")}
              </a>
              <a
                href="https://www.instagram.com/cucas.peru/"
                className="link leading-normal my-3"
              >
                {t("footer.tyc")}
              </a>
            </nav>
          </div>
          <div className="bottom pb-12">
            <p className="text-center mb-10">{t("footer.copy")}</p>
          </div>
        </div>
      </footer>
    </>
  );
};
