import React from 'react'
import { useParams } from 'react-router'

const CourseDetail = () => {

    const params = useParams()
    console.log();
    

  return (
    <div>
        <h1>{params.courseId}Course Detail Page</h1>
    </div>
  )
}

export default CourseDetail