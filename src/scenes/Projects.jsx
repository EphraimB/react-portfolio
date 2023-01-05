import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
};

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
}

const Project = ({ title }) => {
    const projectTitle = title.split(" ").join("-").toLowerCase();
}

const Projects = () => {
    return (
        <section id="projects" className="pt-48 pb-48">
            {/* HEADINGS */}
            <motion.div
                className="md:w-2/4 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl">
                        <span className="text-red">PRO</span>JECTS
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-1/3" />
                    </div>
                </div>

                <p className="mt-10 mb-10">
                    These are my projects
                </p>
            </motion.div>

            {/* PROJECTS */}
            <div className="flex justify-center">
                <motion.div
                    className="sm:grid sm:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {/* ROW 1 */}
                    <div
                        className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max--[400px] text-2xl font-playfair font-semibold">
                        BEAUTIFUL USER INTERFACES
                    </div>
                    <Project title="Page 1" />
                </motion.div>
            </div>
        </section>
    )
}

export default Projects;