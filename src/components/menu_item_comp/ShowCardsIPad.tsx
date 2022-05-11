import { MyCard } from "../MY_Layout"
import { cardDictionaries } from "../store_dict/store"

export const ShowCardsIPad = () => {
    return(
        <>
                <div className="site-layout-content grid-3">                   
                {
                    cardDictionaries.map((el, index) => {
                        return(

                            <MyCard  model={ el.model }  culoare={ el.culoare }  dimensiuni={ el.dimensiuni }  rezolutie_ecran={ el.rezolutie_ecran }  wlan={ el.wlan }  url_imagine={ el.url_imagine }  />
                        )
                    })
                }
                </div>
        </>
    )
}