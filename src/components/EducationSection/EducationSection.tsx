import EducationCard from './EducationCard/EducationCard'
import EducationData from './EducationData'

export default function EducationSection() {


    return (
        <div className="flex flex-wrap justify-center items-center h-screen ">
            <h1 className='text-3xl text-center my-20'>Mi Formación</h1>
            <div className='flex-col justify-center items-center'>
                {EducationData.map((education) => {
                    return <EducationCard education={education} />
                },
                )}
            </div>
        </div>

    )
}
