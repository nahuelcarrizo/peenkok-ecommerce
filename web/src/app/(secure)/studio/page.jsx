"use client"
import  config  from '../../../../../studio/sanity.config'
import { NextStudio } from "next-sanity/studio"

const StudioPage = () => {
  return <NextStudio config={config} />
}
export default StudioPage;