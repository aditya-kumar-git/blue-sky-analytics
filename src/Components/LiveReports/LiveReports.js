import AppImages from 'Images'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSpecificCountry } from 'Redux/Actions';
import { CountryDataContainer, CountryDataDeath, CountryDataImage, CountryDataName, CountryNameImgContainer, Heading, IllustrationContainer, LiveReportContainer, ReportList, ReportListContainer } from './LiveReportsStyle'

export default function LiveReports() {
    const dispatch = useDispatch()
    const LiveData = useSelector(state => state.storeCountries)

    useEffect(() => {
        if (LiveData.length < 1) {
            dispatch(getSpecificCountry('usa',AppImages.usa))
            dispatch(getSpecificCountry('italy',AppImages.italy))
            dispatch(getSpecificCountry('china',AppImages.china))
            dispatch(getSpecificCountry('spain',AppImages.spain))
            dispatch(getSpecificCountry('germany',AppImages.germany))
            dispatch(getSpecificCountry('iran',AppImages.iran))
        }
    }, [dispatch,LiveData])


    const RenderCountryList = () => {
        if (LiveData.length > 0) {
            return LiveData.map((item) => {
                return <CountryDataContainer>
                    <CountryNameImgContainer>
                    <CountryDataImage className='CountryDataImageClass' src={item.imageSrc} />
                    <CountryDataName>{item.country}</CountryDataName>
                    </CountryNameImgContainer>
                    <CountryDataDeath>{item.data}</CountryDataDeath>
                </CountryDataContainer>
            })
        }
        return null
    }
    return (
        <LiveReportContainer>

            <IllustrationContainer src={AppImages.Map} />
            <ReportListContainer>
                <ReportList>
                    <Heading>Live Reports</Heading>
                    <RenderCountryList />
                </ReportList>
            </ReportListContainer>
        </LiveReportContainer>
    )
}
