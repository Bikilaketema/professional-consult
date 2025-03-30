import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { WithTranslation } from "react-i18next";
import servicesImage from "../../assets/teachers.jpg"; // Change to an appropriate services-related image

interface ServicesBlockProps extends WithTranslation {
  id?: string;
}

const ServicesBlock = ({ t, id }: ServicesBlockProps) => {
  return (
    <div id={id} className="w-full py-10 px-4 rounded-lg shadow-lg">
      <Fade direction="up" triggerOnce>
      <h6 className="text-center font-semibold mb-4 text-primary">{t("Our Services")}</h6>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Image */}
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={servicesImage}
              alt="Services"
              className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right Side - Services List */}
          <div className="text-left">

            <h6 className="text-2xl font-semibold mb-2">{t("Job Opportunities")}</h6>
            <ul className="list-disc list-inside text-lg text-gray-700">
              <li className="mb-2">{t("for Preschool Teachers")}</li>
              <li className="mb-2">{t("for Grade 1-8 Teachers")}</li>
              <li className="mb-2">{t("for Grade 9-12 Teachers")}</li>
              <li className="mb-2">{t("Job interview and exams")}</li>
            </ul>

            <h6 className="text-2xl font-semibold mt-6 mb-2">{t("Training Courses")}</h6>
            <ul className="list-disc list-inside text-lg text-gray-700">
              <li className="mb-2">{t("Pedagogical")}</li>
              <li className="mb-2">{t("Psychological")}</li>
              <li className="mb-2">{t("Language")}</li>
              <li className="mb-2">{t("Leadership and management")}</li>
              <li className="mb-2">{t("School operations system")}</li>
              <li className="mb-2">{t("Research and many more")}</li>
            </ul>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default withTranslation()(ServicesBlock);
