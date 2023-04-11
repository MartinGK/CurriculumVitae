import { birthDay } from "@constants";
import { getYearsOld } from "helpers";


export const AboutMe = () => {
    return <div className="m-10 bg-white text-black rounded p-5">
        <h1 className="text-3xl">About me</h1>
        <div className="flex justify-center mt-5">
            <div className="w-5/8">
                <p className="text-sm">Hi! I'm Martin, I'm {getYearsOld(birthDay)} years old and I'm from Argentina. I'm a frontend developer experienced in ReactJS developing web applications. I'm passionate about technology and I'm always looking for new challenges. When I had to take a fullstack profile i usually used the MERN combo.  I'm a goal-oriented team player who enjoys learning new tech skills and keeping my team and myself up to date with the latest trends.  I love working in teams and I believe I have the right set of soft skills to balance my technical skills and bring value to the projects I'm entrusted with.</p>
            </div>
        </div>
    </div>
}

export default AboutMe;