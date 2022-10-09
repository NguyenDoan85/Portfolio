import React from "react";

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>

                <p className="text-xl mt-5">
                    I am a juror web developer, working in both, backend and frontend programming. Since I was young, I was interested in the computer's world. It was fasinated for 20 young me and I am still now. I always want to know more about how it works and how it's using just 0 and 1 to solve any problems. So, after a long delay (from my obligation with my real life) I finally get the opportunity to learn coding. I am excited for improving my skills and learning new technologies. I'm open to learn and work with any web technology.
                    <br/>
                    Through my learning, I struggle a lot with learning and applying the technologies. However, nothing beat the sastified of solving the problem or overcome the struggle.
                    <br />
                    As of the saying "Knowledge is of no value unless you put it into practice" by Anton Chekhov. I am ready to go out there to put my Knowledge to practice and learn new things.
                </p>

            </div>
        </div>
    );
};

export default About;