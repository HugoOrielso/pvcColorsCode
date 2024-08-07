/* eslint-disable react/prop-types */
import { Zoom } from 'react-reveal'
import '@styles/secciones.css'
import bannerMaderas from '@imagenes/secciones/maderas/bannerMaderas.webp'
import bannerIndustrial from '@imagenes/secciones/industrial/bannerIndustrial.webp'
import bannerArquitectonica from '@imagenes/secciones/arquitectonica/bannerArquitectonica.webp'
import bannerOtros from '@imagenes/secciones/otros/bannerOtrasLineas.webp'
import '@styles/secciones.css'
const RenderizarBannerDos = ({categoria}) => {
    return(
        <Zoom>
            <section className='container-banner-imgs'>
                {
                    categoria == "arquitectonica" && 
                    <section className='lineas-banner arq'>
                        <img src={bannerArquitectonica} alt="banner linea arquitectónica" />
                        <div>
                            <h1 className='title-banner-lineas arq'>Línea </h1>
                            <h1 className='title-banner-lineas arq'>arquitectónica</h1>
                            <h1 className='title-banner-lineas mobile'>Línea arquitectónica</h1>
                        </div>
                    </section>
                }                            
                {
                    categoria == "maderas" && 
                    <section className='lineas-banner'>
                        <img src={bannerMaderas} alt="banner linea maderas" />
                        <div>
                            <h1 className='title-banner-lineas mad'>Línea</h1>
                            <h1 className='title-banner-lineas mad'>maderas</h1>
                            <h1 className='title-banner-lineas mobile'> Línea maderas</h1>
                        </div>
                    </section>
                }                              
                {
                    categoria == "industrial" && 
                    <section className='lineas-banner'>
                        {/* <LottienAnimation alto={"450px"} ancho={"100%"} animacion={industriaAnimation}/> */}
                        <img src={bannerIndustrial} alt="banner linea industrial" />
                        <div>
                            <h1 className='title-banner-lineas ind'>Línea</h1>
                            <h1 className='title-banner-lineas ind'>industrial</h1>
                            <h1 className='title-banner-lineas mobile'>Línea industrial</h1>
                        </div>
                    </section>
                }    
                {
                    categoria == "otros" &&
                    <section className='lineas-banner'>
                        {/* <LottienAnimation alto={"450px"} ancho={"100%"} animacion={industriaAnimation}/> */}
                        <img src={bannerOtros} alt="banner otras líneas" />
                        <div>
                            <h1 className='title-banner-lineas otr'>Otras</h1>
                            <h1 className='title-banner-lineas otr  '>Líneas</h1>
                            <h1 className='title-banner-lineas mobile'>Otras líneas</h1>
                        </div>
                    </section>
                }                      
            </section>
        </Zoom>
    )
}

export default RenderizarBannerDos