import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { WithTranslation } from "react-i18next";

interface AboutBlockProps extends WithTranslation {
  id?: string;
}

const AboutBlock = ({ t, id }: AboutBlockProps) => {
  return (
    <div id={id} className="w-full py-10 px-4">
      <Fade direction="up" triggerOnce>
        <div className="max-w-6xl mx-auto text-center">
          <h6 className="">{t("About Us")}</h6>
          <p className="text-lg text-primary mb-6">{t("Professional Educational Consultancy and Training Services")}</p>
          
          {/* Content without iteration */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-6">
            <div className="shadow-lg p-6 rounded-lg text-left transform transition-transform duration-300 hover:scale-105">
              <h6 className="text-3xl font-semibold mb-2">{t("Vision")}</h6>
              <p className="text-sm lg:text-lg">{t("To envisage competent and entrepreneur generation.")}</p>
            </div>

            <div className="shadow-lg p-6 rounded-lg text-left transform transition-transform duration-300 hover:scale-105">
              <h6 className="text-3xl font-semibold mb-2">{t("Mission")}</h6>
              <p className="text-sm lg:text-lg">{t("To provide consultancy and training services in all areas to have competent and entrepreneur generation.")}</p>
            </div>

            <div className="shadow-lg p-6 rounded-lg text-left transform transition-transform duration-300 hover:scale-105">
              <h6 className="text-3xl font-semibold mb-2">{t("Goals")}</h6>
                <ul className="list-disc list-inside lg:text-xl text-primary">
                <li className="mb-2">{t("Teachers job opportunity creation")}</li>
                <li className="mb-2">{t("Job interview and exams training")}</li>
                <li className="mb-2">{t("Teachers’ Professional Competency Development")}</li>
                <li className="mb-2">{t("Language Skills Training (English, Arabic, French, Chinese, and so on)")}</li>
                <li className="mb-2">{t("Educational, Personal, Team, and Organization Leadership")}</li>
                <li className="mb-2">{t("Basic and Expert Leadership Skills Training")}</li>
                <li className="mb-2">{t("Reception and customer Service training")}</li>
                <li className="mb-2">{t("Life Skills Training")}</li>
                <li className="mb-2">{t("Overall School Operations Training and Evaluation")}</li>
                </ul>
            </div>

            <div className="shadow-lg p-6 rounded-lg text-left transform transition-transform duration-300 hover:scale-105">
              <h6 className="text-3xl font-semibold mb-2">{t("Values")}</h6>
                <ul className="list-disc list-inside lg:text-xl text-primary">
                <li className="mb-2">{t("Simplicity")}</li>
                <li className="mb-2">{t("Innovation")}</li>
                <li className="mb-2">{t("Responsiveness")}</li>
                <li className="mb-2">{t("Authenticity")}</li>
                </ul>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default withTranslation()(AboutBlock);
