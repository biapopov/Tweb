import { Button, Checkbox, Input } from 'antd'
import Card from 'antd/lib/card'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { IContentModel } from './interface/interface'



export const CardCustom = observer(({ content }: { content: IContentModel }) => {

    const { model, changeMODEL, audio, changeAUDIO, camera_web, changeCAMERA_WEB, segment, changeSEGMENT, capacitate_ssd, changeCAPACITATE_SSD, tip_display, changeTIP_DISPLAY, frecventa_ram, changeFRECVENTA_RAM, isSeen, changeSeen, seen, addNote, removeNote } = content


    useEffect(() => {
        if (isSeen) {
            // alert(`Is seen ${ title }`)
            console.log('>>title', model)
        }
    }, [ isSeen ])

    return (
        <Card title={ model } bordered={ false }>
            
            <Input
                value={ model }
                placeholder={ model }
                onChange={ (e) => changeMODEL(e.target.value) }
            />
            <Input
                value={ audio }
                placeholder={ audio }
                onChange={ (e) => changeAUDIO(e.target.value) }
            />
            <Input
                value={ camera_web }
                placeholder={ camera_web }
                onChange={ (e) => changeCAMERA_WEB(e.target.value) }
            />
            <Input
                value={ segment }
                placeholder={ segment }
                onChange={ (e) => changeSEGMENT(e.target.value) }
            />
            <Input
                value={ capacitate_ssd }
                placeholder={ capacitate_ssd }
                onChange={ (e) => changeCAPACITATE_SSD(e.target.value) }
            />
            <Input
                value={ tip_display }
                placeholder={ tip_display }
                onChange={ (e) => changeTIP_DISPLAY(e.target.value) }
            />
            <Input
                value={ frecventa_ram }
                placeholder={ frecventa_ram }
                onChange={ (e) => changeFRECVENTA_RAM(e.target.value) }
            />

            <Checkbox defaultChecked={ seen } checked={ seen } onChange={ (e) => changeSeen(e.target.checked) } />
            <Button onClick={ addNote }>Add</Button>
            <Button type={ 'primary' } onClick={ removeNote }>Remove</Button>

        </Card>
    )

})