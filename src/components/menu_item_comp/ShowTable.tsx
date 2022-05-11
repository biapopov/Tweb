import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import { useRootStore } from "../.."
import { IContentModel } from "../interface/interface"
import { CardCustom } from "../show_edit_store"
import { ShowMacBook_Row } from "../show_macbook"

export const ShowTable = observer(() => {
    const { contents, contents_notes } = useRootStore()

    useEffect(() => {
        console.log('>>contents_notes', contents_notes)
    }, [ contents_notes ])

    return (
        <>
                    <div className="table-wrapper">
                        <table className="fl-table">
                            <thead>
                            <tr>
                                <th>MODEL</th>
                                <th>AUDIO</th>
                                <th>CAMERA_WEB</th>
                                <th>SEGMENT</th>
                                <th>CAPACITATE_SSD</th>
                                <th>TIP_DISPLAY</th>
                                <th>FRECVENTA_RAM</th>
                            </tr>
                            </thead>


                            <tbody>
                                    { contents_notes.map((content: IContentModel) => {
                                        return (
                                            
                                                <ShowMacBook_Row describe={content} describe_extend={content} />
                                            
                                        )
                                    })
                                    }
                            </tbody>
                        </table>
                    </div>


                   
                    <div className="site-layout-content grid-3"> 
                    
                        { contents.map((content: IContentModel) => {

                            return (
                                <CardCustom key={ content.id } content={ content } />
                            )
                        }) }
                    
                    </div>
        </>
    )
})