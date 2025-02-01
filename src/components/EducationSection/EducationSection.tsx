import EducationCard from "./EducationCard/EducationCard"
import EducationData from "./EducationData"

export default function EducationSection() {
    return (
        <div className="">
            <div className='flex-col justify-center items-center'>
                <h1 className='text-3xl text-center'>Mi Formacion</h1>
                <div className="flex flex-wrap justify-center">
                    {EducationData.map((education) => {
                        return <EducationCard education={education} />
                    }
                    )}
                </div>
            </div>
        </div>
    )
}
